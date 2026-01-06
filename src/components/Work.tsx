import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const projects = [
  {
    title: 'The Last Strain',
    description: 'Jeu d\'action/aventure 3D développé lors d\'un hackathon avec Godot Engine 4.4. Système de combat FPS, intégration audio FMOD pour une expérience sonore immersive, et support optionnel Arduino pour des contrôles physiques.',
    tech: ['Godot Engine 4.4', 'GDScript', 'C#', 'FMOD', 'Arduino'],
    videoPath: '/videos/the-last-strain.mp4',
  },
  {
    title: 'MonAmiPoto - Assistant IA Personnel',
    description: 'Application web moderne offrant une interface de chat intuitive pour interagir avec un assistant IA personnel. Support des thèmes clair/sombre, mode hors ligne avec synchronisation, et accessibilité complète.',
    tech: ['JavaScript ES6+', 'Web Components', 'Service Workers', 'IndexedDB', 'WebSocket'],
    videoPath: '/videos/monamipoto.mp4',
  },
  {
    title: 'RealTime Code Converter',
    description: 'Convertissez du code entre différents langages de programmation en temps réel avec l\'IA. Détection automatique du langage source, éditeur Monaco intégré et interface moderne avec animations fluides.',
    tech: ['Next.js 14', 'React 18', 'TailwindCSS', 'Monaco Editor', 'OpenAI GPT-4'],
    videoPath: '/videos/realtime-code-converter.mp4',
  },
  {
    title: 'Logbook',
    description: 'Application web de transcription audio en temps réel avec authentification et stockage des enregistrements. Serveur WebSocket Python pour la capture audio et intégration avec l\'API Gladia pour la transcription.',
    tech: ['Python', 'WebSocket', 'Gladia API', 'Supabase', 'HTML5', 'JavaScript'],
    videoPath: '/videos/logbook.mp4',
  },
  {
    title: 'MemeMotion',
    description: 'Application de reconnaissance d\'expressions faciales en temps réel qui compare vos expressions avec des memes iconiques. Détection faciale ultra-rapide avec MediaPipe et screenshots automatiques.',
    tech: ['Python', 'MediaPipe', 'OpenCV', 'PyQt5', 'NumPy'],
    videoPath: '/videos/mememotion.mp4',
  },
  {
    title: 'BlitzCrank GPT',
    description: 'Bot Discord intelligent utilisant l\'API OpenAI pour fournir une assistance en temps réel aux joueurs de League of Legends. Intégration de GPT-4 pour des réponses contextuelles et pertinentes.',
    tech: ['Python', 'OpenAI API', 'Discord.py', 'LLM'],
    videoPath: '/videos/blitzcrank-gpt.mp4',
  },
];

export default function Work() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const isModalOpen = selectedVideo !== null;

  const openModal = (videoPath: string | undefined) => {
    if (videoPath) {
      setSelectedVideo(videoPath);
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isModalOpen]);

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
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              onClick={() => openModal(project.videoPath)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group block glass p-8 rounded-2xl hover:bg-zinc-800/70 transition-all duration-300 cursor-pointer"
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
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {isModalOpen && selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeModal}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-5xl max-h-[80vh] mx-4"
              >
                <div className="w-full h-full flex items-center justify-center bg-black rounded-xl overflow-hidden">
                  <video
                    src={selectedVideo}
                    autoPlay
                    muted
                    loop
                    controls
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
