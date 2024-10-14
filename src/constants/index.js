import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Electricity Consumption Prediction App for South Carolina using R and Shiny",
    description:
      "An interactive application built as part of the IST-687 course to predict electricity consumption based on property details and environmental factors. It includes features like data visualization and model-driven energy usage predictions.",
    technologies: ["Python", "Shiny", "Machine Learning", "Data Science", "Cloud Deployment"],
    image: "/src/assets/projects/electrical-energy.png", // Path to the image
    link: "https://rijulugawekar17.shinyapps.io/IDSFINAL/",
  },
  {
    title: "Finite U Job Search - SQL Project",
    description:
      "This SQL-based application aims to solve the problem faced by international students looking for on-campus jobs. It ensures fair distribution of job opportunities by prioritizing job allocation for students without on-campus jobs.",
    technologies: ["SQL"],
    image: "/path/to/finite-u-job-search-image.png", // Replace with the actual image path
    link: "https://github.com/techwthjul/Student_Employment_App_SQL", // Your GitHub link for the project
  },
  {
    title: "CyberPulse: Predictive Threat Detection",
    description:
      "This project leverages machine learning to analyze a comprehensive dataset of cybersecurity incidents in India, aiming to enhance CyberHex's capability to quickly identify and mitigate potential threats. By utilizing XGBoost, the project focused on feature engineering, data cleaning, model training, and achieving high accuracy for anomaly detection in the cybersecurity domain.",
    technologies: ["Python", "XGBoost", "Machine Learning", "Data Science", "Cybersecurity"],
    image: "/path/to/cyberpulse-threat-detection.png", // Replace with the actual image path
    link: "https://github.com/techwthjul/ML-CyberPulse-ThreatDetection", // GitHub link for the project
  },
  // Add more projects here if needed
];

export const CONTACT = {
  address: "New York, United States",
  phoneNo: "+1-(315)8320217",
  email: "rnugawek@syr.edu",
};