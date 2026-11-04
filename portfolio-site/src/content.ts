/**
 * ALL page content lives here.
 *
 * Images: put every file in `public/images/` using the file names below (e.g. public/images/portrait.jpg).
 * A photo that is missing is simply hidden, so the site looks complete before the images arrive.
 * Links starting with "#" go to another page of this site; everything else opens in a new tab.
 */

export type Img = { src: string; alt: string };
export type Link = { label: string; href: string };
export type Stat = { value: string; label: string; note?: string };

const I = (file: string, alt: string): Img => ({ src: `/images/${file}`, alt });

export const site = {
  name: "Nguyen Minh Tuan Anh",
  short: "Tuan Anh",
  id: "NMTA-2027",
  email: "teslagaming250@gmail.com",
  github: "https://github.com/chechoutanh",
  /** One-page CV, served from public/ */
  cv: "/NGUYEN_MINH_TUAN_ANH_CV.pdf",
  location: "Ho Chi Minh City",
  classOf: "2027",
  majors: "Mechanical Eng. · Applied Math",
  closing:
    "I like turning equations into things that move, focus and predict: robot arms, telescopes, observing plans.",
};

export const nav = [
  { id: "achievements", label: "Achievements" },
  { id: "leadership", label: "Leadership" },
  { id: "projects", label: "Projects" },
  { id: "internship", label: "Internship" },
  { id: "hobby", label: "Beyond the Lab" },
];

/* ------------------------------------------------------------------ Home */

export const home = {
  tag: "Mechanical Engineering · Applied Math",
  title: "Nguyen Minh Tuan Anh",
  lede: "A high school student from Ho Chi Minh City (Class of 2027) who uses applied math to build machines: a robot-arm fault detector, a homemade telescope, an observing planner. I also teach STEM to students in rural Vietnam.",
  portrait: I("portrait.jpg", "Nguyen Minh Tuan Anh"),
  education: {
    title: "Education",
    items: [
      {
        school: "VNU-HCM High School for the Gifted",
        years: "2024 – 2027",
        major: "Specialized in Physics",
        city: "Ho Chi Minh City, Vietnam",
        logo: I("logo-vnu-hcm.webp", "VNU-HCM High School for the Gifted logo"),
      },
      {
        school: "Tran Dai Nghia High School for the Gifted",
        years: "2020 – 2024",
        major: "Specialized in Mathematics",
        city: "Ho Chi Minh City, Vietnam",
        logo: I("logo-tdn.webp", "Tran Dai Nghia High School for the Gifted logo"),
      },
    ],
  },
  journey: {
    title: "My Academic Journey",
    ref: "GPA · Vietnamese 10-point scale",
    items: [
      { value: "9.4", label: "Grade 9", note: "/10" },
      { value: "9.4", label: "Grade 10", note: "/10" },
      { value: "9.3", label: "Grade 11", note: "/10" },
    ] as Stat[],
  },
  scores: {
    title: "Scores & Certifications",
    items: [
      { value: "1520", label: "SAT", note: "Math 790 · Verbal 730" },
      { value: "7.5", label: "IELTS", note: "Overall band" },
      { value: "5", label: "AP Calculus BC", note: "AB subscore: 5/5" },
      { value: "4", label: "AP Physics C: Mech.", note: "Out of 5" },
    ] as Stat[],
    courses: [
      {
        title: "Machine Learning Specialization",
        note: "DeepLearning.AI & Stanford Online · Coursera 2026",
        href: "https://drive.google.com/file/d/1Jrw6N94LoESs9NlzOXSeYbeLjIE6bXIv/view?usp=drive_link",
      },
      {
        title: "Mathematics for Machine Learning",
        note: "Imperial College London · Coursera 2026",
        href: "https://drive.google.com/file/d/1e9gPBccvZ7M2s8H6hp0cQOgNZ8bi7K0s/view?usp=drive_link",
      },
    ],
  },
  explore: {
    title: "Explore",
    ref: "Index",
    items: [
      {
        href: "#achievements",
        value: "6",
        valueLabel: "Medals & awards",
        title: "Achievements",
        text: "Gold at STEMCO Physics, 4th of 100 teams at RMIT Tech Camp 2026, and olympiad medals in mathematics.",
      },
      {
        href: "#leadership",
        value: "5",
        valueLabel: "Clubs & initiatives",
        title: "Leadership",
        text: "Two astronomy clubs, an e-waste and solar-energy initiative, a STEM outreach club, and The Promethean Flame, the tutoring project I co-founded.",
      },
      {
        href: "#projects",
        value: "32/32",
        valueLabel: "Faulty runs caught by JointGuard AI",
        title: "Projects",
        text: "A robot-arm fault detector, a homemade refractor telescope, an anti-scam AI and two astronomy tools.",
      },
      {
        href: "#internship",
        value: "3",
        valueLabel: "Labs & internships",
        title: "Internship",
        text: "Industrial robot control at the HCMUT Control & Automation Lab, data analysis and physics lab work.",
      },
      {
        href: "#hobby",
        value: "3",
        valueLabel: "Volunteer projects",
        title: "Beyond the Lab",
        text: "Skills, volunteer work, and what I do when I'm not building things.",
      },
    ],
  },
};

/* ---------------------------------------------------------- Achievements */

