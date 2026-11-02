/**
 * Apex Ignite — content source of truth.
 *
 * Every string here is taken from (or is a grammar/readability edit of) the
 * original website: https://apexignite.omsoftsolution.net.in/
 * Nothing is invented. Items that could not be found on the original site are
 * flagged with a `pending: true` note and rendered as verification notices.
 */

export const SITE = {
  name: "Apex Ignite Solutions Pvt. Ltd.",
  shortName: "Apex Ignite",
  legalName: "Apex Ignite Solution Pvt. Ltd.",
  url: "https://apexignite.omsoftsolution.net.in",
  tagline: "Quality • Cost • Delivery • Service",
  certificationLine: "IATF & ISO/TS 16949",
  logo: "/images/apex-logo-300.png",
};

export const CONTACT = {
  emailSupport: "customersupport@apexignite.co.in",
  email1: "ajaypalmakker@apexignite.co.in",
  email2: "abhimanyu@apexignite.co.in",
  phoneGeneral: "+91 120 456 7890",
  phoneGeneralHref: "+911204567890",
  phone1: "+91-9811142144",
  phone1Href: "+919811142144",
  phone2: "+91-9999119981",
  phone2Href: "+919999119981",
  whatsapp:
    "https://wa.me/9811142144?text=Hello!%20I%20would%20like%20to%20get%20in%20touch.",
  units: [
    {
      id: "Unit - 1",
      lines: ["Plot No. G-9 & G-10, Sector-57 (FIT),", "Faridabad, Haryana."],
    },
    {
      id: "Unit - 2",
      lines: ["Plot No. 28, Sector-11, SIDCUL,", "Haridwar, Uttarakhand."],
    },
  ],
  gst: [
    { id: "Unit-1", value: "06ABACA4657P1ZA" },
    { id: "Unit-2", value: "05ADJPM7465M1ZY" },
  ],
  directors: ["Mr. Ajay Pal Makker", "Mr. Abhimanyu"],
  hours: ["Day Shift & Night Shift", "Two-Shift Operations"],
  hoursSecondary: "Monday – Saturday: 08:30 AM – 06:30 PM (IST)",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1798484.3123000788!2d76.0347523980925!3d28.308480348391306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdbd6b434ab0d%3A0xb8f907efd9c02f90!2sApex%20Plastics!5e0!3m2!1sen!2sin!4v1791289952381!5m2!1sen!2sin",
  recaptchaSiteKey: "6Lehn4YsAAAAAPtIuSFkLRaT6c-fCTKTqQS33qre",
  formEndpoint: "/send-mail.php",
};

/* ---------------------------- Product categories -------------------------- */

const img = (file) => encodeURI(`/images/${file}`);

