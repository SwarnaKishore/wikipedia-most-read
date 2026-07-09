import React from 'react';

const Masthead = ({ darkMode, onToggle }) => {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4 border-b-2 pb-5 pt-9" style={{ borderColor: 'var(--brass)' }}>
      <div>
        <p className="m-0 mb-1.5 font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--lamp)' }}>
          The daily reading room
        </p>
        <h1 className="m-0 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Wikipedia Most Read
        </h1>
      </div>

      <button
        onClick={onToggle}
        className={`flex items-center gap-2.5 rounded-full border px-4 py-2 font-mono text-xs transition-shadow ${darkMode ? 'glow-lamp' : ''}`}
        style={{ borderColor: darkMode ? 'var(--lamp)' : 'var(--border)', color: 'var(--ink-soft)' }}
        aria-label="Toggle dark mode"
      >
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" className="h-[18px] w-[18px]">
          <circle cx="12" cy="9" r="5" fill={darkMode ? 'var(--lamp)' : 'var(--border)'} />
          <path d="M9 20h6M10 15l-1 5M14 15l1 5" stroke="var(--ink-soft)" strokeLinecap="round" />
        </svg>
        <span style={{ color: darkMode ? 'var(--ink)' : 'var(--ink-soft)' }}>
          {darkMode ? 'Lamp on' : 'Lamp off'}
        </span>
      </button>
    </div>
  );
};

export default Masthead;
