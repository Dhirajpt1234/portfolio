import intenshipCert from "../images/research_internship_cert.png";
import iMochaLogo from "../images/imocha_logo.jpeg";
import PCSBLogo from "../images/PCSB_logo.jpeg";
import CodewallaLogo from "../images/codewalla_logo.jpeg";
import MathVizHomePage from "../images/mathwiz_home.jpg";
import XeniaHomePage from "../images/xenia_22_home.png";
import lawgptImage from "../images/lawgpt_sample.jpeg";
import dispenserImage from "../images/dispenserImage.png";
import resolveITImage from "../images/resolveIT.png";
import woodkeepImage from "../images/woodkeep.png";

export const Bio = {
  name: "Dhiraj P Thorat",
  roles: ["Full Stack Developer", "Competitive Programmer", "Programmer"],
  description:
    "I'm someone who loves taking on new challenges and is always ready to learn. I'm passionate about delivering top-notch results and bring a positive attitude to everything I do. With a growth mindset, I'm eager to make a meaningful contribution and achieve great things. Let's tackle challenges together and create some awesome outcomes!",
  github: "https://github.com/dhirajpt1234",
  resume:
    "https://drive.google.com/drive/folders/15rsKsCyQcZ0XikaQxgBax0sIFv6MI_5S?usp=sharing",
  linkedin: "https://www.linkedin.com/in/dhiraj-thorat-073970215/",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Redux",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },

      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
        name: "Material UI",
        image:
          "data:image/png;base64,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",
      },
      {
        name: "TypeScript",
        image:
          "data:image/png;base64,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",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Express Js",
        image:
          "data:image/png;base64,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",
      },
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
    ],
  },
  {
    title: "Android",
    skills: [
      {
        name: "Java",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      },
      {
        name: "XML",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMw6_RdwKQ9bDFfnKDX1iwMl4bVJEvd9PP53XuIw&s",
      },
      {
        name: "Android Studio",
        image:
          "https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:
          "data:image/png;base64,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",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "Docker",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      },
      {
        name: "Netlify",
        image:
          "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image:
          "data:image/png;base64,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",
      },
    ],
  },
];

export const experiences = [
  {
    id: 3,
    img: CodewallaLogo,
    role: "Software Engineer",
    company: "Codewalla - internship",
    date: "Jan 2024 - Present",
    desc: "Currently Working as a Full Stack Developer, specializing in internal development tools. Contributed to the development of CoachWalla, an employee performance tracking and management system.",
    skills: [
      "React JS",
      "Node JS",
      "Mongo DB",
      "Express",
      "Typescript",
      "Software Development",
      "Testing",
    ],
  },
  {
    id: 2,
    img: "https://pict.edu/images/pic.jpg",
    role: "Research Intern",
    company: "PICT Research Department - internship",
    date: "Feb 2023 - May 2023",
    desc: "Successfully built a GUI Application which prompted the user to input text and subsequently generated the image decoded from the text. The model attained an accuracy of around 80%. Some of the technologies used in the project were a fusion between the Stable Diffusion and Karlo Pipeline along with Transformers, Diffusers, Gradio. The Karlo pipeline was used for text-to-image generation and stable diffusion was used as an upscaler for the image. We used Streamlit to implement our model on a web application.",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Stable Diffusion",
      "karlo",
      "streamlit",
      "Gradio",
      "Generial Adversial Networks",
    ],
    doc: intenshipCert,
  },
  {
    id: 1,
    img: iMochaLogo,
    role: "Problem Setter Intern",
    company: "I-mocha Works - freelance",
    date: "Sept 2022 - Jan 2023",
    desc: "My work includes setting and curating problems based on concepts of Data Structures and Algorithms(DSA). These problems were used in coding rounds as well as technical interviews for candidate assessment.",
    skills: [
      "Data Structures",
      "Algorithms",
      "Problem Solving",
      "C++",
      "Competitive Programming",
    ],
  },
  {
    id: 0,
    img: PCSBLogo,
    role: "Full Stack Developer",
    company: "PICT CSI Student Branch - part time",
    date: "Feb 2022 - Jan 2o23",
    desc: "Contributed in Full stack applications of Club events.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "ReactJS",
      "Redux",
      "NodeJs",
      "Express JS",
      "MonogDB",
      "Material UI",
      "BootStrap",
      "REST API",
    ],
  },
];

export const educations = [
  {
    id: 0,
    img: "https://pict.edu/images/pic.jpg",
    school: "Pune Institute of Computer Technology, Dhankawadi",
    date: "Aug 2020 - July 2024",
    grade: "9.21 CGPA",
    desc: "Pursued a Bachelor's degree in Electronics and Telecommunicataions Engineering at Pune Institute of Computer Technology, Dhankawadi. I have completed Data Structres and Algorithms, Object Oriented Programming, Database Management Systems, Cloud Computing, Computer Network and Security and other Computer fundamentals in my academic. I am also actively participating in extra-curricular activities and have been held many leadership positions in various college clubs.",
    degree: "B.E in Electronics and Telecommunicataions Engineering",
  },
  {
    id: 1,
    img: "data:image/jpeg;base64,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",
    school: "Hutatma Rajguru Mahavidyalaya, Rajgurunagar",
    date: "Jun 2018 - Apr 2020",
    grade: "87.27%",
    desc: "Completed my class 12 high school education at Hutatma Rajguru Mahavidyalaya, Rajgurunagar. I completed basic PCMB course in my acedemics",
    degree: "HSC(XII), Science",
  },
];

