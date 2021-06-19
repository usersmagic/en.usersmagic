// Get /company landing page

const Question = require('../../../models/question/Question');

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
  const user_quotes = [
    {
      name: 'Ceyda Balcı',
      position: 'Digital Marketing & Content Manager, Teknosa',
      image: '/res/images/company/user_quotes/teknosa.png',
      text: [
        'Usersmagic helped us not only validate our ideas but also really understand',
        'why',
        'our users behaved the way they did'
      ]
    },
    {
      name: 'Ceyda Balcı',
      position: 'Digital Marketing & Content Manager, Teknosa',
      image: '/res/images/company/user_quotes/teknosa.png',
      text: [
        'Usersmagic helped us not only validate our ideas but also really understand',
        'why',
        'our users behaved the way they did'
      ]
    },
    {
      name: 'Ceyda Balcı',
      position: 'Digital Marketing & Content Manager, Teknosa',
      image: '/res/images/company/user_quotes/teknosa.png',
      text: [
        'Usersmagic helped us not only validate our ideas but also really understand',
        'why',
        'our users behaved the way they did'
      ]
    },
    {
      name: 'Ceyda Balcı',
      position: 'Digital Marketing & Content Manager, Teknosa',
      image: '/res/images/company/user_quotes/teknosa.png',
      text: [
        'Usersmagic helped us not only validate our ideas but also really understand',
        'why',
        'our users behaved the way they did'
      ]
    },
    {
      name: 'Ceyda Balcı',
      position: 'Digital Marketing & Content Manager, Teknosa',
      image: '/res/images/company/user_quotes/teknosa.png',
      text: [
        'Usersmagic helped us not only validate our ideas but also really understand',
        'why',
        'our users behaved the way they did'
      ]
    },
    {
      name: 'Ceyda Balcı',
      position: 'Digital Marketing & Content Manager, Teknosa',
      image: '/res/images/company/user_quotes/teknosa.png',
      text: [
        'Usersmagic helped us not only validate our ideas but also really understand',
        'why',
        'our users behaved the way they did'
      ]
    }
  ];
  const target = {
    _id: '00000000000',
    filters: {},
    status: 'approved',
    project_id: '00000000000',
    name: 'College Students',
    description: 'The US students that are at the college',
    country: 'us',
    submition_limit: 0
  };
  const questions = [
    {
      "_id":"q45doctzyeb",
      "type":"multiple_choice",
      "text":"Do you use Android or IOS",
      "details":"",
      "answers": {"Android":14,"Iphone":11},
      "data": {"max":"Android","total":25}
    },
    {
      "_id":"oiv79sp0ka",
      "type":"opinion_scale",
      "text":"How easy was it to find Usersmagic App on App Store or Play Store?",
      "details":"",
      "answers":{"1":14,"2":2,"3":2,"4":0,"5":3,"6":0,"7":2,"8":0,"9":0,"10":2},
      "answer_percentages":{"1":56.00000000000001,"2":8,"3":8,"4":0,"5":12,"6":0,"7":8,"8":0,"9":0,"10":8},
      "data":{"mean":2.9,"median":1,"total_number":25},
      "range":{"min":1,"max":10},
      "labels":{"left":"Easier","middle":"Medium","right":"Harder"}
    },
    {
      "_id":"4yzjo6xjzvd",
      "type":"open_answer",
      "text":"Why?",
      "details":"",
      "answers":[
        "It was on the 6th row when I searched",
        "It directly appeared when I searched",
        "I couldn't find at all",
        "It suddenly appeared when I searched",
        "First different apps came out but then I manage to find it",
        "Easy to find it. It was the first search result",
        "Too easy, it was the superior result",
        "Too easy, with a single search",
        "I struggled finding it, first I made a typo",
        "I couldn't notice at first",
        "It didn't appear as a primary result",
        "It suddenly appeared when I searched",
        "Due to similar apps, I struggled finding it",
        "I found it easily",
        "It suddenly appeared when I searched",
        "It was pretty quick",
        "It appeared at the 6th row. That's why I gave a 2",
        "It was easy to find",
        "It appeared at the 6th row",
        "It suddenly appeared when I searched",
        "I couldn't find",
        "It suddenly came out, piece of cake",
        "Other apps came out when I first wrote Usersmagic",
        "It was pretty easy to find. It appeared as a primary result",
      ]
    }
  ];

  Question.getFiltersByCountry(target.country, (err, filters) => {
    if (err) return res.redirect('/tester');

    return res.render('company/index', {
      page: 'company/index',
      title: 'Unleash Your Users\' Magic',
      meta: 'company',
      includes: {
        external: {
          css: ['page', 'general', 'header', 'confirm', 'logo', 'inputs', 'buttons', 'fontawesome', 'createPage', 'filterPage', 'reportPage'],
          js: ['page', 'duplicateElement', 'confirm', 'dragAndDrop', 'buttonListeners', 'createPage', 'filterPage', 'reportPage', 'headerListener']
        }
      },
      target_users,
      target_user_details,
      user_quotes,
      target,
      filters,
      questions
    });
  });
}
