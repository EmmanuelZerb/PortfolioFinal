import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const projects = [
  {
    title: 'The Last Strain',
    descriptionKey: 'project.theLastStrain.description',
    tech: ['Godot Engine 4.4', 'GDScript', 'C#', 'FMOD', 'Arduino'],
    videoPath: '/videos/the-last-strain.mp4',
  },
  {
    title: 'MonAmiPoto - Assistant IA Personnel',
    descriptionKey: 'project.monAmipoto.description',
    tech: ['JavaScript ES6+', 'Web Components', 'Service Workers', 'IndexedDB', 'WebSocket'],
    videoPath: '/videos/monamipoto.mp4',
  },
  {
    title: 'RealTime Code Converter',
    descriptionKey: 'project.codeConverter.description',
    tech: ['Next.js 14', 'React 18', 'TailwindCSS', 'Monaco Editor', 'OpenAI GPT-4'],
    videoPath: '/videos/realtime-code-converter.mp4',
  },
  {
    title: 'Logbook',
    descriptionKey: 'project.logbook.description',
    tech: ['Python', 'WebSocket', 'Gladia API', 'Supabase', 'HTML5', 'JavaScript'],
    videoPath: '/videos/logbook.mp4',
  },
  {
    title: 'MemeMotion',
    descriptionKey: 'project.memeMotion.description',
    tech: ['Python', 'MediaPipe', 'OpenCV', 'PyQt5', 'NumPy'],
    videoPath: '/videos/mememotion.mp4',
  },
  {
    title: 'BlitzCrank GPT',
    descriptionKey: 'project.blitzCrank.description',
    tech: ['Python', 'OpenAI API', 'Discord.py', 'LLM'],
    videoPath: '/videos/blitzcrank-gpt.mp4',
  },
];

export default function Work() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const isModalOpen = selectedVideo !== null;
  const { t } = useLanguage();

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
            {t('work.subtitle')}
          </span>
          <h2 className="text-4xl md:text-6xl font-bold">
            {t('work.title')} <span className="gradient-text">{t('work.titleHighlight')}</span>
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
              whileHover={{ backgroundColor: 'rgba(39, 39, 42, 0.7)' }}
              className="group block bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 p-8 rounded-2xl cursor-pointer"
              style={{ willChange: 'opacity, transform' }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3 group-hover:gradient-text transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 mb-4">{t(project.descriptionKey)}</p>
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
