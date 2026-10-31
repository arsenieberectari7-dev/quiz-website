import { Link } from 'react-router-dom';
import { Heart, Sparkles, Mail, Shield, FileText, AlertCircle, MessageCircle, Info } from 'lucide-react';
import siteConfig from '../../config/siteConfig';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-purple-50 border-t border-purple-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-extrabold gradient-text">{siteConfig.name}</span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              {siteConfig.description}
            </p>
            <p className="text-xs text-gray-400 mt-4 flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-pink-400 fill-pink-400" /> for quiz lovers
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-4">Explore</h3>
            <ul className="space-y-2">
              <FooterLink to="/quizzes" icon={<Sparkles className="w-4 h-4" />} label="All Quizzes" />
              <FooterLink to="/this-or-that" icon={<Heart className="w-4 h-4" />} label="This or That" />
              <FooterLink to="/categories" icon={<FileText className="w-4 h-4" />} label="Categories" />
              <FooterLink to="/admin/builder" icon={<Sparkles className="w-4 h-4 text-purple-500" />} label="Quiz Builder" />
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-2">
              <FooterLink to="/privacy" icon={<Shield className="w-4 h-4" />} label="Privacy Policy" />
              <FooterLink to="/terms" icon={<FileText className="w-4 h-4" />} label="Terms of Service" />
              <FooterLink to="/cookie-policy" icon={<AlertCircle className="w-4 h-4" />} label="Cookie Policy" />
              <FooterLink to="/disclaimer" icon={<Info className="w-4 h-4" />} label="Disclaimer" />
            </ul>
          </div>

          {/* About & Contact */}
          <div>
            <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              <FooterLink to="/about" icon={<Info className="w-4 h-4" />} label="About Us" />
              <FooterLink to="/contact" icon={<MessageCircle className="w-4 h-4" />} label="Contact" />
              <li>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-purple-600 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {siteConfig.contactEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-purple-100 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            © {siteConfig.copyrightYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 text-center">
            All quizzes are for entertainment purposes only. Results are not professional assessments.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) {
  return (
    <li>
      <Link
        to={to}
        className="flex items-center gap-2 text-sm text-gray-500 hover:text-purple-600 transition-colors"
      >
        {icon}
        {label}
      </Link>
    </li>
  );
}