export const PRODUCTS = [
  {
    slug: "automotive-lock-components",
    name: "Automotive Lock Components",
    image: img("lock-cosmponet.webp"),
    thumb: img("drop-headrlock-Component.webp"),
    short: "Precision components for automotive locking systems",
    tag: "Compression Type",
    description:
      "We provide a wide range of plastic injection moulded automotive lock components, designed for reliable performance and consistent quality. These components are manufactured to meet specific application requirements and deliver durability in demanding automotive environments.",
    parts: [
      { name: "Housing", image: img("image 1.webp") },
      { name: "Handle", image: img("image 2.webp") },
      { name: "Body", image: img("image 3.webp") },
      { name: "Body", image: img("image 4.webp") },
      { name: "Body cap", image: img("image 5.webp") },
      { name: "Body cap", image: img("image 6.webp") },
      { name: "Body Switch, Cap, Body", image: img("image 7.webp") },
      { name: "Handle", image: img("image 8.webp") },
    ],
  },
  {
    slug: "auto-electrical-alternator-parts",
    name: "Auto Electrical Alternator Parts",
    image: img("electrical alternsator.webp"),
    thumb: img("alternator parts.webp"),
    short: "Reliable components for automotive alternator systems",
    tag: "Conical Type",
    description:
      "We provide a wide range of plastic auto electrical components designed for effective functioning and reliable performance. Our Auto Electrical Alternator Parts are manufactured with a focus on durability, precise finishing, and consistent quality for automotive applications.",
    parts: [
      { name: "Protective Cover", image: img("image 9.webp") },
      { name: "Protective Cover", image: img("image 10.webp") },
      {
        name: "Inter Connection & Insulating Plate",
        image: img("image 11.webp"),
      },
      {
        name: "Regulator Holder & Brush Box",
        image: img("image 12.webp"),
      },
      { name: "Brush Box", image: img("image 13.webp") },
      { name: "Cover Of Back Bracket", image: img("image 14.webp") },
      { name: "Brush", image: img("image 15.webp") },
      { name: "Connector Terminal & Brush Box", image: img("image 16.webp") },
      { name: "Bobbin", image: img("image 17.webp") },
    ],
  },
  {
    slug: "auto-electrical-starter-parts",
    name: "Auto Electrical Starter Parts",
    image: img("electrical-star4ter.webp"),
    thumb: img("electrical-starter-parts.webp"),
    short: "High-performance parts for automotive starter systems",
    tag: "Extension Type",
    description:
      "We offer a wide range of Auto Electrical Starter Parts manufactured as per standard specifications and customized requirements. These components are produced to meet specific customer needs while maintaining consistent quality, dimensional accuracy, and reliable performance.",
    parts: [
      { name: "Brushholder", image: img("image 18.webp") },
      { name: "Interbracket", image: img("image 19.webp") },
      { name: "Interbracket", image: img("image 20.webp") },
      { name: "Peg", image: img("image 21.webp") },
      { name: "Shift Lever", image: img("image 22.webp") },
      { name: "Shift Lever", image: img("image 23.webp") },
      { name: "Solenoid Cover", image: img("image 24.webp") },
    ],
  },
  {
    slug: "automotive-steering-components",
    name: "Automotive Steering Components",
    image: img("steringaa.webp"),
    thumb: img("steering-imggssaa.webp"),
    short: "Precision parts for safe and reliable steering systems",
    tag: "Torsion Type",
    description:
      "We offer a wide range of Automotive Steering Components manufactured as per standard specifications and specific application requirements. Our components are designed to provide reliable performance, dimensional consistency, and durability for automotive applications.",
    parts: [
      { name: "Plastic Cap", image: img("image 25.webp") },
      { name: "Protecting Cap", image: img("image 26.webp") },
      { name: "Protecting Cap", image: img("image 27.webp") },
      { name: "Protecting Cap", image: img("image 28.webp") },
      { name: "Protecting Cap", image: img("image 29.webp") },
      { name: "Protecting Cap", image: img("image 30.webp") },
      { name: "Protecting Cap", image: img("image 31.webp") },
      { name: "Protecting Cap", image: img("image 32.webp") },
      { name: "Protecting Cap", image: img("image 33.webp") },
      { name: "Protecting Cap", image: img("image 34.webp") },
    ],
  },
  {
    slug: "washing-machine-parts",
    name: "Washing Machine Parts",
    image: img("washing-machine12.webp"),
    thumb: img("mb-machine-pdfg.webp"),
    short: "Durable components for washing machine applications",
    tag: "Disc / Belleville",
    description:
      "We manufacture precision plastic components for washing machines, designed to meet specific application requirements. Our parts offer reliable performance, dimensional accuracy, durability, and consistent quality for modern washing machine assemblies.",
    parts: [
      { name: "Bearing Cap", image: img("image 35.webp") },
      { name: "Buffer Holder", image: img("image 36.webp") },
      { name: "Knob", image: img("image 37.webp") },
      { name: "Knob", image: img("image 38.webp") },
      { name: "Lever Drain", image: img("image 39.webp") },
      { name: "Lever Drain", image: img("image 40.webp") },
    ],
  },
  {
    slug: "mcb-switchgear-parts",
    name: "MCB & Switchgear Parts",
    image: img("mcb-egear.webp"),
    thumb: img("mcb-header-img.webp"),
    short: "Precision parts for electrical protection systems",
    tag: "Custom Wire Form",
    description:
      "We manufacture precision plastic components for MCB and switchgear applications, engineered for reliable performance and consistent dimensional accuracy. Our components are suitable for electrical assemblies and are produced to meet specific application requirements.",
    parts: [
      { name: "MCB Body", image: img("image 41.webp") },
      { name: "Camlock Ease", image: img("image 42.webp") },
      { name: "Camlock Cover", image: img("image 43.webp") },
      { name: "Handle", image: img("image 44.webp") },
      { name: "Lever", image: img("image 45.webp") },
      { name: "Plain Lever", image: img("image 46.webp") },
    ],
  },
  {
    slug: "speedometer-components",
    name: "Speedometer Components",
    image: img("spedometerer.webp"),
    thumb: img("spedometer-header.webp"),
    short: "Precision components for accurate speed measurement",
    tag: "Custom Wire Form",
    description:
      "We manufacture precision plastic components for speedometer applications, designed for accurate fitment, reliable performance, and long-term durability. Our components are produced with consistent quality to meet the requirements of automotive applications.",
    parts: [{ name: "Speedometer", image: img("image 47.webp") }],
  },
  {
    slug: "oil-gauge-meter-components",
    name: "Oil Gauge Meter Components",
    // NB: the original site references "wire-frame.webp" for this card but the
    // file itself returns 404 on the source server. The company's other oil
    // gauge image (used in the original header) is shown instead.
    image: img("oil-guage.webp"),
    thumb: img("oil-guage.webp"),
    imageNote:
      "The original website references a card photo (wire-frame.webp) that does not load. The company's own oil gauge photograph is shown instead until the correct image is supplied.",
    short: "Reliable parts for oil level measurement systems",
    tag: "Custom Wire Form",
    description:
      "Precision-engineered oil gauge meter components designed for accurate fitment and reliable performance in automotive applications. Manufactured with durable plastic materials and consistent dimensional accuracy to meet specific application requirements.",
    // The original site lists the same component set under this category.
    partsNote:
      "The original website lists this component set under Oil Gauge Meter Components — kept as-is; please confirm the correct part list.",
    parts: [
      { name: "Bearing Cap", image: img("image 35.webp") },
      { name: "Buffer Holder", image: img("image 36.webp") },
      { name: "Knob", image: img("image 37.webp") },
      { name: "Knob", image: img("image 38.webp") },
      { name: "Lever Drain", image: img("image 39.webp") },
      { name: "Lever Drain", image: img("image 40.webp") },
    ],
  },
];

