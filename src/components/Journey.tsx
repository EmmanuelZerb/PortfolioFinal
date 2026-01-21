import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Journey() {
  const { t, language } = useLanguage();

  const timeline = [
    {
      formation: {
        year: '2025 - 2028',
        titleKey: 'journey.ece.title',
        organization: 'ECE Paris',
        descriptionKey: 'journey.ece.description',
        highlight: true,
      },
      experience: {
        year: language === 'fr' ? '2024 - Présent' : '2024 - Present',
        titleKey: 'journey.poto1.title',
        organization: 'Mon Ami Poto',
        descriptionKey: 'journey.poto1.description',
        highlight: true,
      },
    },
    {
      formation: {
        year: '2024 - 2025',
        titleKey: 'journey.licence.title',
        organization: 'CNAM',
        descriptionKey: 'journey.licence.description',
      },
      experience: {
        year: language === 'fr' ? '2024 - Présent' : '2024 - Present',
        titleKey: 'journey.poto1.title',
        organization: 'Mon Ami Poto',
        descriptionKey: 'journey.poto2.description',
        highlight: true,
      },
    },
    {
      formation: {
        year: '2022 - 2024',
        titleKey: 'journey.bts.title',
        organization: 'Le Rebours',
        descriptionKey: 'journey.bts.description',
      },
      experience: null,
    },
  ];

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
            {t('journey.subtitle')}
          </span>
          <h2 className="text-4xl md:text-6xl font-bold">
            {t('journey.title')} <span className="gradient-text">{t('journey.titleHighlight')}</span>
          </h2>
        </motion.div>

        <div className="space-y-12 md:space-y-16">
          {timeline.map((item, index) => (
            <motion.div
              key={`${item.formation.titleKey}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative flex gap-4 md:gap-8"
            >
              {/* Année à gauche */}
              <div className="flex-shrink-0 w-12 md:w-20 pt-8">
                <span className="text-zinc-600 font-mono text-xs md:text-sm font-semibold">
                  {item.formation.year.split(' - ')[0]}
                </span>
              </div>

              {/* Ligne verticale */}
              <div className="relative flex-shrink-0">
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-zinc-700 via-zinc-800 to-transparent" />
                <div className="sticky top-8 w-2 h-2 rounded-full bg-zinc-700 mt-9" />
              </div>

              {/* Cards à droite */}
              <div className="flex-1 space-y-4 pb-4">
                {/* Formation */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  whileHover={{ backgroundColor: 'rgba(39, 39, 42, 0.7)' }}
                  className={`bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 p-4 md:p-6 rounded-2xl ${
                    item.formation.highlight ? 'ring-1 ring-zinc-700/50' : ''
                  }`}
                  style={{ willChange: 'opacity, transform' }}
                >
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className="text-zinc-400 font-mono text-xs uppercase tracking-wider">
                      {t('journey.formation')}
                    </span>
                    <span className="text-zinc-600 font-mono text-xs">
                      · {item.formation.year}
                    </span>
                    {item.formation.highlight && (
                      <span className="px-2 py-0.5 bg-zinc-800/70 border border-zinc-700/50 rounded text-zinc-400 font-mono text-xs">
                        {t('journey.current')}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">{t(item.formation.titleKey)}</h3>
                  <p className="text-zinc-300 mb-2 font-medium">
                    {item.formation.organization}
                  </p>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {t(item.formation.descriptionKey)}
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
                    className={`bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 p-4 md:p-6 rounded-2xl ${
                      item.experience.highlight ? 'ring-1 ring-zinc-700/50' : ''
                    }`}
                    style={{ willChange: 'opacity, transform' }}
                  >
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <span className="text-zinc-400 font-mono text-xs uppercase tracking-wider">
                        {t('journey.experience')}
                      </span>
                      <span className="text-zinc-600 font-mono text-xs">
                        · {item.experience.year}
                      </span>
                      {item.experience.highlight && (
                        <span className="px-2 py-0.5 bg-zinc-800/70 border border-zinc-700/50 rounded text-zinc-400 font-mono text-xs">
                          {t('journey.current')}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2">
                      {t(item.experience.titleKey)}
                    </h3>
                    <p className="text-zinc-300 mb-2 font-medium">
                      {item.experience.organization}
                    </p>
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      {t(item.experience.descriptionKey)}
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
