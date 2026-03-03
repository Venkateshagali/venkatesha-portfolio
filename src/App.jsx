import emailjs from "@emailjs/browser"
import { motion } from "framer-motion"
import { useEffect } from "react"
import certificates from "./data/certificates"


const revealCenter = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
}

export default function App() {
  useEffect(() => {
    const bar = document.getElementById("scroll-progress")
    if (!bar) return

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.body.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      bar.style.width = `${progress}%`
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("[data-scroll-focus]"))
    if (!sections.length) return

    sections.forEach((section) => section.classList.add("section-out-of-focus"))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("section-out-of-focus")
          } else {
            entry.target.classList.add("section-out-of-focus")
          }
        })
      },
      {
        threshold: 0.35,
        rootMargin: "-5% 0px -15% 0px",
      }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-slate-50 text-slate-800 font-sans">
      <div id="scroll-progress" className="scroll-progress"></div>

      {/* NAVBAR */}
<nav className="fixed top-0 w-full bg-white/80 backdrop-blur border-b border-slate-200 z-50">
  <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

    {/* LOGO / NAME */}
    <h1 className="text-lg font-semibold text-slate-900 tracking-tight">
      Venkatesha S<span className="text-indigo-600"></span>
    </h1>

    {/* LINKS */}
    <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
      <a
        href="#about"
        className="hover:text-indigo-600 transition"
      >
        About
      </a>
      <a
        href="#skills"
        className="hover:text-indigo-600 transition"
      >
        Skills
      </a>
      <a
        href="#experience"
        className="hover:text-indigo-600 transition"
      >
        Experience
      </a>
      <a
        href="#projects"
        className="hover:text-indigo-600 transition"
      >
        Projects
      </a>
      <a
        href="#certificates"
        className="hover:text-indigo-600 transition"
      >
        Certificates
      </a>
      <a
        href="#contact"
        className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
      >
        Contact
      </a>
    </div>

  </div>
</nav>


     {/* HERO SECTION */}
<section data-scroll-focus className="relative overflow-hidden section-focus-transition">
  <div className="max-w-6xl mx-auto px-6 pt-28 pb-32 grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <motion.section
  variants={revealCenter}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ duration: 0.7, ease: "easeOut" }}
>


      <p className="text-indigo-600 font-medium mb-3">Hello, I'm</p>

      <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
        Venkatesha S
      </h1>

      <p className="mt-4 text-xl text-slate-600">
        Software Developer | Cloud & Data Enthusiast
      </p>

      <p className="mt-6 text-slate-600 max-w-xl leading-relaxed">
        MCA graduate with hands-on experience in full-stack development,
        backend systems, and cloud fundamentals. Focused on building
        secure, scalable, and production-ready applications.
      </p>

      {/* CTA BUTTONS */}
      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
        >
          View Projects
        </a>

        <a
          href="/Resume_VENKATESHA_S.pdf"
          download
          className="px-6 py-3 rounded-lg border border-slate-300 text-slate-700 font-medium hover:bg-slate-100 transition"
        >
          Download CV
        </a>
      </div>

      {/* STATS */}
      <div className="mt-10 flex gap-10 text-sm text-slate-600">
        <div>
          <p className="text-xl font-semibold text-slate-900">7+</p>
          <p>Projects</p>
        </div>
        <div>
          <p className="text-xl font-semibold text-slate-900">3</p>
          <p>Internships</p>
        </div>
        <div>
          <p className="text-xl font-semibold text-slate-900">1</p>
          <p>Research Paper</p>
        </div>
      </div>
    </motion.section>
    {/* SCROLL INDICATOR */}
<motion.div
  className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-slate-400"
  animate={{ y: [0, 10, 0] }}
  transition={{ repeat: Infinity, duration: 1.5 }}
>
  <span className="text-xs mb-2">Scroll</span>
  <div className="w-5 h-9 border-2 border-slate-400 rounded-full flex justify-center">
    <div className="w-1 h-2 bg-slate-400 rounded-full mt-1"></div>
  </div>
</motion.div>



   {/* RIGHT IMAGE */}
