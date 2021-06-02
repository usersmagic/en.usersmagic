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
      "text":"Are you an Android user or an iPhone user?",
      "details":"",
      "answers": {"Android":14,"Iphone":11},
      "data": {"max":"Android","total":25}
    },
    {
      "_id":"oiv79sp0ka",
      "type":"opinion_scale",
      "text":"How easy was it to find the Usersmagic app in the Play Store or App Store?",
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
        "When I typed it into the search box, it appeared in the sixth place",
        "It popped up right away because I typed it into the search box.",
        "I couldnt find it",
        "As soon as the author wrote, I found it very easy",
        "When usersmagic was typed at first, other applications appeared.",
        "When I typed the name of the application, it appeared in the first place, so it was very easy to find",
        "The app was easy to find, typing its name appeared at the top",
        "I found a lot of tin in one search.",
        "I had a hard time searching, I spelled the application name wrong at first.",
        "It wasn't noticeable in the search section.",
        "It doesn't come out first.",
        "Output as soon as I type in the search bar",
        "Because there are many applications",
        "I wrote it out",
        "The author did not write",
        "it was so fast",
        "When I wrote his name, he was in the 6th place, that's why I gave 2",
        "It was easy to find output the moment I typed it into the search button.",
        "When I typed it into the search box, it appeared in the sixth place.",
        "It popped up right away because I typed it into the search box.",
        "I couldnt find it",
        "As soon as the author wrote, I found it very easy",
        "When usersmagic was typed at first, other applications appeared.",
        "When I typed the name of the application, it appeared in the first place, so it was very easy to find",
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