export const achievements = {
  kicker: "Honors & Awards",
  title: "Achievements & Recognition",
  intro:
    "Competitions in physics, mathematics and innovation, from international olympiads to a national tech camp where our team built an AI tool against online scams.",
  hero: [
    I("rmit-tech-camp.jpg", "RMIT Tech Camp 2026 4th place certificate"),
    I("stemco-gold.jpg", "STEMCO Physics gold certificate"),
    I("simso-gold.jpg", "SIMSO 2025 gold award certificate"),
  ],
  awardsTitle: "Awards",
  awards: [
    { rank: "4th", name: "RMIT Tech Camp 2026 Grand Finals, Innovation (Scam Shield)", note: "Top 4 of 100 teams nationwide", level: "National", year: "2026", href: "https://drive.google.com/drive/folders/1UlcaKxA5tdPe7pxiMfYQbW6Bg0qIKPwu" },
    { rank: "Gold", name: "International Math and Science Competitions (STEMCO), Physics", note: "Top 5% of 10,000+", level: "International", year: "2025", href: "https://drive.google.com/file/d/1ceew8FQFZPuu8wmvNGMGUZho5zsu3NPp/view?usp=sharing" },
    { rank: "Silver", name: "Siam International Math and Science Olympics (SIMSO), Mathematics", level: "International", year: "2025", href: "https://drive.google.com/file/d/1hiGDcspkXNYneYlyu7kakIpWTwt4jkAR/view?usp=sharing" },
    { rank: "Gold", name: "Siam International Math and Science Olympics (SIMSO), Mathematics", level: "National", year: "2025", href: "https://drive.google.com/file/d/1UObp_HCZV6rmjDq-yN9QuUdDlmETt2db/view?usp=sharing" },
    { rank: "Silver", name: "Asian Science and Mathematics Olympiad (ASMO), Mathematics", note: "Top 12% nationally", level: "National", year: "2025", href: "https://drive.google.com/file/d/1irhiBta3YT_qPubarQJfOOa5KaNS-sUz/view?usp=drive_link" },
    { rank: "Silver", name: "Einstein Olympiad (ESO), Mathematics", note: "Top 15% nationally", level: "National", year: "2026", href: "https://drive.google.com/file/d/1aZqDuGnVpVSIynVD1KT-NplCnek86AXy/view?usp=drive_link" },
  ],
  certsTitle: "Certificates",
  certsRef: "click to enlarge",
  certs: [
    I("rmit-tech-camp.jpg", "RMIT Tech Camp 2026 4th place certificate"),
    I("stemco-gold.jpg", "STEMCO Physics gold certificate"),
    I("simso-silver.jpg", "SIMSO 2025 international round silver award certificate"),
    I("simso-gold.jpg", "SIMSO 2025 national round gold award certificate"),
    I("asmo-silver.jpg", "ASMO 2025 mathematics silver award certificate"),
    I("eso-silver.jpg", "Einstein Olympiad silver medal and certificate"),
  ],
};

/* ---------------------------------------------- Detail pages (10 pages) */

export type Detail = {
  slug: string;
  group: "leadership" | "projects";
  role: string;
  title: string;
  intro: string;
  links: Link[];
  hero: Img[];
  bulletsTitle: string;
  bullets: string[];
  stats: Stat[];
  math?: { label: string; text: string };
  tags?: string[];
  gallery: { caption: string; images: Img[] };
  /** Shown on the Leadership / Projects list pages */
  card: { subtitle?: string; shots: Img[]; stats: Stat[]; bullets?: string[] };
};

