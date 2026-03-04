import { motion } from "framer-motion"
import { useEffect } from "react"
import certificates from "./data/certificates"

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const navItems = [
  ["about", "About"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["experience", "Experience"],
  ["github", "GitHub"],
  ["certificates", "Certificates"],
  ["contact", "Contact"],
]

const skills = {
  Backend: ["Java", "Spring Boot", "Node.js", "Express.js", "REST APIs", "JSP/Servlets"],
  "Cloud & DevOps": ["AWS EC2", "AWS S3", "Docker", "CI/CD Concepts", "Vercel"],
  Database: ["SQL", "MySQL", "Query Optimization", "Data Modeling"],
  Testing: ["Selenium", "Manual Testing", "Test Case Design", "STLC/SDLC"],
  Frontend: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
}

const featuredProjects = [
  {
    title: "TripBuddy",
    problem: "Trip planning across budget, itinerary, and activity notes is usually scattered across apps.",
    solution:
      "Built a full-stack travel planner with centralized trip data, budget tracking, and itinerary workflows. Structured backend APIs and responsive UI modules to simplify planning and updates.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript"],
    repo: "https://github.com/Venkateshagali/Tripbuddy",
    live: "https://tripbuddy-kappa.vercel.app/",
  },
  {
    title: "Movie Recommendation App",
    problem: "Users struggle to find relevant movies quickly from large catalogs.",
    solution:
      "Developed a recommendation workflow with chat-style input, backend orchestration, and prompt-based filtering. Split frontend and backend deployments for independent scaling and easier maintenance.",
    tech: ["React", "Node.js", "Fastify", "OpenAI API", "Vercel"],
    repo: "https://github.com/Venkateshagali/movie-recommendation-app",
    live: "https://movie-recommendation-frontend-two.vercel.app/",
    extra: "https://movie-recommendation-backend-beryl.vercel.app/",
  },
]

const moreProjects = [
  {
    title: "QPause - Quantum-Immune Access Control",
    description:
      "Implemented a privacy-focused cloud access prototype using encryption-oriented access control and secure searchable retrieval workflows.",
    tech: ["Java", "JSP", "Servlets", "MySQL"],
    repo: "https://github.com/Venkateshagali/QPause",
  },
  {
    title: "Secure Data De-Duplication & Recovery",
    description:
      "Built a secure storage flow reducing duplicate cloud data while supporting controlled recovery using encryption-backed validation.",
    tech: ["Java", "SQL", "JavaScript", "HTML", "CSS"],
    repo: "https://github.com/Venkateshagali/Data-secure-duplication-and-recovery-based-on-public-key-encryption-with-keyword-search",
  },
  {
    title: "Online Scam Guide",
    description:
      "Created an awareness platform describing scam patterns and cyber-safety actions with categorized educational content.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    repo: "https://github.com/Venkateshagali/online-scam-guide",
  },
]

