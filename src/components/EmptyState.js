import React from 'react';

const EmptyState = ({ message }) => {
  return (
    <div
      className="col-span-full rounded-[10px] border border-dashed px-5 py-16 text-center"
      style={{ borderColor: 'var(--border)', color: 'var(--ink-soft)' }}
    >
      <h3 className="mb-2 font-display text-xl" style={{ color: 'var(--ink)' }}>
        No cards on file for that date
      </h3>
      <p className="m-0 text-sm">{message}</p>
    </div>
  );
};

export default EmptyState;