export const getProduct = (slug) => PRODUCTS.find((p) => p.slug === slug);

/* ------------------------------- Milestones ------------------------------- */

export const MILESTONES = [
  {
    year: "1993",
    title: "Factory Started",
    text: "Started by Mr. Ajay Pal Makker with just 3 hand moulding machines.",
  },
  {
    year: "1995",
    title: "Tool Room & ISO 9000",
    text: "Tool room facility added and ISO 9000 adopted. Sales reached Rs. 125 Lac P.A.",
  },
  {
    year: "2000",
    title: "Injection Moulding",
    text: "Installed 02 injection moulding machines of 30 & 50 ton capacity.",
  },
  {
    year: "2006",
    title: "EDM & Wire Cut",
    text: "EDM and wire cut machines added. Sales reached Rs. 254 Lac P.A.",
  },
  {
    year: "2014",
    title: "18 Machines",
    text: "Injection moulding machines grew to 18 (50 to 350 ton). Sales reached Rs. 825 Lac P.A.",
  },
  {
    year: "2016",
    title: "New Plant Foundation",
    text: "Foundation laid for the new 40,000 sq. ft. plant at Sec-57.",
  },
  {
    year: "2017",
    title: "Faridabad Plant",
    text: "New 40,000 sq. ft. plant installed at Sec-57, Faridabad.",
  },
  {
    year: "2020",
    title: "Haridwar Plant",
    text: "Sidcul, Haridwar: 10 machines (100 & 550 ton) on 5,000 sq. ft. Certified ISO 9001:2015.",
  },
  {
    year: "2022",
    title: "Our Own Plant",
    text: "Moved from a rented unit to our own 20,000 sq. ft. plant in Sidcul, Haridwar.",
  },
  {
    year: "2023",
    title: "ISO 14001 & 45001",
    text: "ISO 14001:2015 and ISO 45001:2018 achieved at both plants. 05 machines added in FBD.",
  },
  {
    year: "2024",
    title: "Growth & Expansion",
    text: "04 machines added in FBD plant. Second plant purchased in Haridwar with 05 machines installed.",
  },
  {
    year: "2025",
    title: "New Land & Customers",
    text: "1600 sq. yards land bought in FIT, 05 machines added and 4 new customers: HMC MM, HYM, Sterling GTAKE, MV Mobility.",
    plan: true,
  },
  {
    year: "2026",
    title: "Tool Room Expansion",
    text: "Tool room expansion, and construction begins on the new land (approx. 50,000 sq. ft.).",
    plan: true,
  },
  {
    year: "2027",
    title: "Mass Production",
    text: "Moulding machines installed in the new plant. Mass production target: Apr-27.",
    plan: true,
  },
];

