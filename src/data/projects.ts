export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  year: string;
  image: string;
  builder?: string;
  salesInfo?: string[];
  gallery?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "132-nicholl-rd-hastings-new-zealand-residence-2008",
    title: "132 Nicholl Rd Hastings, New Zealand",
    category: "Residence",
    year: "2008",
    image: "/images/projects/project-1.jpg",
  },
  {
    id: 2,
    slug: "56-beach-rd-sandringham-4-apartment-addition-2013",
    title: "56 Beach Rd, Sandringham",
    category: "4 Apartment Addition",
    year: "2013",
    image: "/images/projects/project-2.jpg",
  },
  {
    id: 3,
    slug: "33-fraser-st-richmond-residence-extension-renovation-2015",
    title: "33 Fraser St, Richmond",
    category: "Residence Extension & Renovation",
    year: "2015",
    image: "/images/projects/project-3.jpg",
    salesInfo: ["Sold in 2023 for $2,830,000"],
  },
  {
    id: 4,
    slug: "1127-nepean-hwy-highett-multi-unit-development-2018",
    title: "1127 Nepean Hwy, Highett",
    category: "Multi Unit Development",
    year: "2018",
    image: "/images/projects/project-4.jpg",
  },
  {
    id: 5,
    slug: "156-were-st-brighton-dual-occupancy-2020",
    title: "156 Were St, Brighton",
    category: "Dual Occupancy",
    year: "2020",
    image: "/images/projects/project-5.jpg",
    builder: "Jolimont Constructions",
    salesInfo: ["Unit 1 sold in 2022 for $5,500,000", "Unit 2 sold in 2022 for $4,500,000"],
    gallery: [
      "/images/projects/project-5.jpg",
      "/images/projects/galleries/5-156-Were-001-scaled.jpg",
      "/images/projects/galleries/5-156-Were-003-scaled.jpg",
      "/images/projects/galleries/5-156-Were-005-scaled.jpg",
      "/images/projects/galleries/5-156-Were-006-scaled.jpg",
    ],
  },
  {
    id: 6,
    slug: "6-taverner-st-moorabbin-multi-unit-development-2021",
    title: "6 Taverner St, Moorabbin",
    category: "Multi Unit Development",
    year: "2021",
    image: "/images/projects/project-6.jpg",
  },
  {
    id: 7,
    slug: "89-stanley-st-6-iluka-st-black-rock-dual-occupancy-2019",
    title: "89 Stanley St & 6 Iluka St, Black Rock",
    category: "Dual Occupancy",
    year: "2019",
    image: "/images/projects/project-7.jpg",
    builder: "Haven Properties",
    salesInfo: ["Unit A sold in 2021 for $3,075,000", "Unit B sold in 2021 for $3,000,500"],
  },
  {
    id: 8,
    slug: "2-rose-st-sandringham-2022",
    title: "2 Rose St, Sandringham",
    category: "Dual Occupancy",
    year: "2022",
    image: "/images/projects/project-8.jpg",
    builder: "Haven Properties",
    salesInfo: ["Unit A sold in 2023 for $2,850,000", "Unit B sold in 2023 for $2,880,000"],
    gallery: [
      "/images/projects/project-8.jpg",
      "/images/projects/galleries/8-2A-Rose-Street-Sandringham_002-scaled.jpg",
      "/images/projects/galleries/8-2A-Rose-Street-Sandringham_004-scaled.jpg",
      "/images/projects/galleries/8-2A-Rose-Street-Sandringham_005-1-scaled.jpg",
      "/images/projects/galleries/8-2A-Rose-Street-Sandringham_006-scaled.jpg",
    ],
  },
  {
    id: 9,
    slug: "77-tennyson-st-elwood-dual-occupancy-2024",
    title: "77 Tennyson St, Elwood",
    category: "Dual Occupancy",
    year: "2024",
    image: "/images/projects/project-9.jpg",
  },
  {
    id: 10,
    slug: "7-lansdown-st-hampton-residence",
    title: "7 Lansdown St, Hampton",
    category: "Residence",
    year: "",
    image: "/images/projects/project-10.jpg",
  },
  {
    id: 11,
    slug: "32-44-keys-rd-morrabbin-multi-office-warehouse-development-2022",
    title: "32-44 Keys Rd, Morrabbin",
    category: "Multi Office Warehouse Development",
    year: "2022",
    image: "/images/projects/project-11.png",
  },
  {
    id: 12,
    slug: "ca-group-32-industrial-ave-thomastown-factory-development-2024",
    title: "Ca Group, 32 Industrial Ave, Thomastown",
    category: "Factory Development",
    year: "2024",
    image: "/images/projects/project-12.jpg",
  },
  {
    id: 13,
    slug: "3-cairnes-cres-brighton-residence-2024",
    title: "3 Cairnes Cres, Brighton",
    category: "Residence",
    year: "2024",
    image: "/images/projects/project-13.jpg",
  },
  {
    id: 14,
    slug: "11-comer-st-brighton-east-duplex-development-2021",
    title: "11 Comer St, Brighton East",
    category: "Duplex Development",
    year: "2021",
    image: "/images/projects/project-14.jpg",
    builder: "Christie Projects",
    salesInfo: ["Unit A sold in 2021 for $3,038,000", "Unit B sold in 2021 for $3,030,000"],
  },
  {
    id: 15,
    slug: "108-bamfield-st-sandringham-residence-2018",
    title: "108 Bamfield St, Sandringham",
    category: "Residence",
    year: "2018",
    image: "/images/projects/project-15.jpg",
    builder: "Christie Projects",
    salesInfo: ["Sold in 2018 for $2,862,000"],
  },
  {
    id: 16,
    slug: "13b-delhi-st-brighton-east-duplex-development-2022",
    title: "13B Delhi St, Brighton East",
    category: "Duplex Development",
    year: "2022",
    image: "/images/projects/project-16.jpg",
    builder: "Christie Projects",
    salesInfo: ["Unit A sold in 2023 for $1,900,000", "Unit B sold in 2022 for $1,895,000"],
  },
];