<motion.div
  className="relative flex items-center justify-center z-10"
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>


  {/* background soft circle */}
  <div className="absolute w-72 h-72 rounded-full bg-indigo-100"></div>

  {/* profile image */}
  <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white flex items-center justify-center">
    <img
      src="/profile.jpg"
      alt="Venkatesha S"
      className="w-full h-full object-cover object-[center_10%]"
    />
  </div>

</motion.div>


  </div>

  {/* BACKGROUND SHAPES (NO BLUR, NO CLICK BLOCK) */}
  <div className="pointer-events-none absolute top-24 right-24 w-72 h-72 bg-indigo-100 rounded-full opacity-40"></div>
  <div className="pointer-events-none absolute bottom-24 left-24 w-64 h-64 bg-purple-100 rounded-full opacity-30"></div>
</section>



      {/* ABOUT + EDUCATION */}
<motion.section
  data-scroll-focus
  id="about"
  className="bg-white reveal reveal-center section-focus-transition"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>

  <div className="max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16">

    {/* ABOUT */}
    <div>
      <h3 className="text-2xl font-semibold text-slate-900 mb-6">
        About Me
      </h3>

      <p className="text-slate-600 leading-relaxed mb-4">
        I am an MCA graduate (2025) with a strong foundation in software
        development, backend systems, and cloud computing fundamentals.
        I am deeply interested in software development and enjoy building
        structured, scalable, and secure applications.
      </p>

      <p className="text-slate-600 leading-relaxed mb-4">
        Alongside software development, I also have knowledge of data analysis,
        including working with SQL, handling structured datasets, and
        extracting meaningful insights. This allows me to approach problems
        with both a development and analytical perspective.
      </p>

      <p className="text-slate-600 leading-relaxed">
        I have gained hands-on industry experience through internships in
        Java backend development, secure data systems, and software testing.
        I continuously improve my skills through projects, certifications,
        and practical learning.
      </p>

      {/* QUICK INFO */}
      <div className="mt-10 grid grid-cols-2 gap-6 text-sm">
        <div>
          <span className="block text-slate-400">Name</span>
          <span className="font-medium text-slate-900">Venkatesha S</span>
        </div>
        <div>
          <span className="block text-slate-400">Location</span>
          <span className="font-medium text-slate-900">Bengaluru, India</span>
        </div>
        <div>
          <span className="block text-slate-400">Interests</span>
          <span className="font-medium text-slate-900">
            Software Development, Cloud Computing
          </span>
        </div>
        <div>
          <span className="block text-slate-400">Additional Skills</span>
          <span className="font-medium text-slate-900">
            Data Analysis
          </span>
        </div>
      </div>
    </div>

    {/* EDUCATION */}
    <div>
      <h3 className="text-2xl font-semibold text-slate-900 mb-6">
        Education
      </h3>

      <div className="space-y-8 border-l-2 border-indigo-200 pl-6">

        {/* MCA */}
        <div>
          <span className="text-sm text-indigo-600 font-medium">
            2023 - 2025
          </span>
          <h4 className="mt-1 font-semibold text-slate-900">
            Master of Computer Applications (MCA)
          </h4>
          <p className="text-slate-600 text-sm">
            AMC Engineering College, Bengaluru
          </p>
          <p className="text-slate-500 text-sm">
            CGPA: 8.4 / 10
          </p>
        </div>

        {/* BCA */}
        <div>
          <span className="text-sm text-indigo-600 font-medium">
            2020 - 2023
          </span>
          <h4 className="mt-1 font-semibold text-slate-900">
            Bachelor of Computer Applications (BCA)
          </h4>
          <p className="text-slate-600 text-sm">
            Vidyavahini First Grade College
          </p>
          <p className="text-slate-500 text-sm">
            CGPA: 7.67 / 10
          </p>
        </div>

      </div>
    </div>

  </div>
</motion.section>

      {/* WHAT I DO */}