/* --------------------------- Company profile tabs ------------------------- */

export const PROFILE_TABS = [
  {
    id: "achievements",
    label: "Achievements",
    heading: "Recognized for Excellence & Quality",
    description:
      "Apex Ignite Solutions has been recognized for its outstanding performance and quality standards. We are proud to be certified with IATF 16949:2016, ISO 14001:2015, ISO 45001:2018, and have received the Gold Certificate in ZED (Ministry of MSME). We are also a Green supplier as per MSIL T2 Vendor Assessment.",
    points: [
      "IATF 16949:2016 Certified (Valid till 31st Mar 2028)",
      "Gold Certificate in ZED (Ministry of MSME)",
      "Green Supplier as per MSIL T2 Vendor Assessment System",
      "ISO 14001:2015 & ISO 45001:2018 Certified at both plants",
      "Direct-on-line tier-1 supplier to M/S Minda Corporation Ltd.",
    ],
    stat: "40.73",
    statLabel: "Sales Turnover (Cr.) FY 25-26",
    icon: "trend",
  },
  {
    id: "mission",
    label: "Our Mission",
    heading: "Reliable Products. Continuous Improvement.",
    description:
      "To be a reliable supplier of our valuable patrons by offering them a technically superior and commercially viable product which would meet and exceed their expectations. We are committed to continuous up-gradation of our technology and implementing effective Quality Management Systems.",
    points: [
      "Technically superior and commercially viable product offerings",
      "Continuous up-gradation of technology and QMS",
      "Overall growth of every employee in consonance with the company's growth",
      "Meeting customer expectations of Quality, Cost, Delivery & Service",
      "Increase market focus to all sectors where plastic molded components are used",
    ],
    stat: "QMS",
    statLabel: "Continuous Improvement",
    icon: "trend",
  },
  {
    id: "vision",
    label: "Our Vision",
    heading: "A Preferred Partner in Thermoplastic Manufacturing",
    description:
      "To be a sought-after company in the field of Thermoplastic Injection molded components, totally meeting customer expectations of Quality, Cost, Delivery & Service, while expanding across the plastic manufacturing sector.",
    points: [
      "Commitment to QCDS: Quality, Cost, Delivery, and Service",
      "Strategic expansion across diversified plastic manufacturing sectors",
      "High-tonnage automated thermoplastic injection molding systems (up to 600 tons)",
      "Pioneering energy-efficient and recyclable polymer engineering",
      "Preferred global partner status for OEM manufacturing solutions",
    ],
    stat: "4",
    statLabel: "QCDS Priorities",
    icon: "award",
  },
  {
    id: "capabilities",
    label: "Our Capabilities",
    heading: "Integrated Design & Manufacturing",
    description:
      "Our capabilities include in-house mold design and tool making, 2D & 3D design, injection molding and ultrasonic welding. With a broad range of thermoplastic expertise, we support precision component manufacturing from design through production with 61 injection molding machines.",
    points: [
      "In-house mold design and tool making facilities (VMC, EDM, Wire Cut)",
      "Comprehensive 2D & 3D CAD/CAM design & engineering simulation",
      "High-precision microprocessor injection molding (60 to 600 tons)",
      "Advanced ultrasonic welding and component assembly lines",
      "Robotics and Vision Camera integration for zero-defect production",
    ],
    stat: "61",
    statLabel: "Injection Molding Machines",
    icon: "gear",
  },
  {
    id: "quality",
    label: "Quality & Commitment",
    heading: "Consistent Quality. Reliable Delivery.",
    description:
      "We are committed to maintaining consistent product quality, reliable delivery and continuous improvement. Our focus on precision, efficiency and customer satisfaction helps us build strong, long-term relationships with our customers. Our facilities are equipped with advanced testing and measuring equipment.",
    points: [
      "Consistent product quality benchmarked against global standards",
      "Reliable delivery schedules with real-time dispatch monitoring",
      "Continuous Kaizen & process optimization across manufacturing cycles",
      "High-precision CMM, optical testing and batch traceability",
      "Building strong, long-term relationships with our valued customers",
    ],
    stat: "100%",
    statLabel: "Quality & Delivery Performance",
    icon: "shield",
  },
];