export const collaborators = [
  {
    name: "Christie Projects",
    logo: "/images/logos/christie-projects.jpg",
    description: [
      "At Christie Projects, we create environments embracing unique design elements and functionality to inspire those living within the spaces. We customise each building from the outset, working closely with our clients to focus on the overall design intent in order to produce the ultimate outcome.",
      "Christie Projects in-house range of 'soft services' ensure projects are on-trend, within budget, and take into account key market considerations.",
      "We offer a complete, end-to-end solution, from client brief to delivery. This approach assists property owners, renovators, builders, and developers to correctly position developments for specific target markets.",
      "Detailed specification documentation allows clients to pull together key details for projects, whether renovations, new project builds, or property development.",
    ],
  },
  {
    name: "Haven Properties",
    logo: "/images/logos/haven-properties.jpg",
    description: [
      "Since 2002, Haven Properties have built a reputation and are recognised within the Bayside and inner city areas of Melbourne, as a high-quality property development and construction company who produce exclusive, luxurious, architecturally designed homes, within small boutique projects.",
    ],
    sections: [
      {
        title: "Our Vision",
        content: "\"To create luxurious, environmentally sustainable, architecturally designed homes, inspired by modern lifestyle and luxuriously appointed fittings and finishes.\"",
      },
      {
        title: "Our Commitment",
        content: "We have made a commitment that all projects will be state of the art using innovative designs and sustainable principles. They will be architecturally superior to their competition, will provide highest quality finishes, will be visually impressive and will emotionally inspire our clients. Our aim is to develop a reputation for style, quality and sophistication within a specific market segment, which will raise us from the rest and be our trademark for success.",
      },
      {
        title: "Our Guarantee",
        content: "To design, construct and deliver to market the highest quality homes, on a fixed price contract, delivering peace of mind and total trust in that, you actually \"get what you pay for\". We have teamed with expert architects, interior designers and professional trades all under the one roof, to deliver a stress-free project home.",
      },
    ],
  },
];

