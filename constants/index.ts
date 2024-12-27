import {
  RiFacebookFill,
  RiTwitterXFill,
  RiLinkedinFill,
  RiInstagramLine,
  RiHtml5Line,
  RiCss3Fill,
  RiReactjsFill,
  RiNextjsLine,
  RiNodejsFill,
} from "react-icons/ri";
import { SiFigma } from "react-icons/si";
import { DiJsBadge } from "react-icons/di";

export const socials = [
  {
    name: "instagram",
    icon: RiInstagramLine,
    path: "https://www.instagram.com",
  },
  {
    name: "facebook",
    icon: RiFacebookFill,
    path: "https://www.facebook.com",
  },
  {
    name: "xcom",
    icon: RiTwitterXFill,
    path: "https://x.com",
  },
  {
    name: "linkedin",
    icon: RiLinkedinFill,
    path: "https://www.linkedin.com",
  },
];

export const links = [
  { name: "home" },
  { name: "about" },
  { name: "journey" },
  { name: "work" },
  { name: "contact" },
];

export const statsData = [
  {
    endCountNum: 10,
    endCountText: "+",
    text: "Yrs. of Experience",
  },
  {
    endCountNum: 100,
    endCountText: "+",
    text: "Websites Built",
  },
  {
    endCountNum: 95,
    endCountText: "%",
    text: "Clients Satisfied",
  },
];

export const services = [
  {
    icon: "/assets/services/icon-1.svg",
    title: "UI/UX Design",
    description: "Designing compelling engaging user experiences",
  },
  {
    icon: "/assets/services/icon-2.svg",
    title: "Web Development",
    description: "Developing robust, scalable websites for all devices",
  },
  {
    icon: "/assets/services/icon-3.svg",
    title: "E-commerce Solutions",
    description: "Building secure, user-friendly online stores to drive sales",
  },
  {
    icon: "/assets/services/icon-4.svg",
    title: "Care and Support",
    description: "Providing updates, security, support for performance",
  },
];

export const journey = [
  {
    type: "experience",
    company: "Odelao Labs",
    logoUrl: "/assets/journey/experience/logo-1.svg",
    position: "Full Stack Developer",
    duration: "Feb 2024 - Present",
    description:
      "Build full-stack solutions using React.js, Node.js, Next.js. Integrated frontend and backend technologies.",
  },
  {
    type: "experience",
    company: "Stack3d",
    logoUrl: "/assets/journey/experience/logo-2.svg",
    position: "Frontend Developer",
    duration: "Jun 2023 - Jan 2024",
    description:
      "Build websites and web apps using Next.js Tailwind CSS and Javascript. Worked on scalable, user-friendly solutions.",
  },
  {
    type: "experience",
    company: "Magnolia",
    logoUrl: "/assets/journey/experience/logo-3.svg",
    position: "UI/UX Designer",
    duration: "Jan 2023 - Jun 2023",
    description:
      "Designed web interfaces whit cross-browser compatibility and responsiveness using Figma. Delivered pixsel-perfect designs.",
  },
  {
    type: "experience",
    company: "Warpspeed Inc",
    logoUrl: "/assets/journey/experience/logo-4.svg",
    position: "Web Developer",
    duration: "Oct 2022 - Jan 2023",
    description:
      "Developed responsive websites using HTML, CSS, and JavaScrypt. Ensured seamless user experience.",
  },
  {
    type: "education",
    institution: "Udemy",
    logoUrl: "/assets/journey/education/logo-1.svg",
    qualification: "Web Development Bootcamp",
    duration: "Sep 2023 - Dec 2023",
    description:
      "Learned full-stack development concepts, focusing on React and Node.js, and APIs. Completed hand-on projects to solidify skills.",
  },
  {
    type: "education",
    institution: "CodeAcademy Bootcamp",
    logoUrl: "/assets/journey/education/logo-2.svg",
    qualification: "Full Stack Developer Sertification",
    duration: "Sep 2022 - Jun 2023",
    description:
      "Gained experience in frontend and backend technologies, including React, Node.js and databases.",
  },
  {
    type: "education",
    institution: "Design Institute",
    logoUrl: "/assets/journey/education/institution.svg",
    qualification: "UI/UX Diploma",
    duration: "Sep 2021 - May 2022",
    description:
      "Studied advanced principles of user interface and user experience design. Developed skills in prototyping, wireframing, and usability testing.",
  },
  {
    type: "education",
    institution: "Business School",
    logoUrl: "/assets/journey/education/institution.svg",
    qualification: "Project Management Certificate",
    duration: "Sep 2023 - May 2024",
    description:
      "Completed certification in project management, focusing on Agile methodologies, effective team colaboration, project planning, budgeting, and risk management.",
  },
  {
    type: "skills",
    name: "HTML",
    icon: RiHtml5Line,
    duration: "Learned in 2022",
    description:
      "Crafted structured web content using HTML effectively for morden websites, ensuring semanting markup and accessibility.",
  },
  {
    type: "skills",
    name: "CSS",
    icon: RiCss3Fill,
    duration: "Learned in 2022",
    description:
      "Styled responsive web pages using CSS, ensuring an appealing user experience with modern design principles and layouts.",
  },
  {
    type: "skills",
    name: "JavaScrypt",
    icon: DiJsBadge,
    duration: "Learned in 2022",
    description:
      "Implemented javascrypt for interactivity, enhancing user engagementon websites through dynamic content and features.",
  },
  {
    type: "skills",
    name: "React",
    icon: RiReactjsFill,
    duration: "Learned in 2023",
    description:
      "Built dynamic user interfaces using React.js, optimizing component-driven design for seemless user experiences and efficiency.",
  },
  {
    type: "skills",
    name: "NodeJs",
    icon: RiNodejsFill,
    duration: "Learned in 2023",
    description:
      "Developing scalable server applications using Node.js with REST API architecture. Optimizing backend performance and security.",
  },
  {
    type: "skills",
    name: "NextJs",
    icon: RiNextjsLine,
    duration: "Learned in 2023",
    description:
      "Build full-featured applications using Next.js, leveraging server-side rendering and static site generation for optimal performance and SEO. Design dynamic modular components and implement API routes to optimize data flow and improve user experience.",
  },
  {
    type: "skills",
    name: "Figma",
    icon: SiFigma,
    duration: "Learned in 2024",
    description:
      "Designed user interfaces using Figma, facilitating collaboration and repaid prototyping to meet user needs and projects goals.",
  },
];