export const details: Detail[] = [
  /* ---------------- Leadership ---------------- */
  {
    slug: "pasc",
    group: "leadership",
    role: "Vice President · Sep 2025 – Present",
    title: "PAsC Astronomy Club",
    intro:
      "The astronomy club of VNU-HCM High School for the Gifted. I help run its 40 members, a student research team, and public workshops that put telescopes in front of hundreds of people.",
    links: [
      { label: "Fanpage", href: "https://www.facebook.com/ptnkastronomyclub" },
      { label: "HELIOS", href: "https://drive.google.com/drive/folders/1c2HT-epBzwCxnD8LMttI07JGfefEfmVu" },
    ],
    hero: [
      I("tel-2.jpg", "A young visitor at the PAsC telescope, Math Open Day Da Lat"),
      I("pasc-4.jpg", "PAsC team at Math Open Day Da Lat"),
      I("pasc-7.jpg", "Queue at the PAsC booth, Math Open Day HCMC"),
    ],
    bulletsTitle: "What I did",
    bullets: [
      "Managed a 40-member club; led a 15-student team writing astronomy research articles and organized the HELIOS workshop for 40+ high schoolers.",
      "Co-directed \"The SENSUS\" STEM event with USAC and Tran Dai Nghia's Physics Club for 100+ attendees, judged by Dr. Tran Hai Cat.",
      "Ran an interactive astronomy workshop at Math Open Day (HCMC & Da Lat) for 200+ attendees; raised 7,000,000 VND (~US$270) in sponsorships.",
      "Built the club's D70F700 refractor telescope, now its main instrument for public solar viewing.",
    ],
    stats: [
      { value: "40", label: "Members" },
      { value: "200+", label: "Workshop attendees" },
      { value: "15", label: "Research team", note: "Student writers" },
      { value: "7M", label: "Sponsorship", note: "VND raised" },
    ],
    gallery: {
      caption: "The SENSUS · HELIOS · Math Open Day",
      images: [
        I("sensus-4.jpg", "The SENSUS attendees with Dr. Tran Hai Cat"),
        I("sensus-1.jpg", "Dr. Tran Hai Cat speaking at The SENSUS"),
        I("sensus-2.jpg", "Students presenting a DIY spectroscope at The SENSUS"),
        I("sensus-3.jpg", "PAsC telescope explainer board at The SENSUS"),
        I("pasc-1.jpg", "HELIOS workshop for high schoolers"),
        I("pasc-2.jpg", "Students working on a HELIOS activity"),
        I("pasc-5.jpg", "HELIOS participants in the lab"),
        I("pasc-3.jpg", "PAsC astronomy booth at Math Open Day HCMC"),
        I("pasc-6.jpg", "Children at the PAsC activity table, Da Lat"),
        I("tel-1.jpg", "Guiding a young visitor at the PAsC telescope, Math Open Day Da Lat"),
        I("tel-3.jpg", "Solar viewing at the PAsC booth, Math Open Day Da Lat"),
        I("tel-2.jpg", "A young visitor at the PAsC telescope, Math Open Day Da Lat"),
        I("pasc-8.jpg", "Hands-on robotics at the PAsC booth"),
      ],
    },
    card: {
      subtitle: "VNU-HCM High School for the Gifted",
      shots: [
        I("sensus-4.jpg", "The SENSUS attendees with Dr. Tran Hai Cat"),
        I("sensus-1.jpg", "Dr. Tran Hai Cat speaking at The SENSUS"),
        I("pasc-1.jpg", "HELIOS workshop for high schoolers"),
        I("pasc-3.jpg", "PAsC astronomy booth at Math Open Day HCMC"),
      ],
      stats: [
        { value: "40", label: "Members" },
        { value: "200+", label: "Workshop attendees" },
      ],
      bullets: [
        "Managed a 40-member club; led a 15-student team writing astronomy research articles and organized the HELIOS workshop for 40+ high schoolers.",
        "Co-directed \"The SENSUS\" STEM event with USAC and Tran Dai Nghia's Physics Club for 100+ attendees, judged by Dr. Tran Hai Cat.",
        "Ran an interactive astronomy workshop at Math Open Day (HCMC & Da Lat) for 200+ attendees; raised 7,000,000 VND (~US$270) in sponsorships.",
      ],
    },
  },
  {
    slug: "usac",
    group: "leadership",
    role: "Vice President → Project Lead · Jan 2025 – Present",
    title: "USAC Astronomy Club",
    intro:
      "The University of Science astronomy club, with 24,000+ followers. I was Vice President (Jan – Sep 2025) and have been Project Lead since Sep 2025.",
    links: [
      { label: "Fanpage", href: "https://www.facebook.com/clbusac" },
      { label: "AstroSphere", href: "#astrosphere" },
    ],
    hero: [
      I("usac-6.jpg", "USAC observing night at the Vietnam–Korea Care Center"),
      I("usac-7.jpg", "USAC astronomy exchange at SNA Marianapolis International School"),
      I("usac-5.jpg", "Audience at a USAC talkshow"),
    ],
    bulletsTitle: "What I did",
    bullets: [
      "Coordinated talkshows, star- and Moon-observing nights and school exchanges.",
      "Helped run booths at the 2025 Space Science Festival (solar observing for hundreds of visitors) and 2025 Student–Enterprise Day alongside 33 companies.",
      "Supported the club's academic articles and shared telescopes and mounts with PAsC.",
      "Now lead small product projects, including AstroSphere's orbital computation team.",
    ],
    stats: [
      { value: "24,000+", label: "Followers" },
      { value: "33", label: "Partner companies", note: "Student–Enterprise Day 2025" },
    ],
    gallery: {
      caption: "talkshows · observing nights · school exchanges",
      images: [
        I("usac-3.jpg", "Community Astronomy Week group photo"),
        I("usac-10.jpg", "The USAC club telescope set up for a public observing session"),
        I("usac-1.jpg", "CERIC workshop on reading research papers"),
        I("usac-2.jpg", "CERIC workshop: how the five elements fit together"),
        I("usac-4.jpg", "Science day at Tran Dai Nghia High School for the Gifted"),
        I("usac-7.jpg", "USAC astronomy exchange at SNA Marianapolis International School"),
        I("usac-5.jpg", "Audience at a USAC talkshow"),
        I("usac-6.jpg", "USAC observing night at the Vietnam–Korea Care Center"),
        I("usac-8.jpg", "Night observing session in the park"),
        I("usac-9.jpg", "Students raising hands during a USAC session"),
      ],
    },
    card: {
      subtitle: "University of Science astronomy club, 24,000+ followers",
      shots: [
        I("usac-3.jpg", "Community Astronomy Week group photo"),
        I("usac-10.jpg", "The USAC club telescope set up for a public observing session"),
        I("usac-6.jpg", "USAC observing night at the Vietnam–Korea Care Center"),
      ],
      stats: [
        { value: "24,000+", label: "Followers" },
        { value: "33", label: "Partner companies" },
      ],
    },
  },
  {
    slug: "solar-pulse-hub",
    group: "leadership",
    role: "Co-Founder · Apr 2026 – Present",
    title: "Solar Pulse Hub",
    intro:
      "An e-waste and solar-energy initiative: we raise funds by collecting e-waste for recycling, donate solar lights and scholarships, and teach children how energy works.",
    links: [{ label: "Website", href: "https://solarpulsehub.lovable.app/" }],
    hero: [
      I("solar-1.jpg", "Solar Pulse Hub fundraising station"),
      I("solar-2.jpg", "Handing over solar lights at Suoi Tuong"),
      I("solar-4.jpg", "Teaching children at Tam Duc Shelter"),
    ],
    bulletsTitle: "What I did",
    bullets: [
      "Raised 15,000,000 VND (~US$570) by collecting e-waste for recycling.",
      "Taught 6+ sessions on kinetic and solar energy to 40+ children at Tam Duc Shelter.",
      "Donated 7 solar-powered lights and supplies worth 11,000,000 VND (~US$420), plus 40 scholarships of 200,000 VND each, to Tam Duc Shelter and Suoi Tuong Floating Village.",
    ],
    stats: [
      { value: "15M", label: "Raised", note: "VND from e-waste" },
      { value: "40+", label: "Children taught", note: "6+ energy sessions" },
      { value: "7", label: "Solar lights", note: "Donated" },
      { value: "40", label: "Scholarships" },
    ],
    gallery: {
      caption: "Fundraising · Suoi Tuong · Tam Duc",
      images: [
        I("solar-5.jpg", "Selling plants at the fundraising station"),
        I("solar-6.jpg", "Loading donations for Suoi Tuong"),
        I("solar-3.jpg", "Delivering donated supplies"),
        I("solar-7.jpg", "Charity class at Suoi Tuong Floating Village"),
        I("solar-8.jpg", "Energy lesson at Tam Duc Shelter"),
        I("solar-4.jpg", "Teaching children at Tam Duc Shelter"),
      ],
    },
    card: {
      shots: [
        I("solar-1.jpg", "Solar Pulse Hub fundraising station"),
        I("solar-2.jpg", "Handing over solar lights at Suoi Tuong"),
        I("solar-3.jpg", "Delivering donated supplies"),
        I("solar-4.jpg", "Teaching children at Tam Duc Shelter"),
      ],
      stats: [
        { value: "7", label: "Solar lights donated" },
        { value: "40", label: "Scholarships" },
      ],
    },
  },
  {
    slug: "mathmarvel",
    group: "leadership",
    role: "President · Jan 2025 – Present",
    title: "MathMarvel",
    intro:
      "A STEM outreach club. Our biggest project, SENSTEM, brought a hands-on science fair and classes to students in Dong Thap.",
    links: [{ label: "Fanpage", href: "https://www.facebook.com/MathMarvel.Club" }],
    hero: [
      I("mm-1.jpg", "Teaching a class in Dong Thap"),
      I("dong-thap-trip.jpg", "Group photo with students in Dong Thap"),
      I("senstem-fair.jpg", "SENSTEM science fair game"),
    ],
    bulletsTitle: "What I did",
    bullets: [
      "Ran \"SENSTEM,\" a STEM outreach campaign in Dong Thap with a hands-on science fair (water rockets, remote-controlled cars).",
      "Organized English communication classes for 100 students.",
      "Distributed 28,000,000 VND (~US$1,080) in aid, including 30 health insurance scholarships and 100+ school supply packages.",
    ],
    stats: [
      { value: "100", label: "Students taught", note: "English classes" },
      { value: "28M", label: "Aid distributed", note: "VND" },
      { value: "30", label: "Health insurance", note: "Scholarships" },
      { value: "100+", label: "Supply packages" },
    ],
    gallery: {
      caption: "SENSTEM · Dong Thap",
      images: [
        I("mm-2.jpg", "Hands-on science experiment with a student"),
        I("mm-3.jpg", "Science demo at the front of the class"),
        I("mm-5.jpg", "Classroom activity with prizes"),
        I("mm-4.jpg", "Remote-controlled car activity with children"),
        I("mm-8.jpg", "Science fair game station"),
        I("mm-6.jpg", "Building a project together"),
      ],
    },
    card: {
      shots: [
        I("mm-1.jpg", "Teaching a class in Dong Thap"),
        I("mm-2.jpg", "Hands-on science experiment with a student"),
        I("mm-3.jpg", "Science demo at the front of the class"),
        I("mm-4.jpg", "Remote-controlled car activity with children"),
      ],
      stats: [
        { value: "100", label: "Students taught English" },
        { value: "28M", label: "VND in aid" },
      ],
    },
  },
  {
    slug: "promethean-flame",
    group: "leadership",
    role: "Co-Founder & Head of Academic Department · Jun 2025 – Mar 2026",
    title: "The Promethean Flame",
    intro:
      "A student-run tutoring project bringing STEM support to underserved students, from a teaching trip in Dong Thap to students in storm- and flood-affected areas.",
    links: [
      { label: "Fanpage", href: "https://www.facebook.com/theprometheanflame.project" },
      { label: "Ngôi Nhà Trí Tuệ", href: "https://ngoinhatritue.org/" },
      { label: "EDTOP", href: "https://nntt.edtop.net/about/overview/index.php" },
      { label: "Thanh Nien article", href: "https://thanhnien.vn/hoc-sinh-truong-chuyen-tphcm-truyen-lua-stem-den-tinh-xa-185251026085955751.htm" },
    ],
    hero: [
      I("tutoring-class.jpg", "Promethean Flame tutoring class"),
      I("dong-thap-trip.jpg", "Group photo with students on the Dong Thap teaching trip"),
      I("thanh-nien-article.jpg", "Team at Thanh Nien Newspaper"),
    ],
    bulletsTitle: "What we did",
    bullets: [
      "Grew a 40+ member tutoring club and led a 10-member team teaching Math, Physics and Chemistry to 50+ students.",
      "Ran a one-week teaching trip to Dong Thap with MathMarvel.",
      "Collaborated with Ngôi Nhà Trí Tuệ to tutor 70+ students in storm- and flood-affected areas, helping 85% keep up with coursework.",
      "Supported development of its learning platform EDTOP, and used Scam Shield to teach students to spot online scams.",
      "Featured in Thanh Nien Newspaper.",
    ],
    stats: [
      { value: "40+", label: "Club members", note: "Volunteer tutors" },
      { value: "120+", label: "Students tutored", note: "50+ directly, 70+ with Ngôi Nhà Trí Tuệ" },
      { value: "85%", label: "Kept up with coursework", note: "Students in flood-affected areas" },
      { value: "1600+", label: "Page followers", note: "Facebook fanpage" },
    ],
    gallery: {
      caption: "classes · Dong Thap · press",
      images: [
        I("promethean-1.jpg", "\"The Promethean Flame is coming\" written on a chalkboard"),
        I("promethean-2.jpg", "Outdoor activity with Promethean Flame students"),
        I("promethean-3.jpg", "Promethean Flame students gathered outside"),
        I("promethean-4.jpg", "Online meeting with Ngoi Nha Tri Tue"),
        I("thanh-nien-article.jpg", "Team at Thanh Nien Newspaper"),
      ],
    },
    card: {
      subtitle: "Student-run STEM tutoring for underserved students; featured in Thanh Nien Newspaper",
      shots: [
        I("tutoring-class.jpg", "Promethean Flame tutoring class"),
        I("promethean-1.jpg", "\"The Promethean Flame is coming\" written on a chalkboard"),
        I("dong-thap-trip.jpg", "Group photo with students on the Dong Thap teaching trip"),
        I("thanh-nien-article.jpg", "Team at Thanh Nien Newspaper"),
      ],
      stats: [
        { value: "120+", label: "Students tutored" },
        { value: "40+", label: "Members" },
      ],
      bullets: [
        "Grew a 40+ member tutoring club and led a 10-member team teaching Math, Physics and Chemistry to 50+ students.",
        "Ran a one-week teaching trip to Dong Thap with MathMarvel.",
        "Collaborated with Ngôi Nhà Trí Tuệ to tutor 70+ students in storm- and flood-affected areas, helping 85% keep up with coursework.",
      ],
    },
  },

  /* ---------------- Projects ---------------- */
  {
    slug: "jointguard",
    group: "projects",
    role: "Founder · Jan 2026 – Present",
    title: "JointGuard AI",
    intro:
      "Can control signals alone reveal rising joint friction in robot arms? Advised by Dr. Nguyen Vinh Hao (HCMUT) and Mr. Phung Van Hung (VNU-HCM High School for the Gifted).",
    links: [
      { label: "GitHub", href: "https://github.com/chechoutanh/JointGuard-AI" },
      { label: "Project page", href: "https://jointguardaii.vercel.app/" },
    ],
    hero: [
      I("jg-2.jpg", "Simulated robot arm raising an anomaly alarm"),
      I("jg-1.jpg", "JointGuard AI project page"),
      I("jg-4.jpg", "How a joint fault shows up inside the physics"),
    ],
    bulletsTitle: "How it works",
    bullets: [
      "Built a physics-based robot-arm simulator and fault-injection framework using only torque and tracking error.",
      "Random Forest detector under a leakage-free protocol: 0.21 false alarms/min; identified the faulty joint in 30/32 runs.",
      "Reported its failure on heavier, faster held-out conditions (3.9 false alarms/min); released open source (MIT) with tests, a technical report and a demo.",
      "Grew out of my internship with industrial robot arms at HCMUT.",
    ],
    stats: [
      { value: "32/32", label: "Faulty runs caught", note: "vs. 16/32 for baseline" },
      { value: "30/32", label: "Faulty joint found", note: "Runs" },
      { value: "0.21", label: "False alarms", note: "Per minute" },
      { value: "3.9", label: "Held-out failure", note: "False alarms/min, reported openly" },
    ],
    math: {
      label: "Mechanical Engineering · Applied Math",
      text: "Modeled the arm from its equations of motion, so worn joints show up as extra friction torque; then treated detection as a statistics problem, trading missed faults against false alarms per minute.",
    },
    tags: ["Mechanical Eng.", "Applied Math", "PyBullet", "Python", "scikit-learn", "Robot dynamics"],
    gallery: {
      caption: "project page · simulator",
      images: [
        I("jg-1.jpg", "JointGuard AI project page"),
        I("jg-2.jpg", "Simulated robot arm raising an anomaly alarm"),
        I("jg-3.jpg", "Two-joint arm model built from the equations of motion"),
        I("jg-4.jpg", "How a joint fault shows up inside the physics"),
      ],
    },
    card: {
      shots: [
        I("jg-1.jpg", "JointGuard AI project page"),
        I("jg-2.jpg", "Simulated robot arm raising an anomaly alarm"),
        I("jg-3.jpg", "Two-joint arm model built from the equations of motion"),
        I("jg-4.jpg", "How a joint fault shows up inside the physics"),
      ],
      stats: [{ value: "32/32", label: "Faulty test runs caught", note: "vs. 16/32 for baseline" }],
    },
  },
  {
    slug: "telescope",
    group: "projects",
    role: "Leader · PAsC · Sep 2025 – Present",
    title: "D70F700 Refractor Telescope",
    intro:
      "A homemade 70 mm, f/10 achromatic refractor, built from calculated optical lengths and a PVC tube, that has become PAsC's main instrument for safe public solar viewing.",
    links: [{ label: "Product & observations", href: "https://drive.google.com/drive/folders/1OlRFkAxIN9be-bYSI30VybXsZ67RZp_O" }],
    hero: [
      I("dtel-3.jpg", "Front view of the D70F700 refractor on its tripod"),
      I("dtel-1.jpg", "The homemade D70F700 refractor on its tripod"),
      I("tel-4.jpg", "Construction diagram from the telescope build plan"),
    ],
    bulletsTitle: "How I built it",
    bullets: [
      "Designed and built a 70 mm, f/10 achromatic refractor, calculating optical lengths to fabricate the PVC tube assembly and limit chromatic aberration.",
      "Reached 20x magnification with available components and a mount borrowed from another club.",
      "Main instrument at PAsC events, letting 300+ attendees safely view the Sun through a solar filter.",
    ],
    stats: [
      { value: "70 mm", label: "Aperture" },
      { value: "f/10", label: "Focal ratio", note: "700 mm focal length" },
      { value: "20x", label: "Magnification" },
      { value: "300+", label: "Solar viewers" },
    ],
    math: {
      label: "Mechanical Engineering · Applied Math",
      text: "Turned optics math (focal length, focal ratio, magnification) into physical dimensions, then designed and fabricated the tube assembly to hold the lenses at those lengths.",
    },
    tags: ["Mechanical Eng.", "Applied Math", "Optics", "PVC fabrication", "Solar filter"],
    gallery: {
      caption: "the build · parts · plan",
      images: [
        I("dtel-1.jpg", "The homemade D70F700 refractor on its tripod"),
        I("dtel-2.jpg", "The PVC tube assembly with clamps and finder scope"),
        I("dtel-3.jpg", "Front view of the D70F700 refractor on its tripod"),
        I("dtel-4.jpg", "The objective end of the telescope"),
        I("dtel-5.jpg", "Solar filter for safe public solar viewing"),
        I("dtel-6.jpg", "Eyepiece set used with the telescope"),
        I("tel-5.jpg", "Telescope construction plan: overview and theory"),
        I("tel-4.jpg", "Construction diagram from the telescope build plan"),
      ],
    },
    card: {
      subtitle: "Homemade achromatic refractor",
      shots: [
        I("dtel-1.jpg", "The homemade D70F700 refractor on its tripod"),
        I("dtel-2.jpg", "The PVC tube assembly with clamps and finder scope"),
        I("dtel-5.jpg", "Solar filter for safe public solar viewing"),
        I("dtel-6.jpg", "Eyepiece set used with the telescope"),
      ],
      stats: [
        { value: "70 mm · f/10", label: "Homemade achromatic refractor" },
        { value: "300+", label: "People viewed the Sun through it" },
      ],
    },
  },
  {
    slug: "scam-shield",
    group: "projects",
    role: "Co-Founder & Lead Developer · Oct 2025 – Present",
    title: "Scam Shield",
    intro:
      "An AI-powered tool that helps people recognize online scams. Placed 4th of 100 teams at RMIT Tech Camp 2026; competition partners: Google, AWS.",
    links: [
      { label: "Website", href: "https://scammshield.vercel.app/#/home" },
      { label: "GitHub", href: "https://github.com/chechoutanh/scam-call-shield" },
      { label: "Video demo", href: "https://drive.google.com/drive/folders/1b_8OnO5-TToMKckTPdcab7PJxQBrHkd2" },
    ],
    hero: [
      I("ss-web.jpg", "Scam Shield home page"),
      I("ss-2.jpg", "Scam Shield warning-signs report"),
      I("rmit-tech-camp.jpg", "RMIT Tech Camp 2026 4th place certificate"),
    ],
    bulletsTitle: "What I built",
    bullets: [
      "Led development in a 4-member team: a bilingual (VI/EN) web app and browser extension combining ML models with rule-based checks on text, images, videos and files.",
      "Used the tool with The Promethean Flame to teach 50+ rural students to recognize scam signals.",
    ],
    stats: [
      { value: "4th", label: "RMIT Tech Camp", note: "Of 100 teams" },
      { value: "100+", label: "Active users" },
      { value: "50+", label: "Students taught", note: "With The Promethean Flame" },
      { value: "4", label: "Team", note: "Members" },
    ],
    math: {
      label: "Applied Math",
      text: "At its core a classification problem: machine-learning models give probabilistic signals, and rule-based checks catch the clear-cut cases they can miss.",
    },
    tags: ["Applied Math", "Machine learning", "Web app", "Browser extension"],
    gallery: {
      caption: "web app · award",
      images: [
        I("ss-web.jpg", "Scam Shield home page"),
        I("ss-1.jpg", "Scam Shield content checker"),
        I("ss-2.jpg", "Scam Shield warning-signs report"),
        I("ss-3.jpg", "Scam Shield guide to common scam types"),
        I("ss-4.jpg", "Scam Shield analysis history"),
        I("rmit-tech-camp.jpg", "RMIT Tech Camp 2026 4th place certificate"),
      ],
    },
    card: {
      subtitle: "An AI-powered tool that helps people recognize online scams. Competition partners: Google, AWS.",
      shots: [
        I("ss-1.jpg", "Scam Shield content checker"),
        I("ss-2.jpg", "Scam Shield warning-signs report"),
        I("ss-3.jpg", "Scam Shield guide to common scam types"),
        I("ss-4.jpg", "Scam Shield analysis history"),
      ],
      stats: [
        { value: "4th / 100", label: "Teams at RMIT Tech Camp 2026" },
        { value: "100+", label: "Active users" },
      ],
    },
  },
  {
    slug: "skyscore",
    group: "projects",
    role: "Developer · Feb 2025 – Present",
    title: "SkyScore",
    intro:
      "An open-source observing planner, advised by Dr. Nguyen Ngoc Duy. USAC and PAsC used it to plan 2+ observing trips and the HELIOS workshop.",
    links: [
      { label: "Website", href: "https://skycore.streamlit.app/" },
      { label: "GitHub", href: "https://github.com/chechoutanh/Skycore" },
    ],
    hero: [
      I("sky-1.jpg", "SkyScore app: best observing window and hourly score"),
      I("sky-2.jpg", "SkyScore criteria and predicted seeing charts"),
      I("sky-3.jpg", "SkyScore README: pipeline and mathematical model"),
    ],
    bulletsTitle: "How it works",
    bullets: [
      "Scores every hour on target altitude, moonlight, cloud cover and seeing, using Astropy and Open-Meteo forecasts.",
      "Multi-objective optimization: best consecutive-hour window search and Pareto-front analysis without fixed weights.",
      "Random Forest seeing predictor, openly trained on physics-based proxy labels; bilingual Streamlit app with pytest tests.",
    ],
    stats: [
      { value: "500", label: "Robustness checks", note: "Random weight sets" },
      { value: "2+", label: "Observing trips", note: "Planned by USAC & PAsC" },
      { value: "4", label: "Criteria", note: "Altitude, Moon, cloud, seeing" },
    ],
    math: {
      label: "Applied Math",
      text: "Framed \"when should we observe?\" as a multi-objective optimization: a Pareto front instead of one fixed weighting, stress-tested against 500 random weight sets.",
    },
    tags: ["Applied Math", "Astropy", "Streamlit", "Optimization"],
    gallery: {
      caption: "app · README",
      images: [
        I("sky-1.jpg", "SkyScore app: best observing window and hourly score"),
        I("sky-2.jpg", "SkyScore criteria and predicted seeing charts"),
        I("sky-3.jpg", "SkyScore README: pipeline and mathematical model"),
      ],
    },
    card: {
      subtitle: "Open-source observing planner, advised by Dr. Nguyen Ngoc Duy. Used by USAC and PAsC to plan 2+ observing trips and the HELIOS workshop.",
      shots: [
        I("sky-1.jpg", "SkyScore app: best observing window and hourly score"),
        I("sky-2.jpg", "SkyScore criteria and predicted seeing charts"),
        I("sky-3.jpg", "SkyScore README: pipeline and mathematical model"),
      ],
      stats: [{ value: "500", label: "Random weight sets in robustness checks", note: "Pareto-front trade-off analysis" }],
    },
  },
  {
    slug: "astrosphere",
    group: "projects",
    role: "Orbital Computation Lead · USAC · Feb 2026 – Present",
    title: "AstroSphere",
    intro:
      "A browser-based 3D celestial-sphere simulator for teaching basic astronomy, built with the USAC Astronomy Club.",
    links: [
      { label: "Web app (Vietnamese)", href: "https://astrosphere.clbtvusac.com/" },
      { label: "USAC", href: "#usac" },
    ],
    hero: [
      I("astro-2.jpg", "The 3D celestial sphere with the horizon and celestial pole"),
      I("astro-1.jpg", "AstroSphere celestial-sphere simulator"),
      I("astro-3.jpg", "Latitude and sky-rotation controls"),
    ],
    bulletsTitle: "What I led",
    bullets: [
      "Led the team computing sidereal time and equatorial–horizontal coordinate transformations, showing how the sky's motion depends on latitude.",
      "Validated every transformation automatically against the astronomy-engine library (error < 0.1°); documented the model's limits (J2000.0 epoch; no precession, nutation or refraction).",
    ],
    stats: [
      { value: "< 0.1°", label: "Coordinate error", note: "vs. astronomy-engine" },
      { value: "IAU", label: "Sidereal time", note: "1982 model" },
    ],
    math: {
      label: "Applied Math",
      text: "Spherical trigonometry and coordinate rotations turned into code, with every result checked numerically against a reference library to under 0.1°.",
    },
    tags: ["Applied Math", "Spherical astronomy", "3D web", "Automated tests"],
    gallery: {
      caption: "web app",
      images: [
        I("astro-1.jpg", "AstroSphere celestial-sphere simulator"),
        I("astro-2.jpg", "The 3D celestial sphere with the horizon and celestial pole"),
        I("astro-3.jpg", "Latitude and sky-rotation controls"),
      ],
    },
    card: {
      subtitle: "A browser-based 3D celestial-sphere simulator for teaching basic astronomy.",
      shots: [
        I("astro-1.jpg", "AstroSphere celestial-sphere simulator"),
        I("astro-2.jpg", "The 3D celestial sphere with the horizon and celestial pole"),
        I("astro-3.jpg", "Latitude and sky-rotation controls"),
      ],
      stats: [{ value: "< 0.1°", label: "Coordinate error vs. astronomy-engine", note: "IAU 1982 sidereal time" }],
    },
  },
];