/* -------------------------------- Process -------------------------------- */

export const PROCESS = [
  {
    step: "01",
    title: "Tool Room & Die Storage",
    text: "Dedicated tool room with advanced VMC, EDM, and CNC machines for in-house mold design and precision tool making, ensuring organized die storage and easy maintenance.",
  },
  {
    step: "02",
    title: "Injection Moulding Facilities",
    text: "Operating 61 state-of-the-art molding machines ranging from 60 to 600 tons, integrated with robotics and vision cameras to ensure zero-defect precision manufacturing.",
  },
  {
    step: "03",
    title: "Quality Testing & Inspection",
    text: "Well-equipped inspection area with Vision Measuring Machines, CMM, and raw material testing facilities to ensure strict quality control and 100% delivery performance.",
  },
  {
    step: "04",
    title: "Finished Goods Store & Dispatch",
    text: "Properly organized storage for finished products with a systematic FIFO board system, ensuring safe handling, quality preservation, and efficient dispatch to valued customers.",
  },
];

/* ----------------------------- Why choose us ------------------------------ */

export const WHY_US = [
  {
    num: "01",
    title: "Certified Quality",
    text: "IATF 16949:2016 & ISO certified manufacturing focused on 100% quality and delivery performance.",
  },
  {
    num: "02",
    title: "In-House Tooling & Design",
    text: "Own tool making facility with VMC, EDM, Wire Cut, and dedicated 2D & 3D mold design capabilities.",
  },
  {
    num: "03",
    title: "Advanced Machinery",
    text: "61 automatic injection molding machines ranging from 60 to 600 tons, integrated with robotics and vision cameras.",
  },
  {
    num: "04",
    title: "Complete Manufacturing Support",
    text: "Injection molding, sheet metal parts, ultrasonic welding, and complete assembly under one roof.",
  },
];

export const WHY_US_CLOSING =
  "At Apex Ignite Solutions Pvt. Ltd., we combine advanced thermoplastic injection molding technology, in-house tooling expertise, and dedicated quality processes to deliver precision-engineered plastic components. Our focus on quality, cost, delivery, and service enables us to provide reliable manufacturing solutions tailored to diverse customer requirements across Automotive, EV, and Industrial sectors.";

/* ---------------------------------- FAQ ---------------------------------- */

export const FAQS = [
  {
    q: "What type of plastic components do you manufacture?",
    a: [
      "We manufacture a wide range of precision thermoplastic injection molded components, including sheet metal parts, for automotive, EV, switchgears, electrical, and other industrial applications.",
      "Components are developed according to customer drawings, specifications, and application requirements, ensuring high precision and quality.",
    ],
  },
  {
    q: "What injection molding facilities do you have?",
    a: [
      "We have a comprehensive facility with 61 automatic injection molding machines across our Faridabad and Haridwar plants.",
      "Our machines range from 60 tons to 600 tons, integrated with robotics and vision camera systems to ensure zero-defect production and consistent quality.",
    ],
  },
  {
    q: "Do you have in-house mould and tool design facilities?",
    a: [
      "Yes, we have a highly advanced in-house tool room facility equipped with VMC, EDM, Wire Cut, and CNC lathe machines.",
      "Our dedicated design section supports 2D and 3D mold designing, enabling efficient development, manufacturing, and maintenance of molds as per project requirements.",
    ],
  },
  {
    q: "Which thermoplastic materials can you process?",
    a: [
      "We work with a wide range of thermoplastic material grades, including engineering plastics suitable for diverse industrial applications.",
      "Material selection is strictly carried out according to the required mechanical properties, customer specifications, and the intended application of the component.",
    ],
  },
  {
    q: "Do you provide ultrasonic welding for plastic components?",
    a: [
      "Yes, we have dedicated facilities for ultrasonic welding of plastic components. We also have pad printing machines for branding and markings.",
      "This enables us to provide reliable joining and complete assembly solutions for suitable thermoplastic components.",
    ],
  },
  {
    q: "How do you ensure the quality of manufactured components?",
    a: [
      "We are an IATF 16949:2016, ISO 14001, and ISO 45001 certified company, maintaining strict quality control through advanced inspection and testing.",
      "Our quality-focused approach uses Vision Measuring Machines, CMM, and real-time production dashboards to ensure 100% quality and delivery performance.",
    ],
  },
  {
    q: "Can you manufacture components as per customer requirements?",
    a: [
      "Absolutely. We manufacture customized thermoplastic components based on customer drawings, specifications, and application needs.",
      "Our in-house design, tooling, and molding capabilities allow us to support complete component development from mold design right through to mass production.",
    ],
  },
  {
    q: "What industries and applications do you serve?",
    a: [
      "We serve a wide range of industries including Automotive, Electric Vehicles (EV), Auto Electricals, Home Appliances, Switchgears, and Measuring Instruments.",
      "We manufacture components for steering systems, fuel tank caps, MCB parts, and electrical fan parts, catering to top OEMs and Tier-1 suppliers.",
    ],
  },
];

