export type Program = {
  slug: string;
  title: string;
  tagline: string;
  about: string;
  goals: string[];
  duration: string;
  format: string;
  applyLabel: string;
  applyUrl: string;
  stats: { label: string; value: string }[];
  mentors: { name: string; role: string; bio: string; image: string }[];
  partners: { name: string; logo: string }[];
  cohorts: { name: string; highlight: string; contributor: string; testimonial: string }[];
  achievements: string[];
  gallery: { type: "photo" | "video" | "reel"; title: string; image: string; url?: string }[];
  faqs: { question: string; answer: string }[];
};

const teamImage = (file: string) =>
  `https://raw.githubusercontent.com/wikiclubtechuu/WikiClub-Tech-UU/main/public/team/${encodeURIComponent(file)}`;

const gallery = {
  g2: "https://i.ibb.co/fYgVkCBj/g2.jpg",
  g3: "https://i.ibb.co/BVxqZMqW/g3.jpg",
  g4: "https://i.ibb.co/7N0LYyyL/g4.jpg",
  g8: "https://i.ibb.co/k6c7RdB0/g8.jpg",
  g9: "https://i.ibb.co/21x6Hgv5/g9.jpg",
  g16: "https://i.ibb.co/jvMLqNDD/g16.jpg",
};

export const programs: Record<string, Program> = {
  "chai-with-wiki": {
    slug: "chai-with-wiki",
    title: "Chai with Wiki",
    tagline: "Good chai, great ideas — conversations that make open source feel approachable.",
    about:
      "WikiClub Tech UU's first Chai with Wiki session brought students together at United University to explore Wikimedia, MediaWiki and the open-source movement in a relaxed community setting.",
    goals: [
      "Make Wikimedia and open source approachable",
      "Connect students with contributors and mentors",
      "Encourage curiosity, collaboration and knowledge sharing",
    ],
    duration: "Community session",
    format: "Interactive discussion + community meetup",
    applyLabel: "Explore the program",
    applyUrl: "https://meta.wikimedia.org/wiki/Chai_with_Wiki",
    stats: [
      { label: "First session", value: "2024" },
      { label: "Focus", value: "Wikimedia" },
      { label: "Format", value: "Community" },
      { label: "Theme", value: "Open Source" },
    ],
    mentors: [
      {
        name: "Ankit Kumar Verma",
        role: "Project Coordinator, Wiki@IIIT Hyderabad",
        bio: "Founder of GDG Prayagraj and Project Coordinator of Wiki@IIIT Hyderabad. He supported the first Chai with Wiki session and works on open-source and community building.",
        image: teamImage("ankitsir.png"),
      },
      {
        name: "Sanskar Dubey",
        role: "WikiClub Tech UU Mentor",
        bio: "A WikiClub Tech UU mentor who supports the community and helps learners take their next steps in technology and open-source collaboration.",
        image: teamImage("Sanskar Dubey.jpg"),
      },
    ],
    partners: [
      { name: "Wikitech Club India", logo: "W" },
      { name: "Wiki@IIIT Hyderabad", logo: "W@" },
      { name: "GDG Prayagraj", logo: "GDG" },
    ],
    cohorts: [
      {
        name: "First session",
        highlight: "Chai with Wiki launched at United University",
        contributor: "October 2024",
        testimonial:
          "The session introduced students to MediaWiki, Wikimedia and the idea that technology and knowledge can be shared, built and improved together.",
      },
    ],
    achievements: [
      "Hosted WikiClub Tech UU's first Chai with Wiki session",
      "Introduced students to MediaWiki and the Wikimedia ecosystem",
      "Connected open-source ideas with a student community setting",
      "Supported the message that everyone can contribute to free knowledge",
    ],
    gallery: [
      { type: "photo", title: "Chai with Wiki", image: gallery.g2 },
      { type: "photo", title: "Community session", image: gallery.g3 },
      { type: "photo", title: "WikiClub community", image: gallery.g4 },
      { type: "photo", title: "Community moments", image: gallery.g16 },
    ],
    faqs: [
      {
        question: "What is Chai with Wiki?",
        answer: "It is a relaxed community format for discussing Wikimedia, open source, technology and contributor experiences.",
      },
      {
        question: "Do I need coding experience?",
        answer: "No. The first session focused on making Wikimedia and open source approachable for curious students.",
      },
      {
        question: "Who can participate?",
        answer: "Students and community members interested in Wikimedia, open source, technology and collaborative learning can follow WikiClub Tech UU for upcoming sessions.",
      },
      {
        question: "How can I contact WikiClub Tech UU?",
        answer: "Email wikiclub@united.edu.in for program enquiries, mentoring or collaboration.",
      },
    ],
  },

  "road-to-wiki": {
    slug: "road-to-wiki",
    title: "Road to Wiki",
    tagline: "A guided path into Wikimedia, open source and collaborative project work.",
    about:
      "Road to WIKI is a structured WikiClub initiative that gives participants a practical path toward contributing to Wikimedia and open-source projects. The official community site documents the inauguration of Road to WIKI Cohort 2 as a new phase of learning and collaborative projects.",
    goals: [
      "Build practical open-source contribution skills",
      "Help learners understand collaborative project workflows",
      "Create a clear path from learning to meaningful contribution",
    ],
    duration: "Cohort-based",
    format: "Learning + collaborative projects + community support",
    applyLabel: "Explore Road to Wiki",
    applyUrl: "https://meta.wikimedia.org/wiki/Road_to_wiki_program_UU",
    stats: [
      { label: "Documented cohort", value: "2" },
      { label: "Focus", value: "Open Source" },
      { label: "Learning", value: "Practical" },
      { label: "Community", value: "Wikimedia" },
    ],
    mentors: [
      {
        name: "Ankit Kumar Verma",
        role: "Project Coordinator, Wiki@IIIT Hyderabad",
        bio: "An open-source and community-building mentor associated with Wiki@IIIT Hyderabad and the wider technology community.",
        image: teamImage("ankitsir.png"),
      },
      {
        name: "Sanskar Dubey",
        role: "WikiClub Tech UU Mentor",
        bio: "WikiClub Tech UU mentor supporting learners and community members as they explore technology and open-source contribution.",
        image: teamImage("Sanskar Dubey.jpg"),
      },
    ],
    partners: [
      { name: "Wiki@IIIT Hyderabad", logo: "W@" },
      { name: "Wikitech Club India", logo: "W" },
      { name: "WikiClub Tech UU", logo: "UU" },
    ],
    cohorts: [
      {
        name: "Cohort 2",
        highlight: "Learning and collaborative projects",
        contributor: "Inaugurated as a new phase of the program",
        testimonial:
          "Road to WIKI Cohort 2 was introduced as a structured path for participants to engage in impactful AI and open-source projects.",
      },
    ],
    achievements: [
      "Road to WIKI Cohort 2 was inaugurated by the community",
      "Created a structured path for learning and collaborative projects",
      "Connected participants with AI and open-source project opportunities",
      "Encouraged learners to continue contributing beyond the program",
    ],
    gallery: [
      { type: "photo", title: "Road to Wiki community", image: gallery.g8 },
      { type: "photo", title: "Learning together", image: gallery.g9 },
      { type: "photo", title: "Community collaboration", image: gallery.g16 },
      { type: "photo", title: "WikiClub moments", image: gallery.g4 },
    ],
    faqs: [
      {
        question: "What is Road to Wiki?",
        answer: "It is a WikiClub Tech UU learning and collaboration initiative designed to help participants move toward meaningful Wikimedia and open-source contributions.",
      },
      {
        question: "Is Road to Wiki beginner friendly?",
        answer: "The program is designed around learning and guided participation, making it suitable for learners who want a structured introduction to open-source collaboration.",
      },
      {
        question: "What happened in Cohort 2?",
        answer: "Cohort 2 was inaugurated as a new phase of learning and collaborative projects, with opportunities around AI and open source.",
      },
      {
        question: "How can I ask about the next cohort?",
        answer: "Email wikiclub@united.edu.in for the latest cohort and participation information.",
      },
    ],
  },
};
