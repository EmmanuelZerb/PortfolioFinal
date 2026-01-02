import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Langages',
    items: ['Python', 'JavaScript', 'Java', 'PHP', 'C++', 'SQL', 'HTML/CSS'],
  },
  {
    category: 'Frameworks',
    items: ['FastAPI', 'Flask', 'LangGraph', 'Symfony', 'SpringBoot', 'JavaFX', 'Bootstrap', 'Flutter'],
  },
  {
    category: 'IA & LLM',
    items: ['OpenAI API', 'LangChain', 'Agents Intelligents', 'RAG', 'HuggingFace', 'Speech-to-Text'],
  },
  {
    category: 'Bases de données',
    items: ['MySQL', 'MariaDB', 'SQLite', 'PostgreSQL'],
  },
  {
    category: 'Outils & DevOps',
    items: ['Git', 'Docker', 'Linux', 'WordPress', 'HubSpot', 'Google Analytics'],
  },
];

export default function Skills() {
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
            Stack Technique
          </span>
          <h2 className="text-4xl md:text-6xl font-bold">
            Technologies <span className="gradient-text">maîtrisées</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl"
            >
              <h3 className="text-xl font-semibold mb-6 text-zinc-300">
                {skillGroup.category}
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