export const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Profile", path: "/profile" },
  { label: "ESD", path: "/esd" },
  { label: "Process", path: "/process" },
  { label: "Projects", path: "/projects" },
  { label: "Our Collaborators", path: "/our-collaborators" },
  { label: "Contact", path: "/contact" },
];

export const processSteps = [
  { title: "Feasibility", subtitle: "Feasibility Study", description: "A feasibility study is an assessment that determines the likelihood of success for a proposed project. We gain information from the client & local authorities to provide a concept checklist. Purpose: Feasibility studies help decision-makers gain a holistic view of potential benefits, disadvantages, barriers, and constraints related to a project. They guide project planning by assessing viability from technical, financial, legal, and market standpoints. Remember, a feasibility study is the foundation upon which your project plan rests, helping you make informed decisions about project viability and success." },
  { title: "Concept", subtitle: "", description: "" },
  { title: "Design Development", subtitle: "", description: "" },
  { title: "Town Planning", subtitle: "", description: "" },
  { title: "Interior Design", subtitle: "", description: "" },
  { title: "Construction Documentation", subtitle: "", description: "" },
  { title: "Tender Administration", subtitle: "", description: "" },
  { title: "Construction Services", subtitle: "", description: "" },
  { title: "Project Completion", subtitle: "", description: "" },
];

export const profileValues = [
  "Creative",
  "Collaborative",
  "Sustainable",
  "Progressive",
  "Innovative",
  "Client Focused",
];

export const industryAssociations = [
  { name: "BESS", logo: "/images/logos/bess-logo.png" },
  { name: "VBA", logo: "/images/logos/vba-logo.svg" },
  { name: "Design Matters", logo: "/images/logos/design-matters.png" },
  { name: "RBP", logo: "/images/logos/rbp-logo.png" },
];

export const contactInfo = {
  phone: "0412 815 501",
  email: "john@iroamd3.com.au",
  address: "238 Darebin Drive, Lalor, VIC 3075",
};

export const aboutBio = [
  "John Laughton",
  "Director / Principal Designer",
  "A highly skilled professional equipped to tackle the unique opportunities and challenges presented by your project.",
];

export const aboutExperience = [
  "24 Years of experience in the Building Industry",
  "Sustainable Design Assessment (SDA) Provider – Certified – 2024",
  "Iroamd3 Registered Business (Established) – Since 2012",
  "Senior Draftsperson – Clarke Hopkins Clarke – 2007 – 2012",
  "Architectural Draftsperson – Ikonomidis Reid – 2003 – 2007",
  "Architectural Draftsperson – Estate Design – 2001 – 2002",
  "Dip. of Building Design & Drafting attained from NMIT Melbourne – 2002",
  "Philstar Building – Labourer & Site Supervisor – 2000 – 2001",
  "Bachelor of Technology in Product Development at Massey University, New Zealand – 1996",
];

export const aboutAwards = {
  massey: [
    "NZ Aluminium Smelters Ltd Group Award.",
    "The Resource Management Act' Massey Uni. 1994",
    "Fisher & Paykel sponsored design project. Massey Uni.",
  ],
  nmit: [
    "Excellence in CAD Working Drawings.",
    "Excellent Endeavour & Achievement.",
    "BDAV Award – One Year Membership.",
    "Excellence in Design.",
    "Excellence in CAD Working Drawings.",
  ],
};

export const aboutCollaborations = [
  "Christie Projects",
  "Haven Properties",
  "Jolimont Constructions",
  "KG Architecture",
];

export const homeHeroSlides = [
  {
    title: "Innovative Designs",
    text: "At Iroamd3, we merge visionary concepts with precise execution to craft innovative designs and timeless structures",
  },
  {
    title: "Crafting Spaces",
    text: "Our mission at Iroamd3 is to create environments that resonate with the essence of inspired living through meticulous craftsmanship and thoughtful design",
  },
  {
    title: "Brilliant Functionality",
    text: "Iroamd3 is dedicated to designing spaces that not only exude architectural elegance but also serve as functional brilliance, enhancing lives and experiences",
  },
];