/* ------------------------------- Industries ------------------------------- */

export const INDUSTRIES = [
  { name: "Automotive", image: img("motorbike.webp") },
  { name: "ATV - Automotive", image: img("atv.webp") },
  { name: "4 Wheeler Steering Parts", image: img("steering-wheel.webp") },
  { name: "JCB Crane", image: img("backhoe-loader.webp") },
  { name: "MCB Parts", image: img("circuit-breaker.webp") },
  { name: "Washing Machine Parts", image: img("washing-machine.png") },
  { name: "Starter Motors", image: img("starter.webp") },
  { name: "Alternator Motors", image: img("electric-motor.webp") },
  { name: "Electrical Components", image: img("battery.webp") },
  { name: "Engineering Components", image: img("enginerring-component.webp") },
];

/* Industry focus tiles from the original products mega-menu */
export const INDUSTRY_FOCUS = [
  "Automotive",
  "Home Appliances",
  "Electrical & Switchgear",
  "Two Wheeler",
  "Instrumentation",
  "Industrial Applications",
  "Consumer Durables",
  "Safety & Security",
  "Custom Solutions",
];

/* Business challenges listed in the original products mega-menu */
export const CHALLENGES = [
  {
    title: "Improving Product Durability",
    text: "Meeting higher performance standards in demanding conditions.",
  },
  {
    title: "Cost Optimization",
    text: "Delivering quality while maintaining competitive pricing.",
  },
  {
    title: "Faster Time-to-Market",
    text: "Supporting quick product development and delivery cycles.",
  },
  {
    title: "Meeting Regulatory Standards",
    text: "Ensuring compliance with global automotive and industrial norms.",
  },
  {
    title: "Reliable Supply Chain",
    text: "Consistent availability and on-time deliveries.",
  },
  {
    title: "Innovation & Customization",
    text: "Developing specialized solutions for evolving industry needs.",
  },
];

/* -------------------------------- Customers ------------------------------- */

export const CUSTOMERS = [
  { name: "Groz", image: img("groz.webp") },
  { name: "Havells", image: img("havels.webp") },
  { name: "MIRC", image: img("mirc.webp") },
  { name: "Sanden", image: img("sanden.webp") },
  { name: "Sebros", image: img("sebros.webp") },
  { name: "Spark Minda", image: img("sparkminda.webp") },
  { name: "Talbros", image: img("talbros.webp") },
  { name: "Vidocon", image: img("vidocon.webp") },
  { name: "Auto Lake", image: img("auto-lake.webp") },
];

/* ------------------------------ About menu -------------------------------- */

export const ABOUT_LINKS = [
  {
    to: "/about-us",
    label: "Overview",
    caption: "Our journey, values and what we do",
    image: img("overview.webp"),
  },
  {
    to: "/director-message",
    label: "Director's Message",
    caption: "Leadership insights and vision",
    image: img("oil-guage.webp"),
  },
  {
    to: "/mission-vision",
    label: "Mission & Vision",
    caption: "Our purpose and future goals",
    image: img("electrical alternsator.webp"),
  },
  {
    to: "/our-team",
    label: "Our Team",
    caption: "Meet the people behind our success",
    image: img("electrical-star4ter.webp"),
  },
  {
    to: "/awards-achievements",
    label: "Awards & Achievements",
    caption: "Recognition of our excellence",
    image: img("certificate-zed.png"),
  },
  {
    to: "/quality-certifications",
    label: "Quality & Certifications",
    caption: "Our commitment to global standards",
    image: img("spedometerer.webp"),
  },
  {
    to: "/our-infrastructure",
    label: "Our Infrastructure",
    caption: "World-class facilities and capabilities",
    image: img("electrical-star4ter.webp"),
  },
];

