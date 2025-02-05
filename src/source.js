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
import {Bathroom1,Bathroom2,Bathroom3,Bathroom4,Bathroom5,Bathroom6,Bathroom7,bussnies1,bussnies2,bussnies3,bussnies4,bussnies5,bussnies6,outdoor1,about,area,hero,logo,outdoor10,outdoor11,outdoor12,outdoor13,outdoor14,outdoor15,outdoor16,outdoor17,outdoor18,outdoor19,outdoor20,outdoor21,outdoor22,outdoor2,outdoor23,outdoor24,outdoor25,outdoor26,outdoor27,outdoor28,outdoor29,outdoor3,outdoor30,outdoor4,outdoor5,outdoor6,outdoor7,outdoor8,outdoor9
 , user1,
  user2,
  user3,
  user4,kitchen,
  extension1,extension2,extension3,extension4,extension5,extension6,extension7,
  commercial1,commercial2,commercial3

  
} from "./assets";
export const bathroomImages = [
  Bathroom1, Bathroom2, Bathroom3, Bathroom4, Bathroom5, Bathroom6, Bathroom7
];

export const outdoorImages = [
  outdoor1,  outdoor5,  outdoor8, 
   outdoor12, outdoor13, outdoor14, outdoor15, outdoor16, outdoor17, outdoor18,
  outdoor19,  outdoor21, outdoor22, outdoor23, outdoor24, outdoor25, outdoor26, outdoor27,
  outdoor28, outdoor29, outdoor30
];
export const extensionImages = [
  extension1, extension2, extension3, extension4, extension5, extension6, extension7
];
export const businessImages = [
  bussnies1, bussnies2, bussnies3, bussnies4, bussnies5, bussnies6
];
export const commercialImages = [commercial1,commercial2,commercial3]

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
    imageUrl: outdoor1, 
    description: "A beautifully landscaped garden with custom features and design.",
  },
  {
    title: "Kitchen Renovation",
    imageUrl: kitchen,  
    description: "A complete kitchen renovation with premium materials and finishes.",
  },
  {
    title: "Modern Bathroom Installation",
    imageUrl: Bathroom4,  
    description: "A high-quality bathroom installation with modern fixtures and finishes.",
  },
  {
    title: "Garden",
    imageUrl: outdoor29, 
    description: "A beautifully landscaped garden with custom features and design.",
  },
  {
    title: "Modern Bathroom Installation",
    imageUrl: Bathroom1,  
    description: "A high-quality bathroom installation with modern fixtures and finishes.",
  },
  {
    title: "Garden Landscaping",
    imageUrl: outdoor1, 
    description: "A beautifully landscaped garden with custom features and design.",
  },
  {
    title: "Kitchen Renovation",
    imageUrl: kitchen,  
    description: "A complete kitchen renovation with premium materials and finishes.",
  },
  {
    title: "Modern Bathroom Installation",
    imageUrl: Bathroom4,  
    description: "A high-quality bathroom installation with modern fixtures and finishes.",
  },
  {
    title: "Garden",
    imageUrl: outdoor29, 
    description: "A beautifully landscaped garden with custom features and design.",
  },
 
 
];

export const services = [
  {
    title: "Residential Construction",
    icon: <FaHome />,
    description: `Building modern, high-quality homes tailored to your vision.`,
    images: [
     outdoor23, outdoor24, outdoor26,outdoor27
    ]
  },
  {
    title: "Commercial Projects",
    icon: <FaBuilding />,
    description: `Developing functional, innovative commercial spaces for businesses.`,
    images: [
      commercial1,commercial2,commercial3
    ]
  },
  {
    title: "Renovation & Remodeling",
    icon: <FaTools />,
    description: `Transforming existing spaces with expert renovation and design.`,
    images: [
  bussnies1, bussnies2, bussnies3,commercial2
    ]
  },
];


