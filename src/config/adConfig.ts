/**
 * ========================================
 * ADVERTISING CONFIGURATION
 * ========================================
 *
 * This file centralizes all advertising settings.
 * When you sign up with an ad network (Adsterra, Monetag, etc.),
 * update the values below with your actual codes.
 *
 * INSTRUCTIONS:
 * 1. Set `enabled` to true for the ad network you want to use
 * 2. Replace placeholder IDs with your actual ad codes
 * 3. Configure which placements you want active
 *
 * IMPORTANT: Never commit real ad credentials to a public repository.
 * Consider using environment variables for sensitive data.
 */

export interface AdPlacement {
  id: string;
  name: string;
  enabled: boolean;
  /** The ad network script or HTML to inject */
  code: string;
  /** Where this ad appears */
  location: 'banner-top' | 'banner-bottom' | 'sidebar' | 'in-content' | 'between-cards' | 'below-results' | 'mobile-sticky';
  /** Minimum screen width to show this ad (0 = show everywhere) */
  minWidth: number;
}

export interface AdConfig {
  /** Master switch - set to false to disable ALL ads */
  enabled: boolean;

  /** Which ad network to use */
  network: 'adsterra' | 'monetag' | 'none';

  /** Adsterra Configuration */
  adsterra: {
    enabled: boolean;
    /** Your Adsterra publisher ID - get this from your Adsterra dashboard */
    publisherId: string;
    /** Individual ad placement codes from Adsterra */
    placements: AdPlacement[];
  };

  /** Monetag Configuration */
  monetag: {
    enabled: boolean;
    /** Your Monetag site ID */
    siteId: string;
    /** Individual ad placement codes from Monetag */
    placements: AdPlacement[];
  };

  /** Global ad settings */
  settings: {
    /** Show "Advertisement" label above ads */
    showLabel: boolean;
    /** Delay before showing ads (milliseconds) */
    loadDelay: number;
    /** Maximum number of ads per page */
    maxAdsPerPage: number;
    /** Don't show ads on these pages */
    excludedPages: string[];
  };
}

const adConfig: AdConfig = {
  // Enabled with Adsterra
  enabled: true,

  // Choose your ad network: 'adsterra', 'monetag', or 'none'
  network: 'adsterra',

  adsterra: {
    enabled: true,
    publisherId: '4b7d96d3fa152e4b91b0b289b9308595',
    placements: [
      {
        id: 'adsterra-banner-top',
        name: 'Homepage Top Banner',
        enabled: true,
        // 📋 PASTE YOUR ADSTERRA BANNER CODE HERE
        code: '<!-- Adsterra Banner Top: Paste your 728x90 or responsive banner code here -->',
        location: 'banner-top',
        minWidth: 0,
      },
      {
        id: 'adsterra-between-cards',
        name: 'Between Quiz Cards',
        enabled: true,
        // 📋 PASTE YOUR ADSTERRA NATIVE AD CODE HERE
        code: '<!-- Adsterra Native: Paste your native ad code here -->',
        location: 'between-cards',
        minWidth: 0,
      },
      {
        id: 'adsterra-in-content',
        name: 'In Quiz Content',
        enabled: true,
        // 📋 PASTE YOUR ADSTERRA IN-CONTENT AD CODE HERE
        code: '<!-- Adsterra In-Content: Paste your in-content ad code here -->',
        location: 'in-content',
        minWidth: 0,
      },
      {
        id: 'adsterra-below-results',
        name: 'Below Quiz Results',
        enabled: true,
        // 📋 PASTE YOUR ADSTERRA BANNER CODE HERE
        code: '<!-- Adsterra Results: Paste your results banner code here -->',
        location: 'below-results',
        minWidth: 0,
      },
      {
        id: 'adsterra-sidebar',
        name: 'Sidebar (Desktop Only)',
        enabled: true,
        // 📋 PASTE YOUR ADSTERRA SIDEBAR CODE HERE
        code: '<!-- Adsterra Sidebar: Paste your 300x250 or 160x600 code here -->',
        location: 'sidebar',
        minWidth: 1024,
      },
    ],
  },

  monetag: {
    enabled: false,
    // 📋 PASTE YOUR MONETAG SITE ID HERE
    siteId: 'YOUR_MONETAG_SITE_ID',
    placements: [
      {
        id: 'monetag-banner-top',
        name: 'Homepage Top Banner',
        enabled: true,
        // 📋 PASTE YOUR MONETAG BANNER CODE HERE
        code: '<!-- Monetag Banner Top: Paste your banner code here -->',
        location: 'banner-top',
        minWidth: 0,
      },
      {
        id: 'monetag-between-cards',
        name: 'Between Quiz Cards',
        enabled: true,
        code: '<!-- Monetag Native: Paste your native ad code here -->',
        location: 'between-cards',
        minWidth: 0,
      },
      {
        id: 'monetag-in-content',
        name: 'In Quiz Content',
        enabled: true,
        code: '<!-- Monetag In-Content: Paste your in-content ad code here -->',
        location: 'in-content',
        minWidth: 0,
      },
      {
        id: 'monetag-below-results',
        name: 'Below Quiz Results',
        enabled: true,
        code: '<!-- Monetag Results: Paste your results banner code here -->',
        location: 'below-results',
        minWidth: 0,
      },
      {
        id: 'monetag-sidebar',
        name: 'Sidebar (Desktop Only)',
        enabled: true,
        code: '<!-- Monetag Sidebar: Paste your sidebar code here -->',
        location: 'sidebar',
        minWidth: 1024,
      },
    ],
  },

  settings: {
    showLabel: true,
    loadDelay: 1000,
    maxAdsPerPage: 5,
    excludedPages: ['/privacy', '/terms', '/cookie-policy'],
  },
};

export default adConfig;
