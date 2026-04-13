import { Eye, Zap, Users, Clock } from 'lucide-react'

export default function Benefits() {
  const benefits = [
    {
      id: 1,
      title: 'Feel Present',
      icon: Eye,
      description: 'Gaming can be an escape, but too much of it pulls you away from the world. Reducing screen time helps you reconnect with your surroundings, be more mindful in everyday life, and appreciate the moments that truly matter.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Be Empowered',
      icon: Zap,
      description: 'Taking control of your gaming habits builds self-discipline and confidence. Every small step away from addiction is a powerful reminder that you\'re in charge of your life—not your screen. Reclaim your agency.',
      color: 'from-violet-500 to-purple-500'
    },
    {
      id: 3,
      title: 'Feel Connected',
      icon: Users,
      description: 'When you\'re not stuck in a virtual world, there\'s more time for real connections. Family dinners, friend hangouts, meaningful conversations—real relationships nourish the soul in ways digital victories never can.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 4,
      title: 'Take Control',
      icon: Clock,
      description: 'Gaming can easily consume hours without you noticing. Setting boundaries helps you take back your time—so you can pursue your goals, develop hobbies, strengthen relationships, and prioritize what truly matters.',
      color: 'from-amber-500 to-orange-500'
    }
  ]

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-heading">Why Game-Xit?</h2>
        <p className="section-subtitle">
          Discover how breaking free from gaming addiction transforms lives and creates lasting positive change
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <div
                key={benefit.id}
                className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-primary-500 transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-default"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>

                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-oswald font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {benefit.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {benefit.description}
                </p>

                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
