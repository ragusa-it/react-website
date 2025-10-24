// src/components/ImpressumModal.js
import React, { memo } from 'react';
import { X } from 'lucide-react';

const ImpressumModal = memo(({ onClose }) => (
  <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex justify-center items-center p-4 animate-fade-in" onClick={onClose}>
    <div className="blur-card rounded-lg shadow-2xl max-w-2xl w-full max-h-full overflow-y-auto p-8 relative glow-green animate-scale-in" onClick={(e) => e.stopPropagation()}>
      <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-green-500 transition-colors duration-300 cursor-none hover:glow-green" aria-label="Impressum schließen">
        <X size={24} />
      </button>
      <h3 className="text-2xl font-bold text-white mb-6 text-glow-green">Impressum</h3>
      <div className="text-gray-300 space-y-4 font-mono text-sm">
        <p><strong className="text-green-500">Ragusa IT-Consulting</strong><br />
        Melvin Ragusa<br />
        Provinzialstraße 177 <br />
        44388 Dortmund<br />
        Deutschland</p>
        <p><strong className="text-green-500">Inhaber:</strong><br />Melvin Ragusa</p>
        <p><strong className="text-green-500">Kontakt:</strong><br />Telefon: +49 160 95098973<br />E-Mail: kontakt@ragusa-it.dev</p>
        <p><strong className="text-green-500">Verantwortlich für den Inhalt (gemäß § 55 Abs. 2 RStV):</strong><br />Melvin Ragusa<br />(Anschrift wie oben)</p>
        <p><strong className="text-green-500">Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.</strong></p>
      </div>
    </div>
  </div>
));

export default ImpressumModal;
