import { useLanguage } from '../context/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-zinc-900/50 backdrop-blur-sm rounded-full p-1 border border-zinc-800/50">
      <button
        onClick={() => setLanguage('fr')}
        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
          language === 'fr'
            ? 'bg-zinc-700 text-zinc-100'
            : 'text-zinc-500 hover:text-zinc-300'
        }`}
        aria-label="Français"
      >
        FR
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
          language === 'en'
            ? 'bg-zinc-700 text-zinc-100'
            : 'text-zinc-500 hover:text-zinc-300'
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
