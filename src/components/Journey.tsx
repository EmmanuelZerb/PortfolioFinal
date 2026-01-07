import { motion } from 'framer-motion';

const timeline = [
  {
    formation: {
      year: '2025 - 2028',
      title: 'Cycle Ingénieur (Majeure DATA - IA)',
      organization: 'ECE Paris',
      description: 'Formation d\'ingénieur spécialisée en Data Science et Intelligence Artificielle.',
    },
    experience: {
      year: '2024 - Présent',
      title: 'Développeur LLM en Alternance',
      organization: 'Mon Ami Poto',
      description: 'Alternance débutée en Licence STS et poursuivie en école d\'ingénieur. Développement d\'agents intelligents, assistants virtuels et automatisation de workflows avec LangGraph, OpenAI et Claude.',
      highlight: true,
    },
  },
  {
    formation: {
      year: '2024 - 2025',
      title: 'Licence STS',
      organization: 'CNAM',
      description: 'Développement informatique, Intelligence Artificielle et Big Data.',
    },
    experience: {
      year: '2024 - Présent',
      title: 'Développeur LLM en Alternance',
      organization: 'Mon Ami Poto',
      description: 'Début de l\'alternance : conception d\'applications IA en Python, intégration d\'APIs externes (HubSpot, Tracfin) et développement d\'agents conversationnels.',
      highlight: true,
    },
  },
  {
    formation: {
      year: '2022 - 2024',
      title: 'BTS SIO SLAM',
      organization: 'Le Rebours',
      description: 'Brevet de Technicien Supérieur Service Informatique aux Organisations.',
    },
    experience: null,
  },
];

export default function Journey() {
  return (
    <section id="journey" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-zinc-500 font-mono text-sm tracking-wider uppercase mb-4 block">
            Mon Parcours
          </span>
          <h2 className="text-4xl md:text-6xl font-bold">
            Formation & <span className="gradient-text">Expériences</span>
          </h2>
        </motion.div>

        <div className="relative pl-24">
          {/* Ligne verticale à gauche */}
          <div className="absolute left-16 top-0 bottom-0 w-px bg-gradient-to-b from-zinc-700 via-zinc-800 to-transparent" />

          <div className="space-y-16">
            {timeline.map((item, index) => (
              <motion.div
                key={`${item.formation.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Année sticky */}
                <div className="absolute left-[-88px] top-8">
                  <span className="text-zinc-600 font-mono text-xs font-semibold">
                    {item.formation.year.split(' - ')[0]}
                  </span>
                </div>

                <div className="space-y-4">
                  {/* Formation */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    whileHover={{ backgroundColor: 'rgba(39, 39, 42, 0.7)' }}
                    className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 p-6 rounded-2xl"
                    style={{ willChange: 'opacity, transform' }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-zinc-400 font-mono text-xs uppercase tracking-wider">
                        Formation
                      </span>
                      <span className="text-zinc-600 font-mono text-xs">
                        · {item.formation.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.formation.title}</h3>
                    <p className="text-zinc-300 mb-2 font-medium">
                      {item.formation.organization}
                    </p>
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      {item.formation.description}
                    </p>
                  </motion.div>

                  {/* Expérience */}
                  {item.experience && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      whileHover={{ backgroundColor: 'rgba(39, 39, 42, 0.7)' }}
                      className={`bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 p-6 rounded-2xl ${
                        item.experience.highlight ? 'ring-1 ring-zinc-700/50' : ''
                      }`}
                      style={{ willChange: 'opacity, transform' }}
                    >
                      <div className="flex items-center gap-2 mb-3 flex-wrap">
                        <span className="text-zinc-400 font-mono text-xs uppercase tracking-wider">
                          Expérience
                        </span>
                        <span className="text-zinc-600 font-mono text-xs">
                          · {item.experience.year}
                        </span>
                        {item.experience.highlight && (
                          <span className="px-2 py-0.5 bg-zinc-800/70 border border-zinc-700/50 rounded text-zinc-400 font-mono text-xs">
                            En cours
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {item.experience.title}
                      </h3>
                      <p className="text-zinc-300 mb-2 font-medium">
                        {item.experience.organization}
                      </p>
                      <p className="text-zinc-500 text-sm leading-relaxed">
                        {item.experience.description}
                      </p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
