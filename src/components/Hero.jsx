import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-soft animation-delay-2000"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white space-y-8 animate-slide-up">
            <div className="inline-block">
              <span className="text-primary-400 text-sm font-bold uppercase tracking-widest">
                Welcome to Game-Xit
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-oswald font-black leading-tight">
              Reclaim Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
                {' '}Life
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
              Gaming addiction is real. If excessive gaming is affecting your mental health, relationships, and daily life, you're not alone. Game-Xit is here to provide the support, resources, and guidance you need to break free and reclaim control.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="btn-primary flex items-center gap-2 justify-center">
                Get Started
                <ArrowRight size={20} />
              </button>
              <button className="btn-secondary flex items-center gap-2 justify-center">
                Learn More
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-700">
              <div>
                <div className="text-3xl font-bold text-primary-400">1M+</div>
                <p className="text-gray-400 text-sm">Lives Impacted</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-400">95%</div>
                <p className="text-gray-400 text-sm">Success Rate</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-400">24/7</div>
                <p className="text-gray-400 text-sm">Support Available</p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-96 h-96">
              {/* Glowing Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-transparent rounded-full blur-3xl"></div>

              {/* Main Circle with Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white shadow-2xl">
                  <svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>

              {/* Orbiting Dots */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                <div className="absolute top-0 left-1/2 w-3 h-3 bg-primary-400 rounded-full -ml-1.5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
