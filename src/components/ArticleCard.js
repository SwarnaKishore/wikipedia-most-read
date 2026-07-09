import React from 'react';

const ArticleCard = ({ article, rank }) => {
  const contentUrl = article.content_urls?.desktop?.page || '#';
  const thumbnail = article.thumbnail?.source;
  const title = (article.title || '').replace(/_/g, ' ');
  const description = article.description || article.extract || 'No description on file.';
  const isTopRank = rank === 1;

  return (
    <a
      href={contentUrl}
      target="_blank"
      rel="noreferrer"
      className="group relative block overflow-hidden rounded-[10px] border no-underline transition-transform duration-200 ease-out hover:-translate-y-1 hover:rotate-[-0.4deg]"
      style={{
        backgroundColor: 'var(--card)',
        borderColor: 'var(--border)',
        color: 'var(--ink)',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      }}
    >
      <span
        className="absolute left-3 top-3 z-10 h-2.5 w-2.5 rounded-full border"
        style={{ borderColor: 'var(--border)', backgroundColor: 'var(--paper)' }}
      />
      <span
        className="absolute right-2.5 top-2.5 z-10 flex h-[30px] w-[30px] items-center justify-center rounded-full font-mono text-[13px] font-medium shadow"
        style={{
          backgroundColor: isTopRank ? 'var(--stamp)' : 'var(--brass)',
          color: 'var(--card)',
        }}
      >
        {rank}
      </span>

      {thumbnail ? (
        <img
          src={thumbnail}
          alt={title}
          className="h-[150px] w-full border-b object-cover"
          style={{ borderColor: 'var(--border)', backgroundColor: 'var(--paper-2)' }}
        />
      ) : (
        <div
          className="flex h-[150px] w-full items-center justify-center border-b font-mono text-[11px]"
          style={{ borderColor: 'var(--border)', backgroundColor: 'var(--paper-2)', color: 'var(--ink-soft)' }}
        >
          no image on file
        </div>
      )}

      <div className="px-4 pb-3.5 pt-4">
        <h2 className="m-0 mb-1.5 font-display text-lg font-semibold leading-tight">{title}</h2>
        <p
          className="m-0 mb-3 line-clamp-2 text-[13px] leading-relaxed"
          style={{ color: 'var(--ink-soft)' }}
        >
          {description}
        </p>
        <div className="flex items-center justify-between border-t border-dashed pt-2.5" style={{ borderColor: 'var(--border)' }}>
          <span className="flex items-center gap-1.5 font-mono text-xs" style={{ color: 'var(--lamp)' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-[13px] w-[13px]">
              <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            {article.views?.toLocaleString()}
          </span>
          <span className="font-mono text-[11px]" style={{ color: 'var(--ink-soft)' }}>
            read entry →
          </span>
        </div>
      </div>
    </a>
  );
};

export default ArticleCard;
