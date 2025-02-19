
const usersData = [
  {
    avatar:
      "https://hips.hearstapps.com/hmg-prod/images/gettyimages-942065100-copy.jpg?resize=1200:*",
    name: "Rahul Sharma",
    time: "3 min ago",
    status: "Chef",
  },
  {
    avatar:
      "https://cdn.pixabay.com/photo/2021/07/20/14/59/iron-man-6480952_1280.jpg",
    name: "Amit Patel",
    time: "10 min ago",
    status: "Home Maker",
  },
  {
    avatar:
      "https://c4.wallpaperflare.com/wallpaper/739/10/526/scarlett-johansson-face-pink-lipstick-actress-wallpaper-preview.jpg",
    name: "Pooja Gupta",
    time: "3 hours ago",
    status: "Master of Spices",
  },
  {
    avatar:
      "https://www.gannett-cdn.com/presto/2023/02/15/USAT/d22ad1a7-00ec-425f-b1c9-a643fcfcda9f-AFP_AFP_336E7FA.jpg",
    name: "Vikram Mehta",
    time: "4 hours ago",
    status: "Cleaning Expert",
  },
  {
    avatar: "https://flxt.tmsimg.com/assets/308495_v9_bb.jpg",
    name: "Neha Verma",
    time: "8 hours ago",
    status: "Baking Enthusiast",
  },
  {
    avatar:
      "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRpW3LbFgFmL3wF7AxVmNPkfKKVTg3hdeDwJAkQ6ffgI1aqNQH-ofOktw9CRPIIPA8IRuPHc9YeW1BGdTI",
    name: "Arjun Iyer",
    time: "22 hours ago",
    status: "South Indian Cuisine Expert",
  },
  {
    avatar:
      "https://hips.hearstapps.com/hmg-prod/images/chris-hemsworth-poses-during-a-photo-call-for-thor-ragnarok-on-october-15-2017-in-sydney-australia-photo-by-mark-metcalfe_getty-images-for-disney-square.jpg?crop=1xw:0.75xh;center,top&resize=1200:*",
    name: "Rohit Das",
    time: "1 day ago",
    status: "DIY Home Solutions",
  },
  {
    avatar: "https://www.emmys.com/sites/default/files/Mark-Ruffalo.jpg",
    name: "Meera Nair",
    time: "Dec 10",
    status: "Kitchen Organization Pro",
  },
  {
    avatar:
      "https://www.themoviedb.org/t/p/w500/mclHxMm8aPlCPKptP67257F5GPo.jpg",
    name: "Santosh Kumar",
    time: "Dec 8",
    status: "Vegetarian Cooking Specialist",
  },
  {
    avatar: "https://flxt.tmsimg.com/assets/71830_v9_bb.jpg",
    name: "Priya Singh",
    time: "Dec 6",
    status: "Cleaning & Laundry Guru",
  },
  {
    avatar:
      "https://m.media-amazon.com/images/M/MV5BMTk3NDE3Njc5M15BMl5BanBnXkFtZTYwOTY5Nzc1._V1_.jpg",
    name: "Suresh Raina",
    time: "Dec 4",
    status: "Tandoori Expert",
  },
  {
    avatar:
      "https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_FMjpg_UX1000_.jpg",
    name: "Anjali Kapoor",
    time: "Dec 2",
    status: "North Indian Cuisine Queen",
  },
];

// Json data ...........................................
const JsonData = {
  chat1: [
    {
      from: {
        type: "user1",
      },
      msg: {
        message: "Hi, how can I help you?",
      },
    },
    {
      from: {
        type: "user2",
      },
      msg: {
        message:
          "Hi Rahul, my mixer grinder is making a weird noise and not grinding properly. I need to make dosa batter. What should I do?",
      },
    },
    {
      from: {
        type: "user1",
      },
      msg: {
        message:
          "It might be due to overloading or a dull blade. Try reducing the quantity and sharpening the blade. Is it still making noise?",
      },
    },
    {
      from: {
        type: "user2",
      },
      msg: {
        message: "Yes, it is still noisy.",
      },
    },
    {
      from: {
        type: "user1",
      },
      msg: {
        message:
          "Check if something is stuck inside. If it's too old, the motor might be wearing out. You may need a servicing.",
      },
    },
  ],
  chat2: [
    {
      from: {
        type: "user1",
      },
      msg: {
        message: "Hi, how can I help you?",
      },
    },
    {
      from: {
        type: "user2",
      },
      msg: {
        message:
          "Hi Amit, my washing machine is not draining properly. The water is still inside after the wash cycle. What should I do?",
      },
    },
    {
      from: {
        type: "user1",
      },
      msg: {
        message:
          "This can happen due to a clogged drain hose. Have you checked if there is any blockage?",
      },
    },
    {
      from: {
        type: "user2",
      },
      msg: {
        message: "No, I haven’t checked it yet.",
      },
    },
    {
      from: {
        type: "user1",
      },
      msg: {
        message:
          "Try cleaning the drain hose and the filter. If it's still not working, the pump might need a check-up.",
      },
    },
  ],
  chat3: [
    {
      from: {
        type: "user1",
      },
      msg: {
        message: "Hi, how can I help you?",
      },
    },
    {
      from: {
        type: "user2",
      },
      msg: {
        message:
          "Hi Pooja, I want to make perfect round chapatis, but they always turn out uneven. Any tips?",
      },
    },
    {
      from: {
        type: "user1",
      },
      msg: {
        message:
          "Of course! Try kneading the dough properly and let it rest for at least 20 minutes. Also, roll evenly without applying too much pressure.",
      },
    },
    {
      from: {
        type: "user2",
      },
      msg: {
        message:
          "Okay, I’ll try that. Should I use oil while kneading for soft chapatis?",
      },
    },
    {
      from: {
        type: "user1",
      },
      msg: {
        message:
          "Yes, a few drops of oil can make the dough softer. Also, use warm water instead of cold for kneading.",
      },
    },
  ],
  chat4: [
    {
      from: {
        type: "user1",
      },
      msg: {
        message: "Hi, how can I help you?",
      },
    },
    {
      from: {
        type: "user2",
      },
      msg: {
        message:
          "Hi Neha, my cake always turns out too dry. What am I doing wrong?",
      },
    },
    {
      from: {
        type: "user1",
      },
      msg: {
        message:
          "Try adding an extra egg or a little more butter. Also, make sure not to overbake. Are you using an oven thermometer?",
      },
    },
    {
      from: {
        type: "user2",
      },
      msg: {
        message: "No, I just use the oven’s default settings.",
      },
    },
    {
      from: {
        type: "user1",
      },
      msg: {
        message:
          "Ovens can be inaccurate. Use a thermometer for precise baking temperature.",
      },
    },
  ],
};