export const groups = {
  leadership: {
    id: "leadership",
    kicker: "Clubs & Initiatives",
    title: "Leadership & Community",
    intro:
      "Most of my leadership happens under the night sky: running two astronomy clubs, bringing telescopes to public events, and turning STEM into something students in rural areas can touch.",
    hero: [
      I("tel-2.jpg", "A young visitor at the PAsC telescope, Math Open Day Da Lat"),
      I("tel-3.jpg", "Solar viewing at the PAsC booth, Math Open Day Da Lat"),
      I("senstem-fair.jpg", "SENSTEM science fair game in Dong Thap"),
    ],
    order: ["pasc", "usac", "solar-pulse-hub", "mathmarvel", "promethean-flame"],
    backLabel: "Leadership",
  },
  projects: {
    id: "projects",
    kicker: "Applied Mathematics & Modeling",
    title: "Engineering Projects",
    intro:
      "I like problems where a physical system has to be measured, modeled and tested: a robot arm whose joints wear out, a telescope tube cut to the right optical length, a night sky that has to be scored hour by hour.",
    hero: [
      I("jg-2.jpg", "JointGuard AI robot-arm simulator"),
      I("dtel-1.jpg", "The homemade D70F700 refractor on its tripod"),
      I("sky-1.jpg", "SkyScore observing planner"),
    ],
    order: ["jointguard", "telescope", "scam-shield", "skyscore", "astrosphere"],
    backLabel: "Projects",
  },
} as const;

