import { Quiz } from '../../types/quiz';

export const quizData: Quiz = {
  id: 'how-people-see-you',
  slug: 'how-people-see-you',
  title: 'How Do People Really See You?',
  subtitle: 'The truth about your vibe — straight from everyone else\'s perspective',
  description: 'Ever wonder what impression you actually leave on people? Not the version in your head — the REAL vibe you give off when you walk into a room, crack a joke, or handle a crisis. This quiz analyzes your social habits, instincts, and personality quirks to reveal how the world truly perceives you. Buckle up — the truth might surprise you!',
  metaDescription: 'Find out how people really see you! Are you the Magnetic Leader, Warm Sunshine, Mysterious Enigma, Reliable Rock, or Free Spirit? Take this personality quiz now!',
  emoji: '👀',
  category: 'Personality',
  categorySlug: 'personality',
  coverGradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
  estimatedTime: '3 min',
  totalQuestions: 12,
  questions: [
    {
      id: 'hpsy-q1',
      question: 'You walk into a party where you know almost nobody. What do you do?',
      emoji: '🎉',
      options: [
        { id: 'hpsy-q1-a', text: 'Introduce myself confidently and start working the room', emoji: '🤝', scores: { 'magnetic-leader': 5, 'warm-sunshine': 2, 'mysterious-enigma': 0, 'reliable-rock': 1, 'free-spirit': 1 } },
        { id: 'hpsy-q1-b', text: 'Find someone who looks lonely and make them feel included', emoji: '😊', scores: { 'magnetic-leader': 1, 'warm-sunshine': 5, 'mysterious-enigma': 0, 'reliable-rock': 2, 'free-spirit': 1 } },
        { id: 'hpsy-q1-c', text: 'Post up in a cool corner and let people come to me', emoji: '😎', scores: { 'magnetic-leader': 2, 'warm-sunshine': 0, 'mysterious-enigma': 5, 'reliable-rock': 0, 'free-spirit': 2 } },
        { id: 'hpsy-q1-d', text: 'Immediately start dancing or doing something unexpected', emoji: '💃', scores: { 'magnetic-leader': 1, 'warm-sunshine': 1, 'mysterious-enigma': 1, 'reliable-rock': 0, 'free-spirit': 5 } }
      ]
    },
    {
      id: 'hpsy-q2',
      question: 'A friend is going through a tough breakup. Your instinct is to:',
      emoji: '💔',
      options: [
        { id: 'hpsy-q2-a', text: 'Give them a motivational pep talk and an action plan', emoji: '📋', scores: { 'magnetic-leader': 5, 'warm-sunshine': 1, 'mysterious-enigma': 0, 'reliable-rock': 2, 'free-spirit': 0 } },
        { id: 'hpsy-q2-b', text: 'Show up with ice cream, tissues, and unlimited hugs', emoji: '🍦', scores: { 'magnetic-leader': 0, 'warm-sunshine': 5, 'mysterious-enigma': 0, 'reliable-rock': 3, 'free-spirit': 0 } },
        { id: 'hpsy-q2-c', text: 'Send them a thoughtful, deeply personal text when the time is right', emoji: '💌', scores: { 'magnetic-leader': 0, 'warm-sunshine': 2, 'mysterious-enigma': 5, 'reliable-rock': 1, 'free-spirit': 1 } },
        { id: 'hpsy-q2-d', text: 'Drag them on a spontaneous adventure to take their mind off it', emoji: '🎢', scores: { 'magnetic-leader': 1, 'warm-sunshine': 1, 'mysterious-enigma': 0, 'reliable-rock': 0, 'free-spirit': 5 } }
      ]
    },
    {
      id: 'hpsy-q3',
      question: 'People most often describe you as:',
      emoji: '🗣️',
      options: [
        { id: 'hpsy-q3-a', text: 'Inspiring, commanding, a natural-born leader', emoji: '👑', scores: { 'magnetic-leader': 5, 'warm-sunshine': 0, 'mysterious-enigma': 1, 'reliable-rock': 1, 'free-spirit': 0 } },
        { id: 'hpsy-q3-b', text: 'Sweet, warm, and the nicest person they know', emoji: '🌻', scores: { 'magnetic-leader': 0, 'warm-sunshine': 5, 'mysterious-enigma': 0, 'reliable-rock': 2, 'free-spirit': 0 } },
        { id: 'hpsy-q3-c', text: 'Intriguing, hard to read, and fascinating', emoji: '🌑', scores: { 'magnetic-leader': 1, 'warm-sunshine': 0, 'mysterious-enigma': 5, 'reliable-rock': 0, 'free-spirit': 2 } },
        { id: 'hpsy-q3-d', text: 'Wild, unpredictable, and absolutely one-of-a-kind', emoji: '🦄', scores: { 'magnetic-leader': 0, 'warm-sunshine': 1, 'mysterious-enigma': 2, 'reliable-rock': 0, 'free-spirit': 5 } }
      ]
    },
    {
      id: 'hpsy-q4',
      question: 'In a group project, you naturally gravitate toward:',
      emoji: '📝',
      options: [
        { id: 'hpsy-q4-a', text: 'Taking charge and delegating — someone has to lead', emoji: '🎯', scores: { 'magnetic-leader': 5, 'warm-sunshine': 0, 'mysterious-enigma': 0, 'reliable-rock': 2, 'free-spirit': 0 } },
        { id: 'hpsy-q4-b', text: 'Making sure everyone feels heard and the vibes stay positive', emoji: '💛', scores: { 'magnetic-leader': 0, 'warm-sunshine': 5, 'mysterious-enigma': 0, 'reliable-rock': 2, 'free-spirit': 0 } },
        { id: 'hpsy-q4-c', text: 'Doing deep research alone and presenting killer insights', emoji: '🔍', scores: { 'magnetic-leader': 1, 'warm-sunshine': 0, 'mysterious-enigma': 5, 'reliable-rock': 2, 'free-spirit': 0 } },
        { id: 'hpsy-q4-d', text: 'Bringing the wildly creative idea nobody else thought of', emoji: '💡', scores: { 'magnetic-leader': 1, 'warm-sunshine': 0, 'mysterious-enigma': 2, 'reliable-rock': 0, 'free-spirit': 5 } }
      ]
    },
    {
      id: 'hpsy-q5',
      question: 'Your texting style is best described as:',
      emoji: '💬',
      options: [
        { id: 'hpsy-q5-a', text: 'Confident and direct — I say what I mean, no fluff', emoji: '✅', scores: { 'magnetic-leader': 5, 'warm-sunshine': 0, 'mysterious-enigma': 2, 'reliable-rock': 2, 'free-spirit': 0 } },
        { id: 'hpsy-q5-b', text: 'Full of exclamation marks, emojis, and wholesome energy!!!', emoji: '🥰', scores: { 'magnetic-leader': 0, 'warm-sunshine': 5, 'mysterious-enigma': 0, 'reliable-rock': 1, 'free-spirit': 2 } },
        { id: 'hpsy-q5-c', text: 'Sparse and cryptic — I leave people wanting more', emoji: '🤔', scores: { 'magnetic-leader': 0, 'warm-sunshine': 0, 'mysterious-enigma': 5, 'reliable-rock': 1, 'free-spirit': 1 } },
        { id: 'hpsy-q5-d', text: 'Chaotic — memes, voice notes, random thoughts at 3 AM', emoji: '🤪', scores: { 'magnetic-leader': 0, 'warm-sunshine': 1, 'mysterious-enigma': 1, 'reliable-rock': 0, 'free-spirit': 5 } }
      ]
    },
    {
      id: 'hpsy-q6',
      question: 'How do you handle conflict with someone close to you?',
      emoji: '⚔️',
      options: [
        { id: 'hpsy-q6-a', text: 'Address it head-on — I believe in direct, honest communication', emoji: '🗣️', scores: { 'magnetic-leader': 5, 'warm-sunshine': 1, 'mysterious-enigma': 0, 'reliable-rock': 3, 'free-spirit': 0 } },
        { id: 'hpsy-q6-b', text: 'Try to understand their side first and find a compromise', emoji: '🤗', scores: { 'magnetic-leader': 0, 'warm-sunshine': 5, 'mysterious-enigma': 0, 'reliable-rock': 3, 'free-spirit': 0 } },
        { id: 'hpsy-q6-c', text: 'Go quiet and process it internally before responding', emoji: '🤐', scores: { 'magnetic-leader': 0, 'warm-sunshine': 0, 'mysterious-enigma': 5, 'reliable-rock': 2, 'free-spirit': 0 } },
        { id: 'hpsy-q6-d', text: 'Honestly? I might just ghost for a bit and come back when it\'s chill', emoji: '👻', scores: { 'magnetic-leader': 0, 'warm-sunshine': 0, 'mysterious-enigma': 2, 'reliable-rock': 0, 'free-spirit': 5 } }
      ]
    },
    {
      id: 'hpsy-q7',
      question: 'At a restaurant, you\'re the person who:',
      emoji: '🍽️',
      options: [
        { id: 'hpsy-q7-a', text: 'Orders for the table and negotiates with the waiter', emoji: '🍷', scores: { 'magnetic-leader': 5, 'warm-sunshine': 1, 'mysterious-enigma': 0, 'reliable-rock': 1, 'free-spirit': 0 } },
        { id: 'hpsy-q7-b', text: 'Makes sure everyone has what they need and shares their food', emoji: '😋', scores: { 'magnetic-leader': 0, 'warm-sunshine': 5, 'mysterious-enigma': 0, 'reliable-rock': 3, 'free-spirit': 0 } },
        { id: 'hpsy-q7-c', text: 'Orders something obscure nobody else has heard of', emoji: '🍜', scores: { 'magnetic-leader': 0, 'warm-sunshine': 0, 'mysterious-enigma': 5, 'reliable-rock': 0, 'free-spirit': 3 } },
        { id: 'hpsy-q7-d', text: 'Suggests we ditch the restaurant and find a food truck instead', emoji: '🚚', scores: { 'magnetic-leader': 1, 'warm-sunshine': 0, 'mysterious-enigma': 1, 'reliable-rock': 0, 'free-spirit': 5 } }
      ]
    },
    {
      id: 'hpsy-q8',
      question: 'Your social media presence gives off:',
      emoji: '📸',
      options: [
        { id: 'hpsy-q8-a', text: 'Boss energy — curated, polished, and aspirational', emoji: '💎', scores: { 'magnetic-leader': 5, 'warm-sunshine': 0, 'mysterious-enigma': 2, 'reliable-rock': 1, 'free-spirit': 0 } },
        { id: 'hpsy-q8-b', text: 'Warm and genuine — lots of group photos and heartfelt captions', emoji: '💝', scores: { 'magnetic-leader': 0, 'warm-sunshine': 5, 'mysterious-enigma': 0, 'reliable-rock': 2, 'free-spirit': 0 } },
        { id: 'hpsy-q8-c', text: 'Barely there — I keep people guessing on purpose', emoji: '🕶️', scores: { 'magnetic-leader': 0, 'warm-sunshine': 0, 'mysterious-enigma': 5, 'reliable-rock': 1, 'free-spirit': 2 } },
        { id: 'hpsy-q8-d', text: 'Random chaos — art, memes, rants, and zero aesthetic consistency', emoji: '🎪', scores: { 'magnetic-leader': 0, 'warm-sunshine': 1, 'mysterious-enigma': 1, 'reliable-rock': 0, 'free-spirit': 5 } }
      ]
    },
    {
      id: 'hpsy-q9',
      question: 'When someone first meets you, they probably think:',
      emoji: '🤝',
      options: [
        { id: 'hpsy-q9-a', text: '"Wow, this person is going places — I want to know them"', emoji: '⭐', scores: { 'magnetic-leader': 5, 'warm-sunshine': 1, 'mysterious-enigma': 1, 'reliable-rock': 0, 'free-spirit': 0 } },
        { id: 'hpsy-q9-b', text: '"They\'re so easy to talk to — I feel like I\'ve known them forever"', emoji: '☀️', scores: { 'magnetic-leader': 0, 'warm-sunshine': 5, 'mysterious-enigma': 0, 'reliable-rock': 2, 'free-spirit': 1 } },
        { id: 'hpsy-q9-c', text: '"There\'s something about them I can\'t quite figure out..."', emoji: '🌫️', scores: { 'magnetic-leader': 1, 'warm-sunshine': 0, 'mysterious-enigma': 5, 'reliable-rock': 0, 'free-spirit': 2 } },
        { id: 'hpsy-q9-d', text: '"That person is DEFINITELY a vibe — I need that energy"', emoji: '✨', scores: { 'magnetic-leader': 1, 'warm-sunshine': 1, 'mysterious-enigma': 0, 'reliable-rock': 0, 'free-spirit': 5 } }
      ]
    },
    {
      id: 'hpsy-q10',
      question: 'Your friend group relies on you to be the:',
      emoji: '👥',
      options: [
        { id: 'hpsy-q10-a', text: 'Decision-maker — I always know what we should do', emoji: '🎖️', scores: { 'magnetic-leader': 5, 'warm-sunshine': 0, 'mysterious-enigma': 0, 'reliable-rock': 3, 'free-spirit': 0 } },
        { id: 'hpsy-q10-b', text: 'Emotional support — I hold the group together with love', emoji: '🩹', scores: { 'magnetic-leader': 0, 'warm-sunshine': 5, 'mysterious-enigma': 0, 'reliable-rock': 3, 'free-spirit': 0 } },
        { id: 'hpsy-q10-c', text: 'Wise one — I drop truth bombs when they\'re needed', emoji: '🦉', scores: { 'magnetic-leader': 1, 'warm-sunshine': 0, 'mysterious-enigma': 5, 'reliable-rock': 2, 'free-spirit': 0 } },
        { id: 'hpsy-q10-d', text: 'Wildcard — I keep life interesting and unpredictable', emoji: '🃏', scores: { 'magnetic-leader': 0, 'warm-sunshine': 1, 'mysterious-enigma': 1, 'reliable-rock': 0, 'free-spirit': 5 } }
      ]
    },
    {
      id: 'hpsy-q11',
      question: 'You accidentally make eye contact with an attractive stranger. You:',
      emoji: '👁️',
      options: [
        { id: 'hpsy-q11-a', text: 'Hold the gaze with a confident smile — power move', emoji: '😏', scores: { 'magnetic-leader': 5, 'warm-sunshine': 1, 'mysterious-enigma': 2, 'reliable-rock': 0, 'free-spirit': 1 } },
        { id: 'hpsy-q11-b', text: 'Smile warmly and maybe wave — why not be friendly?', emoji: '👋', scores: { 'magnetic-leader': 0, 'warm-sunshine': 5, 'mysterious-enigma': 0, 'reliable-rock': 2, 'free-spirit': 1 } },
        { id: 'hpsy-q11-c', text: 'Look away slowly with a hint of mystery', emoji: '🌙', scores: { 'magnetic-leader': 0, 'warm-sunshine': 0, 'mysterious-enigma': 5, 'reliable-rock': 1, 'free-spirit': 1 } },
        { id: 'hpsy-q11-d', text: 'Pull a funny face or do something goofy', emoji: '🤡', scores: { 'magnetic-leader': 0, 'warm-sunshine': 2, 'mysterious-enigma': 0, 'reliable-rock': 0, 'free-spirit': 5 } }
      ]
    },
    {
      id: 'hpsy-q12',
      question: 'If your personality was a weather pattern, it would be:',
      emoji: '🌤️',
      options: [
        { id: 'hpsy-q12-a', text: 'A powerful thunderstorm — electric, dramatic, impossible to ignore', emoji: '⛈️', scores: { 'magnetic-leader': 5, 'warm-sunshine': 0, 'mysterious-enigma': 2, 'reliable-rock': 0, 'free-spirit': 1 } },
        { id: 'hpsy-q12-b', text: 'A warm sunny day — everyone feels better when I\'m around', emoji: '☀️', scores: { 'magnetic-leader': 0, 'warm-sunshine': 5, 'mysterious-enigma': 0, 'reliable-rock': 2, 'free-spirit': 1 } },
        { id: 'hpsy-q12-c', text: 'Mysterious fog — beautiful, atmospheric, and full of secrets', emoji: '🌫️', scores: { 'magnetic-leader': 0, 'warm-sunshine': 0, 'mysterious-enigma': 5, 'reliable-rock': 0, 'free-spirit': 2 } },
        { id: 'hpsy-q12-d', text: 'A wild whirlwind — unpredictable, exciting, and full of energy', emoji: '🌪️', scores: { 'magnetic-leader': 1, 'warm-sunshine': 0, 'mysterious-enigma': 1, 'reliable-rock': 0, 'free-spirit': 5 } }
      ]
    }
  ],
  results: [
    {
      id: 'magnetic-leader',
      title: 'The Magnetic Leader',
      emoji: '👑',
      description: 'People see you as a force of nature — someone who commands attention without demanding it. When you speak, rooms go quiet. When you decide, people follow. You radiate confidence, competence, and a quiet power that makes others feel like they\'re in the presence of someone truly special. People don\'t just respect you; they\'re drawn to you like moths to a flame.',
      traits: ['Commanding', 'Charismatic', 'Decisive', 'Inspiring'],
      shareText: 'People see me as The Magnetic Leader! 👑 Apparently I radiate boss energy without even trying. How do people see YOU?',
      color: 'yellow'
    },
    {
      id: 'warm-sunshine',
      title: 'The Warm Sunshine',
      emoji: '☀️',
      description: 'You are the human equivalent of a warm hug on a cold day. People see you as the kindest, most genuine soul in any room — the person who remembers birthdays, checks in on friends, and makes strangers feel welcome. Your warmth isn\'t performative; it\'s who you are to your core. People feel safe, loved, and valued in your presence, and that is a superpower most will never have.',
      traits: ['Compassionate', 'Genuine', 'Nurturing', 'Approachable'],
      shareText: 'People see me as The Warm Sunshine! ☀️ Apparently I\'m everyone\'s favorite ray of light. Find out how people see YOU!',
      color: 'orange'
    },
    {
      id: 'mysterious-enigma',
      title: 'The Mysterious Enigma',
      emoji: '🌑',
      description: 'People are absolutely fascinated by you — and slightly intimidated. You have an aura of depth and complexity that makes others feel like they could know you for years and still discover new layers. You\'re selective with your words, intentional with your energy, and you never reveal all your cards. This isn\'t aloofness; it\'s a magnetic mystique that keeps people intrigued and coming back for more.',
      traits: ['Enigmatic', 'Thoughtful', 'Selective', 'Deep'],
      shareText: 'People see me as The Mysterious Enigma! 🌑 I\'m basically a riddle wrapped in an aesthetic. How do people see YOU?',
      color: 'purple'
    },
    {
      id: 'reliable-rock',
      title: 'The Reliable Rock',
      emoji: '🪨',
      description: 'You are the person everyone calls when life falls apart — and the one who actually shows up. People see you as unshakably dependable, loyal to a fault, and the steady anchor in every storm. You may not be the loudest in the room, but you\'re the one everyone trusts with their secrets, their keys, and their hearts. In a world of flakes, you\'re the real deal, and people treasure you for it.',
      traits: ['Dependable', 'Loyal', 'Steady', 'Trustworthy'],
      shareText: 'People see me as The Reliable Rock! 🪨 I\'m the person everyone trusts — and honestly, they should. What are YOU?',
      color: 'slate'
    },
    {
      id: 'free-spirit',
      title: 'The Free Spirit',
      emoji: '🌈',
      description: 'People see you as a burst of color in a black-and-white world. You\'re unpredictable in the best way — the friend who suggests karaoke on a Tuesday, befriends random strangers, and turns every mundane situation into an adventure. Your energy is infectious, your laugh is unforgettable, and your refusal to conform makes you utterly magnetic. People don\'t just like you; they feel more alive around you.',
      traits: ['Spontaneous', 'Adventurous', 'Authentic', 'Infectious'],
      shareText: 'People see me as The Free Spirit! 🌈 I bring the chaos and the color everywhere I go. How do people REALLY see you?',
      color: 'rose'
    }
  ]
};
