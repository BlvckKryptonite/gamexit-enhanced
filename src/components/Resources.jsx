import { BookOpen, Users, MessageSquare, Lightbulb } from 'lucide-react'

export default function Resources() {
  const resources = [
    {
      id: 1,
      icon: BookOpen,
      title: 'Education Hub',
      description: 'Learn about gaming addiction: signs, causes, and the latest research on internet gaming disorder.'
    },
    {
      id: 2,
      icon: Users,
      title: 'Support Groups',
      description: 'Connect with others on the same journey. Share experiences, strategies, and encouragement in our community.'
    },
    {
      id: 3,
      icon: MessageSquare,
      title: 'Counseling Services',
      description: 'Access professional therapists and counselors experienced in gaming addiction treatment.'
    },
    {
      id: 4,
      icon: Lightbulb,
      title: 'Recovery Tools',
      description: 'Evidence-based tools and techniques to help you develop healthier habits and reclaim your life.'
    }
  ]

  return (
    <section id="resources" className="py-20 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-heading">Our Resources</h2>
        <p className="section-subtitle">
          Comprehensive support designed to guide you every step of the recovery journey
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
          {resources.map((resource) => {
            const Icon = resource.icon
            return (
              <div
                key={resource.id}
                className="group bg-white rounded-xl p-8 border border-gray-200 hover:border-primary-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white group-hover:scale-110 transition-transform duration-300">
                      <Icon size={28} />
                    </div>
                  </div>

                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-oswald font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {resource.description}
                    </p>
                    <button className="text-primary-500 font-bold text-sm hover:text-primary-600 transition-colors flex items-center gap-2 group/btn">
                      Learn More
                      <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