<motion.section
  data-scroll-focus
  id="skills"
  className="section-focus-transition"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>

  <div className="max-w-6xl mx-auto px-6 py-28">

    <h3 className="text-2xl font-semibold text-slate-900 mb-14">
      What I Do
    </h3>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Software Development */}
      <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
        <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4 text-xl">
          SD
        </div>
        <h4 className="font-semibold text-slate-900 mb-3">
          Software Development
        </h4>
        <p className="text-sm text-slate-600 leading-relaxed">
          Building structured, scalable applications using Java,
          modern frameworks, and clean coding practices.
        </p>
      </div>

      {/* Full Stack */}
      <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
        <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4 text-xl">
          FS
        </div>
        <h4 className="font-semibold text-slate-900 mb-3">
          Full-Stack Development
        </h4>
        <p className="text-sm text-slate-600 leading-relaxed">
          Developing responsive user interfaces and integrating
          frontend applications with backend APIs.
        </p>
      </div>

      {/* Cloud & Backend */}
      <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
        <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4 text-xl">
          CB
        </div>
        <h4 className="font-semibold text-slate-900 mb-3">
          Cloud & Backend
        </h4>
        <p className="text-sm text-slate-600 leading-relaxed">
          Understanding cloud fundamentals, backend systems,
          databases, and secure server-side logic.
        </p>
      </div>

      {/* Data Analysis */}
      <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
        <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4 text-xl">
          DA
        </div>
        <h4 className="font-semibold text-slate-900 mb-3">
          Data Analysis
        </h4>
        <p className="text-sm text-slate-600 leading-relaxed">
          Working with structured data using SQL, analyzing datasets,
          and extracting meaningful insights.
        </p>
      </div>

    </div>
  </div>
</motion.section>
{/* TECHNICAL SKILLS */}
<motion.section
  data-scroll-focus
  id="technical-skills"
  className="section-focus-transition"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>

  <div className="max-w-6xl mx-auto px-6 py-24">

    <h3 className="text-2xl font-semibold text-slate-900 mb-4">
      Technical Skills
    </h3>

    <p className="text-slate-600 mb-12 max-w-2xl">
      A detailed overview of the technologies and tools I work with
      across development, testing, cloud, and data-related tasks.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      <div className="border border-slate-200 rounded-xl p-6">
        <h4 className="font-medium text-slate-900 mb-4">Programming Languages</h4>
        <div className="flex flex-wrap gap-3">
          {["Java", "Python", "C", "C++", "JavaScript", "SQL"].map(skill => (
            <span key={skill} className="skill-chip">{skill}</span>
          ))}
        </div>
      </div>

      <div className="border border-slate-200 rounded-xl p-6">
        <h4 className="font-medium text-slate-900 mb-4">Web & Frameworks</h4>
        <div className="flex flex-wrap gap-3">
          {[
            "HTML5", "CSS3", "React.js",
            "Node.js", "Express.js",
            "Spring Boot", "Bootstrap", "jQuery"
          ].map(skill => (
            <span key={skill} className="skill-chip">{skill}</span>
          ))}
        </div>
      </div>

      <div className="border border-slate-200 rounded-xl p-6">
        <h4 className="font-medium text-slate-900 mb-4">Databases</h4>
        <div className="flex flex-wrap gap-3">
          {["MySQL"].map(skill => (
            <span key={skill} className="skill-chip">{skill}</span>
          ))}
        </div>
      </div>

      <div className="border border-slate-200 rounded-xl p-6">
        <h4 className="font-medium text-slate-900 mb-4">Testing</h4>
        <div className="flex flex-wrap gap-3">
          {[
            "Manual Testing",
            "Test Case Design",
            "SDLC / STLC",
            "Selenium WebDriver (Basics)"
          ].map(skill => (
            <span key={skill} className="skill-chip">{skill}</span>
          ))}
        </div>
      </div>

      <div className="border border-slate-200 rounded-xl p-6">
        <h4 className="font-medium text-slate-900 mb-4">Tools & Platforms</h4>
        <div className="flex flex-wrap gap-3">
          {[
            "Git", "GitHub",
            "VS Code", "Eclipse",
            "Postman", "Android Studio"
          ].map(skill => (
            <span key={skill} className="skill-chip">{skill}</span>
          ))}
        </div>
      </div>

      <div className="border border-slate-200 rounded-xl p-6">
        <h4 className="font-medium text-slate-900 mb-4">Cloud & DevOps</h4>
        <div className="flex flex-wrap gap-3">
          {["AWS", "Docker", "CI/CD Concepts"].map(skill => (
            <span key={skill} className="skill-chip">{skill}</span>
          ))}
        </div>
      </div>

    </div>
  </div>