export const workData = [
  {
    href: "/",
    category: "design",
    img: "/assets/work/thumb-1.png",
    title: "Luminex UI Kit",
  },
  {
    href: "/",
    category: "design",
    img: "/assets/work/thumb-2.png",
    title: "Nebula Dashboard",
  },
  {
    href: "/",
    category: "frontend",
    img: "/assets/work/thumb-3.png",
    title: "Velox App",
  },
  {
    href: "/",
    category: "frontend",
    img: "/assets/work/thumb-4.png",
    title: "Quantum Portfolio",
  },
  {
    href: "/",
    category: "frontend",
    img: "/assets/work/thumb-5.png",
    title: "Symergy App UI",
  },
  {
    href: "/",
    category: "fullstack",
    img: "/assets/work/thumb-6.png",
    title: "Apollo Travel Platform",
  },
  {
    href: "/",
    category: "fullstack",
    img: "/assets/work/thumb-7.png",
    title: "Horizon Saas Dashboard",
  },
];

export const testimonialData = [
  {
    img: "/assets/testimonial/img-1.jpg",
    name: "Mark Fitz",
    message:
      "We explained what we wanted, and he delivered something even better than we imagined. Everything functions perfectly, and now we have no issues with our online platform.",
  },
  {
    img: "/assets/testimonial/img-2.jpg",
    name: "Robert Pulchack",
    message:
      "He built a system for us that works fast and smoothly, even under heavy load. Everything is set up so reliably and securely that we feel confident using it. We’re very happy with the results!",
  },
  {
    img: "/assets/testimonial/img-3.jpg",
    name: "Antonio Martinez",
    message:
      "Thanks to his work, our website looks modern and is super easy to use. Everything is clear, even for first-time visitors. We’ve been getting a lot of positive feedback from our clients!",
  },
  {
    img: "/assets/testimonial/img-4.jpg",
    name: "Frank Rogers",
    message:
      "He did everything we needed to bring our project to life and made sure it met all our expectations. It turned out to be both convenient and beautiful, and now we can easily continue developing our idea.",
  },
  {
    img: "/assets/testimonial/img-5.jpg",
    name: "Sophia Watson",
    message:
      "We loved how he handled the project—both visually appealing and practical. Our site works without issues, and users quickly figured out how to use it. The work was done to the highest standard!",
  },
  {
    img: "/assets/testimonial/img-6.jpg",
    name: "Bob Fernandes,",
    message:
      "Our idea turned into something we’re really proud of. The work was done quickly, with great quality, and very thoughtfully. Now we have exactly what we needed, and our clients really appreciate it.",
  },
];
