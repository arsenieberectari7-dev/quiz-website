import { ThisOrThatCategory, ThisOrThatQuestion } from '../types/thisOrThat';

// Categories
export const thisOrThatCategories: ThisOrThatCategory[] = [
  { id: 'lifestyle', name: 'Lifestyle', emoji: '🏠', color: 'from-purple-400 to-pink-400' },
  { id: 'love-relationships', name: 'Love & Relationships', emoji: '💕', color: 'from-pink-400 to-rose-400' },
  { id: 'food-drinks', name: 'Food & Drinks', emoji: '🍕', color: 'from-orange-400 to-amber-400' },
  { id: 'travel', name: 'Travel', emoji: '✈️', color: 'from-sky-400 to-blue-400' },
  { id: 'fashion-beauty', name: 'Fashion & Beauty', emoji: '👗', color: 'from-fuchsia-400 to-purple-400' },
  { id: 'personality', name: 'Personality', emoji: '🧠', color: 'from-indigo-400 to-violet-400' },
  { id: 'dreams-ambitions', name: 'Dreams & Ambitions', emoji: '⭐', color: 'from-yellow-400 to-orange-400' },
  { id: 'luxury-minimalism', name: 'Luxury vs. Minimalism', emoji: '💎', color: 'from-emerald-400 to-teal-400' },
  { id: 'social-life', name: 'Social Life', emoji: '🎉', color: 'from-red-400 to-pink-400' },
  { id: 'random-fun', name: 'Random & Fun', emoji: '🎲', color: 'from-cyan-400 to-blue-400' },
];

