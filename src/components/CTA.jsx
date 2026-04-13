import { ArrowRight, Phone, Mail } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-oswald font-black text-white">
            Take the First Step
          </h2>

          <p className="text-xl text-gray-300 leading-relaxed">
            Recognizing the problem is the beginning. Real change starts with action. Whether you're struggling with gaming addiction yourself or concerned about a loved one, Game-Xit is ready to support your journey toward recovery and a balanced life.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
            {/* Contact Method 1 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-primary-500/50 transition-all duration-300 group cursor-pointer">
              <div className="flex items-center justify-center w-14 h-14 bg-primary-500/20 rounded-full mb-6 group-hover:bg-primary-500/30 transition-colors">
                <Phone className="text-primary-400" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-gray-400 mb-4">Speak with a counselor anytime</p>
              <p className="text-primary-400 font-bold group-hover:text-primary-300">1-800-GAME-XIT</p>
            </div>

            {/* Contact Method 2 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-primary-500/50 transition-all duration-300 group cursor-pointer">
              <div className="flex items-center justify-center w-14 h-14 bg-primary-500/20 rounded-full mb-6 group-hover:bg-primary-500/30 transition-colors">
                <Mail className="text-primary-400" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-gray-400 mb-4">Get personalized support</p>
              <p className="text-primary-400 font-bold group-hover:text-primary-300">support@game-xit.com</p>
            </div>
          </div>

          {/* Main CTA Button */}
          <button className="btn-primary inline-flex items-center gap-2 text-lg px-10 py-4 mt-8">
            Schedule Your Free Consultation
            <ArrowRight size={24} />
          </button>

          <p className="text-sm text-gray-400 pt-4">
            <span className="text-primary-400 font-bold">100% confidential</span> • No judgment • Professional support
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/10">
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary-400">500+</div>
            <p className="text-gray-400">Certified Counselors</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary-400">10K+</div>
            <p className="text-gray-400">Active Community Members</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary-400">50+</div>
            <p className="text-gray-400">Countries Served</p>
          </div>
        </div>
      </div>
    </section>
  )
}
