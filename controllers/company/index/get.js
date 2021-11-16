// Get /company landing page


module.exports = (req, res) => {
  const target_users = [
    {
      _id: 'tom',
      image: '/res/images/company/target_users/cole.png',
      name: 'Cole',
      occupation: 'Student',
      country: '🇺🇸 USA',
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
      occupation: 'New Graduate',
      country: '🇺🇸 USA',
      city: '💙 Ann Arbor',
      paid_subscriptions: '💙 Ann Arbor',
      hobbies: '🎨 Painting',
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
      country: '🇬🇧 İngiltere',
      city: '🚇 Londra',
      paid_subscriptions: '🚇 Londra',
      hobbies: '🎹 Piano',
      favorite_products: '⌚️ Apple Watch',
      favorite_apps: '🌱 Lifesum'
    }
  ];
  const target_user_details = {
    tom: {
      name: 'Mete',
      image: '/res/images/company/target_users/cole.png',
      text: 'I am a freshman at Boğaziçi University, studying business administration. I am a former tennis player and a Fenerbahçe fan. So much for marketing...',
      person: 'College Student',
      sport: 'Tennis, Soccer',
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
      text: 'I just graduated from the business department. I am looking for new opportunities in consulting and analytics. Related to...',
      person: 'New Graduate',
      sport: 'Tenis, Zumba, HIIT',
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
      text: 'I am a student interested in CS and physics. I like playing chess and speaking french.',
      person: 'High School Student',
      sport: 'Chess',
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
      text: 'I am student from London. I do daily yoga and pilates. I want to pursue a carreer on product design.',
      person: 'College Student',
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
        'Usersmagic helped us not only validate our ideas but also really understand why our users behaved the way they did',
      ]
    },
    {
      name: 'Alptekin Can',
      position: 'CEO, Clay',
      image: '/res/images/company/user_quotes/default.png',
      text: [
        'Using Usersmagic on a regular basis, we quickly developed our apps and achieved growth by providing a better user experience',
      ]
    },
    {
      name: 'Burak Demir',
      position: 'COO, Zerosum',
      image: '/res/images/company/user_quotes/default.png',
      text: [
        'Thanks to the detailed feedback and answers we received on Usersmagic, we can improve our games quickly.'
      ]
    },
    {
      name: 'Ceyda Balcı',
      position: 'Digital Marketing & Content Manager, Teknosa',
      image: '/res/images/company/user_quotes/teknosa.png',
      text: [
        'Usersmagic helped us not only validate our ideas but also really understand why our users behaved the way they did',
      ]
    },
    {
      name: 'Alptekin Can',
      position: 'CEO, Clay',
      image: '/res/images/company/user_quotes/default.png',
      text: [
        'Using Usersmagic on a regular basis, we quickly developed our apps and achieved growth by providing a better user experience',
      ]
    },
    {
      name: 'Burak Demir',
      position: 'COO, Zerosum',
      image: '/res/images/company/user_quotes/default.png',
      text: [
        'Thanks to the detailed feedback and answers we received on Usersmagic, we can improve our games quickly.'
      ]
    },
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

  return res.render('company/index', {
    page: 'company/index',
    title: 'Hedef kitlenizi belirleyin',
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
    questions
  });
}