/* -------------------------- Original long-form copy ----------------------- */

export const WELCOME_HIGHLIGHTS = [
  "thermoplastic moulded components and moulds",
  "in-house tool-making facility",
  "2D & 3D design capabilities",
  "61 automatic injection molding machines",
  "60 to 600 tons",
  "robotics and vision camera systems",
  "ultrasonic welding of plastic components",
  "thermoplastic materials",
];

export const WELCOME_TEXT =
  "We are a leading manufacturer of thermoplastic moulded components and moulds, equipped with an in-house tool-making facility and a dedicated design section for precision mold development, featuring advanced 2D & 3D design capabilities. Our state-of-the-art facilities include 61 automatic injection molding machines, ranging from 60 to 600 tons, along with 15 power press machines. To ensure zero-defect production, we utilize robotics and vision camera systems. We also offer ultrasonic welding of plastic components and work with a wide range of thermoplastic materials to manufacture high-quality precision components for automotive, EV, and industrial sectors.";

export const FOOTER_ABOUT =
  "Apex Ignite Solutions Pvt. Ltd. is a leading manufacturer of precision plastic components, offering in-house mold design and tool-making facilities. With 2D & 3D design capabilities, advanced injection molding machines from 50 to 350 tons, ultrasonic welding, and expertise in a wide range of thermoplastic materials, we deliver quality solutions for automotive, electrical, and industrial applications.";

export const DRAWER_ABOUT =
  "Apex Ignite Solutions Pvt. Ltd. is a premier engineering solutions provider specializing in precision thermoplastic injection molding for automotive, switchgear, and consumer durable applications worldwide.";

export const PRODUCTS_INTRO =
  "Explore our range of precision-engineered plastic components, manufactured using advanced injection molding technology and supported by in-house tool making, 2D & 3D mold design, and ultrasonic welding capabilities. We deliver reliable, high-quality components tailored to meet diverse industrial and application-specific requirements.";

export const INDUSTRIES_INTRO =
  "From concept and mold design to precision injection molding and component finishing, we provide reliable manufacturing solutions that meet the demanding requirements of diverse industries with quality, flexibility, and advanced in-house capabilities.";

/* --------------------------------- Gallery -------------------------------- */

/* Gallery uses only genuine Apex Ignite product photography.
   Generic stock/AI images from the original site were removed — see
   _audit/IMAGE-REPLACEMENTS.md. */
/* Only the company's own component photography — no stock/AI imagery. */
export const GALLERY = [
  { src: img("steringaa.webp"), caption: "Automotive steering components" },
  { src: img("lock-cosmponet.webp"), caption: "Automotive lock components" },
  { src: img("electrical alternsator.webp"), caption: "Alternator components" },
  { src: img("electrical-star4ter.webp"), caption: "Starter components" },
  { src: img("washing-machine12.webp"), caption: "Washing machine components" },
  { src: img("mcb-egear.webp"), caption: "MCB & switchgear components" },
  { src: img("spedometerer.webp"), caption: "Speedometer components" },
  { src: img("oil-guage.webp"), caption: "Oil gauge meter components" },
];

/* -------------------------- Verification notices -------------------------- */

export const PENDING_ITEMS = {
  directorMessage:
    "The original website has a Director's Message menu link but no message text. The verified content will be published here once provided — no placeholder text has been added.",
  team: "The original website has an Our Team menu link but no team member names, designations or photographs. Team details will be published here once provided.",
  careers:
    "The original website has a Careers menu link but no job listings or HR contact. Current openings will be published here once provided.",
  privacy:
    "The original website links to a Privacy Policy page but the page does not exist yet, so no policy text is available. The policy below only describes how this website itself handles data it actually collects.",
  terms:
    "The original website links to Terms of Service but the page does not exist yet. Website-use terms are shown below; commercial and supply terms must be supplied by the company.",
  productSpecs:
    "The original website does not publish dimensional or material specifications for this component group. Specifications are developed per customer drawing and application requirement.",
};
