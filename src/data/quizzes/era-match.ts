import { Quiz } from '../../types/quiz';

export const quizData: Quiz = {
  id: 'era-match',
  slug: 'era-match',
  title: 'Which Era Matches Your Personality?',
  subtitle: 'Were you born in the wrong decade? Let\'s find out!',
  description: 'Have you ever felt like you belong to a different time? Maybe you\'re a jazz-age socialite at heart, a disco queen, or secretly from the future. This quiz analyzes your style, values, entertainment taste, and vibe to pinpoint the era your personality truly belongs to. Time travel not required — just honest answers!',
  metaDescription: 'Which era matches your personality? Are you a 1920s icon, 1970s free spirit, 1980s neon star, 1990s kid, or futuristic 2050s visionary? Take this fun quiz to find out!',
  emoji: '⏳',
  category: 'Entertainment',
  categorySlug: 'entertainment',
  coverGradient: 'from-rose-400 via-pink-500 to-purple-600',
  estimatedTime: '3 min',
  totalQuestions: 12,
  questions: [
    {
      id: 'em-q1',
      question: 'Pick your ideal Friday night activity:',
      emoji: '🌃',
      options: [
        { id: 'em-q1-a', text: 'A glamorous speakeasy with jazz and cocktails', emoji: '🍸', scores: { 'roaring-1920s': 5, 'groovy-1970s': 1, 'neon-1980s': 0, 'nostalgic-1990s': 0, 'futuristic-2050s': 1 } },
        { id: 'em-q1-b', text: 'A house party with vinyl records and good conversation', emoji: '🎶', scores: { 'roaring-1920s': 1, 'groovy-1970s': 5, 'neon-1980s': 1, 'nostalgic-1990s': 2, 'futuristic-2050s': 0 } },
        { id: 'em-q1-c', text: 'A neon-lit arcade or a karaoke bar', emoji: '🕹️', scores: { 'roaring-1920s': 0, 'groovy-1970s': 0, 'neon-1980s': 5, 'nostalgic-1990s': 3, 'futuristic-2050s': 1 } },
        { id: 'em-q1-d', text: 'A virtual reality experience or immersive tech event', emoji: '🥽', scores: { 'roaring-1920s': 0, 'groovy-1970s': 0, 'neon-1980s': 1, 'nostalgic-1990s': 0, 'futuristic-2050s': 5 } }
      ]
    },
    {
      id: 'em-q2',
      question: 'Which fashion vibe speaks to your soul?',
      emoji: '👔',
      options: [
        { id: 'em-q2-a', text: 'Art deco elegance — pearls, fringe, sharp suits', emoji: '💎', scores: { 'roaring-1920s': 5, 'groovy-1970s': 0, 'neon-1980s': 0, 'nostalgic-1990s': 0, 'futuristic-2050s': 1 } },
        { id: 'em-q2-b', text: 'Bell-bottoms, fringe vests, and flower crowns', emoji: '🌼', scores: { 'roaring-1920s': 0, 'groovy-1970s': 5, 'neon-1980s': 1, 'nostalgic-1990s': 1, 'futuristic-2050s': 0 } },
        { id: 'em-q2-c', text: 'Bold colors, oversized blazers, and power accessories', emoji: '🕶️', scores: { 'roaring-1920s': 1, 'groovy-1970s': 0, 'neon-1980s': 5, 'nostalgic-1990s': 1, 'futuristic-2050s': 1 } },
        { id: 'em-q2-d', text: 'Sleek minimalism with tech-integrated clothing', emoji: '🤖', scores: { 'roaring-1920s': 0, 'groovy-1970s': 0, 'neon-1980s': 0, 'nostalgic-1990s': 0, 'futuristic-2050s': 5 } }
      ]
    },
    {
      id: 'em-q3',
      question: 'What kind of music makes you feel most alive?',
      emoji: '🎵',
      options: [
        { id: 'em-q3-a', text: 'Jazz, swing, and big band orchestras', emoji: '🎺', scores: { 'roaring-1920s': 5, 'groovy-1970s': 1, 'neon-1980s': 0, 'nostalgic-1990s': 0, 'futuristic-2050s': 0 } },
        { id: 'em-q3-b', text: 'Psychedelic rock, funk, and soul', emoji: '🎸', scores: { 'roaring-1920s': 0, 'groovy-1970s': 5, 'neon-1980s': 1, 'nostalgic-1990s': 1, 'futuristic-2050s': 0 } },
        { id: 'em-q3-c', text: 'Synth-pop, new wave, or glam metal', emoji: '🎹', scores: { 'roaring-1920s': 0, 'groovy-1970s': 1, 'neon-1980s': 5, 'nostalgic-1990s': 2, 'futuristic-2050s': 0 } },
        { id: 'em-q3-d', text: 'Electronic, AI-generated beats, or experimental soundscapes', emoji: '🎛️', scores: { 'roaring-1920s': 0, 'groovy-1970s': 0, 'neon-1980s': 1, 'nostalgic-1990s': 0, 'futuristic-2050s': 5 } }
      ]
    },
    {
      id: 'em-q4',
      question: 'What value matters most to you?',
      emoji: '💭',
      options: [
        { id: 'em-q4-a', text: 'Ambition — I believe in chasing the high life', emoji: '🥂', scores: { 'roaring-1920s': 5, 'groovy-1970s': 0, 'neon-1980s': 3, 'nostalgic-1990s': 0, 'futuristic-2050s': 2 } },
        { id: 'em-q4-b', text: 'Freedom — peace, love, and personal liberation', emoji: '✌️', scores: { 'roaring-1920s': 0, 'groovy-1970s': 5, 'neon-1980s': 0, 'nostalgic-1990s': 1, 'futuristic-2050s': 1 } },
        { id: 'em-q4-c', text: 'Authenticity — being unapologetically yourself', emoji: '🤘', scores: { 'roaring-1920s': 1, 'groovy-1970s': 2, 'neon-1980s': 3, 'nostalgic-1990s': 4, 'futuristic-2050s': 1 } },
        { id: 'em-q4-d', text: 'Innovation — pushing boundaries and building the future', emoji: '🔬', scores: { 'roaring-1920s': 0, 'groovy-1970s': 0, 'neon-1980s': 1, 'nostalgic-1990s': 0, 'futuristic-2050s': 5 } }
      ]
    },
    {
      id: 'em-q5',
      question: 'Pick your ideal home aesthetic:',
      emoji: '🏠',
      options: [
        { id: 'em-q5-a', text: 'Art deco glamour — gold accents, velvet, and geometric patterns', emoji: '✨', scores: { 'roaring-1920s': 5, 'groovy-1970s': 0, 'neon-1980s': 1, 'nostalgic-1990s': 0, 'futuristic-2050s': 1 } },
        { id: 'em-q5-b', text: 'Bohemian paradise — macramé, earth tones, and lava lamps', emoji: '🪔', scores: { 'roaring-1920s': 0, 'groovy-1970s': 5, 'neon-1980s': 0, 'nostalgic-1990s': 1, 'futuristic-2050s': 0 } },
        { id: 'em-q5-c', text: 'Retro fun — neon signs, bold prints, and a boombox', emoji: '📻', scores: { 'roaring-1920s': 0, 'groovy-1970s': 1, 'neon-1980s': 5, 'nostalgic-1990s': 3, 'futuristic-2050s': 0 } },
        { id: 'em-q5-d', text: 'Smart home — voice-activated everything, clean lines, LED lighting', emoji: '💡', scores: { 'roaring-1920s': 0, 'groovy-1970s': 0, 'neon-1980s': 0, 'nostalgic-1990s': 0, 'futuristic-2050s': 5 } }
      ]
    },
    {
      id: 'em-q6',
      question: 'Your dream vehicle is:',
      emoji: '🚗',
      options: [
        { id: 'em-q6-a', text: 'A classic Rolls-Royce or vintage Bentley', emoji: '🎩', scores: { 'roaring-1920s': 5, 'groovy-1970s': 1, 'neon-1980s': 0, 'nostalgic-1990s': 0, 'futuristic-2050s': 0 } },
        { id: 'em-q6-b', text: 'A VW van painted with peace signs and flowers', emoji: '🚐', scores: { 'roaring-1920s': 0, 'groovy-1970s': 5, 'neon-1980s': 0, 'nostalgic-1990s': 1, 'futuristic-2050s': 0 } },
        { id: 'em-q6-c', text: 'A DeLorean or a cherry-red Corvette', emoji: '🏎️', scores: { 'roaring-1920s': 0, 'groovy-1970s': 0, 'neon-1980s': 5, 'nostalgic-1990s': 2, 'futuristic-2050s': 2 } },
        { id: 'em-q6-d', text: 'A self-driving electric car or a flying vehicle', emoji: '🛸', scores: { 'roaring-1920s': 0, 'groovy-1970s': 0, 'neon-1980s': 0, 'nostalgic-1990s': 0, 'futuristic-2050s': 5 } }
      ]
    },
    {
      id: 'em-q7',
      question: 'What kind of party do you throw?',
      emoji: '🎊',
      options: [
        { id: 'em-q7-a', text: 'A Great Gatsby-level extravaganza — black tie, champagne towers', emoji: '🍾', scores: { 'roaring-1920s': 5, 'groovy-1970s': 0, 'neon-1980s': 1, 'nostalgic-1990s': 0, 'futuristic-2050s': 1 } },
        { id: 'em-q7-b', text: 'A chill outdoor gathering with tie-dye, good food, and live music', emoji: '🎪', scores: { 'roaring-1920s': 0, 'groovy-1970s': 5, 'neon-1980s': 0, 'nostalgic-1990s': 2, 'futuristic-2050s': 0 } },
        { id: 'em-q7-c', text: 'A themed costume party with a killer playlist and dance-offs', emoji: '🪩', scores: { 'roaring-1920s': 1, 'groovy-1970s': 1, 'neon-1980s': 5, 'nostalgic-1990s': 2, 'futuristic-2050s': 0 } },
        { id: 'em-q7-d', text: 'An interactive experience with holograms and AI DJ', emoji: '🤖', scores: { 'roaring-1920s': 0, 'groovy-1970s': 0, 'neon-1980s': 1, 'nostalgic-1990s': 0, 'futuristic-2050s': 5 } }
      ]
    },
    {
      id: 'em-q8',
      question: 'What kind of movies or shows do you gravitate toward?',
      emoji: '🎬',
      options: [
        { id: 'em-q8-a', text: 'Period dramas with stunning costumes and forbidden romances', emoji: '🎭', scores: { 'roaring-1920s': 5, 'groovy-1970s': 1, 'neon-1980s': 0, 'nostalgic-1990s': 1, 'futuristic-2050s': 0 } },
        { id: 'em-q8-b', text: 'Gritty indie films, documentaries, and counterculture stories', emoji: '📽️', scores: { 'roaring-1920s': 1, 'groovy-1970s': 5, 'neon-1980s': 0, 'nostalgic-1990s': 2, 'futuristic-2050s': 0 } },
        { id: 'em-q8-c', text: 'Action blockbusters, coming-of-age comedies, and cult classics', emoji: '🎥', scores: { 'roaring-1920s': 0, 'groovy-1970s': 0, 'neon-1980s': 4, 'nostalgic-1990s': 4, 'futuristic-2050s': 0 } },
        { id: 'em-q8-d', text: 'Sci-fi epics, dystopian thrillers, and space operas', emoji: '🚀', scores: { 'roaring-1920s': 0, 'groovy-1970s': 0, 'neon-1980s': 1, 'nostalgic-1990s': 0, 'futuristic-2050s': 5 } }
      ]
    },
    {
      id: 'em-q9',
      question: 'How do you prefer to communicate?',
      emoji: '✉️',
      options: [
        { id: 'em-q9-a', text: 'A handwritten letter with a wax seal', emoji: '📜', scores: { 'roaring-1920s': 5, 'groovy-1970s': 2, 'neon-1980s': 0, 'nostalgic-1990s': 0, 'futuristic-2050s': 0 } },
        { id: 'em-q9-b', text: 'A deep, in-person conversation — the old-fashioned way', emoji: '🗣️', scores: { 'roaring-1920s': 2, 'groovy-1970s': 5, 'neon-1980s': 0, 'nostalgic-1990s': 2, 'futuristic-2050s': 0 } },
        { id: 'em-q9-c', text: 'A mix of calling and texting with lots of emojis', emoji: '📞', scores: { 'roaring-1920s': 0, 'groovy-1970s': 0, 'neon-1980s': 3, 'nostalgic-1990s': 5, 'futuristic-2050s': 1 } },
        { id: 'em-q9-d', text: 'Holographic video calls or thought-to-text technology', emoji: '📡', scores: { 'roaring-1920s': 0, 'groovy-1970s': 0, 'neon-1980s': 0, 'nostalgic-1990s': 0, 'futuristic-2050s': 5 } }
      ]
    },
    {
      id: 'em-q10',
      question: 'What\'s your ideal weekend hobby?',
      emoji: '🎯',
      options: [
        { id: 'em-q10-a', text: 'Attending a poetry reading, gallery opening, or gin tasting', emoji: '🖼️', scores: { 'roaring-1920s': 5, 'groovy-1970s': 2, 'neon-1980s': 0, 'nostalgic-1990s': 0, 'futuristic-2050s': 0 } },
        { id: 'em-q10-b', text: 'Protesting, volunteering, or creating art with meaning', emoji: '✊', scores: { 'roaring-1920s': 0, 'groovy-1970s': 5, 'neon-1980s': 0, 'nostalgic-1990s': 1, 'futuristic-2050s': 1 } },
        { id: 'em-q10-c', text: 'Roller skating, thrifting, or binge-watching classic sitcoms', emoji: '⛸️', scores: { 'roaring-1920s': 0, 'groovy-1970s': 1, 'neon-1980s': 4, 'nostalgic-1990s': 5, 'futuristic-2050s': 0 } },
        { id: 'em-q10-d', text: 'Coding, 3D printing, or exploring new technologies', emoji: '💻', scores: { 'roaring-1920s': 0, 'groovy-1970s': 0, 'neon-1980s': 0, 'nostalgic-1990s': 0, 'futuristic-2050s': 5 } }
      ]
    },
    {
      id: 'em-q11',
      question: 'Pick a snack that vibes with your soul:',
      emoji: '🍿',
      options: [
        { id: 'em-q11-a', text: 'Caviar on toast points with a martini', emoji: '🫒', scores: { 'roaring-1920s': 5, 'groovy-1970s': 0, 'neon-1980s': 0, 'nostalgic-1990s': 0, 'futuristic-2050s': 1 } },
        { id: 'em-q11-b', text: 'Homemade granola and herbal tea', emoji: '🫖', scores: { 'roaring-1920s': 0, 'groovy-1970s': 5, 'neon-1980s': 0, 'nostalgic-1990s': 1, 'futuristic-2050s': 0 } },
        { id: 'em-q11-c', text: 'Pizza rolls, Gushers, or anything from a convenience store', emoji: '🍕', scores: { 'roaring-1920s': 0, 'groovy-1970s': 0, 'neon-1980s': 3, 'nostalgic-1990s': 5, 'futuristic-2050s': 0 } },
        { id: 'em-q11-d', text: 'Lab-grown sustainable protein bars of the future', emoji: '🧬', scores: { 'roaring-1920s': 0, 'groovy-1970s': 0, 'neon-1980s': 0, 'nostalgic-1990s': 0, 'futuristic-2050s': 5 } }
      ]
    },
    {
      id: 'em-q12',
      question: 'Choose a life philosophy:',
      emoji: '🌟',
      options: [
        { id: 'em-q12-a', text: '"Live lavishly and make every moment legendary."', emoji: '👑', scores: { 'roaring-1920s': 5, 'groovy-1970s': 0, 'neon-1980s': 2, 'nostalgic-1990s': 0, 'futuristic-2050s': 1 } },
        { id: 'em-q12-b', text: '"Make love, not war. Question everything."', emoji: '☮️', scores: { 'roaring-1920s': 0, 'groovy-1970s': 5, 'neon-1980s': 0, 'nostalgic-1990s': 1, 'futuristic-2050s': 0 } },
        { id: 'em-q12-c', text: '"Life\'s too short to be boring — go big or go home."', emoji: '🎤', scores: { 'roaring-1920s': 1, 'groovy-1970s': 0, 'neon-1980s': 5, 'nostalgic-1990s': 3, 'futuristic-2050s': 0 } },
        { id: 'em-q12-d', text: '"The future belongs to those who build it."', emoji: '🔮', scores: { 'roaring-1920s': 0, 'groovy-1970s': 0, 'neon-1980s': 0, 'nostalgic-1990s': 0, 'futuristic-2050s': 5 } }
      ]
    }
  ],
  results: [
    {
      id: 'roaring-1920s',
      title: 'The Roaring 1920s',
      emoji: '🥂',
      description: 'You belong in the age of jazz, speakeasies, and glamorous rebellion! You have a magnetic personality that craves elegance, excitement, and a touch of danger. Like the icons of the Jazz Age, you believe life should be lived lavishly and unapologetically. You\'d thrive at a Gatsby party — champagne in hand, pearls gleaming, dancing until dawn while the world watches in awe.',
      traits: ['Glamorous', 'Bold', 'Sophisticated', 'Rebellious'],
      shareText: 'I belong in The Roaring 1920s! 🥂 Jazz, glamour, and champagne — that\'s my era. Which era matches YOUR personality?',
      color: 'amber'
    },
    {
      id: 'groovy-1970s',
      title: 'The Groovy 1970s',
      emoji: '✌️',
      description: 'Peace, love, and bell-bottoms — your soul is pure 1970s magic. You\'re a free thinker who values authenticity, community, and breaking free from society\'s expectations. You would have thrived at Woodstock, marched for civil rights, and spent your evenings in deep conversation about the meaning of life. Your energy is warm, earthy, and deeply human — the kind the world desperately needs more of.',
      traits: ['Free-Thinking', 'Authentic', 'Compassionate', 'Countercultural'],
      shareText: 'I belong in The Groovy 1970s! ✌️ Peace, love, and vinyl records forever. Find YOUR era match!',
      color: 'orange'
    },
    {
      id: 'neon-1980s',
      title: 'The Neon 1980s',
      emoji: '🪩',
      description: 'Everything about you screams excess, confidence, and unapologetic FUN. You belong in the era of power suits, synth-pop, and neon-soaked dance floors. You live life loud, dress to impress, and believe that more is always more. Like the \'80s itself, you\'re bold, expressive, and completely unforgettable. You don\'t blend in — you were literally designed to stand out in a crowd of leg warmers and hairspray.',
      traits: ['Bold', 'Expressive', 'Confident', 'Larger-Than-Life'],
      shareText: 'I belong in The Neon 1980s! 🪩 Big hair, big dreams, and even bigger energy. What era are YOU?',
      color: 'fuchsia'
    },
    {
      id: 'nostalgic-1990s',
      title: 'The Nostalgic 1990s',
      emoji: '📼',
      description: 'You\'re the era of grunge, dial-up internet, and Saturday morning cartoons. Your soul craves the sweet spot between analog warmth and digital possibility — a time when life felt simpler but endlessly exciting. You value authenticity over aesthetics, substance over style, and real connections over followers. You\'d be perfectly happy with a Walkman, a flannel shirt, and a Blockbuster membership for life.',
      traits: ['Nostalgic', 'Authentic', 'Laid-Back', 'Pop-Culture Savvy'],
      shareText: 'I belong in The Nostalgic 1990s! 📼 Dial-up internet, mixtapes, and zero algorithms. Which era are YOU?',
      color: 'teal'
    },
    {
      id: 'futuristic-2050s',
      title: 'The Futuristic 2050s',
      emoji: '🚀',
      description: 'You\'re not from the past — you\'re from the future, and you\'re just visiting the present. Your mind is constantly racing ahead, imagining technologies that don\'t exist yet, solutions to problems nobody has identified, and a world that\'s more connected, efficient, and extraordinary. You\'re a visionary, a pioneer, and a builder of tomorrow. While everyone else is living in the now, you\'re already blueprinting what comes next.',
      traits: ['Visionary', 'Innovative', 'Forward-Thinking', 'Tech-Savvy'],
      shareText: 'I belong in The Futuristic 2050s! 🚀 I\'m literally from the future. Take the quiz to find YOUR era!',
      color: 'blue'
    }
  ]
};
