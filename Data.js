const data = [
  {
    id: 1,
    companyName: "Wix",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968770.png",
    desc: "Wix is a powerful, code-free website builder that comes equipped with business tools that can help you build something as simple as a personal blog to something as complex as an enterprise-grade hub for your online business. ",
    members: [
      "https://img.freepik.com/free-photo/guy-plaid-shirt_158595-126.jpg?size=626&ext=jpg",
      "https://img.freepik.com/free-photo/portrait-handsome-serious-man_23-2149022617.jpg?size=626&ext=jpg&ga=GA1.1.5000844.1710283029&semt=ais",
      "https://img.freepik.com/premium-photo/young-casual-man-portrait-isolated-yellow-background_1258-5629.jpg?size=626&ext=jpg&ga=GA1.1.5000844.1710283029&semt=ais",
    ],
    category: ["Automation"],
    tags: ["DigitalTransformation"],
    meeting: "in 30 minutes",
    isChecked: false,
  },
  {
    id: 2,
    companyName: "Shopify",
    logo: "https://freelogopng.com/images/all_img/1655836788shopify-icon-png.png",
    desc: "Shopify is the perfect solution for my ecommerce website, which both easy to build and easy to maintain.",
    members: [
      "https://img.freepik.com/free-photo/caucasian-young-man-wearing-pink-shirt-isolated-orange-wall_141793-35811.jpg?size=626&ext=jpg&ga=GA1.1.5000844.1710283029&semt=ais",
      "https://img.freepik.com/free-photo/guy-plaid-shirt_158595-126.jpg?size=626&ext=jpg",
      "https://img.freepik.com/premium-photo/portrait-eastern-arabian-man-purple-background_280538-5458.jpg?size=626&ext=jpg&ga=GA1.1.5000844.1710283029&semt=ais",
      "https://img.freepik.com/free-photo/portrait-handsome-serious-man_23-2149022617.jpg?size=626&ext=jpg&ga=GA1.1.5000844.1710283029&semt=ais",
      "https://img.freepik.com/free-photo/impressed-young-brunette-caucasian-boy-looking-camera-pink_141793-93117.jpg?size=626&ext=jpg&ga=GA1.1.5000844.1710283029&semt=ais",
      "https://img.freepik.com/premium-photo/young-casual-man-portrait-isolated-yellow-background_1258-5629.jpg?size=626&ext=jpg&ga=GA1.1.5000844.1710283029&semt=ais",
    ],
    category: ["E-commerce", "B2B"],
    tags: ["OnlineShoping", "Digital"],
    meeting: "Tommorow",
    isChecked: false,
  },
  {
    id: 3,
    companyName: "MailChimp",
    logo: "https://static-00.iconduck.com/assets.00/mailchimp-icon-2048x2048-7tjwbg42.png",
    desc: "Mailchimp is an all-in-one marketing platform that helps you manage and talk to your clients, customers, and other interested parties. Our approach to marketing focuses on healthy contact management practices, beautifully designed emails, unique automated workflows, and powerful data analysis.",
    members: [
      "https://img.freepik.com/free-photo/guy-plaid-shirt_158595-126.jpg?size=626&ext=jpg",
      "https://img.freepik.com/premium-photo/young-casual-man-portrait-isolated-yellow-background_1258-5629.jpg?size=626&ext=jpg&ga=GA1.1.5000844.1710283029&semt=ais",
    ],
    category: ["SAAS", "Mobile"],
    tags: ["Techinnovation", "Cloud"],
    meeting: "Tomorrow",
    isChecked: true,
  },
  {
    id: 4,
    companyName: "Paypal",
    logo: "https://asset.brandfetch.io/id-Wd4a4TS/idcMv2R0rt.png",
    desc: "PayPal is an online payment system that allows you to send and receive money around the world. You can link your bank account, credit card, or debit card. You can also have a balance in your PayPal account.",
    members: [
      "https://img.freepik.com/free-photo/impressed-young-brunette-caucasian-boy-looking-camera-pink_141793-93117.jpg?size=626&ext=jpg&ga=GA1.1.5000844.1710283029&semt=ais",
      "https://img.freepik.com/free-photo/young-handsome-guy-wearing-black-t-shirt-isolated-white-wall_141793-86752.jpg?size=626&ext=jpg&ga=GA1.1.5000844.1710283029&semt=ais",
      "https://img.freepik.com/premium-photo/young-casual-man-portrait-isolated-yellow-background_1258-5629.jpg?size=626&ext=jpg&ga=GA1.1.5000844.1710283029&semt=ais",
    ],
    category: ["Marketplace"],
    tags: ["BuySellOnline", "Online"],
    meeting: "in 6 hours",
    isChecked: false,
  },
  {
    id: 5,
    companyName: "Disney",
    logo: "https://mdcthereporter.com/wp-content/uploads/2019/09/Disney-Logo.jpeg",
    desc: "Entertain, inform and inspire people around the globe through the power of unparalleled storytelling, reflecting the iconic brands, creative minds and innovative technologies that make ours the world's premier entertainment company.",
    members: [
      "https://img.freepik.com/free-photo/guy-plaid-shirt_158595-126.jpg?size=626&ext=jpg",
      "https://img.freepik.com/free-photo/man-is-happy-smiling-with-his-eyes_114579-13387.jpg?size=626&ext=jpg&ga=GA1.1.5000844.1710283029&semt=ais",
      "https://img.freepik.com/free-photo/portrait-handsome-serious-man_23-2149022617.jpg?size=626&ext=jpg&ga=GA1.1.5000844.1710283029&semt=ais",
      "https://img.freepik.com/premium-photo/young-casual-man-portrait-isolated-yellow-background_1258-5629.jpg?size=626&ext=jpg&ga=GA1.1.5000844.1710283029&semt=ais",
    ],
    category: ["B2B", "B2C"],
    tags: ["BusinessPartnership"],
    meeting: "No contact",
    isChecked: false,
  },
  {
    id: 6,
    companyName: "Intercom",
    logo: "https://cdn.freebiesupply.com/logos/large/2x/intercom-2-logo-png-transparent.png",
    desc: "An intercom, also called an intercommunication device, intercommunicator, or interphone, is a stand-alone voice communications system for use within a building, small collection of buildings or portably within a small coverage area, which functions independently of the public telephone network.",
    members: [
      "https://img.freepik.com/free-photo/guy-plaid-shirt_158595-126.jpg?size=626&ext=jpg",
      "https://img.freepik.com/free-photo/portrait-handsome-serious-man_23-2149022617.jpg?size=626&ext=jpg&ga=GA1.1.5000844.1710283029&semt=ais",
      "https://img.freepik.com/premium-photo/young-casual-man-portrait-isolated-yellow-background_1258-5629.jpg?size=626&ext=jpg&ga=GA1.1.5000844.1710283029&semt=ais",
    ],
    category: ["Technology", "SAAS"],
    tags: ["SmartFinance", "SAAS"],
    meeting: "in 1 hour",
    isChecked: true,
  },
  {
    id: 7,
    companyName: "Google",
    logo: "https://freelogopng.com/images/all_img/1657955079google-icon-png.png",
    desc: "Google is a popular internet search engine. It scans the Web to find Web pages that are relevant to the words you have typed in the search box.",
    members: [
      "https://img.freepik.com/free-photo/guy-plaid-shirt_158595-126.jpg?size=626&ext=jpg",
      "https://img.freepik.com/free-photo/portrait-handsome-serious-man_23-2149022617.jpg?size=626&ext=jpg&ga=GA1.1.5000844.1710283029&semt=ais",
      "https://img.freepik.com/premium-photo/young-casual-man-portrait-isolated-yellow-background_1258-5629.jpg?size=626&ext=jpg&ga=GA1.1.5000844.1710283029&semt=ais",
    ],
    category: ["Finance", "Automation"],
    tags: ["SmartFinance", "WorkFlow"],
    meeting: "in 30 minutes",
    isChecked: false,
  },
  {
    id: 8,
    companyName: "Evernote",
    logo: "https://logos-world.net/wp-content/uploads/2021/03/Evernote-Logo.png",
    desc: "Evernote is a note-taking and task-management application developed by the Evernote Corporation. It is intended for archiving and creating notes with embedded photos, audio, and saved web content.",
    members: [
      "https://img.freepik.com/premium-photo/portrait-bearded-man_53876-29108.jpg?size=626&ext=jpg&ga=GA1.1.5000844.1710283029&semt=ais",
      "https://img.freepik.com/free-photo/guy-plaid-shirt_158595-126.jpg?size=626&ext=jpg",
      "https://img.freepik.com/premium-photo/young-handsome-indian-hipster-man-against-black-wall_251136-70311.jpg?size=626&ext=jpg&ga=GA1.1.5000844.1710283029&semt=ais",
      "https://img.freepik.com/free-photo/portrait-handsome-serious-man_23-2149022617.jpg?size=626&ext=jpg&ga=GA1.1.5000844.1710283029&semt=ais",
      "https://img.freepik.com/premium-photo/young-casual-man-portrait-isolated-yellow-background_1258-5629.jpg?size=626&ext=jpg&ga=GA1.1.5000844.1710283029&semt=ais",
    ],
    category: ["Transportation"],
    tags: ["Logistic", "UX"],
    meeting: "Next month",
    isChecked: false,
  },
  {
    id: 9,
    companyName: "Microsoft",
    logo: "https://www.freepnglogos.com/uploads/microsoft-window-logo-emblem-0.png",
    desc: "Microsoft is the largest vendor of computer software in the world. It is also a leading provider of cloud computing services, video games, computer and gaming hardware, search and other online services.",
    members: [
      "https://img.freepik.com/free-photo/smiling-businessman-face-portrait-wearing-suit_53876-148138.jpg?size=626&ext=jpg&ga=GA1.1.5000844.1710283029&semt=ais",
      "https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg?size=626&ext=jpg&ga=GA1.1.5000844.1710283029&semt=ais",
      "https://img.freepik.com/free-photo/guy-plaid-shirt_158595-126.jpg?size=626&ext=jpg",
      "https://img.freepik.com/free-photo/portrait-handsome-serious-man_23-2149022617.jpg?size=626&ext=jpg&ga=GA1.1.5000844.1710283029&semt=ais",
      "https://img.freepik.com/premium-photo/young-casual-man-portrait-isolated-yellow-background_1258-5629.jpg?size=626&ext=jpg&ga=GA1.1.5000844.1710283029&semt=ais",
    ],
    category: ["Publishing", "B2C"],
    tags: ["B2CMarketing", "RetailIT"],
    meeting: "No contact",
    isChecked: false,
  },
  {
    id: 10,
    companyName: "Invision",
    logo: "https://cdn.icon-icons.com/icons2/2429/PNG/512/invision_logo_icon_147275.png",
    desc: "InVision is the visual collaboration platform powering the world's smartest companies. ",
    members: [
      "https://img.freepik.com/free-photo/guy-plaid-shirt_158595-126.jpg?size=626&ext=jpg",
      "https://img.freepik.com/free-photo/portrait-handsome-serious-man_23-2149022617.jpg?size=626&ext=jpg&ga=GA1.1.5000844.1710283029&semt=ais",
      "https://img.freepik.com/premium-photo/young-casual-man-portrait-isolated-yellow-background_1258-5629.jpg?size=626&ext=jpg&ga=GA1.1.5000844.1710283029&semt=ais",
      "https://img.freepik.com/free-photo/front-view-handsome-man-with-glasses_23-2148946194.jpg?size=626&ext=jpg&ga=GA1.1.5000844.1710283029&semt=ais",
    ],
    category: ["Webservice"],
    tags: ["APIIntegration"],
    meeting: "Next month",
    isChecked: true,
  },
];