</motion.section>


      {/* Internship Experience */}
<motion.section
  data-scroll-focus
  id="experience"
  className="section-focus-transition"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>

  <div className="max-w-6xl mx-auto px-6 py-28">

    <h3 className="text-2xl font-semibold text-slate-900 mb-14">
      Internship Experience
    </h3>

    <p className="text-slate-600 mb-10 max-w-2xl">
      Through internships, I gained practical industry exposure by contributing
      to real-world software development and testing deliverables.
    </p>

    <div className="space-y-10 border-l-2 border-indigo-200 pl-6">

      <div className="relative">
        <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-indigo-600"></span>

        <div className="bg-slate-50 rounded-2xl p-6">
          <h4 className="font-semibold text-slate-900 text-lg">Software Engineer Intern</h4>
          <p className="text-sm text-slate-500">OctaNet Services Pvt Ltd. | Remote (Bengaluru, Karnataka, India)</p>
          <p className="text-sm text-slate-400 mb-4">Dec 2024 - Feb 2025</p>

          <ul className="list-disc list-inside text-slate-600 text-sm space-y-2">
            <li>Built and improved web application features in an internship environment</li>
            <li>Collaborated on bug fixes, testing, and deployment-ready code updates</li>
            <li>Worked with core software engineering practices including version control and code review</li>
          </ul>
        </div>
      </div>

      <div className="relative">
        <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-indigo-600"></span>

        <div className="bg-slate-50 rounded-2xl p-6">
          <h4 className="font-semibold text-slate-900 text-lg">Software Development Intern</h4>
          <p className="text-sm text-slate-500">TechCiti Software Consulting | Bengaluru</p>
          <p className="text-sm text-slate-400 mb-4">Nov 2024 - Jan 2025</p>

          <ul className="list-disc list-inside text-slate-600 text-sm space-y-2">
            <li>Worked on secure data de-duplication and recovery systems</li>
            <li>Implemented encryption-based access control mechanisms</li>
            <li>Developed backend components using Java and SQL</li>
          </ul>
        </div>
      </div>

      <div className="relative">
        <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-indigo-600"></span>

        <div className="bg-slate-50 rounded-2xl p-6">
          <h4 className="font-semibold text-slate-900 text-lg">Software Testing Intern</h4>
          <p className="text-sm text-slate-500">QSpiders CampusConnect | Bengaluru</p>
          <p className="text-sm text-slate-400 mb-4">Mar 2023 - May 2023</p>

          <ul className="list-disc list-inside text-slate-600 text-sm space-y-2">
            <li>Designed and executed manual test cases</li>
            <li>Worked with SQL queries for data validation</li>
            <li>Basic automation exposure using Selenium WebDriver</li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</motion.section>

      {/* PROJECTS */}