const experiences = [
  {
    role: "Software Engineer Intern",
    org: "OctaNet Services Pvt Ltd",
    meta: "Remote | Dec 2024 - Feb 2025",
    points: [
      "Implemented and refined web application modules aligned to sprint goals and production-readiness expectations.",
      "Resolved defects, validated fixes, and improved release quality through structured testing cycles.",
      "Contributed through Git-based collaboration, code reviews, and documented handoffs.",
    ],
  },
  {
    role: "Software Development Intern",
    org: "TechCiti Software Consulting",
    meta: "Bengaluru | Nov 2024 - Jan 2025",
    points: [
      "Developed backend components for secure data de-duplication and recovery flows using Java and SQL.",
      "Worked on encryption-based access workflows to improve data protection in storage and retrieval.",
      "Supported integration tasks and bug fixes for stable intern project delivery.",
    ],
  },
  {
    role: "Software Testing Intern",
    org: "QSpiders CampusConnect",
    meta: "Bengaluru | Mar 2023 - May 2023",
    points: [
      "Designed and executed manual test cases for functional and regression scenarios.",
      "Used SQL validation queries to verify data correctness across workflows.",
      "Performed baseline Selenium WebDriver automation for repeated test paths.",
    ],
  },
]

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

  return (
    <div className="bg-slate-50 text-slate-800 font-sans">
      <div id="scroll-progress" className="scroll-progress"></div>

      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center gap-6">
          <h1 className="text-lg font-semibold text-slate-900 tracking-tight">Venkatesha S</h1>

          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700">
            {navItems.map(([id, label]) => (
              <a key={id} href={`#${id}`} className="hover:text-indigo-600 transition">
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 text-sm">
            <a
              href="/Venkatesha_S_Resume_2026.pdf"
              download
              className="px-3 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 transition"
            >
              Resume
            </a>
            <a
              href="https://github.com/Venkateshagali"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 pt-28 pb-24 grid md:grid-cols-2 gap-14 items-center">
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-indigo-600 font-medium mb-3">Backend-Focused Software Developer</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">Java, Spring Boot, Node.js, AWS</h2>
            <p className="mt-5 text-slate-600 max-w-xl leading-relaxed">
              MCA graduate building secure, scalable backend systems and full-stack applications. Focused on API development,
              cloud deployment, and production-ready engineering practices.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
                View Projects
              </a>
              <a
                href="/Venkatesha_S_Resume_2026.pdf"
                download
                className="px-6 py-3 rounded-lg border border-slate-300 text-slate-700 font-medium hover:bg-slate-100 transition"
              >
                Download Resume
              </a>
              <a
                href="https://www.linkedin.com/in/venkatesha-agali2000/"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-lg border border-slate-300 text-slate-700 font-medium hover:bg-slate-100 transition"
              >
                LinkedIn
              </a>
            </div>

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
                <p>Publication</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative flex items-center justify-center z-10"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute w-72 h-72 rounded-full bg-indigo-100"></div>
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white">
              <img src="/profile.jpg" alt="Venkatesha S" className="w-full h-full object-cover object-[center_10%]" />
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section id="about" className="bg-white" initial="hidden" whileInView="visible" variants={reveal} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">About</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              I am a software developer focused on backend engineering, API design, and cloud deployment. I build
              maintainable applications using Java, Spring Boot, Node.js, SQL, and Docker with emphasis on clean architecture,
              security, and reliability.
            </p>
            <p className="text-slate-600 leading-relaxed">
              I am targeting Software Developer, Backend Developer, Cloud Engineer, and Java Developer roles where I can
              contribute to production systems and continue to grow through ownership-driven engineering work.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Education</h3>
            <div className="space-y-8 border-l-2 border-indigo-200 pl-6">
              <div>
                <span className="text-sm text-indigo-600 font-medium">2023 - 2025</span>
                <h4 className="mt-1 font-semibold text-slate-900">Master of Computer Applications (MCA)</h4>
                <p className="text-slate-600 text-sm">AMC Engineering College, Bengaluru</p>
                <p className="text-slate-500 text-sm">CGPA: 8.4 / 10</p>
              </div>
              <div>
                <span className="text-sm text-indigo-600 font-medium">2020 - 2023</span>
                <h4 className="mt-1 font-semibold text-slate-900">Bachelor of Computer Applications (BCA)</h4>
                <p className="text-slate-600 text-sm">Vidyavahini First Grade College</p>
                <p className="text-slate-500 text-sm">CGPA: 7.67 / 10</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section id="skills" className="max-w-6xl mx-auto px-6 py-24" initial="hidden" whileInView="visible" variants={reveal} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h3 className="text-2xl font-semibold text-slate-900 mb-4">Technical Skills</h3>
        <p className="text-slate-600 mb-10 max-w-2xl">Role-aligned stack focused on backend engineering, cloud readiness, and delivery quality.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, list]) => (
            <div key={category} className="bg-white border border-slate-200 rounded-xl p-6">
              <h4 className="font-medium text-slate-900 mb-4">{category}</h4>
              <div className="flex flex-wrap gap-3">
                {list.map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section id="projects" className="bg-white" initial="hidden" whileInView="visible" variants={reveal} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">Projects</h3>
          <p className="text-slate-600 mb-12 max-w-3xl">
            Engineering projects structured around real use-cases with clear implementation ownership, production deployment,
            and backend-first problem solving.
          </p>

          <div className="grid gap-8">
            {featuredProjects.map((project) => (
              <div key={project.title} className="rounded-2xl border border-indigo-100 bg-slate-50 p-7">
                <p className="text-xs uppercase tracking-wide text-indigo-600 font-semibold">Featured Project</p>
                <h4 className="text-xl font-semibold text-slate-900 mt-2">{project.title}</h4>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed"><span className="font-medium text-slate-900">Problem:</span> {project.problem}</p>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed"><span className="font-medium text-slate-900">Implementation:</span> {project.solution}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs px-3 py-1 rounded-full bg-white text-slate-600 border border-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-6">
                  <a href={project.repo} target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 rounded-lg border border-slate-300 text-sm font-medium text-slate-700 hover:bg-slate-100 transition">
                    GitHub Repo
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 rounded-lg bg-indigo-600 text-sm font-medium text-white hover:bg-indigo-700 transition">
                    Live Demo
                  </a>
                  {project.extra && (
                    <a href={project.extra} target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 rounded-lg border border-slate-300 text-sm font-medium text-slate-700 hover:bg-slate-100 transition">
                      Backend API
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <h4 className="text-lg font-semibold text-slate-900 mt-14 mb-6">Additional Projects</h4>
          <div className="grid md:grid-cols-3 gap-6">
            {moreProjects.map((project) => (
              <div key={project.title} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
                <h5 className="font-semibold text-slate-900 text-lg">{project.title}</h5>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.repo} target="_blank" rel="noreferrer" className="inline-block mt-5 text-sm font-medium text-indigo-600 hover:underline">
                  View on GitHub
                </a>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section id="experience" className="max-w-6xl mx-auto px-6 py-24" initial="hidden" whileInView="visible" variants={reveal} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h3 className="text-2xl font-semibold text-slate-900 mb-4">Experience</h3>
        <p className="text-slate-600 mb-10 max-w-2xl">Internship experience focused on backend development, secure systems, and testing quality.</p>
        <div className="space-y-7">
          {experiences.map((item) => (
            <div key={item.role} className="bg-white rounded-2xl border border-slate-200 p-6">
              <h4 className="font-semibold text-slate-900 text-lg">{item.role}</h4>
              <p className="text-sm text-slate-600">{item.org}</p>
              <p className="text-sm text-slate-500 mt-1">{item.meta}</p>
              <ul className="list-disc list-inside text-slate-600 text-sm mt-4 space-y-2">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section id="github" className="bg-white" initial="hidden" whileInView="visible" variants={reveal} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">GitHub Visibility Plan</h3>
            <p className="text-slate-600 leading-relaxed">
              I maintain active repositories with production-focused projects in backend development, API design,
              and cloud deployment.
            </p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <p className="text-sm font-semibold text-slate-900 mb-3">Current focus</p>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-2">
              <li>Pin top backend and full-stack repositories with strong READMEs.</li>
              <li>Add architecture notes, API endpoints, and deployment instructions.</li>
              <li>Maintain consistent commits and issue-based development logs.</li>
            </ul>
            <a
              href="https://github.com/Venkateshagali"
              target="_blank"
              rel="noreferrer"
              className="inline-flex mt-5 px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition"
            >
              Open GitHub Profile
            </a>
          </div>
        </div>
      </motion.section>

      <motion.section id="publication" className="max-w-6xl mx-auto px-6 py-24" initial="hidden" whileInView="visible" variants={reveal} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h3 className="text-2xl font-semibold text-slate-900 mb-4">Publication</h3>
        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 max-w-4xl">
          <h4 className="font-semibold text-slate-900 text-lg">QPAUSE: Quantum-Immune Access Control for Sensitive Cloud Storage</h4>
          <p className="text-slate-600 text-sm mt-4 leading-relaxed">
            Proposed a secure cloud framework using encryption-led access control and keyword-searchable retrieval to improve
            confidentiality and future-readiness against advanced computing threats.
          </p>
          <p className="text-slate-500 text-sm mt-3">
            Published in IJMRSET - International Journal of Multidisciplinary Research in Science, Engineering and Technology
          </p>
          <a
            href="https://ijmrset.com/upload/168_QPAUSE%20QUANTUM-IMMUNE%20ACCESS.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-6 px-5 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition"
          >
            Read Paper
          </a>
        </div>
      </motion.section>

      <motion.section id="certificates" className="bg-white" initial="hidden" whileInView="visible" variants={reveal} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">Certifications and Conferences</h3>
          <p className="text-slate-600 mb-10 max-w-2xl">Continuous learning through certifications, internships, and research-related conference participation.</p>

          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {certificates.map((cert) => (
              <div key={cert.id} className="snap-start min-w-[320px] bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition p-4 flex flex-col items-center">
                <img src={cert.image} alt={cert.title} className="max-h-72 object-contain transition-transform duration-300 hover:scale-105" />
                <p className="mt-3 text-sm text-slate-600 text-center">{cert.title}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section id="contact" className="max-w-6xl mx-auto px-6 py-24" initial="hidden" whileInView="visible" variants={reveal} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h3 className="text-2xl font-semibold text-slate-900 mb-4">Contact</h3>
        <p className="text-slate-600 mb-10 max-w-2xl">Open to Software Developer, Backend Developer, Cloud Engineer, and Java Developer opportunities.</p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-slate-200 rounded-2xl p-7">
            <p className="text-sm text-slate-400">Email</p>
            <a href="mailto:venkateshagali2000@gmail.com" className="text-slate-900 font-medium hover:text-indigo-600">
              venkateshagali2000@gmail.com
            </a>

            <p className="text-sm text-slate-400 mt-6">LinkedIn</p>
            <a href="https://www.linkedin.com/in/venkatesha-agali2000/" target="_blank" rel="noreferrer" className="text-indigo-600 font-medium hover:underline">
              linkedin.com/in/venkatesha-agali2000
            </a>

            <p className="text-sm text-slate-400 mt-6">GitHub</p>
            <a href="https://github.com/Venkateshagali" target="_blank" rel="noreferrer" className="text-indigo-600 font-medium hover:underline">
              github.com/Venkateshagali
            </a>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-7">
            <p className="font-semibold text-slate-900">Quick Actions</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="/Venkatesha_S_Resume_2026.pdf" download className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition">
                Download Resume
              </a>
              <a href="#projects" className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-100 transition">
                View Projects
              </a>
            </div>
            <p className="text-sm text-slate-500 mt-5">Location: Bengaluru, India | Last updated: March 2026</p>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
