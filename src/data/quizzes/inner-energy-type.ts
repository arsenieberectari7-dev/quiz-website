import { Quiz } from '../../types/quiz';

export const quizData: Quiz = {
  id: 'inner-energy-type',
  slug: 'inner-energy-type',
  title: 'What Is Your Inner Energy Type?',
  subtitle: 'The invisible force that drives everything you do',
  description: 'Every person radiates a unique energy — an invisible force that shapes how you love, fight, create, and recharge. Some burn bright like the sun, others flow like the wind. This quiz taps into your deepest instincts, emotional patterns, and hidden strengths to reveal the elemental energy that powers your soul. Ready to meet your inner force?',
  metaDescription: 'Discover your inner energy type! Are you Solar, Lunar, Storm, Earth, or Wind energy? Take this personality quiz to find out what invisible force drives your soul.',
  emoji: '⚡',
  category: 'Personality',
  categorySlug: 'personality',
  coverGradient: 'from-yellow-400 via-amber-500 to-orange-600',
  estimatedTime: '3 min',
  totalQuestions: 12,
  questions: [
    {
      id: 'ie-q1',
      question: 'How do you recharge after a long, draining week?',
      emoji: '🔋',
      options: [
        { id: 'ie-q1-a', text: 'Going out with friends — other people fill my cup', emoji: '🎉', scores: { 'solar-energy': 5, 'lunar-energy': 0, 'storm-energy': 1, 'earth-energy': 0, 'wind-energy': 2 } },
        { id: 'ie-q1-b', text: 'A quiet night alone — candles, music, and deep thoughts', emoji: '🕯️', scores: { 'solar-energy': 0, 'lunar-energy': 5, 'storm-energy': 0, 'earth-energy': 2, 'wind-energy': 1 } },
        { id: 'ie-q1-c', text: 'An intense workout or creative outburst — I burn off the energy', emoji: '🏋️', scores: { 'solar-energy': 1, 'lunar-energy': 0, 'storm-energy': 5, 'earth-energy': 1, 'wind-energy': 1 } },
        { id: 'ie-q1-d', text: 'A long walk in nature — trees and fresh air heal everything', emoji: '🌳', scores: { 'solar-energy': 0, 'lunar-energy': 2, 'storm-energy': 0, 'earth-energy': 5, 'wind-energy': 2 } }
      ]
    },
    {
      id: 'ie-q2',
      question: 'What emotion do you feel most intensely?',
      emoji: '💗',
      options: [
        { id: 'ie-q2-a', text: 'Joy — I feel happiness deeply and spread it everywhere', emoji: '😄', scores: { 'solar-energy': 5, 'lunar-energy': 0, 'storm-energy': 0, 'earth-energy': 1, 'wind-energy': 2 } },
        { id: 'ie-q2-b', text: 'Melancholy — I feel the weight of the world beautifully', emoji: '🥀', scores: { 'solar-energy': 0, 'lunar-energy': 5, 'storm-energy': 2, 'earth-energy': 1, 'wind-energy': 0 } },
        { id: 'ie-q2-c', text: 'Passion — everything I feel is turned up to eleven', emoji: '🔥', scores: { 'solar-energy': 2, 'lunar-energy': 0, 'storm-energy': 5, 'earth-energy': 0, 'wind-energy': 1 } },
        { id: 'ie-q2-d', text: 'Contentment — I\'m happiest when things are peaceful and steady', emoji: '☺️', scores: { 'solar-energy': 1, 'lunar-energy': 2, 'storm-energy': 0, 'earth-energy': 5, 'wind-energy': 1 } }
      ]
    },
    {
      id: 'ie-q3',
      question: 'When life throws you a curveball, you:',
      emoji: '⚾',
      options: [
        { id: 'ie-q3-a', text: 'Rally everyone together — we\'ll figure this out as a team!', emoji: '🙌', scores: { 'solar-energy': 5, 'lunar-energy': 0, 'storm-energy': 1, 'earth-energy': 1, 'wind-energy': 1 } },
        { id: 'ie-q3-b', text: 'Retreat inward to think, process, and find the deeper meaning', emoji: '🧘', scores: { 'solar-energy': 0, 'lunar-energy': 5, 'storm-energy': 0, 'earth-energy': 2, 'wind-energy': 1 } },
        { id: 'ie-q3-c', text: 'Get fired up and attack the problem with everything I\'ve got', emoji: '⚡', scores: { 'solar-energy': 1, 'lunar-energy': 0, 'storm-energy': 5, 'earth-energy': 1, 'wind-energy': 0 } },
        { id: 'ie-q3-d', text: 'Adapt and flow — I pivot quickly and keep moving forward', emoji: '🌊', scores: { 'solar-energy': 0, 'lunar-energy': 1, 'storm-energy': 0, 'earth-energy': 1, 'wind-energy': 5 } }
      ]
    },
    {
      id: 'ie-q4',
      question: 'What time of day do you feel most alive?',
      emoji: '🕐',
      options: [
        { id: 'ie-q4-a', text: 'Morning — I\'m a sunrise person, fresh energy and optimism', emoji: '🌅', scores: { 'solar-energy': 5, 'lunar-energy': 0, 'storm-energy': 1, 'earth-energy': 2, 'wind-energy': 1 } },
        { id: 'ie-q4-b', text: 'Late night — my mind comes alive when the world goes quiet', emoji: '🌙', scores: { 'solar-energy': 0, 'lunar-energy': 5, 'storm-energy': 2, 'earth-energy': 0, 'wind-energy': 1 } },
        { id: 'ie-q4-c', text: 'Whenever something exciting is happening — I feed off adrenaline', emoji: '🎢', scores: { 'solar-energy': 2, 'lunar-energy': 0, 'storm-energy': 5, 'earth-energy': 0, 'wind-energy': 2 } },
        { id: 'ie-q4-d', text: 'Golden hour — that perfect, dreamy in-between time', emoji: '🌇', scores: { 'solar-energy': 1, 'lunar-energy': 2, 'storm-energy': 0, 'earth-energy': 3, 'wind-energy': 3 } }
      ]
    },
    {
      id: 'ie-q5',
      question: 'Your love language is closest to:',
      emoji: '❤️',
      options: [
        { id: 'ie-q5-a', text: 'Words of affirmation — I need to hear it AND say it', emoji: '💬', scores: { 'solar-energy': 5, 'lunar-energy': 1, 'storm-energy': 2, 'earth-energy': 0, 'wind-energy': 1 } },
        { id: 'ie-q5-b', text: 'Quality time — just being present together is enough', emoji: '🫂', scores: { 'solar-energy': 0, 'lunar-energy': 5, 'storm-energy': 0, 'earth-energy': 3, 'wind-energy': 1 } },
        { id: 'ie-q5-c', text: 'Physical touch — I express everything through connection', emoji: '💏', scores: { 'solar-energy': 2, 'lunar-energy': 1, 'storm-energy': 5, 'earth-energy': 1, 'wind-energy': 0 } },
        { id: 'ie-q5-d', text: 'Acts of service — I show love by doing, not just saying', emoji: '🛠️', scores: { 'solar-energy': 0, 'lunar-energy': 0, 'storm-energy': 1, 'earth-energy': 5, 'wind-energy': 1 } }
      ]
    },
    {
      id: 'ie-q6',
      question: 'Pick the playlist that matches your soul:',
      emoji: '🎵',
      options: [
        { id: 'ie-q6-a', text: 'Upbeat pop anthems and feel-good dance tracks', emoji: '🪩', scores: { 'solar-energy': 5, 'lunar-energy': 0, 'storm-energy': 1, 'earth-energy': 0, 'wind-energy': 3 } },
        { id: 'ie-q6-b', text: 'Dreamy ambient, lo-fi beats, or haunting indie folk', emoji: '🎧', scores: { 'solar-energy': 0, 'lunar-energy': 5, 'storm-energy': 1, 'earth-energy': 2, 'wind-energy': 1 } },
        { id: 'ie-q6-c', text: 'Intense rock, EDM drops, or epic orchestral scores', emoji: '🎸', scores: { 'solar-energy': 1, 'lunar-energy': 0, 'storm-energy': 5, 'earth-energy': 0, 'wind-energy': 1 } },
        { id: 'ie-q6-d', text: 'World music, nature sounds, or acoustic chill', emoji: '🪕', scores: { 'solar-energy': 0, 'lunar-energy': 2, 'storm-energy': 0, 'earth-energy': 5, 'wind-energy': 2 } }
      ]
    },
    {
      id: 'ie-q7',
      question: 'What\'s your biggest strength in relationships?',
      emoji: '💪',
      options: [
        { id: 'ie-q7-a', text: 'I bring the energy — I make everything more fun and alive', emoji: '🌟', scores: { 'solar-energy': 5, 'lunar-energy': 0, 'storm-energy': 2, 'earth-energy': 0, 'wind-energy': 2 } },
        { id: 'ie-q7-b', text: 'I listen deeply and understand what others can\'t even articulate', emoji: '👂', scores: { 'solar-energy': 0, 'lunar-energy': 5, 'storm-energy': 0, 'earth-energy': 2, 'wind-energy': 0 } },
        { id: 'ie-q7-c', text: 'I love fiercely — when I\'m in, I\'m ALL in', emoji: '❤️‍🔥', scores: { 'solar-energy': 1, 'lunar-energy': 0, 'storm-energy': 5, 'earth-energy': 1, 'wind-energy': 0 } },
        { id: 'ie-q7-d', text: 'I\'m patient and stable — I never give up on the people I love', emoji: '🏔️', scores: { 'solar-energy': 0, 'lunar-energy': 1, 'storm-energy': 0, 'earth-energy': 5, 'wind-energy': 0 } }
      ]
    },
    {
      id: 'ie-q8',
      question: 'What drives you absolutely crazy?',
      emoji: '😤',
      options: [
        { id: 'ie-q8-a', text: 'Negativity and pessimism — life\'s too short to be a downer', emoji: '🙅', scores: { 'solar-energy': 5, 'lunar-energy': 0, 'storm-energy': 1, 'earth-energy': 0, 'wind-energy': 2 } },
        { id: 'ie-q8-b', text: 'Shallow people who can\'t have a real, honest conversation', emoji: '🎭', scores: { 'solar-energy': 0, 'lunar-energy': 5, 'storm-energy': 1, 'earth-energy': 2, 'wind-energy': 0 } },
        { id: 'ie-q8-c', text: 'Injustice — I can\'t stay silent when something is wrong', emoji: '⚖️', scores: { 'solar-energy': 0, 'lunar-energy': 1, 'storm-energy': 5, 'earth-energy': 1, 'wind-energy': 0 } },
        { id: 'ie-q8-d', text: 'Being trapped or controlled — I need room to breathe', emoji: '🔓', scores: { 'solar-energy': 0, 'lunar-energy': 0, 'storm-energy': 1, 'earth-energy': 0, 'wind-energy': 5 } }
      ]
    },
    {
      id: 'ie-q9',
      question: 'If you were a natural phenomenon, you\'d be:',
      emoji: '🌍',
      options: [
        { id: 'ie-q9-a', text: 'A sunrise — hope, warmth, and the promise of a new day', emoji: '🌅', scores: { 'solar-energy': 5, 'lunar-energy': 0, 'storm-energy': 0, 'earth-energy': 1, 'wind-energy': 1 } },
        { id: 'ie-q9-b', text: 'A full moon — quiet power, pull, and ethereal beauty', emoji: '🌕', scores: { 'solar-energy': 0, 'lunar-energy': 5, 'storm-energy': 0, 'earth-energy': 1, 'wind-energy': 1 } },
        { id: 'ie-q9-c', text: 'A volcano — dormant power that erupts magnificently', emoji: '🌋', scores: { 'solar-energy': 0, 'lunar-energy': 1, 'storm-energy': 5, 'earth-energy': 2, 'wind-energy': 0 } },
        { id: 'ie-q9-d', text: 'A river — always moving, always finding a way through', emoji: '🏞️', scores: { 'solar-energy': 0, 'lunar-energy': 1, 'storm-energy': 0, 'earth-energy': 2, 'wind-energy': 5 } }
      ]
    },
    {
      id: 'ie-q10',
      question: 'Your friends would say your superpower is:',
      emoji: '🦸',
      options: [
        { id: 'ie-q10-a', text: 'Making everyone feel like the most important person in the room', emoji: '👐', scores: { 'solar-energy': 5, 'lunar-energy': 1, 'storm-energy': 0, 'earth-energy': 1, 'wind-energy': 0 } },
        { id: 'ie-q10-b', text: 'Understanding people on a level that\'s almost telepathic', emoji: '🔮', scores: { 'solar-energy': 0, 'lunar-energy': 5, 'storm-energy': 0, 'earth-energy': 1, 'wind-energy': 1 } },
        { id: 'ie-q10-c', text: 'Fighting for what\'s right with unmatched determination', emoji: '⚔️', scores: { 'solar-energy': 0, 'lunar-energy': 0, 'storm-energy': 5, 'earth-energy': 2, 'wind-energy': 0 } },
        { id: 'ie-q10-d', text: 'Going with the flow and making the best of any situation', emoji: '🏄', scores: { 'solar-energy': 1, 'lunar-energy': 0, 'storm-energy': 0, 'earth-energy': 1, 'wind-energy': 5 } }
      ]
    },
    {
      id: 'ie-q11',
      question: 'What does your inner world look like?',
      emoji: '🧠',
      options: [
        { id: 'ie-q11-a', text: 'A bright, bustling festival — colorful, loud, and full of life', emoji: '🎪', scores: { 'solar-energy': 5, 'lunar-energy': 0, 'storm-energy': 1, 'earth-energy': 0, 'wind-energy': 2 } },
        { id: 'ie-q11-b', text: 'A vast, starlit ocean — deep, infinite, and hauntingly beautiful', emoji: '🌌', scores: { 'solar-energy': 0, 'lunar-energy': 5, 'storm-energy': 1, 'earth-energy': 1, 'wind-energy': 0 } },
        { id: 'ie-q11-c', text: 'A raging thunderstorm — powerful, electric, and awe-inspiring', emoji: '🌩️', scores: { 'solar-energy': 0, 'lunar-energy': 0, 'storm-energy': 5, 'earth-energy': 0, 'wind-energy': 1 } },
        { id: 'ie-q11-d', text: 'An open meadow with a gentle breeze — free and unbounded', emoji: '🌾', scores: { 'solar-energy': 1, 'lunar-energy': 1, 'storm-energy': 0, 'earth-energy': 3, 'wind-energy': 4 } }
      ]
    },
    {
      id: 'ie-q12',
      question: 'What legacy do you want to leave behind?',
      emoji: '🏛️',
      options: [
        { id: 'ie-q12-a', text: 'That I made people happy and lit up every room I entered', emoji: '💡', scores: { 'solar-energy': 5, 'lunar-energy': 0, 'storm-energy': 0, 'earth-energy': 0, 'wind-energy': 2 } },
        { id: 'ie-q12-b', text: 'That I understood people deeply and left them feeling truly seen', emoji: '🪞', scores: { 'solar-energy': 0, 'lunar-energy': 5, 'storm-energy': 0, 'earth-energy': 2, 'wind-energy': 0 } },
        { id: 'ie-q12-c', text: 'That I stood for something and wasn\'t afraid to fight for it', emoji: '✊', scores: { 'solar-energy': 0, 'lunar-energy': 0, 'storm-energy': 5, 'earth-energy': 1, 'wind-energy': 0 } },
        { id: 'ie-q12-d', text: 'That I lived fully, explored fearlessly, and inspired freedom', emoji: '🕊️', scores: { 'solar-energy': 1, 'lunar-energy': 0, 'storm-energy': 0, 'earth-energy': 1, 'wind-energy': 5 } }
      ]
    }
  ],
  results: [
    {
      id: 'solar-energy',
      title: 'Solar Energy',
      emoji: '☀️',
      description: 'You are pure, radiant sunlight in human form. Your energy is bright, bold, and unapologetically warm — you walk into rooms and people instinctively gravitate toward you like sunflowers facing the sun. You have an extraordinary ability to uplift, energize, and inspire everyone around you. Your optimism isn\'t naive; it\'s a conscious choice to shine even when clouds roll in. The world is literally brighter because you\'re in it.',
      traits: ['Radiant', 'Optimistic', 'Energizing', 'Charismatic'],
      shareText: 'My inner energy type is Solar Energy! ☀️ I\'m basically human sunshine. What\'s YOUR energy type?',
      color: 'yellow'
    },
    {
      id: 'lunar-energy',
      title: 'Lunar Energy',
      emoji: '🌙',
      description: 'You carry the quiet, luminous power of the moon — a calm, reflective energy that sees through surface-level noise to the profound truths beneath. You are deeply intuitive, emotionally intelligent, and possess a wisdom that feels almost otherworldly. While others rush through life, you observe, absorb, and understand on frequencies most people can\'t even detect. Your presence is a sanctuary for those lucky enough to be let in.',
      traits: ['Intuitive', 'Reflective', 'Empathetic', 'Wise'],
      shareText: 'My inner energy type is Lunar Energy! 🌙 Calm, reflective, and deeply intuitive. Discover YOUR energy type!',
      color: 'indigo'
    },
    {
      id: 'storm-energy',
      title: 'Storm Energy',
      emoji: '⛈️',
      description: 'Your energy is intense, electric, and absolutely magnificent. Like a thunderstorm, you command attention with your sheer force of passion and conviction. You feel everything at maximum volume — your love is fierce, your anger is righteous, and your determination is unstoppable. Some people find your intensity overwhelming, but those who stay discover that after every storm you bring, the air is cleaner, the sky is clearer, and everything feels renewed.',
      traits: ['Passionate', 'Intense', 'Courageous', 'Transformative'],
      shareText: 'My inner energy type is Storm Energy! ⛈️ Intense, passionate, and impossible to ignore. What energy type are YOU?',
      color: 'violet'
    },
    {
      id: 'earth-energy',
      title: 'Earth Energy',
      emoji: '🌍',
      description: 'You are the steady, grounding force that holds everything together. Like ancient mountains and deep-rooted trees, your energy is patient, nurturing, and unshakably solid. In a world of chaos, you are the calm center — the person others lean on when everything else is falling apart. Your strength isn\'t loud or flashy; it\'s the quiet, enduring kind that weathers every storm and still stands tall. You don\'t just exist; you endure, nurture, and sustain.',
      traits: ['Grounded', 'Patient', 'Nurturing', 'Resilient'],
      shareText: 'My inner energy type is Earth Energy! 🌍 Grounded, steady, and unbreakable. Find YOUR inner energy type!',
      color: 'emerald'
    },
    {
      id: 'wind-energy',
      title: 'Wind Energy',
      emoji: '🌬️',
      description: 'Your energy is free, flowing, and beautifully untameable. Like the wind, you can\'t be boxed in, pinned down, or predicted — and that\'s exactly what makes you extraordinary. You adapt to change faster than anyone, find excitement in the unknown, and carry an infectious sense of freedom wherever you go. You whisper inspiration into the lives of everyone you touch, gently pushing them toward their own adventures. You are movement, change, and liberation personified.',
      traits: ['Adaptable', 'Free-Spirited', 'Versatile', 'Refreshing'],
      shareText: 'My inner energy type is Wind Energy! 🌬️ Free, adaptable, and impossible to cage. What\'s YOUR inner energy?',
      color: 'cyan'
    }
  ]
};
