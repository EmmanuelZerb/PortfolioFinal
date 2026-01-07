import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-zinc-500 font-mono text-sm tracking-wider uppercase mb-4 block">
            Restons en contact
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Échangeons <span className="gradient-text">ensemble</span>
          </h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto text-balance">
            N'hésitez pas à me contacter pour discuter de technologies, de projets ou d'opportunités professionnelles.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:zerbibemmanuel25@gmail.com"
              className="group px-6 sm:px-8 py-4 glass rounded-full hover:bg-zinc-800/70 transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm sm:text-base break-all sm:break-normal"
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="truncate">zerbibemmanuel25@gmail.com</span>
            </a>
          </div>

          <div className="mt-16 pt-16 border-t border-zinc-800">
            <p className="text-zinc-600 text-sm">
              © 2025 Emmanuel Zerbib · Développé avec Astro, React & Three.js
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
