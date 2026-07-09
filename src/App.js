import React, { useState, useEffect, useCallback } from 'react';
import Masthead from './components/Masthead';
import DateStamp from './components/DateStamp';
import ArticleCard from './components/ArticleCard';
import ArticleCardSkeleton from './components/ArticleCardSkeleton';
import EmptyStateComponent from './components/EmptyState';
import Footer from './components/Footer';

const yesterday = () => {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d;
};

const getRequestURL = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `https://en.wikipedia.org/api/rest_v1/feed/featured/${year}/${month}/${day}`;
};

const formatReadable = (date) =>
  date.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const saved = window.localStorage.getItem('wmr-dark-mode');
      if (saved !== null) return saved === 'true';
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });

  const [selectedDate, setSelectedDate] = useState(yesterday());
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    try {
      window.localStorage.setItem('wmr-dark-mode', String(darkMode));
    } catch {
      // ignore storage errors (e.g. private browsing)
    }
  }, [darkMode]);

  const loadArticles = useCallback(async (date) => {
    setLoading(true);
    setErrorMessage('');
    try {
      const response = await fetch(getRequestURL(date));
      const data = await response.json();
      const results = data?.mostread?.articles || [];
      setArticles(results);
      if (results.length === 0) {
        setErrorMessage('Try a date before today — the archive needs a day to catch up.');
      }
    } catch (err) {
      setArticles([]);
      setErrorMessage('Could not reach the Wikimedia archive. Check your connection and try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadArticles(selectedDate);
  }, [selectedDate, loadArticles]);

  const handleDateChange = (date) => setSelectedDate(date);

  return (
    <div className="mx-auto min-h-screen max-w-5xl px-6 pb-16">
      <Masthead darkMode={darkMode} onToggle={() => setDarkMode((v) => !v)} />

      <DateStamp value={selectedDate} onChange={handleDateChange} />

      <p className="mb-7 mt-1 font-mono text-xs" style={{ color: 'var(--ink-soft)' }}>
        {loading
          ? `Loading most read articles for ${formatReadable(selectedDate)}…`
          : errorMessage
          ? errorMessage
          : `Showing top ${articles.length} articles for ${formatReadable(selectedDate)}.`}
      </p>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-6">
        {loading &&
          Array.from({ length: 8 }).map((_, i) => <ArticleCardSkeleton key={i} rank={i + 1} />)}

        {!loading && articles.length === 0 && (
          <EmptyStateComponent message={errorMessage || 'No results returned for that date.'} />
        )}

        {!loading &&
          articles.map((article, index) => (
            <ArticleCard key={article.title || index} article={article} rank={index + 1} />
          ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