/* ------------------------------------------------------------ Internship */

export const internship = {
  kicker: "Hands-on Experience",
  title: "Internship & Lab Work",
  intro:
    "Working with industrial robot arms at HCMUT is where JointGuard AI started. These are the labs and teams that taught me how engineering works outside the classroom.",
  hero: [
    I("hcmut-lab.jpg", "Working at the HCMUT Mechatronics Lab"),
    I("ros-robot.jpg", "Testing a ROS-based mobile robot on a line track"),
    I("physics-lab.jpg", "Physics lab session"),
  ],
  items: [
    {
      when: "May – Aug 2025",
      title: "Engineering Intern · HCMUT Control & Automation Lab",
      org: "Ho Chi Minh City University of Technology; advised by Dr. Nguyen Vinh Hao.",
      bullets: [
        "Built a C++/Python GUI for industrial robot control, improving real-time joint telemetry streaming and UI latency.",
        "Modeled control loops and robot dynamics in MATLAB/Simulink; programmed ROS-based mobile robots (Arduino, sensor fusion) and tested obstacle avoidance and motor response on hardware.",
        "This work with industrial arms led to my independent project, JointGuard AI.",
      ],
      shots: [
        I("hcmut-1.jpg", "Receiving the internship certificate at the Yaskawa Mechatro Lab"),
        I("hcmut-2.jpg", "Programming an industrial robot with the teach pendant"),
        I("hcmut-3.jpg", "Testing obstacle avoidance on a mobile robot"),
        I("hcmut-4.jpg", "Working on the robot control GUI"),
      ],
      links: [
        { label: "HCMUT", href: "https://hcmut.edu.vn/" },
        { label: "Certificate", href: "https://drive.google.com/drive/folders/1V55qenLLvOpLrBjUfKzfXGocGLgHwEEj" },
      ],
    },
    {
      when: "Jan – May 2026",
      title: "Physics Lab Assistant · VNU-HCM High School for the Gifted",
      org: "Calibrated optics and oscillation apparatus; wrote LaTeX lab reports with error analysis (advisor: M.Sc. Trinh Thu Thuy).",
      bullets: [],
      shots: [
        I("phys-1.jpg", "Students running an optics experiment"),
        I("phys-2.jpg", "Physics lab session in progress"),
        I("phys-3.jpg", "Setting up lab apparatus"),
        I("phys-4.jpg", "Lab groups calibrating equipment"),
      ],
      links: [{ label: "Lab reports", href: "https://drive.google.com/drive/folders/1jhs3tHF7-ydRpsWs9-9m1WbtDivto-v5" }],
    },
    {
      when: "Jun – Jul 2026",
      title: "Project Intern · TA Communications",
      org: "Supervised by Ms. Anna Thuy, Sales & Operations Manager.",
      bullets: [
        "Analyzed store-level sales datasets for three international consumer brands in Excel and Python, quantifying growth rates, variability and trends.",
        "Built dashboards that turned raw data into statistical summaries for comparing stores.",
      ],
      shots: [I("ta-cert.jpg", "TA Communications certificate of internship")],
      links: [{ label: "Certificate", href: "https://drive.google.com/drive/folders/1c9mo1iDWQ3LoeN-WNZ31i3k6pCjGJmaj" }],
    },
  ],
};

