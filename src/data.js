import { images } from "./constant";
const data = {
  skills: [
    {
      name: "React js",
      bgColor: "#edf2f8",
      icon: images.react,
    },
    {
      name: "Javascript",
      bgColor: "#edf2f8",
      icon: images.javascript,
    },
    {
      name: "HTML",
      bgColor: "#edf2f8",
      icon: images.html,
    },
    {
      name: "CSS",
      bgColor: "#edf2f8",
      icon: images.css,
    },
    {
      name: "Git",
      bgColor: "#edf2f8",
      icon: images.git,
    },
  ],
  experiences: [
    {
      year: "2021",
      works: [
        {
          name: "Frontend Developer",
          company: "Google",
          desc: "I worked as a frontend developer at Google",
        },
      ],
    },
    {
      year: "2022",
      works: [
        {
          name: "Frontend Developer",
          company: "Google",
          desc: "I worked as a frontend developer at Google",
        },
      ],
    },
    {
      year: "2020",
      works: [
        {
          name: "Frontend Developer",
          company: "Google",
          desc: "I worked as a frontend developer at Google",
        },
      ],
    },
  ],

  works: [
    {
      title: "airbnb",
      description: "next js app like airbnb",
      projectLink: "",
      codeLink: "",
      imgUrl: images.about03,
      tags: ["Web App", "All"],
    },
    {
      title: "airbnb",
      description: "next js app like airbnb",
      projectLink: "",
      codeLink: "",
      imgUrl: images.about04,
      tags: ["UI/UX", "All"],
    },
    {
      title: "airbnb",
      description: "next js app like airbnb",
      projectLink: "",
      codeLink: "",
      imgUrl: images.about02,
      tags: ["Mobile App", "All"],
    },
    {
      title: "airbnb",
      description: "next js app like airbnb",
      projectLink: "",
      codeLink: "",
      imgUrl: images.about01,
      tags: ["React JS", "All"],
    },
  ],
  testimonial:[
    {
      name:'milad 1',
      company:'zana',
      imgUrl:images.person,
      feedback:'feedback'
    },
    {
      name:'milad 2',
      company:'zana',
      imgUrl:images.person,
      feedback:'feedback'
    },    {
      name:'milad 3',
      company:'zana',
      imgUrl:images.person,
      feedback:'feedback'
    },
  ],
  brands:[
    {
      name:'amazon',
      imgUrl:images.amazon
    },
    {
      name:'figma',
      imgUrl:images.figma
    },    {
      name:'git',
      imgUrl:images.git
    },
  ]
};

export default data;
