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

export const programs: Record<string, Program> = {
  "chai-with-wiki": {
    slug: "chai-with-wiki",
    title: "Chai with Wiki",
    tagline: "Conversations, community and open-source learning over a cup of chai.",
    about: "A relaxed community program where students meet contributors, mentors and peers to discover open source, technology and the people behind the projects.",
    goals: ["Make open source approachable", "Connect learners with mentors", "Share practical contributor journeys"],
    duration: "4 weeks",
    format: "Weekly community sessions",
    applyLabel: "Join the next cohort",
    applyUrl: "#apply",
    stats: [
      { label: "Learners", value: "120+" },
      { label: "Sessions", value: "18" },
      { label: "Mentors", value: "12" },
      { label: "Projects", value: "25+" },
    ],
    mentors: [
      { name: "Mentor Name", role: "Open Source Mentor", bio: "Replace this with a short mentor introduction and their area of expertise.", image: "https://i.pravatar.cc/320?img=12" },
      { name: "Mentor Name", role: "Community Lead", bio: "Add the mentor's experience, interests and what participants can learn from them.", image: "https://i.pravatar.cc/320?img=32" },
      { name: "Mentor Name", role: "Developer Advocate", bio: "Keep bios short, human and focused on the value the mentor brings.", image: "https://i.pravatar.cc/320?img=47" },
    ],
    partners: [
      { name: "Partner One", logo: "P1" },
      { name: "Partner Two", logo: "P2" },
      { name: "Partner Three", logo: "P3" },
      { name: "Partner Four", logo: "P4" },
    ],
    cohorts: [
      { name: "Cohort 01", highlight: "First community cohort", contributor: "Top contributor: Name", testimonial: "“The sessions made open source feel less intimidating and much more practical.”" },
      { name: "Cohort 02", highlight: "Community growth cohort", contributor: "Top contributor: Name", testimonial: "“I met people who helped me make my first meaningful contribution.”" },
      { name: "Cohort 03", highlight: "Contributor stories cohort", contributor: "Top contributor: Name", testimonial: "“The mentor conversations gave me a clear path to keep learning.”" },
    ],
    achievements: ["250+ community interactions", "50+ first-time contributors supported", "30+ projects explored", "Featured across community media"],
    gallery: [
      { type: "photo", title: "Community meetup", image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=900&q=80" },
      { type: "photo", title: "Mentor session", image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80" },
      { type: "video", title: "Watch the highlights", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80" },
      { type: "reel", title: "Cohort reel", image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80" },
    ],
    faqs: [
      { question: "Who can join?", answer: "Use this space to define eligibility. For example: students, beginners and existing contributors are welcome." },
      { question: "Do I need coding experience?", answer: "No. Customize this answer to explain the expected skill level for the program." },
      { question: "How do I apply?", answer: "Use the Apply button and connect it to your form, application page or registration workflow." },
      { question: "Is the program free?", answer: "Replace this with the actual fee or free-participation policy." },
    ],
  },
  "road-to-wiki": {
    slug: "road-to-wiki",
    title: "Road to Wiki",
    tagline: "A guided path from curious learner to confident open-source contributor.",
    about: "A structured learning journey that helps participants understand Git, GitHub, contribution workflows and collaborative development through hands-on practice.",
    goals: ["Build contribution-ready skills", "Guide participants through real repositories", "Create a repeatable contributor journey"],
    duration: "6 weeks",
    format: "Workshops + mentor support + project work",
    applyLabel: "Apply now",
    applyUrl: "#apply",
    stats: [
      { label: "Participants", value: "150+" },
      { label: "Contributors", value: "70+" },
      { label: "PRs", value: "200+" },
      { label: "Mentors", value: "15" },
    ],
    mentors: [
      { name: "Mentor Name", role: "Open Source Engineer", bio: "Replace with a concise mentor bio.", image: "https://i.pravatar.cc/320?img=13" },
      { name: "Mentor Name", role: "GitHub Contributor", bio: "Replace with a concise mentor bio.", image: "https://i.pravatar.cc/320?img=33" },
      { name: "Mentor Name", role: "Program Mentor", bio: "Replace with a concise mentor bio.", image: "https://i.pravatar.cc/320?img=48" },
    ],
    partners: [
      { name: "Partner One", logo: "P1" },
      { name: "Partner Two", logo: "P2" },
      { name: "Partner Three", logo: "P3" },
    ],
    cohorts: [
      { name: "Batch 01", highlight: "Git & GitHub foundations", contributor: "Top contributor: Name", testimonial: "“The structured roadmap helped me go from zero to my first PR.”" },
      { name: "Batch 02", highlight: "Project contribution sprint", contributor: "Top contributor: Name", testimonial: "“Having mentors review my work made contributing much easier.”" },
      { name: "Batch 03", highlight: "Community impact batch", contributor: "Top contributor: Name", testimonial: "“I now understand how to find, work on and submit contributions.”" },
    ],
    achievements: ["200+ pull requests", "70+ contributors", "20+ repositories explored", "Multiple community collaborations"],
    gallery: [
      { type: "photo", title: "Workshop", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80" },
      { type: "photo", title: "Team collaboration", image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80" },
      { type: "video", title: "Program highlights", image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=80" },
      { type: "reel", title: "Contributor stories", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80" },
    ],
    faqs: [
      { question: "What will I learn?", answer: "Customize this answer with the actual curriculum, tools and project outcomes." },
      { question: "Is it beginner friendly?", answer: "Yes, if that matches your program. Explain any prerequisites here." },
      { question: "How much time is required?", answer: "Add your expected weekly commitment here." },
      { question: "Can I become a mentor later?", answer: "Use this space to describe your alumni-to-mentor pathway." },
    ],
  },
};
