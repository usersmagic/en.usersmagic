module.exports = (req, res) => {
  const target_users = [
    {
      _id: 'tom',
      image: '/res/images/company/target_users/tom_small.png',
      name: 'Tom',
      occupation: 'Student',
      country: '🇺🇸 United States',
      city: '🌁 San Francisco',
      paid_subscriptions: '🌁 San Francisco',
      hobbies: '⚽️ Soccer',
      favorite_products: '⌚️ Whoop',
      favorite_apps: '🏋 Nike Training Club'
    },
    {
      _id: 'emma',
      image: '/res/images/company/target_users/emma_small.png',
      name: 'Emma',
      occupation: 'Recent Grad',
      country: '🇺🇸 United States',
      city: '💙 Ann Arbor',
      paid_subscriptions: '💙 Ann Arbor',
      hobbies: '🎨 Drawing',
      favorite_products: '🚲 Peloton',
      favorite_apps: '🏋️‍ Spotify'
    },
    {
      _id: 'yunus',
      image: '/res/images/company/target_users/yunus_small.png',
      name: 'Yunus',
      occupation: 'Student',
      country: '🇹🇷 Turkey',
      city: '🌉 Istanbul',
      paid_subscriptions: 'Peloton',
      hobbies: '📖 Reading',
      favorite_products: '📖 Kindle',
      favorite_apps: '💳 Venmo'
    },
    {
      _id: 'sarah',
      image: '/res/images/company/target_users/sarah_small.png',
      name: 'Sarah',
      occupation: 'Student',
      country: '🇬🇧 UK',
      city: '🚇 London',
      paid_subscriptions: '🚇 London',
      hobbies: '🎹 Piano',
      favorite_products: '⌚️ Apple Watch',
      favorite_apps: '🌱 Lifesum'
    }
  ];
  const target_user_details = {
    tom: {
      name: 'Tom',
      image: '/res/images/company/target_users/tom.png',
      text: 'I am a junior at the University of Michigan, where I study Computer Science. I am a tennis player and a soccer fan. I enjoy building new ...',
      person: 'College student',
      sport: 'Plays tennis, soccer',
      watch: 'Netflix, Hulu',
      music: 'Spotify, Pop & Deep Music',
      shopping: 'Amazon, Mercari',
      clothing: 'Nike, Uniqlo, Adidas',
      head: 'Headspace, Wellnest',
      food: 'Uber Eats, Whole Foods',
    },
    emma: {
      name: 'Emma',
      image: '/res/images/company/target_users/emma.png',
      text: 'I am recent graduate with a degree in Master of Management. I am exploring opportunities within consulting and analytics. I am interes...',
      person: 'Recent graduate',
      sport: 'Tennis, Zumba, HIIT',
      watch: 'Netflix, Hulu, Disney +',
      music: 'Spotify, Pop Music',
      shopping: 'Amazon, Facebook',
      clothing: 'Nike, Uniqlo, Lululemon',
      head: 'Calm',
      food: 'Doordash, Trader Joe’s',
    },
    yunus: {
      name: 'Yunus',
      image: '/res/images/company/target_users/yunus.png',
      text: 'I am a high school student interested in Computer Science and Physics. I enjoy playing chess and practicing French. ',
      person: 'High school student',
      sport: 'Plays chess',
      watch: 'Netflix, BluTV',
      music: 'Spotify, Classical Music',
      shopping: 'Amazon, Trendyol',
      clothing: 'H&M, Zara',
      head: 'None',
      food: 'Yemeksepeti, Getir',
    },
    sarah: {
      name: 'Sarah',
      image: '/res/images/company/target_users/sarah.png',
      text: 'I am a student in London. I do yoga and pilates daily. I am interested in pursuing a career in product design.  ',
      person: 'College student',
      sport: 'Yoga, pilates',
      watch: 'Netflix, Disney +',
      music: 'Spotify',
      shopping: 'Amazon',
      clothing: 'Nike, Uniqlo, Zara',
      head: 'Calm',
      food: 'Pret Subscription',
    }
  };

  return res.render('company/index', {
    page: 'company/index',
    title: 'Unleash Your Users\' Magic',
    meta: 'company',
    includes: {
      external: {
        css: ['page', 'general', 'header', 'confirm', 'logo', 'inputs', 'buttons', 'fontawesome', 'createPage'],
        js: ['page', 'duplicateElement', 'confirm', 'dragAndDrop', 'buttonListeners', 'createPage']
      }
    },
    target_users,
    target_user_details
  });
}
