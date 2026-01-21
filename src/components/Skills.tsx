import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Skills() {
  const { t } = useLanguage();

  const skills = [
    {
      categoryKey: 'skills.languages',
      items: ['Python', 'JavaScript ES6+', 'TypeScript', 'GDScript', 'C#', 'HTML5', 'CSS'],
    },
    {
      categoryKey: 'skills.frameworks',
      items: ['React 18', 'Next.js 14', 'LangGraph', 'TailwindCSS', 'Discord.py', 'PyQt5', 'Web Components'],
    },
    {
      categoryKey: 'skills.ai',
      items: ['OpenAI GPT-4', 'Claude', 'Agents Intelligents', 'MediaPipe', 'OpenCV', 'Gladia API', 'Speech-to-Text'],
    },
    {
      categoryKey: 'skills.databases',
      items: ['Supabase', 'IndexedDB', 'WebSocket', 'Service Workers'],
    },
    {
      categoryKey: 'skills.tools',
      items: ['Git', 'Godot Engine 4.4', 'Monaco Editor', 'FMOD', 'Arduino', 'NumPy'],
    },
  ];

  return (
    <section id="skills" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-zinc-500 font-mono text-sm tracking-wider uppercase mb-4 block">
            {t('skills.subtitle')}
          </span>
          <h2 className="text-4xl md:text-6xl font-bold">
            {t('skills.title')} <span className="gradient-text">{t('skills.titleHighlight')}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.categoryKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl"
            >
              <h3 className="text-xl font-semibold mb-6 text-zinc-300">
                {t(skillGroup.categoryKey)}
              </h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill) => (
                  <li
                    key={skill}
                    className="text-zinc-500 hover:text-zinc-300 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-zinc-400 transition-colors" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
