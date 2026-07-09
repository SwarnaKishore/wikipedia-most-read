import React from 'react';

const toInputValue = (date) => {
  const d = new Date(date);
  const offset = d.getTimezoneOffset();
  const local = new Date(d.getTime() - offset * 60000);
  return local.toISOString().slice(0, 10);
};

const DateStamp = ({ value, onChange }) => {
  const setDate = (date) => onChange(date);

  const setToday = () => setDate(new Date());
  const setYesterday = () => {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    setDate(d);
  };

  return (
    <div className="mt-7 mb-2 flex flex-wrap items-center gap-3.5">
      <div
        className="flex items-center gap-2.5 rounded-md border px-3.5 py-2"
        style={{ borderColor: 'var(--border)', backgroundColor: 'var(--card)' }}
      >
        <label
          htmlFor="date-stamp-input"
          className="font-mono text-[11px] uppercase tracking-[0.08em]"
          style={{ color: 'var(--ink-soft)' }}
        >
          Date
        </label>
        <input
          id="date-stamp-input"
          type="date"
          value={toInputValue(value)}
          max={toInputValue(new Date())}
          onChange={(e) => {
            if (e.target.value) setDate(new Date(e.target.value + 'T00:00:00'));
          }}
          className="border-0 bg-transparent font-mono text-sm outline-none"
          style={{ color: 'var(--ink)' }}
        />
      </div>

      <button
        onClick={setToday}
        className="rounded-md border px-3.5 py-2 font-mono text-xs transition-colors"
        style={{ borderColor: 'var(--border)', backgroundColor: 'var(--card)', color: 'var(--ink-soft)' }}
      >
        Today
      </button>
      <button
        onClick={setYesterday}
        className="rounded-md border px-3.5 py-2 font-mono text-xs transition-colors"
        style={{ borderColor: 'var(--border)', backgroundColor: 'var(--card)', color: 'var(--ink-soft)' }}
      >
        Yesterday
      </button>
    </div>
  );
};

export default DateStamp;
