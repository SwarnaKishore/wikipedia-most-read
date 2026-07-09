import React from 'react';

const ArticleCardSkeleton = ({ rank }) => {
  return (
    <div
      className="relative overflow-hidden rounded-[10px] border"
      style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}
    >
      <span
        className="absolute left-3 top-3 z-10 h-2.5 w-2.5 rounded-full border"
        style={{ borderColor: 'var(--border)', backgroundColor: 'var(--paper)' }}
      />
      <span
        className="absolute right-2.5 top-2.5 z-10 flex h-[30px] w-[30px] items-center justify-center rounded-full font-mono text-[13px] font-medium"
        style={{ backgroundColor: 'var(--brass)', color: 'var(--card)', opacity: 0.5 }}
      >
        {rank}
      </span>

      <div className="relative h-[150px] w-full overflow-hidden border-b" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--paper-2)' }}>
        <div className="absolute inset-0 animate-shimmer" style={{ background: 'linear-gradient(90deg, transparent, var(--lamp-glow), transparent)' }} />
      </div>

      <div className="px-4 pb-3.5 pt-4">
        <div className="relative mb-2 h-5 w-4/5 overflow-hidden rounded" style={{ backgroundColor: 'var(--paper-2)' }}>
          <div className="absolute inset-0 animate-shimmer" style={{ background: 'linear-gradient(90deg, transparent, var(--lamp-glow), transparent)' }} />
        </div>
        <div className="relative h-8 w-full overflow-hidden rounded" style={{ backgroundColor: 'var(--paper-2)' }}>
          <div className="absolute inset-0 animate-shimmer" style={{ background: 'linear-gradient(90deg, transparent, var(--lamp-glow), transparent)' }} />
        </div>
      </div>
    </div>
  );
};

export default ArticleCardSkeleton;
