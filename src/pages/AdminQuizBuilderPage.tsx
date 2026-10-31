import { useState } from 'react';
import { Plus, Download, Copy, Check, Sparkles, Trash2, HelpCircle } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead';
import { Quiz, QuizQuestion, QuizResult } from '../types/quiz';
import { getAllQuizzes } from '../data/quizRegistry';

export default function AdminQuizBuilderPage() {
  const existingQuizzes = getAllQuizzes();
  const [copied, setCopied] = useState(false);

  // Builder State
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [description, setDescription] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [emoji, setEmoji] = useState('✨');
  const [category, setCategory] = useState('Personality');
  const [categorySlug, setCategorySlug] = useState('personality');
  const [coverGradient, setCoverGradient] = useState('from-purple-500 via-pink-500 to-rose-500');
  const [estimatedTime, setEstimatedTime] = useState('3 min');

  // Results
  const [results, setResults] = useState<QuizResult[]>([
    {
      id: 'archetype-1',
      title: 'The Trailblazer',
      emoji: '🚀',
      description: 'You are courageous, innovative, and love to pioneer new paths wherever you go.',
      traits: ['Innovative', 'Bold', 'Charismatic'],
      shareText: 'I took the quiz and I am The Trailblazer! 🚀 Discover yours!',
      color: 'from-amber-500 to-red-500',
    },
    {
      id: 'archetype-2',
      title: 'The Harmonizer',
      emoji: '🌸',
      description: 'You bring peace, empathetic understanding, and graceful balance to everyone in your circle.',
      traits: ['Empathetic', 'Thoughtful', 'Radiant'],
      shareText: 'I took the quiz and got The Harmonizer! 🌸 What are you?',
      color: 'from-teal-400 to-emerald-500',
    },
  ]);

  // Questions
  const [questions, setQuestions] = useState<QuizQuestion[]>([
    {
      id: 'q1',
      question: 'When starting a fresh project, what is your initial instinct?',
      emoji: '🎯',
      options: [
        { id: 'q1-a', text: 'Dive right in and figure things out on the fly', emoji: '⚡', scores: { 'archetype-1': 3, 'archetype-2': 0 } },
        { id: 'q1-b', text: 'Gather people together and ensure everyone feels heard', emoji: '🤝', scores: { 'archetype-1': 0, 'archetype-2': 3 } },
      ],
    },
  ]);

  const handleTitleChange = (val: string) => {
    setTitle(val);
    setSlug(val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''));
  };

  const addResult = () => {
    const id = `archetype-${results.length + 1}`;
    setResults([
      ...results,
      {
        id,
        title: `Archetype ${results.length + 1}`,
        emoji: '🌟',
        description: 'Description of this personality outcome...',
        traits: ['Insightful', 'Unique'],
        shareText: `I got Archetype ${results.length + 1}! Discover yours!`,
        color: 'from-purple-500 to-indigo-500',
      },
    ]);
  };

  const removeResult = (index: number) => {
    if (results.length <= 2) {
      alert('A quiz needs at least 2 outcomes!');
      return;
    }
    setResults(results.filter((_, i) => i !== index));
  };

  const addQuestion = () => {
    const qNum = questions.length + 1;
    setQuestions([
      ...questions,
      {
        id: `q${qNum}`,
        question: `Question ${qNum}: What would you choose?`,
        emoji: '❓',
        options: results.map((r, i) => ({
          id: `q${qNum}-${String.fromCharCode(97 + i)}`,
          text: `Option pointing toward ${r.title}`,
          emoji: r.emoji,
          scores: { [r.id]: 3 },
        })),
      },
    ]);
  };

  const removeQuestion = (index: number) => {
    if (questions.length <= 1) {
      alert('A quiz needs at least 1 question!');
      return;
    }
    setQuestions(questions.filter((_, i) => i !== index));
  };

  const generatedQuiz: Quiz = {
    id: slug || 'new-quiz',
    slug: slug || 'new-quiz',
    title: title || 'Untitled Quiz',
    subtitle: subtitle || 'Take this fun test',
    description: description || 'Detailed description of this quiz',
    metaDescription: metaDescription || `${title} personality quiz`,
    emoji: emoji || '✨',
    category,
    categorySlug,
    coverGradient,
    estimatedTime,
    totalQuestions: questions.length,
    questions,
    results,
  };

  const codeSnippet = `import { Quiz } from '../../types/quiz';

export const quizData: Quiz = ${JSON.stringify(generatedQuiz, null, 2)};
`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadFile = () => {
    const blob = new Blob([codeSnippet], { type: 'text/typescript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${slug || 'new-quiz'}.ts`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <SEOHead
        title="Admin Quiz Builder & CMS"
        description="Visual CMS and builder to easily author new personality quizzes and export TypeScript files without code complexity."
        noindex
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Content Management System
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900">Quiz CMS &amp; Visual Builder</h1>
            <p className="text-sm text-gray-500">
              Create, design, and export new quizzes into your site without touching core components.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={copyCode} className="btn-secondary text-xs py-2 px-4 flex items-center gap-1.5">
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied Code!' : 'Copy TS Code'}
            </button>
            <button onClick={downloadFile} className="btn-primary text-xs py-2 px-4 flex items-center gap-1.5">
              <Download className="w-4 h-4" /> Download .ts File
            </button>
          </div>
        </div>

        {/* Existing Quizzes Counter */}
        <div className="bg-purple-50/70 border border-purple-100 rounded-2xl p-4 mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="font-bold text-gray-800 text-sm">Active Quizzes in Website:</span>{' '}
            <span className="text-purple-700 font-extrabold text-sm">{existingQuizzes.length} live quizzes</span>
          </div>
          <div className="text-xs text-gray-500 flex items-center gap-1">
            <HelpCircle className="w-4 h-4 text-purple-500" />
            <span>To add your new quiz: download the file, put it in <code>src/data/quizzes/</code>, and add 1 line to <code>src/data/quizRegistry.ts</code>.</span>
          </div>
        </div>

        {/* Visual Builder Form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Info */}
            <div className="glass-card p-6 space-y-4">
              <h2 className="text-lg font-bold text-gray-800 border-b border-purple-100 pb-2">1. Quiz General Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Quiz Title</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    placeholder="e.g. Which Mythical Creature Matches Your Vibe?"
                    className="w-full px-4 py-2.5 rounded-xl border border-purple-200 text-sm focus:ring-2 focus:ring-purple-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase mb-1">URL Slug</label>
                  <input
                    type="text"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    placeholder="mythical-creature-vibe"
                    className="w-full px-4 py-2 rounded-xl border border-purple-200 text-sm font-mono text-xs bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Category</label>
                  <select
                    value={categorySlug}
                    onChange={(e) => {
                      setCategorySlug(e.target.value);
                      const catNames: Record<string, string> = {
                        personality: 'Personality',
                        'love-relationships': 'Love & Relationships',
                        lifestyle: 'Lifestyle',
                        entertainment: 'Entertainment',
                      };
                      setCategory(catNames[e.target.value] || 'Personality');
                    }}
                    className="w-full px-4 py-2 rounded-xl border border-purple-200 text-sm bg-white"
                  >
                    <option value="personality">Personality</option>
                    <option value="love-relationships">Love & Relationships</option>
                    <option value="lifestyle">Lifestyle</option>
                    <option value="entertainment">Entertainment</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Subtitle / Hook</label>
                  <input
                    type="text"
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                    placeholder="Find out which legendary beast reflects your secret instincts"
                    className="w-full px-4 py-2 rounded-xl border border-purple-200 text-sm"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Long Description</label>
                  <textarea
                    rows={2}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Answer these questions to uncover whether your spirit is a fiery dragon or a serene phoenix..."
                    className="w-full px-4 py-2 rounded-xl border border-purple-200 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Emoji Icon</label>
                  <input
                    type="text"
                    value={emoji}
                    onChange={(e) => setEmoji(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl border border-purple-200 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Estimated Time</label>
                  <input
                    type="text"
                    value={estimatedTime}
                    onChange={(e) => setEstimatedTime(e.target.value)}
                    placeholder="3 min"
                    className="w-full px-4 py-2 rounded-xl border border-purple-200 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Results / Archetypes */}
            <div className="glass-card p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-purple-100 pb-2">
                <h2 className="text-lg font-bold text-gray-800">2. Possible Results / Archetypes ({results.length})</h2>
                <button onClick={addResult} className="btn-secondary text-xs py-1.5 px-3 flex items-center gap-1">
                  <Plus className="w-3.5 h-3.5" /> Add Result
                </button>
              </div>

              {results.map((res, idx) => (
                <div key={res.id} className="p-4 rounded-xl border border-purple-100 bg-white space-y-3 relative">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-purple-600 uppercase">Outcome #{idx + 1} (ID: {res.id})</span>
                    <button onClick={() => removeResult(idx)} className="text-red-400 hover:text-red-600 text-xs flex items-center gap-1">
                      <Trash2 className="w-3.5 h-3.5" /> Remove
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="sm:col-span-2">
                      <label className="text-[11px] font-bold text-gray-500 uppercase">Title</label>
                      <input
                        type="text"
                        value={res.title}
                        onChange={(e) => {
                          const copy = [...results];
                          copy[idx].title = e.target.value;
                          setResults(copy);
                        }}
                        className="w-full px-3 py-1.5 rounded-lg border border-gray-200 text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-gray-500 uppercase">Emoji</label>
                      <input
                        type="text"
                        value={res.emoji}
                        onChange={(e) => {
                          const copy = [...results];
                          copy[idx].emoji = e.target.value;
                          setResults(copy);
                        }}
                        className="w-full px-3 py-1.5 rounded-lg border border-gray-200 text-sm"
                      />
                    </div>
                    <div className="sm:col-span-3">
                      <label className="text-[11px] font-bold text-gray-500 uppercase">Description</label>
                      <textarea
                        rows={2}
                        value={res.description}
                        onChange={(e) => {
                          const copy = [...results];
                          copy[idx].description = e.target.value;
                          setResults(copy);
                        }}
                        className="w-full px-3 py-1.5 rounded-lg border border-gray-200 text-sm"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Questions */}
            <div className="glass-card p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-purple-100 pb-2">
                <h2 className="text-lg font-bold text-gray-800">3. Questions &amp; Answer Scoring ({questions.length})</h2>
                <button onClick={addQuestion} className="btn-secondary text-xs py-1.5 px-3 flex items-center gap-1">
                  <Plus className="w-3.5 h-3.5" /> Add Question
                </button>
              </div>

              {questions.map((q, qIdx) => (
                <div key={q.id} className="p-4 rounded-xl border border-purple-100 bg-white space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-purple-600 uppercase">Question #{qIdx + 1}</span>
                    <button onClick={() => removeQuestion(qIdx)} className="text-red-400 hover:text-red-600 text-xs flex items-center gap-1">
                      <Trash2 className="w-3.5 h-3.5" /> Remove
                    </button>
                  </div>
                  <div>
                    <input
                      type="text"
                      value={q.question}
                      onChange={(e) => {
                        const copy = [...questions];
                        copy[qIdx].question = e.target.value;
                        setQuestions(copy);
                      }}
                      className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm font-semibold"
                    />
                  </div>

                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Answer Options &amp; Associated Outcome</span>
                    {q.options.map((opt, optIdx) => (
                      <div key={opt.id} className="flex items-center gap-2">
                        <input
                          type="text"
                          value={opt.emoji || '✨'}
                          onChange={(e) => {
                            const copy = [...questions];
                            copy[qIdx].options[optIdx].emoji = e.target.value;
                            setQuestions(copy);
                          }}
                          className="w-10 px-2 py-1.5 rounded-lg border border-gray-200 text-center text-sm"
                        />
                        <input
                          type="text"
                          value={opt.text}
                          onChange={(e) => {
                            const copy = [...questions];
                            copy[qIdx].options[optIdx].text = e.target.value;
                            setQuestions(copy);
                          }}
                          placeholder="Option text..."
                          className="flex-1 px-3 py-1.5 rounded-lg border border-gray-200 text-sm"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Code Preview & Live Summary */}
          <div className="space-y-6">
            <div className="glass-card p-6 sticky top-20">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-500" /> Export Preview
              </h3>
              <p className="text-xs text-gray-500 mb-4">
                When you are satisfied, click <strong>Download .ts File</strong> or <strong>Copy TS Code</strong>.
              </p>
              <pre className="bg-gray-900 text-gray-200 p-4 rounded-xl text-[11px] font-mono h-96 overflow-y-auto leading-relaxed">
                {codeSnippet}
              </pre>
              <div className="mt-4 flex flex-col gap-2">
                <button onClick={downloadFile} className="btn-primary w-full py-2.5 text-xs flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" /> Save as {slug || 'quiz'}.ts
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
