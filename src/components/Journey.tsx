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

        <div className="relative">
          {/* Ligne verticale centrale */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-zinc-800 hidden md:block" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={`${item.formation.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative grid md:grid-cols-2 gap-6"
              >
                {/* Point de connexion au centre */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
                  <div className="w-3 h-3 rounded-full bg-zinc-700 border-2 border-zinc-950" />
                </div>

                {/* Formation */}
                <div className="glass p-6 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-zinc-500 font-mono text-sm">
                      {item.formation.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.formation.title}</h3>
                  <p className="text-zinc-400 mb-3 text-sm">
                    {item.formation.organization}
                  </p>
                  <p className="text-zinc-500 text-sm">
                    {item.formation.description}
                  </p>
                </div>

                {/* Expérience */}
                {item.experience ? (
                  <div className={`glass p-6 rounded-lg ${item.experience.highlight ? 'border border-zinc-700' : ''}`}>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-zinc-500 font-mono text-sm">
                        {item.experience.year}
                      </span>
                      {item.experience.highlight && (
                        <span className="text-xs font-mono text-zinc-600">↔ En cours</span>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {item.experience.title}
                    </h3>
                    <p className="text-zinc-400 mb-3 text-sm">
                      {item.experience.organization}
                    </p>
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      {item.experience.description}
                    </p>
                  </div>
                ) : (
                  <div className="glass p-6 rounded-lg flex items-center justify-center">
                    <p className="text-zinc-600 text-sm">—</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
