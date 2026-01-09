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

  const handleOpenCV = () => {
    const cvPath = currentLanguage === 'fr'
      ? '/EMMANUEL_ZERBIB_CV_Francais.pdf'
      : '/EMMANUEL_ZERBIB_CV_English.pdf';

    window.open(cvPath, '_blank');
  };

  return (
    <>
      <button
        onClick={handleOpenCV}
        className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full transition-all duration-300 inline-flex items-center gap-3 font-medium text-lg"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <span>{currentLanguage === 'fr' ? 'Télécharger / Imprimer PDF' : 'Download / Print PDF'}</span>
      </button>
      <p className="text-sm text-zinc-500 mt-4">
        {currentLanguage === 'fr'
          ? 'Le PDF sera ouvert dans un nouvel onglet. Vous pourrez ensuite le télécharger ou l\'imprimer.'
          : 'The PDF will open in a new tab. You can then download or print it.'}
      </p>
    </>
  );
};

export default CVDownload;
