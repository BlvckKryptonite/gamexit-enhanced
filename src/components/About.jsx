import { CheckCircle } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-slide-up">
            <h2 className="section-heading lg:text-left">What is Game-Xit?</h2>

            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                Game-Xit is a comprehensive support movement dedicated to raising awareness about gaming addiction and its profound impact on mental health, relationships, and daily life. We understand that gaming has become a significant part of modern culture, but when it crosses the line into addiction, lives are disrupted.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                We're not here to judge. We're here to inform, support, and empower individuals and families through accessible resources, real stories from the community, and practical, evidence-based tools for meaningful change.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you're struggling with gaming addiction yourself, concerned about a loved one, or simply seeking to understand the issue better, Game-Xit is your starting point toward balance, recovery, and reclaiming your life.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3 pt-4">
              {[
                'Personalized recovery roadmaps',
                'Community support groups',
                'Professional counselor access',
                'Evidence-based strategies'
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle className="text-primary-500 flex-shrink-0" size={24} />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative h-96 lg:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-500/5 rounded-3xl"></div>
            <div className="absolute inset-4 bg-white rounded-3xl shadow-lg overflow-hidden border border-primary-500/10">
              <div className="h-full flex flex-col justify-center px-8 space-y-8">
                <div className="text-center space-y-2">
                  <div className="text-5xl font-bold text-primary-500">100%</div>
                  <p className="text-gray-600">Confidential & Non-Judgmental</p>
                </div>

                <hr className="border-gray-200" />

                <div className="text-center space-y-2">
                  <div className="text-5xl font-bold text-primary-500">24/7</div>
                  <p className="text-gray-600">Support & Resources Available</p>
                </div>

                <hr className="border-gray-200" />

                <div className="text-center space-y-2">
                  <div className="text-5xl font-bold text-primary-500">1K+</div>
                  <p className="text-gray-600">Success Stories</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
