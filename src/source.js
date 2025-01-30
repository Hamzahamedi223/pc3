import {
  FaTools,
  FaCheckCircle,
  FaClock,
  FaDraftingCompass,
  FaUserFriends,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaHome,
  FaBuilding,
} from "react-icons/fa";
import {Bathroom1,Bathroom2,Bathroom3,Bathroom4,Bathroom5,Bathroom6,Bathroom7,Bathroom8,Bathroom9,bussnies1,bussnies2,bussnies3,bussnies4,bussnies5,bussnies6,outdoor1,about,area,hero,logo,outdoor10,outdoor11,outdoor12,outdoor13,outdoor14,outdoor15,outdoor16,outdoor17,outdoor18,outdoor19,outdoor20,outdoor21,outdoor22,outdoor2,outdoor23,outdoor24,outdoor25,outdoor26,outdoor27,outdoor28,outdoor29,outdoor3,outdoor30,outdoor4,outdoor5,outdoor6,outdoor7,outdoor8,outdoor9
 , user1,
  user2,
  user3,
  user4,
  
} from "./assets";
export const bathroomImages = [
  Bathroom1, Bathroom2, Bathroom3, Bathroom4, Bathroom5, Bathroom6, Bathroom7, Bathroom8, Bathroom9
];

export const outdoorImages = [
  outdoor1, outdoor2, outdoor3, outdoor4, outdoor5, outdoor6, outdoor7, outdoor8, outdoor9,
  outdoor10, outdoor11, outdoor12, outdoor13, outdoor14, outdoor15, outdoor16, outdoor17, outdoor18,
  outdoor19, outdoor20, outdoor21, outdoor22, outdoor23, outdoor24, outdoor25, outdoor26, outdoor27,
  outdoor28, outdoor29, outdoor30
];

export const businessImages = [
  bussnies1, bussnies2, bussnies3, bussnies4, bussnies5, bussnies6
];

export const navigations = [
  {
    label: "Home",
    to: "header",
  },
  {
    label: "Services",
    to: "services",
  },
  {
    label: "About Us",
    to: "about",
  },
  {
    label: "Reviews",
    to: "testimonials",
  },
  {
    label: "Contact Us",
    to: "contact",
  },
];

export const keypoints = [
  {
    title: "Expert Craftsmanship",
    description:"Every detail matters. We ensure high-quality workmanship in every phase of construction."
  },
  {
    title: "On-Time, Within Budget",
    description:"Efficiency is key. We deliver your projects on schedule, without unexpected costs."
  },
  {
    title: "Innovative Solutions",
    description:"We use the latest technologies and sustainable materials to build for the future."
  },
  {
    title: "Client-Centered Approach",
    description:"We listen to your needs and tailor our services to exceed your expectations."
  },
];

export const whyChooseUs = [
  {
    title: "Unmatched Quality",
    icon: <FaCheckCircle />,
    description: "Craftsmanship guaranteed",
  },
  {
    title: "Timely Delivery",
    icon: <FaClock />,
    description: "Projects completed on schedule",
  },
  {
    title: "Innovative Designs",
    icon: <FaDraftingCompass />,
    description: "Creative and modern solutions",
  },
  {
    title: "Focused Service",
    icon: <FaUserFriends />,
    description: "Prioritizing client satisfaction always",
  },
 
];
export const aboutImages = [
  {
    title: "Modern Bathroom Installation",
    imageUrl: Bathroom1,  
    description: "A high-quality bathroom installation with modern fixtures and finishes.",
  },
  {
    title: "Garden Landscaping",
    imageUrl: Bathroom2, 
    description: "A beautifully landscaped garden with custom features and design.",
  },
  {
    title: "Kitchen Renovation",
    imageUrl: Bathroom3,  
    description: "A complete kitchen renovation with premium materials and finishes.",
  },
  {
    title: "Modern Bathroom Installation",
    imageUrl: Bathroom4,  
    description: "A high-quality bathroom installation with modern fixtures and finishes.",
  },
  {
    title: "Garden Landscaping",
    imageUrl: Bathroom5, 
    description: "A beautifully landscaped garden with custom features and design.",
  },
  {
    title: "Kitchen Renovation",
    imageUrl: Bathroom6,  
    description: "A complete kitchen renovation with premium materials and finishes.",
  },
 
];

export const services = [
  {
    title: "Residential Construction",
    icon: <FaHome />,
    description: `Building modern, high-quality homes tailored to your vision.`,
  },
  {
    title: "Commercial Projects",
    icon: <FaBuilding />,
    description: `Developing functional, innovative commercial spaces for businesses.`,
  },
  {
    title: "Renovation & Remodeling",
    icon: <FaTools />,
    description: `Transforming existing spaces with expert renovation and design.`,
  },
];

export const testimonials = [
  {
    name: "Francoise, N16",
    image: user1,
    review: `Very professional work on time and clean. Highly recommended.`,
    task: "General cleaning and maintenance",
  },
  {
    name: "Ben, W10",
    image: user2,
    review: `From start to finish, the project was handled with incredible skill and efficiency. I highly recommend Confix for any construction needs.`,
    task: "Full home renovation",
  },
  {
    name: "Chiamaka Nwachukwu",
    image: user3,
    review: `Highly recommend Hass. Is very punctual & does great work. Water was leaking from my shower door which he came twice & fixed it. Would definitely recommend him.`,
    task: "Fixing shower door leaks",
  },
  {
    name: "Jean. CThrine, UB5",
    image: user4,
    review: `Needed a roof and partition wall put up in my decking area. The work was done to a high specification. And completed in one day. Nothing was too much trouble for the builder. He made sure everything was left neat and tidy and that all rubbish was thrown away. I can highly recommend the builder and company for all your work that you need done.`,
    task: "Building roof and partition wall",
  },
];


export const footer = [
  {
    title: "Company",
    routes: [
      {
        name: "About Us",
        href: "#about",
      },
      {
        name: "Careers",
        href: "#",
      },
      {
        name: "Contact Us",
        href: "#contact",
      },
    ],
  },
  {
    title: "Services",
    routes: [
      {
        name: "Residential Construction",
        href: "#",
      },
      {
        name: "Commercial Projects",
        href: "#",
      },
      {
        name: "Renovation & Remodeling",
        href: "#",
      },
      {
        name: "Project Management",
        href: "#",
      },
    ],
  },
  {
    title: "Resources",
    routes: [
      {
        name: "Case Studies",
        href: "#",
      },
      {
        name: "FAQs",
        href: "#",
      },
      {
        name: "Privacy Policy",
        href: "#",
      },
    ],
  },
];

export const socialHandles = [
  {
    name: "Facebook",
    icon: <FaFacebook />,
    link: "https://www.facebook.com",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com",
  },
  {
    name: "Youtube",
    icon: <FaYoutube />,
    link: "#",
  },
];