export const projects = [
  {
    id: 0,
    title: "MathWiz",
    date: "April 2022 - Aug 2023",
    description:
      "Mathwiz is essentially a math virtual lab aimed at making complex mathematical concepts more accessible and understandable to students. We have tried to provide an interactive and practical learning platform for mathematical topics that can be challenging to grasp through traditional theoretical and analytical methods. Users can interactively input their own functions, set parameters/limits, and visualize the results in real-time through tables and curve diagrams. The visualizations play a crucial role in enhancing the learning process, as they allow users to gain insights into how these mathematical entities work under different scenarios. Visually appealing and interactive graphs serve as a powerful medium for comprehension and retainment of these mathematical concepts. MathViz also offers step-by-step explanations and intuitive visualizations, making it a powerful educational tool that bridges the gap between theory and practical application.",
    image: MathVizHomePage,
    tags: [
      "React JS",
      "Python Flask",
      "Docker",
      "Sympy",
      "Numpy",
      "Matplotlib",
      "prettytable",
      "Redux",
      "React Latex/Katex",
    ],
    category: "web app",
    github: "https://github.com/Dhirajpt1234/MathViz",
  },
  {
    id: 1,
    title: "Xenia'22 Website",
    date: "Jun 2022 - Aug 2022",
    description:
      "Created a website for a nationwide tech-fest called Xenia. The site handles everything from registrations to displaying content and making payments. It acts as the main source of information for all events, schedules, and sponsors. We integrated a payment system using Razorpay. During peak times, the site is accessed by at least 5000 people, so it needs to be very user-friendly and interactive.",
    image: XeniaHomePage,
    tags: [
      "React Js",
      "MongoDb",
      "Node Js",
      "Express Js",
      "Redux",
      "Passport",
      "Passport-local",
    ],
    category: "web app",
    github: "https://github.com/Dhirajpt1234/Xenia_2022",
    webapp: "https://www.pcsbxenia.com/",
  },
  {
    id: 2,
    title: "Law-GPT",
    date: "Sep 2023 - Mar 2024",
    description:
      "Law-GPT: Your Personal Legal Assistant for Indian Court Cases! 🇮🇳. This advanced chatbot uses Retrieval-Augmented Generation (RAG) to provide precise answers about the Indian legal system. With a user-friendly interface, it caters to both legal professionals and the general public. Law-GPT is context-aware, delivering personalized answers based on past interactions and reliable information from trusted legal documents. It covers everything from basic legal concepts to complex case laws, helping legal professionals and students save time on research and making legal information accessible to everyone. Law-GPT empowers individuals to navigate the legal system with confidence.",
    image: lawgptImage,
    tags: ["RAG", "Langchain", "LLMs", "vector databases"],
    category: "AIML",
    github: "https://github.com/Dhirajpt1234/LawGPT",
  },
  {
    id: 3,
    title: "AUTOMATIC FOOD AND WATER DISPENSER FOR PET ANIMALS",
    date: "Jan 2023 - Apr 2023",
    description:
      "Developed an automatic food and water dispenser for pets using a custom microcontroller board based on the AtMega128P. The dispenser features an automated feeding system that allows scheduling feeding times and portion sizes, promoting healthy eating habits. It also includes hydration monitoring to ensure pets always have water. An IR sensor detects when a pet is near, triggering food dispensing to conserve food and reduce pet stress. The system delivers precise food portions using a combination of mechanical and software components for accuracy.",
    image: dispenserImage,
    tags: [
      "Microcontrollers",
      "Arduino IDE",
      "Power Supplies",
      "Digital Electronics",
    ],
    category: "IOT",
    github:
      "https://drive.google.com/drive/u/0/folders/1WXFlGUndKvAcfAlSmT17pGn3PJP7dyHc",
  },
  {
    id: 4,
    title: "ResolveIT",
    // date: "July 2022 - Sept 2022",
    description:
      "Created a dynamic web application using ReactJs and NodeJs to help citizens report issues, submit feedback, and monitor infrastructure projects and public services. The goal was to promote transparency and accountability in governance. The application includes features like live validation of reported issues with image submissions and real-time feedback on ongoing projects. By leveraging technologies such as JWT and Multer, we empowered citizens to actively engage and contribute to better governance.",
    image: resolveITImage,
    tags: ["React JS", "Node JS", "JWT", "Multer", "postman API"],
    category: "web app",
    github: "https://github.com/Dhirajpt1234/ResolveIT",
  },
  {
    id: 5,
    title: "Woodkeep",
    date: "July 2022 - Sept 2022",
    description:
      "Woodkeep is text manupulating website. Mainly built on react js. It provides tools such as word count, alphabet count, copy to clipboard and others.",
    image: woodkeepImage,
    tags: ["HTML", "CSS", "Javascript", "React Js", "Redux"],
    category: "web app",
    github: "https://github.com/Dhirajpt1234/WoodKeep",
  },
];

export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];
