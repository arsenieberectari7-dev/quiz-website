import { Quiz } from '../../types/quiz';

export const quizData: Quiz = {
  id: 'lifestyle-match',
  slug: 'lifestyle-match',
  title: 'Which Lifestyle Matches Your Soul?',
  subtitle: 'Your daily choices reveal deeper truths about who you really are',
  description: 'We all march to the beat of our own drum — but what rhythm is YOUR soul dancing to? From your morning rituals to your deepest passions, every choice you make tells a story about the lifestyle you were truly meant to live. This quiz peels back the layers to reveal the life that resonates with your authentic self.',
  metaDescription: 'Discover which lifestyle truly matches your soul! Are you a Bohemian Soul, Ambitious Achiever, Wellness Warrior, Creative Spirit, or Social Butterfly? Take the quiz now!',
  emoji: '🦋',
  category: 'Lifestyle',
  categorySlug: 'lifestyle',
  coverGradient: 'from-emerald-400 via-teal-500 to-cyan-600',
  estimatedTime: '4 min',
  totalQuestions: 12,
  questions: [
    {
      id: 'lm-q1',
      question: 'Your alarm goes off. What does your ideal morning look like?',
      emoji: '⏰',
      options: [
        { id: 'lm-q1-a', text: 'No alarm — I wake when the sun (or my mood) tells me to', emoji: '🌞', scores: { 'bohemian-soul': 5, 'ambitious-achiever': 0, 'wellness-warrior': 2, 'creative-spirit': 3, 'social-butterfly': 0 } },
        { id: 'lm-q1-b', text: '5 AM sharp — gym, cold shower, protein shake, let\'s GO', emoji: '💪', scores: { 'bohemian-soul': 0, 'ambitious-achiever': 5, 'wellness-warrior': 3, 'creative-spirit': 0, 'social-butterfly': 1 } },
        { id: 'lm-q1-c', text: 'Meditation, journaling, green smoothie, gratitude practice', emoji: '🧘', scores: { 'bohemian-soul': 1, 'ambitious-achiever': 1, 'wellness-warrior': 5, 'creative-spirit': 1, 'social-butterfly': 0 } },
        { id: 'lm-q1-d', text: 'Check my texts, call my bestie, plan today\'s social agenda', emoji: '📱', scores: { 'bohemian-soul': 0, 'ambitious-achiever': 1, 'wellness-warrior': 0, 'creative-spirit': 1, 'social-butterfly': 5 } }
      ]
    },
    {
      id: 'lm-q2',
      question: 'What does your ideal bookshelf look like?',
      emoji: '📚',
      options: [
        { id: 'lm-q2-a', text: 'Poetry, travel memoirs, philosophy, and tarot guides', emoji: '🔮', scores: { 'bohemian-soul': 5, 'ambitious-achiever': 0, 'wellness-warrior': 1, 'creative-spirit': 3, 'social-butterfly': 0 } },
        { id: 'lm-q2-b', text: 'Business strategy, biographies of CEOs, and productivity hacks', emoji: '📊', scores: { 'bohemian-soul': 0, 'ambitious-achiever': 5, 'wellness-warrior': 1, 'creative-spirit': 0, 'social-butterfly': 1 } },
        { id: 'lm-q2-c', text: 'Cookbooks, mindfulness guides, and holistic health resources', emoji: '🌿', scores: { 'bohemian-soul': 1, 'ambitious-achiever': 0, 'wellness-warrior': 5, 'creative-spirit': 1, 'social-butterfly': 0 } },
        { id: 'lm-q2-d', text: 'Art books, sketchpads, and graphic novels galore', emoji: '🎨', scores: { 'bohemian-soul': 2, 'ambitious-achiever': 0, 'wellness-warrior': 0, 'creative-spirit': 5, 'social-butterfly': 1 } }
      ]
    },
    {
      id: 'lm-q3',
      question: 'You have a free weekend with zero obligations. You spend it:',
      emoji: '🎉',
      options: [
        { id: 'lm-q3-a', text: 'Wandering a flea market, then journaling in a park', emoji: '🌸', scores: { 'bohemian-soul': 5, 'ambitious-achiever': 0, 'wellness-warrior': 2, 'creative-spirit': 3, 'social-butterfly': 0 } },
        { id: 'lm-q3-b', text: 'Working on a side project — free time IS hustle time', emoji: '🚀', scores: { 'bohemian-soul': 0, 'ambitious-achiever': 5, 'wellness-warrior': 0, 'creative-spirit': 2, 'social-butterfly': 0 } },
        { id: 'lm-q3-c', text: 'A nature retreat, spa day, or trying a new wellness practice', emoji: '🧖', scores: { 'bohemian-soul': 1, 'ambitious-achiever': 0, 'wellness-warrior': 5, 'creative-spirit': 0, 'social-butterfly': 1 } },
        { id: 'lm-q3-d', text: 'Brunch, shopping, then a party — maximize the social time!', emoji: '🥳', scores: { 'bohemian-soul': 0, 'ambitious-achiever': 1, 'wellness-warrior': 0, 'creative-spirit': 0, 'social-butterfly': 5 } }
      ]
    },
    {
      id: 'lm-q4',
      question: 'What motivates you to get out of bed every day?',
      emoji: '🔥',
      options: [
        { id: 'lm-q4-a', text: 'The freedom to live on my own terms, no rules', emoji: '🕊️', scores: { 'bohemian-soul': 5, 'ambitious-achiever': 1, 'wellness-warrior': 1, 'creative-spirit': 3, 'social-butterfly': 0 } },
        { id: 'lm-q4-b', text: 'Goals, milestones, and the thrill of climbing higher', emoji: '📈', scores: { 'bohemian-soul': 0, 'ambitious-achiever': 5, 'wellness-warrior': 1, 'creative-spirit': 0, 'social-butterfly': 1 } },
        { id: 'lm-q4-c', text: 'Becoming the healthiest, most balanced version of myself', emoji: '💚', scores: { 'bohemian-soul': 0, 'ambitious-achiever': 1, 'wellness-warrior': 5, 'creative-spirit': 0, 'social-butterfly': 0 } },
        { id: 'lm-q4-d', text: 'The people I love and the connections I\'ll make today', emoji: '💕', scores: { 'bohemian-soul': 1, 'ambitious-achiever': 0, 'wellness-warrior': 1, 'creative-spirit': 1, 'social-butterfly': 5 } }
      ]
    },
    {
      id: 'lm-q5',
      question: 'Pick your ideal vacation:',
      emoji: '🧳',
      options: [
        { id: 'lm-q5-a', text: 'Backpacking through Southeast Asia with just a journal', emoji: '🎒', scores: { 'bohemian-soul': 5, 'ambitious-achiever': 0, 'wellness-warrior': 1, 'creative-spirit': 2, 'social-butterfly': 0 } },
        { id: 'lm-q5-b', text: 'A networking retreat or conference in a cool city', emoji: '🤝', scores: { 'bohemian-soul': 0, 'ambitious-achiever': 5, 'wellness-warrior': 0, 'creative-spirit': 1, 'social-butterfly': 3 } },
        { id: 'lm-q5-c', text: 'A silent yoga retreat in Bali or Costa Rica', emoji: '🏝️', scores: { 'bohemian-soul': 2, 'ambitious-achiever': 0, 'wellness-warrior': 5, 'creative-spirit': 1, 'social-butterfly': 0 } },
        { id: 'lm-q5-d', text: 'A group cruise or festival with all my friends', emoji: '🎶', scores: { 'bohemian-soul': 0, 'ambitious-achiever': 0, 'wellness-warrior': 0, 'creative-spirit': 1, 'social-butterfly': 5 } }
      ]
    },
    {
      id: 'lm-q6',
      question: 'Your dream living space has:',
      emoji: '🏠',
      options: [
        { id: 'lm-q6-a', text: 'Tapestries, incense, mismatched furniture, and plants everywhere', emoji: '🪴', scores: { 'bohemian-soul': 5, 'ambitious-achiever': 0, 'wellness-warrior': 2, 'creative-spirit': 3, 'social-butterfly': 0 } },
        { id: 'lm-q6-b', text: 'Minimalist and sleek — a standing desk and vision board', emoji: '🖥️', scores: { 'bohemian-soul': 0, 'ambitious-achiever': 5, 'wellness-warrior': 1, 'creative-spirit': 1, 'social-butterfly': 0 } },
        { id: 'lm-q6-c', text: 'Natural materials, a meditation corner, and an air purifier', emoji: '🍃', scores: { 'bohemian-soul': 1, 'ambitious-achiever': 0, 'wellness-warrior': 5, 'creative-spirit': 0, 'social-butterfly': 0 } },
        { id: 'lm-q6-d', text: 'A big open space perfect for hosting dinner parties', emoji: '🍷', scores: { 'bohemian-soul': 0, 'ambitious-achiever': 1, 'wellness-warrior': 0, 'creative-spirit': 1, 'social-butterfly': 5 } }
      ]
    },
    {
      id: 'lm-q7',
      question: 'Your phone\'s most-used app would be:',
      emoji: '📲',
      options: [
        { id: 'lm-q7-a', text: 'Spotify or a poetry app — feeding my soul constantly', emoji: '🎵', scores: { 'bohemian-soul': 5, 'ambitious-achiever': 0, 'wellness-warrior': 0, 'creative-spirit': 3, 'social-butterfly': 1 } },
        { id: 'lm-q7-b', text: 'LinkedIn, Notion, or a finance tracker', emoji: '💼', scores: { 'bohemian-soul': 0, 'ambitious-achiever': 5, 'wellness-warrior': 0, 'creative-spirit': 0, 'social-butterfly': 1 } },
        { id: 'lm-q7-c', text: 'A meditation, fitness, or meal-tracking app', emoji: '🏃', scores: { 'bohemian-soul': 0, 'ambitious-achiever': 1, 'wellness-warrior': 5, 'creative-spirit': 0, 'social-butterfly': 0 } },
        { id: 'lm-q7-d', text: 'Instagram, TikTok, or group chats — staying connected 24/7', emoji: '💬', scores: { 'bohemian-soul': 0, 'ambitious-achiever': 0, 'wellness-warrior': 0, 'creative-spirit': 1, 'social-butterfly': 5 } }
      ]
    },
    {
      id: 'lm-q8',
      question: 'How do you handle stress?',
      emoji: '😤',
      options: [
        { id: 'lm-q8-a', text: 'I escape — a long walk, music, or losing myself in thought', emoji: '🚶', scores: { 'bohemian-soul': 5, 'ambitious-achiever': 0, 'wellness-warrior': 2, 'creative-spirit': 3, 'social-butterfly': 0 } },
        { id: 'lm-q8-b', text: 'I channel it into productivity — stress is fuel', emoji: '⚡', scores: { 'bohemian-soul': 0, 'ambitious-achiever': 5, 'wellness-warrior': 0, 'creative-spirit': 1, 'social-butterfly': 0 } },
        { id: 'lm-q8-c', text: 'Breathwork, stretching, herbal tea, and resetting my energy', emoji: '🍵', scores: { 'bohemian-soul': 1, 'ambitious-achiever': 0, 'wellness-warrior': 5, 'creative-spirit': 0, 'social-butterfly': 0 } },
        { id: 'lm-q8-d', text: 'I call someone — talking it out is my therapy', emoji: '📞', scores: { 'bohemian-soul': 0, 'ambitious-achiever': 1, 'wellness-warrior': 0, 'creative-spirit': 0, 'social-butterfly': 5 } }
      ]
    },
    {
      id: 'lm-q9',
      question: 'What\'s your relationship with money?',
      emoji: '💸',
      options: [
        { id: 'lm-q9-a', text: 'Money is a tool for experiences, not possessions', emoji: '🌍', scores: { 'bohemian-soul': 5, 'ambitious-achiever': 1, 'wellness-warrior': 1, 'creative-spirit': 2, 'social-butterfly': 1 } },
        { id: 'lm-q9-b', text: 'I\'m building wealth strategically — investments, savings, growth', emoji: '📊', scores: { 'bohemian-soul': 0, 'ambitious-achiever': 5, 'wellness-warrior': 1, 'creative-spirit': 0, 'social-butterfly': 0 } },
        { id: 'lm-q9-c', text: 'I spend on quality food, wellness products, and self-care', emoji: '💆', scores: { 'bohemian-soul': 0, 'ambitious-achiever': 0, 'wellness-warrior': 5, 'creative-spirit': 1, 'social-butterfly': 1 } },
        { id: 'lm-q9-d', text: 'Most of my spending goes to eating out and experiences with friends', emoji: '🍽️', scores: { 'bohemian-soul': 1, 'ambitious-achiever': 0, 'wellness-warrior': 0, 'creative-spirit': 0, 'social-butterfly': 5 } }
      ]
    },
    {
      id: 'lm-q10',
      question: 'Pick a quote that makes your heart sing:',
      emoji: '💭',
      options: [
        { id: 'lm-q10-a', text: '"Not all who wander are lost."', emoji: '🧭', scores: { 'bohemian-soul': 5, 'ambitious-achiever': 0, 'wellness-warrior': 1, 'creative-spirit': 3, 'social-butterfly': 0 } },
        { id: 'lm-q10-b', text: '"The only way to do great work is to love what you do."', emoji: '🏅', scores: { 'bohemian-soul': 1, 'ambitious-achiever': 5, 'wellness-warrior': 0, 'creative-spirit': 2, 'social-butterfly': 0 } },
        { id: 'lm-q10-c', text: '"Take care of your body. It\'s the only place you have to live."', emoji: '🌻', scores: { 'bohemian-soul': 0, 'ambitious-achiever': 0, 'wellness-warrior': 5, 'creative-spirit': 0, 'social-butterfly': 1 } },
        { id: 'lm-q10-d', text: '"Life was meant to be lived with people you love."', emoji: '❤️', scores: { 'bohemian-soul': 0, 'ambitious-achiever': 0, 'wellness-warrior': 1, 'creative-spirit': 0, 'social-butterfly': 5 } }
      ]
    },
    {
      id: 'lm-q11',
      question: 'What kind of content do you create or consume most?',
      emoji: '🎬',
      options: [
        { id: 'lm-q11-a', text: 'Poetry, indie films, vinyl music, or philosophical podcasts', emoji: '🎙️', scores: { 'bohemian-soul': 5, 'ambitious-achiever': 0, 'wellness-warrior': 0, 'creative-spirit': 3, 'social-butterfly': 0 } },
        { id: 'lm-q11-b', text: 'Entrepreneurship content, TED talks, and market analysis', emoji: '🎯', scores: { 'bohemian-soul': 0, 'ambitious-achiever': 5, 'wellness-warrior': 0, 'creative-spirit': 0, 'social-butterfly': 1 } },
        { id: 'lm-q11-c', text: 'Workout videos, recipe channels, and wellness influencers', emoji: '🥗', scores: { 'bohemian-soul': 0, 'ambitious-achiever': 0, 'wellness-warrior': 5, 'creative-spirit': 0, 'social-butterfly': 1 } },
        { id: 'lm-q11-d', text: 'Sketching, writing, photography, or making short films', emoji: '📸', scores: { 'bohemian-soul': 2, 'ambitious-achiever': 0, 'wellness-warrior': 0, 'creative-spirit': 5, 'social-butterfly': 1 } }
      ]
    },
    {
      id: 'lm-q12',
      question: 'When you imagine being 80 years old, what matters most?',
      emoji: '👴',
      options: [
        { id: 'lm-q12-a', text: 'That I lived freely and never followed someone else\'s script', emoji: '🦅', scores: { 'bohemian-soul': 5, 'ambitious-achiever': 1, 'wellness-warrior': 1, 'creative-spirit': 3, 'social-butterfly': 0 } },
        { id: 'lm-q12-b', text: 'That I built something meaningful and left a legacy', emoji: '🏛️', scores: { 'bohemian-soul': 0, 'ambitious-achiever': 5, 'wellness-warrior': 0, 'creative-spirit': 2, 'social-butterfly': 1 } },
        { id: 'lm-q12-c', text: 'That I\'m still healthy, active, and at peace', emoji: '🧓', scores: { 'bohemian-soul': 0, 'ambitious-achiever': 0, 'wellness-warrior': 5, 'creative-spirit': 0, 'social-butterfly': 1 } },
        { id: 'lm-q12-d', text: 'That I\'m surrounded by lifelong friends and loved ones', emoji: '👨‍👩‍👧‍👦', scores: { 'bohemian-soul': 0, 'ambitious-achiever': 0, 'wellness-warrior': 1, 'creative-spirit': 0, 'social-butterfly': 5 } }
      ]
    }
  ],
  results: [
    {
      id: 'bohemian-soul',
      title: 'The Bohemian Soul',
      emoji: '🌙',
      description: 'You are a free spirit in the truest sense — your soul craves beauty, wandering, and a life unchained by convention. You march to the rhythm of wind chimes and your own heartbeat, finding magic in secondhand shops, sunset poetry, and spontaneous road trips to nowhere. Rules bore you, routines suffocate you, and you\'d rather own experiences than things. Your life is a living, breathing piece of art.',
      traits: ['Free-Spirited', 'Introspective', 'Artistic', 'Unconventional'],
      shareText: 'I\'m The Bohemian Soul! 🌙 My life is poetry in motion, and I wouldn\'t have it any other way. Which lifestyle matches YOUR soul?',
      color: 'amber'
    },
    {
      id: 'ambitious-achiever',
      title: 'The Ambitious Achiever',
      emoji: '🚀',
      description: 'You are driven, focused, and relentlessly pursuing greatness. While others sleep, you\'re strategizing, building, and turning dreams into detailed business plans. Your energy is magnetic and your work ethic is legendary — but it\'s not just about money for you. It\'s about proving that you can architect the life you envisioned. You don\'t wait for opportunities; you manufacture them.',
      traits: ['Disciplined', 'Visionary', 'Resilient', 'Goal-Oriented'],
      shareText: 'I\'m The Ambitious Achiever! 🚀 Hustle is my love language and growth is my hobby. What lifestyle matches YOUR soul?',
      color: 'blue'
    },
    {
      id: 'wellness-warrior',
      title: 'The Wellness Warrior',
      emoji: '🧘',
      description: 'Your life is a sacred temple, and you treat it accordingly. From your morning breathwork to your evening skincare ritual, everything you do is intentional, nourishing, and aligned with your highest self. You believe that true wealth is measured in energy, health, and inner peace. Others may call you disciplined — you just call it self-love. Your glow isn\'t just physical; it radiates from the inside out.',
      traits: ['Mindful', 'Balanced', 'Health-Conscious', 'Intentional'],
      shareText: 'I\'m The Wellness Warrior! 🧘 My body is a temple and my mind is a garden. Discover your soul\'s lifestyle match!',
      color: 'emerald'
    },
    {
      id: 'creative-spirit',
      title: 'The Creative Spirit',
      emoji: '🎨',
      description: 'Your soul speaks in colors, melodies, and metaphors. You see the world differently than most — every cloudy sky is a painting, every conversation is a potential story, and every quiet moment is an invitation to create. You don\'t just consume art; you are art. Whether you\'re sketching at 2 AM or building a world in words, your creative fire never truly goes out. The world needs your unique perspective.',
      traits: ['Imaginative', 'Expressive', 'Sensitive', 'Visionary'],
      shareText: 'I\'m The Creative Spirit! 🎨 My soul speaks in colors and metaphors. What lifestyle matches YOUR soul?',
      color: 'violet'
    },
    {
      id: 'social-butterfly',
      title: 'The Social Butterfly',
      emoji: '🦋',
      description: 'You are the glue that holds friend groups together, the one who plans the reunions, and the reason group chats stay alive. Your energy comes from connection — deep conversations at brunch, spontaneous dance parties, and being the person everyone calls when they need to feel better. Loneliness is your kryptonite because you genuinely believe life is better shared. Your calendar is full, and so is your heart.',
      traits: ['Charismatic', 'Empathetic', 'Energetic', 'Connected'],
      shareText: 'I\'m The Social Butterfly! 🦋 Life is better with my people, and I\'ve got ALL the people. Find your lifestyle match!',
      color: 'pink'
    }
  ]
};