<motion.section
  data-scroll-focus
  id="projects"
  className="section-focus-transition"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>

  <div className="max-w-6xl mx-auto px-6 py-28">

    <h3 className="text-2xl font-semibold text-slate-900 mb-4">
      Projects
    </h3>

    <p className="text-slate-600 mb-14 max-w-2xl">
      A selection of academic and personal projects demonstrating my
      skills in software development, backend systems, and problem-solving.
    </p>

    <div className="grid md:grid-cols-2 gap-10">

      <div className="md:col-span-2 bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden border border-indigo-100">
        <div className="p-6">
          <p className="text-xs uppercase tracking-wide text-indigo-600 font-semibold">Featured Project</p>
          <h4 className="font-semibold text-slate-900 text-xl mt-2">TripBuddy</h4>

          <p className="text-sm text-slate-600 mt-3 leading-relaxed">
            Full-stack travel planning application to manage trip details, budgets, and itinerary workflows with a clean and responsive user experience.
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {["React", "Node.js", "Express.js", "MongoDB", "JavaScript"].map(t => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-600"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-6">
            <a
              href="https://github.com/Venkateshagali/Tripbuddy"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-lg border border-slate-300 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
            >
              GitHub Repo
            </a>
            <a
              href="https://tripbuddy-kappa.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-indigo-600 text-sm font-medium text-white hover:bg-indigo-700 transition"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden">
        <div className="p-6">
          <h4 className="font-semibold text-slate-900 text-lg">Online Scam Guide</h4>

          <p className="text-sm text-slate-600 mt-3 leading-relaxed">
            Awareness-based web application designed to educate users
            about online scams and provide cybersecurity guidance.
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {["HTML", "CSS", "JavaScript", "PHP", "MySQL"].map(t => (
              <span key={t} className="text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-600">{t}</span>
            ))}
          </div>

          <a
            href="https://github.com/Venkateshagali/online-scam-guide"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-6 text-sm font-medium text-indigo-600 hover:underline"
          >
            View on GitHub
          </a>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden">
        <div className="p-6">
          <h4 className="font-semibold text-slate-900 text-lg">QPause - Quantum-Immune Access Control</h4>

          <p className="text-sm text-slate-600 mt-3 leading-relaxed">
            Secure cloud storage system implementing encryption-based
            access control and privacy-focused data retrieval.
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {["Java", "JSP", "Servlets", "MySQL"].map(t => (
              <span key={t} className="text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-600">{t}</span>
            ))}
          </div>

          <a
            href="https://github.com/Venkateshagali/QPause"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-6 text-sm font-medium text-indigo-600 hover:underline"
          >
            View on GitHub
          </a>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden">
        <div className="p-6">
          <h4 className="font-semibold text-slate-900 text-lg">Secure Data De-Duplication & Recovery</h4>

          <p className="text-sm text-slate-600 mt-3 leading-relaxed">
            Encryption-based system for efficient and secure cloud data
            storage with de-duplication and recovery mechanisms.
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {["Java", "SQL", "HTML", "CSS", "JavaScript"].map(t => (
              <span key={t} className="text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-600">{t}</span>
            ))}
          </div>

          <a
            href="https://github.com/Venkateshagali/Data-secure-duplication-and-recovery-based-on-public-key-encryption-with-keyword-search"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-6 text-sm font-medium text-indigo-600 hover:underline"
          >
            View on GitHub
          </a>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden">
        <div className="p-6">
          <h4 className="font-semibold text-slate-900 text-lg">Movie Recommendation App</h4>

          <p className="text-sm text-slate-600 mt-3 leading-relaxed">
            AI-style movie recommendation assistant with chat-like interactions,
            delivering 5 curated movie suggestions based on user preferences.
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {["React", "Fastify", "OpenAI API", "Node.js", "Vercel"].map(t => (
              <span key={t} className="text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-600">{t}</span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-6">
            <a
              href="https://github.com/Venkateshagali/movie-recommendation-app"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-lg border border-slate-300 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
            >
              GitHub Repo
            </a>
            <a
              href="https://movie-recommendation-frontend-two.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-indigo-600 text-sm font-medium text-white hover:bg-indigo-700 transition"
            >
              Live App
            </a>
            <a
              href="https://movie-recommendation-backend-beryl.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-lg border border-slate-300 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
            >
              Backend API
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>
</motion.section>

      {/* PUBLICATION */}
<motion.section
  data-scroll-focus
  id="publication"
  className="section-focus-transition"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>

  <div className="max-w-6xl mx-auto px-6 py-28">

    <h3 className="text-2xl font-semibold text-slate-900 mb-4">
      Research Publication
    </h3>

    <p className="text-slate-600 mb-12 max-w-2xl">
      Published research work focusing on secure cloud storage and
      quantum-resistant access control mechanisms.
    </p>

    <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 max-w-3xl">
      <h4 className="font-semibold text-slate-900 text-lg">
        QPAUSE: Quantum-Immune Access Control for Sensitive Cloud Storage
      </h4>

      <p className="text-slate-600 text-sm mt-4 leading-relaxed">
        This paper proposes a privacy-friendly cloud storage framework
        using encryption-based access control and keyword-searchable
        encryption to ensure secure data access and resistance against
        quantum computing threats.
      </p>

      <p className="text-slate-500 text-sm mt-3">
        Published in <span className="font-medium">
          IJMRSET - International Journal of Multidisciplinary Research in
          Science, Engineering & Technology
        </span>
      </p>

      <a
        href="https://ijmrset.com/upload/168_QPAUSE%20QUANTUM-IMMUNE%20ACCESS.pdf"
        target="_blank"
        className="inline-block mt-6 px-5 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition"
      >
        Read Research Paper
      </a>
    </div>

  </div>
</motion.section>


     {/* CERTIFICATES */}
<motion.section
  data-scroll-focus
  id="certificates"
  className="section-focus-transition"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>

  <div className="max-w-6xl mx-auto px-6 py-28">

    <h3 className="text-2xl font-semibold text-slate-900 mb-4">
      Certifications & Conferences
    </h3>

    <p className="text-slate-600 mb-10 max-w-2xl">
      Professional certifications and academic conference participation
      showcasing continuous learning and industry exposure.
    </p>

    <div className="flex gap-8 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">


      {certificates.map(cert => (
  <div
    key={cert.id}
    className="snap-start min-w-[320px] bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition p-4 flex flex-col items-center"
  >
    <img
      src={cert.image}
      alt={cert.title}
      className="max-h-72 object-contain transition-transform duration-300 hover:scale-105"
    />
    <p className="mt-3 text-sm text-slate-600 text-center">
      {cert.title}
    </p>
  </div>
))}


    </div>
  </div>
</motion.section>





     {/* CONTACT */}
<motion.section
  data-scroll-focus
  id="contact"
  className="section-focus-transition"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>

  <div className="max-w-6xl mx-auto px-6 py-28">

    <h3 className="text-2xl font-semibold text-slate-900 mb-4">
      Get In Touch
    </h3>

    <p className="text-slate-600 mb-14 max-w-2xl">
      Interested in working together or have a question?
      Feel free to reach out - I'll get back to you.
    </p>

    <div className="grid md:grid-cols-2 gap-14 items-start">

      {/* FORM */}
      <form
        onSubmit={(e) => {
          e.preventDefault()

          emailjs
            .sendForm(
              "venkateshagali",
              "venkateshagali2000",
              e.target,
              "k9M2VTHHzdMsN2Yjs"
            )
            .then(() => {
              alert("Message sent successfully!")
              e.target.reset()
            })
            .catch(() => {
              alert("Failed to send message. Please try again.")
            })
        }}
        className="bg-slate-50 rounded-2xl p-8 space-y-6 border border-slate-200"
      >
        <div>
          <label className="block text-sm mb-1 text-slate-600">
            Name
          </label>
          <input
            type="text"
            name="from_name"
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-slate-600">
            Email
          </label>
          <input
            type="email"
            name="from_email"
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-slate-600">
            Message
          </label>
          <textarea
            name="message"
            rows="4"
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
        >
          Send Message
        </button>
      </form>

      {/* CONTACT INFO */}
      <div className="space-y-6">
        <div>
          <p className="text-sm text-slate-400">Email</p>
          <p className="text-slate-900 font-medium">
            venkateshagali2000@gmail.com
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-400">LinkedIn</p>
          <a
            href="https://www.linkedin.com/in/venkatesha-agali2000/"
            target="_blank"
            className="text-indigo-600 font-medium hover:underline"
          >
            linkedin.com/in/venkatesha-agali2000
          </a>
        </div>

        <div>
          <p className="text-sm text-slate-400">GitHub</p>
          <a
            href="https://github.com/Venkateshagali"
            target="_blank"
            className="text-indigo-600 font-medium hover:underline"
          >
            github.com/Venkateshagali
          </a>
        </div>
      </div>

    </div>
  </div>
</motion.section>

    </div>
  )
}



/* PROJECT CARD COMPONENT */
function Project({ title, desc, tech, link }) {
  return (
    <motion.div
  className="bg-white rounded-2xl shadow-sm hover:shadow-md transition"
  whileHover={{ y: -6 }}
  transition={{ type: "spring", stiffness: 300 }}
>

      <h4 className="font-semibold text-lg">{title}</h4>
      <p className="mt-3 text-slate-600 text-sm">{desc}</p>
      <p className="mt-2 text-sm text-slate-500">Tech: {tech}</p>
      <a
        href={link}
        target="_blank"
        className="inline-block mt-4 text-sm text-indigo-600 hover:underline"
      >
        View on GitHub
      </a>
    </motion.div>
  )
}
