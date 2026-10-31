import { useEffect, useRef } from 'react';
import adConfig from '../../config/adConfig';

interface AdPlacementProps {
  location: 'banner-top' | 'banner-bottom' | 'sidebar' | 'in-content' | 'between-cards' | 'below-results' | 'mobile-sticky';
  className?: string;
}

export default function AdPlacement({ location, className = '' }: AdPlacementProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!adConfig.enabled || adConfig.network === 'none') return;

    const networkConfig = adConfig.network === 'adsterra' ? adConfig.adsterra : adConfig.monetag;
    if (!networkConfig.enabled) return;

    const placement = networkConfig.placements.find(
      (p) => p.location === location && p.enabled
    );
    if (!placement) return;

    // Check min width
    if (placement.minWidth > 0 && window.innerWidth < placement.minWidth) return;

    // Check excluded pages
    if (adConfig.settings.excludedPages.some((page) => window.location.pathname.startsWith(page))) return;

    // Insert ad code after delay
    const timer = setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.innerHTML = placement.code;
        containerRef.current.setAttribute('data-loaded', 'true');

        // Execute any scripts in the ad code
        const scripts = containerRef.current.querySelectorAll('script');
        scripts.forEach((script) => {
          const newScript = document.createElement('script');
          if (script.src) {
            newScript.src = script.src;
          } else {
            newScript.textContent = script.textContent;
          }
          script.parentNode?.replaceChild(newScript, script);
        });
      }
    }, adConfig.settings.loadDelay);

    return () => clearTimeout(timer);
  }, [location]);

  if (!adConfig.enabled || adConfig.network === 'none') return null;

  return (
    <div className={`ad-wrapper ${className}`}>
      {adConfig.settings.showLabel && (
        <p className="text-[10px] text-gray-400 text-center mb-1 uppercase tracking-wider">
          Advertisement
        </p>
      )}
      <div
        ref={containerRef}
        className="ad-container"
        data-ad-location={location}
        data-loaded="false"
      >
        {/* Ad code will be injected here */}
      </div>
    </div>
  );
}