export const thisOrThatQuestions: ThisOrThatQuestion[] = [
  // ═══════════════════════════════════════════
  // 🏠 Lifestyle (tot-1 through tot-10)
  // ═══════════════════════════════════════════
  { id: 'tot-1', category: 'lifestyle', optionA: { text: 'Live in Paris', emoji: '🗼' }, optionB: { text: 'Live in New York', emoji: '🗽' } },
  { id: 'tot-2', category: 'lifestyle', optionA: { text: 'City penthouse', emoji: '🏙️' }, optionB: { text: 'Countryside cottage', emoji: '🏡' } },
  { id: 'tot-3', category: 'lifestyle', optionA: { text: 'Morning person', emoji: '🌅' }, optionB: { text: 'Night owl', emoji: '🦉' } },
  { id: 'tot-4', category: 'lifestyle', optionA: { text: 'Work from home', emoji: '💻' }, optionB: { text: 'Work from a café', emoji: '☕' } },
  { id: 'tot-5', category: 'lifestyle', optionA: { text: 'Minimalist home', emoji: '🪴' }, optionB: { text: 'Cozy maximalist den', emoji: '🛋️' } },
  { id: 'tot-6', category: 'lifestyle', optionA: { text: 'Hot shower', emoji: '🚿' }, optionB: { text: 'Relaxing bath', emoji: '🛁' } },
  { id: 'tot-7', category: 'lifestyle', optionA: { text: 'Own a dog', emoji: '🐕' }, optionB: { text: 'Own a cat', emoji: '🐈' } },
  { id: 'tot-8', category: 'lifestyle', optionA: { text: 'Plan everything', emoji: '📋' }, optionB: { text: 'Go with the flow', emoji: '🌊' } },
  { id: 'tot-9', category: 'lifestyle', optionA: { text: 'Live alone', emoji: '🧘' }, optionB: { text: 'Live with roommates', emoji: '👯' } },
  { id: 'tot-10', category: 'lifestyle', optionA: { text: 'Eternal summer', emoji: '☀️' }, optionB: { text: 'Eternal autumn', emoji: '🍂' } },

  // ═══════════════════════════════════════════
  // 💕 Love & Relationships (tot-11 through tot-20)
  // ═══════════════════════════════════════════
  { id: 'tot-11', category: 'love-relationships', optionA: { text: 'Love letters', emoji: '💌' }, optionB: { text: 'Surprise dates', emoji: '🌹' } },
  { id: 'tot-12', category: 'love-relationships', optionA: { text: 'Love at first sight', emoji: '⚡' }, optionB: { text: 'Slow burn romance', emoji: '🔥' } },
  { id: 'tot-13', category: 'love-relationships', optionA: { text: 'Big public proposal', emoji: '💍' }, optionB: { text: 'Intimate private one', emoji: '🕯️' } },
  { id: 'tot-14', category: 'love-relationships', optionA: { text: 'Shared hobbies', emoji: '🎨' }, optionB: { text: 'Opposite interests', emoji: '🧩' } },
  { id: 'tot-15', category: 'love-relationships', optionA: { text: 'Grand gestures', emoji: '🎆' }, optionB: { text: 'Small daily acts', emoji: '🫶' } },
  { id: 'tot-16', category: 'love-relationships', optionA: { text: 'Adventurous partner', emoji: '🧗' }, optionB: { text: 'Homebody partner', emoji: '🏠' } },
  { id: 'tot-17', category: 'love-relationships', optionA: { text: 'Childhood sweetheart', emoji: '🧸' }, optionB: { text: 'Met while traveling', emoji: '✈️' } },
  { id: 'tot-18', category: 'love-relationships', optionA: { text: 'Makes you laugh', emoji: '😂' }, optionB: { text: 'Deep conversations', emoji: '🌙' } },
  { id: 'tot-19', category: 'love-relationships', optionA: { text: 'Sunset wedding', emoji: '🌅' }, optionB: { text: 'Starlit wedding', emoji: '✨' } },
  { id: 'tot-20', category: 'love-relationships', optionA: { text: 'Say it first', emoji: '💬' }, optionB: { text: 'Hear it first', emoji: '👂' } },

  // ═══════════════════════════════════════════
  // 🍕 Food & Drinks (tot-21 through tot-30)
  // ═══════════════════════════════════════════
  { id: 'tot-21', category: 'food-drinks', optionA: { text: 'Sweet tooth', emoji: '🍰' }, optionB: { text: 'Savory lover', emoji: '🧀' } },
  { id: 'tot-22', category: 'food-drinks', optionA: { text: 'Coffee addict', emoji: '☕' }, optionB: { text: 'Tea enthusiast', emoji: '🍵' } },
  { id: 'tot-23', category: 'food-drinks', optionA: { text: 'Cook at home', emoji: '👩‍🍳' }, optionB: { text: 'Order takeout', emoji: '📦' } },
  { id: 'tot-24', category: 'food-drinks', optionA: { text: 'Pizza forever', emoji: '🍕' }, optionB: { text: 'Sushi forever', emoji: '🍣' } },
  { id: 'tot-25', category: 'food-drinks', optionA: { text: 'Breakfast for dinner', emoji: '🥞' }, optionB: { text: 'Dinner for breakfast', emoji: '🍝' } },
  { id: 'tot-26', category: 'food-drinks', optionA: { text: 'Street food tour', emoji: '🌮' }, optionB: { text: 'Michelin star dining', emoji: '🍷' } },
  { id: 'tot-27', category: 'food-drinks', optionA: { text: 'Spicy everything', emoji: '🌶️' }, optionB: { text: 'Mild and creamy', emoji: '🍦' } },
  { id: 'tot-28', category: 'food-drinks', optionA: { text: 'Unlimited chocolate', emoji: '🍫' }, optionB: { text: 'Unlimited fruit', emoji: '🍓' } },
  { id: 'tot-29', category: 'food-drinks', optionA: { text: 'Brunch person', emoji: '🥑' }, optionB: { text: 'Midnight snacker', emoji: '🌙' } },
  { id: 'tot-30', category: 'food-drinks', optionA: { text: 'Smoothie bowl', emoji: '🫐' }, optionB: { text: 'Loaded fries', emoji: '🍟' } },

  // ═══════════════════════════════════════════
  // ✈️ Travel (tot-31 through tot-40)
  // ═══════════════════════════════════════════
  { id: 'tot-31', category: 'travel', optionA: { text: 'Beach vacation', emoji: '🏖️' }, optionB: { text: 'Mountain getaway', emoji: '🏔️' } },
  { id: 'tot-32', category: 'travel', optionA: { text: 'Backpacking trip', emoji: '🎒' }, optionB: { text: 'Luxury resort', emoji: '🏨' } },
  { id: 'tot-33', category: 'travel', optionA: { text: 'Road trip', emoji: '🚗' }, optionB: { text: 'First class flight', emoji: '✈️' } },
  { id: 'tot-34', category: 'travel', optionA: { text: 'Explore ruins', emoji: '🏛️' }, optionB: { text: 'Explore nightlife', emoji: '🪩' } },
  { id: 'tot-35', category: 'travel', optionA: { text: 'Solo travel', emoji: '🧭' }, optionB: { text: 'Group adventure', emoji: '👫' } },
  { id: 'tot-36', category: 'travel', optionA: { text: 'Tropical island', emoji: '🌴' }, optionB: { text: 'Snowy cabin', emoji: '🏔️' } },
  { id: 'tot-37', category: 'travel', optionA: { text: 'Planned itinerary', emoji: '🗺️' }, optionB: { text: 'Spontaneous wandering', emoji: '🦋' } },
  { id: 'tot-38', category: 'travel', optionA: { text: 'Live abroad one year', emoji: '🌍' }, optionB: { text: 'Visit 20 countries', emoji: '🛂' } },
  { id: 'tot-39', category: 'travel', optionA: { text: 'Safari adventure', emoji: '🦁' }, optionB: { text: 'Northern Lights trip', emoji: '🌌' } },
  { id: 'tot-40', category: 'travel', optionA: { text: 'Train across Europe', emoji: '🚂' }, optionB: { text: 'Sail the Caribbean', emoji: '⛵' } },

  // ═══════════════════════════════════════════
  // 👗 Fashion & Beauty (tot-41 through tot-50)
  // ═══════════════════════════════════════════
  { id: 'tot-41', category: 'fashion-beauty', optionA: { text: 'Vintage thrift finds', emoji: '👜' }, optionB: { text: 'Designer brand new', emoji: '🏷️' } },
  { id: 'tot-42', category: 'fashion-beauty', optionA: { text: 'All black outfit', emoji: '🖤' }, optionB: { text: 'Bold bright colors', emoji: '🌈' } },
  { id: 'tot-43', category: 'fashion-beauty', optionA: { text: 'Heels always', emoji: '👠' }, optionB: { text: 'Sneakers forever', emoji: '👟' } },
  { id: 'tot-44', category: 'fashion-beauty', optionA: { text: 'Natural makeup', emoji: '🌿' }, optionB: { text: 'Glam full beat', emoji: '💄' } },
  { id: 'tot-45', category: 'fashion-beauty', optionA: { text: 'Gold jewelry', emoji: '✨' }, optionB: { text: 'Silver jewelry', emoji: '🪩' } },
  { id: 'tot-46', category: 'fashion-beauty', optionA: { text: 'Capsule wardrobe', emoji: '👔' }, optionB: { text: 'Overflowing closet', emoji: '👗' } },
  { id: 'tot-47', category: 'fashion-beauty', optionA: { text: 'Perfect skin forever', emoji: '✨' }, optionB: { text: 'Perfect hair forever', emoji: '💇' } },
  { id: 'tot-48', category: 'fashion-beauty', optionA: { text: 'Streetwear vibes', emoji: '🧢' }, optionB: { text: 'Classic elegant style', emoji: '🎩' } },
  { id: 'tot-49', category: 'fashion-beauty', optionA: { text: 'Statement nails', emoji: '💅' }, optionB: { text: 'Statement earrings', emoji: '💎' } },
  { id: 'tot-50', category: 'fashion-beauty', optionA: { text: 'Sweet perfume', emoji: '🌸' }, optionB: { text: 'Woody cologne', emoji: '🌲' } },

  // ═══════════════════════════════════════════
  // 🧠 Personality (tot-51 through tot-60)
  // ═══════════════════════════════════════════
  { id: 'tot-51', category: 'personality', optionA: { text: 'Overthinker', emoji: '🌀' }, optionB: { text: 'Act on instinct', emoji: '⚡' } },
  { id: 'tot-52', category: 'personality', optionA: { text: 'Leader of the pack', emoji: '👑' }, optionB: { text: 'Trusted advisor', emoji: '🧙' } },
  { id: 'tot-53', category: 'personality', optionA: { text: 'Book smart', emoji: '📚' }, optionB: { text: 'Street smart', emoji: '🏙️' } },
  { id: 'tot-54', category: 'personality', optionA: { text: 'Express emotions', emoji: '🥹' }, optionB: { text: 'Keep them inside', emoji: '🧊' } },
  { id: 'tot-55', category: 'personality', optionA: { text: 'Creative dreamer', emoji: '🎨' }, optionB: { text: 'Logical thinker', emoji: '🔬' } },
  { id: 'tot-56', category: 'personality', optionA: { text: 'Speak your mind', emoji: '📢' }, optionB: { text: 'Observe quietly', emoji: '👁️' } },
  { id: 'tot-57', category: 'personality', optionA: { text: 'Forgive easily', emoji: '🕊️' }, optionB: { text: 'Never forget', emoji: '🐘' } },
  { id: 'tot-58', category: 'personality', optionA: { text: 'Optimist always', emoji: '🌞' }, optionB: { text: 'Realistic realist', emoji: '🧐' } },
  { id: 'tot-59', category: 'personality', optionA: { text: 'Risk taker', emoji: '🎰' }, optionB: { text: 'Play it safe', emoji: '🛡️' } },
  { id: 'tot-60', category: 'personality', optionA: { text: 'Old soul', emoji: '🕰️' }, optionB: { text: 'Forever young', emoji: '🧒' } },

  // ═══════════════════════════════════════════
  // ⭐ Dreams & Ambitions (tot-61 through tot-70)
  // ═══════════════════════════════════════════
  { id: 'tot-61', category: 'dreams-ambitions', optionA: { text: 'Start a business', emoji: '🚀' }, optionB: { text: 'Write a bestseller', emoji: '📖' } },
  { id: 'tot-62', category: 'dreams-ambitions', optionA: { text: 'Fame and spotlight', emoji: '🌟' }, optionB: { text: 'Quiet influence', emoji: '🕶️' } },
  { id: 'tot-63', category: 'dreams-ambitions', optionA: { text: 'Change one law', emoji: '⚖️' }, optionB: { text: 'Invent something new', emoji: '💡' } },
  { id: 'tot-64', category: 'dreams-ambitions', optionA: { text: 'Master one skill', emoji: '🎯' }, optionB: { text: 'Be good at many', emoji: '🃏' } },
  { id: 'tot-65', category: 'dreams-ambitions', optionA: { text: 'Win an Oscar', emoji: '🏆' }, optionB: { text: 'Win a Nobel Prize', emoji: '🎖️' } },
  { id: 'tot-66', category: 'dreams-ambitions', optionA: { text: 'Time travel power', emoji: '⏳' }, optionB: { text: 'Teleportation power', emoji: '🌀' } },
  { id: 'tot-67', category: 'dreams-ambitions', optionA: { text: 'Build a school', emoji: '🏫' }, optionB: { text: 'Build a hospital', emoji: '🏥' } },
  { id: 'tot-68', category: 'dreams-ambitions', optionA: { text: 'Retire at 40', emoji: '🏖️' }, optionB: { text: 'Love your job forever', emoji: '❤️‍🔥' } },
  { id: 'tot-69', category: 'dreams-ambitions', optionA: { text: 'Speak every language', emoji: '🗣️' }, optionB: { text: 'Play every instrument', emoji: '🎸' } },
  { id: 'tot-70', category: 'dreams-ambitions', optionA: { text: 'Explore outer space', emoji: '🚀' }, optionB: { text: 'Explore deep ocean', emoji: '🌊' } },

  // ═══════════════════════════════════════════
  // 💎 Luxury vs. Minimalism (tot-71 through tot-80)
  // ═══════════════════════════════════════════
  { id: 'tot-71', category: 'luxury-minimalism', optionA: { text: 'Private jet', emoji: '✈️' }, optionB: { text: 'Camper van life', emoji: '🚐' } },
  { id: 'tot-72', category: 'luxury-minimalism', optionA: { text: 'Huge walk-in closet', emoji: '👗' }, optionB: { text: 'Ten perfect pieces', emoji: '✂️' } },
  { id: 'tot-73', category: 'luxury-minimalism', optionA: { text: 'Rolex watch', emoji: '⌚' }, optionB: { text: 'Handmade bracelet', emoji: '📿' } },
  { id: 'tot-74', category: 'luxury-minimalism', optionA: { text: 'Mansion with staff', emoji: '🏰' }, optionB: { text: 'Tiny house on wheels', emoji: '🏡' } },
  { id: 'tot-75', category: 'luxury-minimalism', optionA: { text: 'Unlimited shopping', emoji: '🛍️' }, optionB: { text: 'Unlimited experiences', emoji: '🎭' } },
  { id: 'tot-76', category: 'luxury-minimalism', optionA: { text: 'Personal chef', emoji: '👨‍🍳' }, optionB: { text: 'Grow your own food', emoji: '🌱' } },
  { id: 'tot-77', category: 'luxury-minimalism', optionA: { text: 'Spa day weekly', emoji: '🧖' }, optionB: { text: 'Yoga at sunrise', emoji: '🧘' } },
  { id: 'tot-78', category: 'luxury-minimalism', optionA: { text: 'Latest tech gadgets', emoji: '📱' }, optionB: { text: 'Digital detox life', emoji: '🌿' } },
  { id: 'tot-79', category: 'luxury-minimalism', optionA: { text: 'Champagne lifestyle', emoji: '🥂' }, optionB: { text: 'Simple pleasures', emoji: '🫖' } },
  { id: 'tot-80', category: 'luxury-minimalism', optionA: { text: 'Own a yacht', emoji: '🛥️' }, optionB: { text: 'Own a treehouse', emoji: '🌳' } },

  // ═══════════════════════════════════════════
  // 🎉 Social Life (tot-81 through tot-90)
  // ═══════════════════════════════════════════
  { id: 'tot-81', category: 'social-life', optionA: { text: 'Huge birthday bash', emoji: '🎂' }, optionB: { text: 'Dinner with besties', emoji: '🍽️' } },
  { id: 'tot-82', category: 'social-life', optionA: { text: 'Life of the party', emoji: '🪩' }, optionB: { text: 'Deep one-on-ones', emoji: '🫂' } },
  { id: 'tot-83', category: 'social-life', optionA: { text: 'Text communicator', emoji: '💬' }, optionB: { text: 'Phone call lover', emoji: '📞' } },
  { id: 'tot-84', category: 'social-life', optionA: { text: 'Game night in', emoji: '🎲' }, optionB: { text: 'Club night out', emoji: '🕺' } },
  { id: 'tot-85', category: 'social-life', optionA: { text: 'Few close friends', emoji: '💛' }, optionB: { text: 'Huge friend group', emoji: '🌐' } },
  { id: 'tot-86', category: 'social-life', optionA: { text: 'Host the hangout', emoji: '🏠' }, optionB: { text: 'Show up and vibe', emoji: '😎' } },
  { id: 'tot-87', category: 'social-life', optionA: { text: 'Karaoke night', emoji: '🎤' }, optionB: { text: 'Movie marathon', emoji: '🎬' } },
  { id: 'tot-88', category: 'social-life', optionA: { text: 'Festival weekend', emoji: '🎪' }, optionB: { text: 'Book club meeting', emoji: '📚' } },
  { id: 'tot-89', category: 'social-life', optionA: { text: 'Make friends easily', emoji: '🤝' }, optionB: { text: 'Keep circle tight', emoji: '🔒' } },
  { id: 'tot-90', category: 'social-life', optionA: { text: 'Brunch with friends', emoji: '🥂' }, optionB: { text: 'Solo coffee date', emoji: '☕' } },

  // ═══════════════════════════════════════════
  // 🎲 Random & Fun (tot-91 through tot-100)
  // ═══════════════════════════════════════════
  { id: 'tot-91', category: 'random-fun', optionA: { text: 'Unlimited books', emoji: '📚' }, optionB: { text: 'Unlimited concerts', emoji: '🎵' } },
  { id: 'tot-92', category: 'random-fun', optionA: { text: 'Read minds', emoji: '🧠' }, optionB: { text: 'Be invisible', emoji: '👻' } },
  { id: 'tot-93', category: 'random-fun', optionA: { text: 'Live in a sitcom', emoji: '📺' }, optionB: { text: 'Live in an anime', emoji: '🎌' } },
  { id: 'tot-94', category: 'random-fun', optionA: { text: 'Always early', emoji: '⏰' }, optionB: { text: 'Fashionably late', emoji: '✨' } },
  { id: 'tot-95', category: 'random-fun', optionA: { text: 'Talk to animals', emoji: '🐾' }, optionB: { text: 'Speak all languages', emoji: '🌎' } },
  { id: 'tot-96', category: 'random-fun', optionA: { text: 'Live in the past', emoji: '🏰' }, optionB: { text: 'Live in the future', emoji: '🤖' } },
  { id: 'tot-97', category: 'random-fun', optionA: { text: 'Have a clone', emoji: '👯' }, optionB: { text: 'Have a robot butler', emoji: '🤖' } },
  { id: 'tot-98', category: 'random-fun', optionA: { text: 'Fly anywhere', emoji: '🦅' }, optionB: { text: 'Breathe underwater', emoji: '🧜' } },
  { id: 'tot-99', category: 'random-fun', optionA: { text: 'Relive one day', emoji: '🔄' }, optionB: { text: 'Skip ahead one year', emoji: '⏩' } },
  { id: 'tot-100', category: 'random-fun', optionA: { text: 'Know the future', emoji: '🔮' }, optionB: { text: 'Change the past', emoji: '⏪' } },
];
