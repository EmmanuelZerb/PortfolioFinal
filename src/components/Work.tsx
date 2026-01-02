import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Agents Intelligents - Mon Ami Poto',
    description: 'Développement d\'agents intelligents et assistants virtuels en production. Automatisation des processus métier avec Tracfin et HubSpot, intégration de modèles de langage pour optimiser les workflows.',
    tech: ['Python', 'LangGraph', 'FastAPI', 'HubSpot API', 'Tracfin'],
    github: null,
  },
  {
    title: 'BlitzCrank GPT',
    description: 'Bot Discord intelligent utilisant l\'API OpenAI pour fournir une assistance en temps réel aux joueurs de League of Legends. Intégration de GPT-4 pour des réponses contextuelles et pertinentes.',
    tech: ['Python', 'OpenAI API', 'Discord.py', 'LLM'],
    github: 'https://github.com/EmmanuelZerb/BlitzCrankGPT',
  },
  {
    title: 'ProjetLogBook',
    description: 'Application full-stack de transcription audio en temps réel avec l\'API Gladia. Interface utilisateur moderne pour la gestion et l\'export des transcriptions.',
    tech: ['Python', 'FastAPI', 'Gladia API', 'Speech-to-Text'],
    github: 'https://github.com/EmmanuelZerb/ProjetLogBook',
  },
  {
    title: 'Five - Gestion d\'entreprise',
    description: 'Application desktop complète de gestion pour entreprise avec système de facturation, gestion des stocks et CRM. Architecture MVC avec interface JavaFX.',
    tech: ['Java', 'JavaFX', 'MySQL', 'MVC'],
    github: 'https://github.com/EmmanuelZerb/Nyrocks-Five',
  },
  {
    title: 'April Vintage',
    description: 'Site e-commerce WordPress pour une boutique vintage. Personnalisation du thème, intégration WooCommerce et optimisation SEO avec Google Analytics.',
    tech: ['WordPress', 'WooCommerce', 'PHP', 'Google Analytics'],
    github: null,
  },
];

export default function Work() {
  return (
    <section id="work" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-zinc-500 font-mono text-sm tracking-wider uppercase mb-4 block">
            Réalisations
          </span>
          <h2 className="text-4xl md:text-6xl font-bold">
            Projets <span className="gradient-text">sélectionnés</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => {
            const Component = project.github ? motion.a : motion.div;
            const linkProps = project.github
              ? {
                  href: project.github,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};

            return (
              <Component
                key={project.title}
                {...linkProps}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group block glass p-8 rounded-2xl hover:bg-zinc-800/70 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-3 group-hover:gradient-text transition-all">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm font-mono bg-zinc-800/50 border border-zinc-700/50 rounded-full text-zinc-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  {project.github && (
                    <svg
                      className="w-6 h-6 text-zinc-600 group-hover:text-zinc-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  )}
                </div>
              </Component>
            );
          })}
        </div>
      </div>
    </section>
  );
}