/* ---------------------------------------------------------- Beyond the Lab */

export const hobby = {
  kicker: "Skills · Volunteering · Interests",
  title: "Beyond the Lab",
  intro:
    "The tools I work with, the communities I volunteer for, and the games I play when the telescope is packed away: Chinese chess, soccer and table tennis.",
  hero: [
    I("soccer-2.jpg", "Class 10 Math – 10 Physics roster, Nang Khieu Championship 2025"),
    I("soccer-1.jpg", "Both teams lined up before a school soccer match"),
    I("gia-lai-trip.jpg", "Handing out supplies in Chu Puh, Gia Lai"),
  ],
  skillsTitle: "Skills",
  skills: [
    { title: "Engineering & Math", items: ["Robot kinematics", "Robot dynamics", "Control systems", "ROS", "Time-series analysis", "Multi-objective optimization"] },
    { title: "Programming & Tools", items: ["Python", "scikit-learn", "Astropy", "Streamlit", "C++", "Java", "MATLAB/Simulink", "PyBullet", "Arduino", "Git"] },
    { title: "Languages & Interests", items: ["Vietnamese (native)", "English (IELTS 7.5)", "Chinese chess", "Soccer", "Table tennis"] },
  ],
  volunteerTitle: "Volunteer Work",
  volunteer: [
    {
      when: "Sep – Oct 2026",
      title: "Tree-Planting Donor · DalaGroup, Da Lat",
      links: [
        { label: "Website", href: "https://dalagroup.vn/en/home-english/" },
        { label: "Certificate", href: "https://drive.google.com/file/d/1SrQIlZAH06zRKY7p_i3Gq3xEUwzEWJmf/view?usp=drive_link" },
      ],
      shots: [I("dala-cert.jpg", "Dala Forest tree-planting certificate")],
    },
    {
      when: "Feb – May 2025",
      title: "Teaching Volunteer · Sugar Vietnam – Duong Den Tri Thuc",
      links: [
        { label: "Fanpage", href: "https://www.facebook.com/sugarvn.ddtt/" },
        { label: "Certificate", href: "https://drive.google.com/file/d/1HmM__f7XEvPxu_i12lVhsE8zC57IBg0U/view?usp=drive_link" },
      ],
      shots: [I("sugar-cert.jpg", "Sugar Vietnam teaching volunteer certificate")],
    },
    {
      when: "Aug 2024",
      title: "Volunteer · Supply distribution to 300+ ethnic minority families · Chu Puh District, Gia Lai",
      links: [
        { label: "Website", href: "https://chupuh.gialai.gov.vn/" },
        { label: "Images", href: "https://drive.google.com/drive/folders/1TQPdKsrFyy-XM_MheEv_QQDPg1a4xN8y?usp=drive_link" },
      ],
      shots: [
        I("gia-lai-1.jpg", "Supply distribution at the Chu Puh community hall"),
        I("gia-lai-2.jpg", "Families gathering for supplies in Gia Lai"),
        I("gia-lai-3.jpg", "Giving supplies to children in Gia Lai"),
        I("gia-lai-4.jpg", "Mother and child at the Gia Lai distribution"),
      ],
    },
  ],
  offTitle: "Off the Clock",
  offRef: "soccer",
  off: [
    I("soccer-1.jpg", "Both teams lined up before a school soccer match"),
    I("soccer-2.jpg", "Class 10 Math – 10 Physics roster, Nang Khieu Championship 2025"),
  ],
};
