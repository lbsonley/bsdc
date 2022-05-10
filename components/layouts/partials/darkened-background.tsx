import React from 'react';

const DarkenedBackground = () => {
  return (
    <div className="overflow-hidden fixed inset-0 w-screen h-screen bg-cover bg-palms-small sm:bg-palms-medium lg:bg-palms-large">
      <div className="absolute inset-0 min-w-full min-h-full bg-darken-40"></div>
      <p className="absolute right-0 bottom-0 mr-1.5 mb-0.5 text-slate-200">
        Photo by{' '}
        <a
          target="_blank"
          rel="noreferer noreferrer"
          href="https://unsplash.com/@petefogden?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        >
          Peter Fogden
        </a>{' '}
        from{' '}
        <a
          target="_blank"
          rel="noreferer noreferrer"
          href="https://unsplash.com"
        >
          Unsplash
        </a>
      </p>
    </div>
  );
};

export default DarkenedBackground;
