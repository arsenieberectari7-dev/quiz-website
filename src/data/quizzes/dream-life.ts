import { Quiz } from '../../types/quiz';

export const quizData: Quiz = {
  id: 'dream-life',
  slug: 'dream-life',
  title: 'What Does Your Dream Life Look Like?',
  subtitle: 'Close your eyes and picture perfection — where are you?',
  description: 'We all have a vision of our ideal life tucked away in our hearts. Whether it\'s sipping espresso in a Parisian café or tending a garden in the countryside, this quiz will reveal the dream life that truly matches your soul. Answer honestly and let your imagination run wild!',
  metaDescription: 'Take this fun personality quiz to discover what your dream life really looks like. Are you a jet-setter, homesteader, urban creative, beach dreamer, or mountain mystic?',
  emoji: '✨',
  category: 'Lifestyle',
  categorySlug: 'lifestyle',
  coverGradient: 'from-sky-400 via-blue-500 to-indigo-600',
  estimatedTime: '3 min',
  totalQuestions: 12,
  questions: [
    {
      id: 'dl-q1',
      question: 'You wake up on a perfect morning. What do you see outside your window?',
      emoji: '🌅',
      options: [
        { id: 'dl-q1-a', text: 'A sparkling city skyline with rooftop terraces', emoji: '🏙️', scores: { 'jet-setter-extraordinaire': 3, 'urban-creative': 4, 'beach-life-dreamer': 1, 'cozy-homesteader': 0, 'mountain-mystic': 0 } },
        { id: 'dl-q1-b', text: 'Rolling green hills and a vegetable garden', emoji: '🌿', scores: { 'jet-setter-extraordinaire': 0, 'urban-creative': 0, 'beach-life-dreamer': 1, 'cozy-homesteader': 5, 'mountain-mystic': 2 } },
        { id: 'dl-q1-c', text: 'Turquoise ocean waves crashing on white sand', emoji: '🏖️', scores: { 'jet-setter-extraordinaire': 2, 'urban-creative': 0, 'beach-life-dreamer': 5, 'cozy-homesteader': 0, 'mountain-mystic': 1 } },
        { id: 'dl-q1-d', text: 'Snow-capped peaks and misty pine forests', emoji: '🏔️', scores: { 'jet-setter-extraordinaire': 1, 'urban-creative': 0, 'beach-life-dreamer': 0, 'cozy-homesteader': 2, 'mountain-mystic': 5 } }
      ]
    },
    {
      id: 'dl-q2',
      question: 'What\'s your dream career situation?',
      emoji: '💼',
      options: [
        { id: 'dl-q2-a', text: 'Running my own business from a laptop anywhere in the world', emoji: '🌍', scores: { 'jet-setter-extraordinaire': 5, 'urban-creative': 2, 'beach-life-dreamer': 3, 'cozy-homesteader': 0, 'mountain-mystic': 1 } },
        { id: 'dl-q2-b', text: 'A creative studio filled with art, music, or design projects', emoji: '🎨', scores: { 'jet-setter-extraordinaire': 1, 'urban-creative': 5, 'beach-life-dreamer': 1, 'cozy-homesteader': 1, 'mountain-mystic': 1 } },
        { id: 'dl-q2-c', text: 'A self-sufficient homestead — I grow what I need', emoji: '🌾', scores: { 'jet-setter-extraordinaire': 0, 'urban-creative': 0, 'beach-life-dreamer': 0, 'cozy-homesteader': 5, 'mountain-mystic': 3 } },
        { id: 'dl-q2-d', text: 'Something seasonal so I have time to explore and just be', emoji: '🧘', scores: { 'jet-setter-extraordinaire': 2, 'urban-creative': 1, 'beach-life-dreamer': 4, 'cozy-homesteader': 1, 'mountain-mystic': 3 } }
      ]
    },
    {
      id: 'dl-q3',
      question: 'Pick your ideal Saturday night:',
      emoji: '🌙',
      options: [
        { id: 'dl-q3-a', text: 'An exclusive rooftop dinner party with fascinating strangers', emoji: '🥂', scores: { 'jet-setter-extraordinaire': 5, 'urban-creative': 3, 'beach-life-dreamer': 1, 'cozy-homesteader': 0, 'mountain-mystic': 0 } },
        { id: 'dl-q3-b', text: 'Board games by the fireplace with homemade pie', emoji: '🥧', scores: { 'jet-setter-extraordinaire': 0, 'urban-creative': 1, 'beach-life-dreamer': 1, 'cozy-homesteader': 5, 'mountain-mystic': 2 } },
        { id: 'dl-q3-c', text: 'A bonfire on the beach with live music', emoji: '🔥', scores: { 'jet-setter-extraordinaire': 2, 'urban-creative': 2, 'beach-life-dreamer': 5, 'cozy-homesteader': 0, 'mountain-mystic': 1 } },
        { id: 'dl-q3-d', text: 'Stargazing from a cabin deck with hot cocoa', emoji: '⭐', scores: { 'jet-setter-extraordinaire': 0, 'urban-creative': 1, 'beach-life-dreamer': 1, 'cozy-homesteader': 2, 'mountain-mystic': 5 } }
      ]
    },
    {
      id: 'dl-q4',
      question: 'You just inherited a surprise fortune. First thing you do?',
      emoji: '💰',
      options: [
        { id: 'dl-q4-a', text: 'Book a one-way ticket and figure it out from there', emoji: '✈️', scores: { 'jet-setter-extraordinaire': 5, 'urban-creative': 1, 'beach-life-dreamer': 2, 'cozy-homesteader': 0, 'mountain-mystic': 2 } },
        { id: 'dl-q4-b', text: 'Buy a loft in a trendy neighborhood and build a dream studio', emoji: '🏢', scores: { 'jet-setter-extraordinaire': 1, 'urban-creative': 5, 'beach-life-dreamer': 0, 'cozy-homesteader': 1, 'mountain-mystic': 0 } },
        { id: 'dl-q4-c', text: 'Buy a beachfront property with a hammock garden', emoji: '🌴', scores: { 'jet-setter-extraordinaire': 2, 'urban-creative': 0, 'beach-life-dreamer': 5, 'cozy-homesteader': 0, 'mountain-mystic': 1 } },
        { id: 'dl-q4-d', text: 'Purchase acres of land and start building my sanctuary', emoji: '🏡', scores: { 'jet-setter-extraordinaire': 0, 'urban-creative': 0, 'beach-life-dreamer': 0, 'cozy-homesteader': 4, 'mountain-mystic': 4 } }
      ]
    },
    {
      id: 'dl-q5',
      question: 'What does "success" feel like to you?',
      emoji: '🏆',
      options: [
        { id: 'dl-q5-a', text: 'Having stories from every continent and a passport full of stamps', emoji: '🗺️', scores: { 'jet-setter-extraordinaire': 5, 'urban-creative': 1, 'beach-life-dreamer': 2, 'cozy-homesteader': 0, 'mountain-mystic': 1 } },
        { id: 'dl-q5-b', text: 'Making a living from my art and being surrounded by inspiration', emoji: '✨', scores: { 'jet-setter-extraordinaire': 1, 'urban-creative': 5, 'beach-life-dreamer': 1, 'cozy-homesteader': 1, 'mountain-mystic': 1 } },
        { id: 'dl-q5-c', text: 'Waking up with zero stress and nowhere to rush to', emoji: '😌', scores: { 'jet-setter-extraordinaire': 0, 'urban-creative': 0, 'beach-life-dreamer': 4, 'cozy-homesteader': 3, 'mountain-mystic': 3 } },
        { id: 'dl-q5-d', text: 'Complete self-sufficiency — needing nothing from the outside world', emoji: '🌱', scores: { 'jet-setter-extraordinaire': 0, 'urban-creative': 0, 'beach-life-dreamer': 0, 'cozy-homesteader': 4, 'mountain-mystic': 4 } }
      ]
    },
    {
      id: 'dl-q6',
      question: 'Choose a pet for your dream life:',
      emoji: '🐾',
      options: [
        { id: 'dl-q6-a', text: 'A tiny dog that fits in my carry-on luggage', emoji: '🐶', scores: { 'jet-setter-extraordinaire': 5, 'urban-creative': 2, 'beach-life-dreamer': 1, 'cozy-homesteader': 0, 'mountain-mystic': 0 } },
        { id: 'dl-q6-b', text: 'A quirky rescue cat with personality for days', emoji: '🐱', scores: { 'jet-setter-extraordinaire': 0, 'urban-creative': 5, 'beach-life-dreamer': 1, 'cozy-homesteader': 2, 'mountain-mystic': 1 } },
        { id: 'dl-q6-c', text: 'Chickens, goats, maybe a horse — the whole farm squad', emoji: '🐔', scores: { 'jet-setter-extraordinaire': 0, 'urban-creative': 0, 'beach-life-dreamer': 0, 'cozy-homesteader': 5, 'mountain-mystic': 3 } },
        { id: 'dl-q6-d', text: 'A big golden retriever to hike and swim with', emoji: '🐕', scores: { 'jet-setter-extraordinaire': 0, 'urban-creative': 0, 'beach-life-dreamer': 3, 'cozy-homesteader': 1, 'mountain-mystic': 4 } }
      ]
    },
    {
      id: 'dl-q7',
      question: 'Your ideal wardrobe is full of:',
      emoji: '👗',
      options: [
        { id: 'dl-q7-a', text: 'Designer pieces from boutiques around the world', emoji: '👠', scores: { 'jet-setter-extraordinaire': 5, 'urban-creative': 2, 'beach-life-dreamer': 0, 'cozy-homesteader': 0, 'mountain-mystic': 0 } },
        { id: 'dl-q7-b', text: 'Vintage finds, thrift gems, and hand-painted jackets', emoji: '🧥', scores: { 'jet-setter-extraordinaire': 1, 'urban-creative': 5, 'beach-life-dreamer': 1, 'cozy-homesteader': 1, 'mountain-mystic': 1 } },
        { id: 'dl-q7-c', text: 'Flowy dresses, sandals, and sun hats', emoji: '👒', scores: { 'jet-setter-extraordinaire': 1, 'urban-creative': 1, 'beach-life-dreamer': 5, 'cozy-homesteader': 1, 'mountain-mystic': 0 } },
        { id: 'dl-q7-d', text: 'Flannel, boots, and cozy layers for any weather', emoji: '🥾', scores: { 'jet-setter-extraordinaire': 0, 'urban-creative': 0, 'beach-life-dreamer': 0, 'cozy-homesteader': 3, 'mountain-mystic': 5 } }
      ]
    },
    {
      id: 'dl-q8',
      question: 'Pick a food vibe for your dream kitchen:',
      emoji: '🍳',
      options: [
        { id: 'dl-q8-a', text: 'International street food — tacos, ramen, falafel, pad thai', emoji: '🌮', scores: { 'jet-setter-extraordinaire': 5, 'urban-creative': 2, 'beach-life-dreamer': 1, 'cozy-homesteader': 0, 'mountain-mystic': 0 } },
        { id: 'dl-q8-b', text: 'Artisan everything — sourdough, craft coffee, aesthetic plates', emoji: '☕', scores: { 'jet-setter-extraordinaire': 1, 'urban-creative': 5, 'beach-life-dreamer': 1, 'cozy-homesteader': 1, 'mountain-mystic': 0 } },
        { id: 'dl-q8-c', text: 'Fresh-caught fish, tropical fruits, coconut everything', emoji: '🥥', scores: { 'jet-setter-extraordinaire': 1, 'urban-creative': 0, 'beach-life-dreamer': 5, 'cozy-homesteader': 0, 'mountain-mystic': 1 } },
        { id: 'dl-q8-d', text: 'Hearty stews, fresh bread, and garden-to-table meals', emoji: '🍲', scores: { 'jet-setter-extraordinaire': 0, 'urban-creative': 0, 'beach-life-dreamer': 0, 'cozy-homesteader': 4, 'mountain-mystic': 4 } }
      ]
    },
    {
      id: 'dl-q9',
      question: 'What\'s your dream transportation?',
      emoji: '🚗',
      options: [
        { id: 'dl-q9-a', text: 'First-class flights and high-speed trains', emoji: '🚄', scores: { 'jet-setter-extraordinaire': 5, 'urban-creative': 2, 'beach-life-dreamer': 1, 'cozy-homesteader': 0, 'mountain-mystic': 0 } },
        { id: 'dl-q9-b', text: 'A vintage bicycle through cobblestone streets', emoji: '🚲', scores: { 'jet-setter-extraordinaire': 1, 'urban-creative': 5, 'beach-life-dreamer': 1, 'cozy-homesteader': 1, 'mountain-mystic': 0 } },
        { id: 'dl-q9-c', text: 'A little boat or a surfboard — ocean highways only', emoji: '🚤', scores: { 'jet-setter-extraordinaire': 1, 'urban-creative': 0, 'beach-life-dreamer': 5, 'cozy-homesteader': 0, 'mountain-mystic': 1 } },
        { id: 'dl-q9-d', text: 'A trusty truck or 4WD for rugged trails', emoji: '🛻', scores: { 'jet-setter-extraordinaire': 0, 'urban-creative': 0, 'beach-life-dreamer': 0, 'cozy-homesteader': 3, 'mountain-mystic': 5 } }
      ]
    },
    {
      id: 'dl-q10',
      question: 'How do you want your social life to look?',
      emoji: '👥',
      options: [
        { id: 'dl-q10-a', text: 'Friends on every continent — always meeting new souls', emoji: '🌎', scores: { 'jet-setter-extraordinaire': 5, 'urban-creative': 2, 'beach-life-dreamer': 1, 'cozy-homesteader': 0, 'mountain-mystic': 0 } },
        { id: 'dl-q10-b', text: 'A tight-knit creative community that collaborates and inspires', emoji: '🎭', scores: { 'jet-setter-extraordinaire': 1, 'urban-creative': 5, 'beach-life-dreamer': 1, 'cozy-homesteader': 1, 'mountain-mystic': 0 } },
        { id: 'dl-q10-c', text: 'A laid-back crew of locals who gather for sunset hangs', emoji: '🌅', scores: { 'jet-setter-extraordinaire': 1, 'urban-creative': 0, 'beach-life-dreamer': 5, 'cozy-homesteader': 1, 'mountain-mystic': 1 } },
        { id: 'dl-q10-d', text: 'A small circle of deep, meaningful connections', emoji: '💛', scores: { 'jet-setter-extraordinaire': 0, 'urban-creative': 1, 'beach-life-dreamer': 1, 'cozy-homesteader': 3, 'mountain-mystic': 4 } }
      ]
    },
    {
      id: 'dl-q11',
      question: 'What would your dream home smell like?',
      emoji: '🕯️',
      options: [
        { id: 'dl-q11-a', text: 'Expensive perfume and leather luggage', emoji: '💎', scores: { 'jet-setter-extraordinaire': 5, 'urban-creative': 2, 'beach-life-dreamer': 0, 'cozy-homesteader': 0, 'mountain-mystic': 0 } },
        { id: 'dl-q11-b', text: 'Paint, old books, and fresh espresso', emoji: '📚', scores: { 'jet-setter-extraordinaire': 0, 'urban-creative': 5, 'beach-life-dreamer': 0, 'cozy-homesteader': 1, 'mountain-mystic': 1 } },
        { id: 'dl-q11-c', text: 'Salt air, coconut sunscreen, and tropical flowers', emoji: '🌺', scores: { 'jet-setter-extraordinaire': 1, 'urban-creative': 0, 'beach-life-dreamer': 5, 'cozy-homesteader': 0, 'mountain-mystic': 1 } },
        { id: 'dl-q11-d', text: 'Pine needles, campfire smoke, and fresh earth', emoji: '🌲', scores: { 'jet-setter-extraordinaire': 0, 'urban-creative': 0, 'beach-life-dreamer': 0, 'cozy-homesteader': 3, 'mountain-mystic': 5 } }
      ]
    },
    {
      id: 'dl-q12',
      question: 'Final question: What\'s the ultimate dream life motto?',
      emoji: '💫',
      options: [
        { id: 'dl-q12-a', text: '"The world is my home."', emoji: '🌏', scores: { 'jet-setter-extraordinaire': 5, 'urban-creative': 1, 'beach-life-dreamer': 2, 'cozy-homesteader': 0, 'mountain-mystic': 1 } },
        { id: 'dl-q12-b', text: '"Create the life you can\'t stop thinking about."', emoji: '🎨', scores: { 'jet-setter-extraordinaire': 1, 'urban-creative': 5, 'beach-life-dreamer': 1, 'cozy-homesteader': 1, 'mountain-mystic': 1 } },
        { id: 'dl-q12-c', text: '"Good vibes and high tides."', emoji: '🌊', scores: { 'jet-setter-extraordinaire': 1, 'urban-creative': 0, 'beach-life-dreamer': 5, 'cozy-homesteader': 0, 'mountain-mystic': 1 } },
        { id: 'dl-q12-d', text: '"Simplicity is the ultimate sophistication."', emoji: '🍃', scores: { 'jet-setter-extraordinaire': 0, 'urban-creative': 1, 'beach-life-dreamer': 0, 'cozy-homesteader': 4, 'mountain-mystic': 4 } }
      ]
    }
  ],
  results: [
    {
      id: 'jet-setter-extraordinaire',
      title: 'Jet-Setter Extraordinaire',
      emoji: '✈️',
      description: 'Your dream life is a non-stop adventure across the globe! You crave new cultures, exotic cuisines, and the thrill of waking up in a different city every week. Routine is your nemesis — you\'re fueled by spontaneity, luxury, and the endless possibilities that come with having zero geographical limits. Your passport isn\'t just full; it has an expansion pack.',
      traits: ['Adventurous', 'Cosmopolitan', 'Spontaneous', 'Culturally Curious'],
      shareText: 'My dream life is Jet-Setter Extraordinaire! ✈️ I was born to explore every corner of this planet. Take the quiz to find your dream life!',
      color: 'sky'
    },
    {
      id: 'cozy-homesteader',
      title: 'Cozy Homesteader',
      emoji: '🏡',
      description: 'Your dream life is a warm, self-sufficient haven where the simple things reign supreme. You envision mornings with fresh eggs from your own chickens, afternoons tending your garden, and evenings wrapped in a quilt by the fire. You don\'t need the world to come to you — you\'ve already built paradise in your own backyard. Martha Stewart wishes she had your vibe.',
      traits: ['Nurturing', 'Self-Sufficient', 'Grounded', 'Warm-Hearted'],
      shareText: 'My dream life is Cozy Homesteader! 🏡 Give me a garden, a fireplace, and fresh pie — I\'m home. Take the quiz!',
      color: 'green'
    },
    {
      id: 'urban-creative',
      title: 'Urban Creative',
      emoji: '🎨',
      description: 'Your dream life pulses with the energy of a vibrant city and the freedom of creative expression. You see yourself in a sun-drenched loft surrounded by canvases, vinyl records, and the hum of inspiration around every corner. Galleries, coffee shops, and rooftop concerts are your natural habitat. You don\'t just live in the city — you ARE the city\'s heartbeat.',
      traits: ['Artistic', 'Trendsetting', 'Inspired', 'Community-Driven'],
      shareText: 'My dream life is Urban Creative! 🎨 Give me a loft, a canvas, and a city that never sleeps. What\'s yours?',
      color: 'purple'
    },
    {
      id: 'beach-life-dreamer',
      title: 'Beach Life Dreamer',
      emoji: '🏖️',
      description: 'Your dream life is set to the soundtrack of ocean waves and steel drums. You envision sandy toes, golden sunsets, and a permanent state of relaxation that most people only experience on vacation. Stress doesn\'t exist in your vocabulary — only tides, good vibes, and the occasional nap in a hammock. You\'ve basically decided to live where everyone else vacations.',
      traits: ['Laid-Back', 'Optimistic', 'Free-Spirited', 'Sun-Kissed'],
      shareText: 'My dream life is Beach Life Dreamer! 🏖️ Toes in the sand, not a care in the world. Find your dream life!',
      color: 'cyan'
    },
    {
      id: 'mountain-mystic',
      title: 'Mountain Mystic',
      emoji: '🏔️',
      description: 'Your dream life exists at the intersection of wild nature and quiet wisdom. You see yourself in a cozy cabin nestled among towering peaks, spending your days hiking, journaling, and connecting deeply with the natural world. You don\'t need Wi-Fi — you need altitude. The mountains call to you because up there, life makes sense in a way the flatlands never could.',
      traits: ['Contemplative', 'Resilient', 'Nature-Connected', 'Wise'],
      shareText: 'My dream life is Mountain Mystic! 🏔️ Take me to the peaks where the air is thin and the vibes are immaculate.',
      color: 'indigo'
    }
  ]
};
