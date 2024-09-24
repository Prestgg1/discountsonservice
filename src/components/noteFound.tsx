import React from 'react';

interface NoteFoundProps {
  message?: string;
}

const NoteFound: React.FC<NoteFoundProps> = ({ message = "Sehife Tapılmadı." }) => {
  return (
    <div className="note-found flex items-center justify-center h-full">
      <div className="bg-blue-100 border border-blue-300 text-blue-600 rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-semibold">{message}</h2>
      </div>
    </div>
  );
};

export default NoteFound;
