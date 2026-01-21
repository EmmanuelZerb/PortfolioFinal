import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Navigation
    'nav.projects': 'Projets',
    'nav.journey': 'Parcours',
    'nav.skills': 'Compétences',
    'nav.contact': 'Contact',

    // Hero
    'hero.subtitle': 'Étudiant Ingénieur · Développeur IA',
    'hero.description': "Étudiant ingénieur à l'ECE Paris (Majeure DATA - IA), actuellement en alternance chez Mon Ami Poto. Passionné par l'intelligence artificielle, les LLM et le développement de solutions innovantes.",
    'hero.viewProjects': 'Voir mes projets',
    'hero.myCV': 'Mon CV',
    'hero.contact': 'Contact',

    // Work
    'work.subtitle': 'Réalisations',
    'work.title': 'Projets',
    'work.titleHighlight': 'sélectionnés',

    // Projects descriptions
    'project.theLastStrain.description': "Jeu d'action/aventure 3D développé lors d'un hackathon avec Godot Engine 4.4. Système de combat FPS, intégration audio FMOD pour une expérience sonore immersive, et support optionnel Arduino pour des contrôles physiques.",
    'project.monAmipoto.description': "Application web moderne offrant une interface de chat intuitive pour interagir avec un assistant IA personnel. Support des thèmes clair/sombre, mode hors ligne avec synchronisation, et accessibilité complète.",
    'project.codeConverter.description': "Convertissez du code entre différents langages de programmation en temps réel avec l'IA. Détection automatique du langage source, éditeur Monaco intégré et interface moderne avec animations fluides.",
    'project.logbook.description': "Application web de transcription audio en temps réel avec authentification et stockage des enregistrements. Serveur WebSocket Python pour la capture audio et intégration avec l'API Gladia pour la transcription.",
    'project.memeMotion.description': "Application de reconnaissance d'expressions faciales en temps réel qui compare vos expressions avec des memes iconiques. Détection faciale ultra-rapide avec MediaPipe et screenshots automatiques.",
    'project.blitzCrank.description': "Bot Discord intelligent utilisant l'API OpenAI pour fournir une assistance en temps réel aux joueurs de League of Legends. Intégration de GPT-4 pour des réponses contextuelles et pertinentes.",

    // Journey
    'journey.subtitle': 'Mon Parcours',
    'journey.title': 'Formation &',
    'journey.titleHighlight': 'Expériences',
    'journey.formation': 'Formation',
    'journey.experience': 'Expérience',
    'journey.current': 'En cours',
    'journey.present': 'Présent',

    // Journey items
    'journey.ece.title': 'Cycle Ingénieur (Majeure DATA - IA)',
    'journey.ece.description': "Formation d'ingénieur spécialisée en Data Science et Intelligence Artificielle.",
    'journey.poto1.title': 'Développeur LLM en Alternance',
    'journey.poto1.description': "Alternance débutée en Licence STS et poursuivie en école d'ingénieur. Développement d'agents intelligents, assistants virtuels et automatisation de workflows avec LangGraph, OpenAI et Claude.",
    'journey.licence.title': 'Licence STS',
    'journey.licence.description': 'Développement informatique, Intelligence Artificielle et Big Data.',
    'journey.poto2.description': "Début de l'alternance : conception d'applications IA en Python, intégration d'APIs externes (HubSpot, Tracfin) et développement d'agents conversationnels.",
    'journey.bts.title': 'BTS SIO SLAM',
    'journey.bts.description': 'Brevet de Technicien Supérieur Service Informatique aux Organisations.',

    // Skills
    'skills.subtitle': 'Stack Technique',
    'skills.title': 'Technologies',
    'skills.titleHighlight': 'maîtrisées',
    'skills.languages': 'Langages',
    'skills.frameworks': 'Frameworks & Libraries',
    'skills.ai': 'IA & LLM',
    'skills.databases': 'Bases de données & Backend',
    'skills.tools': 'Outils & Développement',

    // Contact
    'contact.subtitle': 'Restons en contact',
    'contact.title': 'Échangeons',
    'contact.titleHighlight': 'ensemble',
    'contact.description': "N'hésitez pas à me contacter pour discuter de technologies, de projets ou d'opportunités professionnelles.",
    'contact.footer': '© 2025 Emmanuel Zerbib · Développé avec Astro, React & Three.js',
  },
  en: {
    // Navigation
    'nav.projects': 'Projects',
    'nav.journey': 'Journey',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',

    // Hero
    'hero.subtitle': 'Engineering Student · AI Developer',
    'hero.description': "Engineering student at ECE Paris (Major DATA - AI), currently in work-study at Mon Ami Poto. Passionate about artificial intelligence, LLMs and developing innovative solutions.",
    'hero.viewProjects': 'View my projects',
    'hero.myCV': 'My Resume',
    'hero.contact': 'Contact',

    // Work
    'work.subtitle': 'Achievements',
    'work.title': 'Selected',
    'work.titleHighlight': 'Projects',

    // Projects descriptions
    'project.theLastStrain.description': "3D action/adventure game developed during a hackathon with Godot Engine 4.4. FPS combat system, FMOD audio integration for an immersive sound experience, and optional Arduino support for physical controls.",
    'project.monAmipoto.description': "Modern web application offering an intuitive chat interface to interact with a personal AI assistant. Light/dark theme support, offline mode with synchronization, and full accessibility.",
    'project.codeConverter.description': "Convert code between different programming languages in real-time with AI. Automatic source language detection, integrated Monaco editor and modern interface with smooth animations.",
    'project.logbook.description': "Real-time audio transcription web application with authentication and recording storage. Python WebSocket server for audio capture and integration with the Gladia API for transcription.",
    'project.memeMotion.description': "Real-time facial expression recognition application that compares your expressions with iconic memes. Ultra-fast facial detection with MediaPipe and automatic screenshots.",
    'project.blitzCrank.description': "Intelligent Discord bot using the OpenAI API to provide real-time assistance to League of Legends players. GPT-4 integration for contextual and relevant responses.",

    // Journey
    'journey.subtitle': 'My Journey',
    'journey.title': 'Education &',
    'journey.titleHighlight': 'Experience',
    'journey.formation': 'Education',
    'journey.experience': 'Experience',
    'journey.current': 'Current',
    'journey.present': 'Present',

    // Journey items
    'journey.ece.title': 'Engineering Degree (Major DATA - AI)',
    'journey.ece.description': "Engineering program specialized in Data Science and Artificial Intelligence.",
    'journey.poto1.title': 'LLM Developer (Work-Study)',
    'journey.poto1.description': "Work-study program started during Bachelor's degree and continued in engineering school. Development of intelligent agents, virtual assistants and workflow automation with LangGraph, OpenAI and Claude.",
    'journey.licence.title': "Bachelor's Degree STS",
    'journey.licence.description': 'Software Development, Artificial Intelligence and Big Data.',
    'journey.poto2.description': "Start of work-study: AI application development in Python, external API integration (HubSpot, Tracfin) and conversational agent development.",
    'journey.bts.title': 'BTS SIO SLAM',
    'journey.bts.description': 'Higher Technician Certificate in IT Services for Organizations.',

    // Skills
    'skills.subtitle': 'Tech Stack',
    'skills.title': 'Mastered',
    'skills.titleHighlight': 'Technologies',
    'skills.languages': 'Languages',
    'skills.frameworks': 'Frameworks & Libraries',
    'skills.ai': 'AI & LLM',
    'skills.databases': 'Databases & Backend',
    'skills.tools': 'Tools & Development',

    // Contact
    'contact.subtitle': 'Get in touch',
    'contact.title': "Let's",
    'contact.titleHighlight': 'connect',
    'contact.description': "Feel free to reach out to discuss technologies, projects or professional opportunities.",
    'contact.footer': '© 2025 Emmanuel Zerbib · Built with Astro, React & Three.js',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const FRENCH_COUNTRIES = ['FR', 'BE', 'CH', 'CA', 'LU', 'MC', 'SN', 'CI', 'ML', 'BF', 'NE', 'TG', 'BJ', 'GA', 'CG', 'CD', 'CM', 'MG', 'HT', 'MU', 'RE', 'GP', 'MQ', 'GF', 'NC', 'PF'];

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('fr');
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const detectLanguage = async () => {
      // Check localStorage first
      const savedLang = localStorage.getItem('preferredLanguage') as Language | null;
      if (savedLang && (savedLang === 'fr' || savedLang === 'en')) {
        setLanguageState(savedLang);
        setIsInitialized(true);
        return;
      }

      // Detect from IP
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const detectedLang = FRENCH_COUNTRIES.includes(data.country_code) ? 'fr' : 'en';
        setLanguageState(detectedLang);
        localStorage.setItem('preferredLanguage', detectedLang);
      } catch (error) {
        console.log('Could not detect location, defaulting to French');
      }
      setIsInitialized(true);
    };

    detectLanguage();
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('preferredLanguage', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['fr']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
