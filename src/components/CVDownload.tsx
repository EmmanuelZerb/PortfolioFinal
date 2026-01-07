import { useEffect, useState } from 'react';

interface CVDownloadProps {
  language?: string;
}

const CVDownload = ({ language = 'fr' }: CVDownloadProps) => {
  const [currentLanguage, setCurrentLanguage] = useState(language);

  useEffect(() => {
    const handleLanguageChange = (event: any) => {
      setCurrentLanguage(event.detail.language);
    };

    window.addEventListener('languageChange', handleLanguageChange);
    return () => window.removeEventListener('languageChange', handleLanguageChange);
  }, []);

  const translations = {
    fr: {
      downloadButton: "Imprimer / Télécharger PDF",
      downloadInfo: "Choisissez votre imprimante pour imprimer ou \"Enregistrer en PDF\" pour télécharger"
    },
    en: {
      downloadButton: "Print / Download PDF",
      downloadInfo: "Choose your printer to print or \"Save as PDF\" to download"
    }
  };

  const t = translations[currentLanguage as keyof typeof translations] || translations.fr;

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <button
        onClick={handlePrint}
        className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full transition-all duration-300 inline-flex items-center gap-3 font-medium text-lg"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <span>{t.downloadButton}</span>
      </button>
      <p className="text-sm text-zinc-500 mt-4">
        {t.downloadInfo}
      </p>
    </>
  );
};

export default CVDownload;