export const testimonials = [
  {
    name: "Jean. CThrine, UB5",
   
    review: `Needed a roof and partition wall put up in my decking area. The work was done to a high specification. And completed in one day. Nothing was too much trouble for the builder. He made sure everything was left neat and tidy and that all rubbish was thrown away. I can highly recommend the builder and company for all your work that you need done.`,
    task: "Building roof and partition wall",
  },
  {
    name: "Paul, SW1V",
   
    review: `Very pleased with their work to replace my concealed shower with an exposed power shower. It was a surprisingly tricky and skilled job, with considerable physical space constraints. Their work was project managed exceedingly well and conducted in good time. Would definitely recommend`,
    task: "Bathroom Repair",
  },
  {
    name: "Neeta, HA2",
   
    review: `Highly recommend Hass. Is very punctual & does great work. Water was leaking from my shower door which he came twice & fixed it. Would definitely recommend him`,
    task: "Bathroom Tiling",
  },
  {
    name: "Robert , HA9",
   
    review: `Yo say that Hass’s quote was the cheapest would be doing him a disfavour his was the most reasonable. I initially approached him for making the big pergola and laying new patio with new design in addition to doing summer kitchen as well. Hass is really hard working, punctual, has good communication skills, experience in his trade and very reasonable. I want to wish him the very best for the future and I know whom to approach and recommend forward. Many thanks`,
    task: "Landscaping",
  },
  {
    name: "Philipe, N8",
   
    review: `Hass and the rest of the team were very polite and professional; the work was made in the best conditions. I asked him to give me quotes for more jobs. Strongly recommended`,
    task: "Landscaping",
  },
  {
    name: "Arthur, EN4",
   
    review: `Contacted fast and despite delays at my end, was able to come to replace a radiator within 24 hours of being asked. Carried out the job well and cleared up after. Altogether a job well done by a competent plumber`,
    task: "Radiator",
  },
  {
    name: "Mark, N6",
   
    review: `Very cooperative team. I am really satisfied with the way they have understood my requirements and helped me scope my project. That truly shows that they do care for their customers. Strongly recommended`,
    task: "Garage Conversion",
  },
  {
    name: "David, W6",
   
    review: `Hassine’s installation work on a replacement bathroom basin and stand was exceptional - precise, quick and completely trouble-free. I’ve absolutely no hesitation in recommending him and I hope to persuade him back to do other restoration work on the house.`,
    task: "Bathroom, Kitchen and WC Plumbing",
  },
  {
    name: "Bach, HA9",
   
    review: `Amazing tradesmen, he was prompt, friendly and was tidy on the job. He triple checked the work he carried out and double checked the work that needed to be carried out. After 2 plumbers failed me, he was able to come out next day to fix a leak under the sink, fit new taps and install new waste pipes from the kitchen. In addition, he created a temporary work surface that I could attach my taps to while I wait for the worktops to arrive. I'm so impressed I am looking to give all the house work to him.`,
    task: "Bathroom, Kitchen and WC Plumbing",
  },
  {
    name: "Victor, NW8",
   
    review: `Good advice, professional and very clean jobs. Strongly recommended.`,
    task: "Bathroom, Kitchen and WC Plumbing",
  },
  {
    name: "Matt, HA9",
   
    review: `Very satisfied with the plumbing work done. Highly recommended!`,
    task: "Bathroom, Kitchen and WC Plumbing",
  },
  {
    name: "Shenaz, NW10",
   
    review: `Very friendly, professional, and punctual. Good advice and very experienced—an absolute pleasure. Highly recommend.`,
    task: "Plumbing Repair & Maintenance",
  },
  {
    name: "Teresa, W9",
   
    review: `The company comforooms completed a very clean job to an amazing standard. I love the finished product. I would definitely recommend.`,
    task: "Bathroom, Kitchen and WC Plumbing",
  },
  {
    name: "Geoff , SW6",
   
    review: `Comforooms did a fantastic job in our house they were really professional and fast. The job was done to an amazing standard. The Director and the team were very respectful. Highly recommend.`,
    task: "House Extension",
  },
  {
    name: "Teresa, NW6",
   
    review: `I am very satisfied with the work that the company Comforooms LTD did for us. Very serious, polite, and professional. I would really recommend.`,
    task: "Concrete Driveway",
  },
  {
    name: "Ollie, SE19",
   
    review: `Really happy with the work that Hass and the team did and the level of service they provided. The job was done to an amazing standard and his team was very respectful of working around the house. We’ve already asked him to come back and quote for more work and are looking forward to working with him many more times going forward.`,
    task: "Soil Irrigation / Drainage",
  },
  {
    name: "Rachel, N8",
   
    review: `Has did a great job of the patio in our garden. It was done neatly and exactly as we requested. He was always on time and completely respectful, tidying up each day. He was also very reasonably priced and finished the job in the time he had specified. I have recommended him to friends and would definitely use him again.`,
    task: "Landscaping",
  },
  {
    name: "Maria , HA7",
   
    review: `I was very pleased with the service provided by Hasim. He replaced my basin, toilet, shower mixer tap, and waste, and kitchen mixer tap. I would strongly recommend him to anyone requiring plumbing services.`,
    task: "Bathroom Installation",
  },
  {
    name: "Harriet, SW9",
   
    review: `Prompt, polite, friendly, efficient - highly recommend`,
    task: "Plumbing Repair & Maintenance",
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
