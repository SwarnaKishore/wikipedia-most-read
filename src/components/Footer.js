import React from 'react';

const Footer = () => {
  return (
    <footer
      className="mt-12 flex flex-wrap items-center justify-between gap-2 border-t pt-5 font-mono text-[11px]"
      style={{ borderColor: 'var(--border)', color: 'var(--ink-soft)' }}
    >
      <span>
        Data from the Wikimedia REST API &middot; not affiliated with Wikimedia &middot; &copy; {new Date().getFullYear()}
      </span>
      <a
        href="https://github.com/SwarnaKishore/wikipedia-most-read"
        target="_blank"
        rel="noreferrer"
        style={{ color: 'var(--lamp)' }}
      >
        View source on GitHub
      </a>
    </footer>
  );
};

export default Footer;
