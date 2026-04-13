import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center text-white font-bold">
                GX
              </div>
              <span className="font-oswald font-bold text-white">Game-Xit</span>
            </div>
            <p className="text-sm text-gray-400">
              Empowering individuals to reclaim their lives from gaming addiction with compassion, evidence-based support, and a thriving community.
            </p>
            <div className="flex gap-4 pt-4">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Linkedin, label: 'LinkedIn' }
              ].map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href="#"
                    className="p-2 bg-white/10 rounded-lg hover:bg-primary-500/30 text-primary-400 hover:text-primary-300 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-oswald font-bold text-white text-lg">Navigation</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About Us', href: '#about' },
                { label: 'Why Game-Xit', href: '#benefits' },
                { label: 'Resources', href: '#resources' }
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-primary-400 transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-oswald font-bold text-white text-lg">Resources</h3>
            <ul className="space-y-2">
              {[
                'Support Groups',
                'Counseling Services',
                'Recovery Tools',
                'Success Stories'
              ].map((resource) => (
                <li key={resource}>
                  <a href="#" className="hover:text-primary-400 transition-colors text-sm">
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-oswald font-bold text-white text-lg">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="text-primary-400 flex-shrink-0 mt-0.5" size={18} />
                <span className="text-sm">1-800-GAME-XIT</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-primary-400 flex-shrink-0 mt-0.5" size={18} />
                <span className="text-sm">support@game-xit.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-primary-400 flex-shrink-0 mt-0.5" size={18} />
                <span className="text-sm">Available Worldwide</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
            {/* Copyright */}
            <div className="text-sm text-gray-400 text-center md:text-left">
              © {currentYear} Game-Xit. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex justify-center gap-6 text-sm">
              <a href="#" className="hover:text-primary-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                Terms of Service
              </a>
            </div>

            {/* Trust Badge */}
            <div className="text-sm text-gray-400 text-center md:text-right">
              Licensed & Certified • HIPAA Compliant
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
