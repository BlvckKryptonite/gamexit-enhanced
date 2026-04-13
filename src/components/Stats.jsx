export default function Stats() {
  const stats = [
    {
      value: '15M+',
      label: 'Gamers Affected Annually',
      description: 'People worldwide struggling with gaming addiction'
    },
    {
      value: '43%',
      label: 'Ages 13-24',
      description: 'Highest risk demographic for internet gaming disorder'
    },
    {
      value: '89%',
      label: 'Report Life Improvement',
      description: 'After implementing Game-Xit strategies'
    },
    {
      value: '24/7',
      label: 'Support Available',
      description: 'Round-the-clock resources and counseling'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center text-white space-y-3 p-6 rounded-xl hover:bg-white/5 transition-colors"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
                {stat.value}
              </div>
              <h3 className="text-xl font-oswald font-bold">{stat.label}</h3>
              <p className="text-gray-400">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
