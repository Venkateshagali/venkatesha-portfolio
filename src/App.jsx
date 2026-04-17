import emailjs from "@emailjs/browser"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
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
  "Identity & Access": [
    "Active Directory (AD)",
    "User Provisioning",
    "De-provisioning",
    "Security Groups",
    "Distribution Lists",
    "Access Reviews",
  ],
  "Cloud & Infrastructure": ["Microsoft Azure Fundamentals", "Cloud Infrastructure", "IAM Concepts", "Secure Access Workflows"],
  Development: ["Java", "Python", "SQL", "JavaScript", "HTML", "CSS", "JSP/Servlets"],
  Testing: ["Manual Testing", "Selenium WebDriver", "SDLC", "STLC", "Database Validation"],
  Tools: ["GitHub", "Postman", "Jira", "Visual Studio Code", "MySQL"],
}

const featuredProjects = [
  {
    title: "QPause - Quantum Immune Access Control System",
    problem: "Sensitive cloud storage needs stronger access control and safer file retrieval workflows.",
    solution:
      "Worked on an academic cloud-security project using JSP, Servlets, and MySQL to support file upload, storage, retrieval, and keyword-based access concepts with a security-first approach.",
    tech: ["JSP", "Servlets", "MySQL", "Java", "Cloud Security Concepts"],
    repo: "https://github.com/Venkateshagali/QPause",
  },
  {
    title: "TripBuddy",
    problem: "Trip planning across budget, itinerary, and activity notes is usually scattered across apps.",
    solution:
      "Built a full-stack travel planner with centralized trip data, budget tracking, and itinerary workflows. Structured backend APIs and responsive UI modules to simplify planning and updates.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript"],
    repo: "https://github.com/Venkateshagali/Tripbuddy",
    live: "https://tripbuddy-kappa.vercel.app/",
  },
]

const moreProjects = [
  {
    title: "Movie Recommendation App",
    description:
      "Built a chat-style movie recommendation workflow with separate frontend and backend services while improving deployment stability and API flow handling.",
    tech: ["React", "Node.js", "Fastify", "OpenAI API", "Vercel"],
    repo: "https://github.com/Venkateshagali/movie-recommendation-app",
  },
  {
    title: "Secure Data De-Duplication & Recovery",
    description:
      "Studied secure storage concepts around duplicate file handling, hashing, encryption, and recovery-focused workflows backed by database operations.",
    tech: ["Java", "SQL", "JavaScript", "HTML", "CSS"],
    repo: "https://github.com/Venkateshagali/Data-secure-duplication-and-recovery-based-on-public-key-encryption-with-keyword-search",
  },
  {
    title: "Identity and Cloud Learning Track",
    description:
      "Ongoing hands-on learning focused on Azure fundamentals, Active Directory administration, access audits, and user lifecycle management practices.",
    tech: ["Azure", "Active Directory", "IAM", "Documentation", "SOPs"],
    repo: "https://github.com/Venkateshagali",
  },
]

const experiences = [
  {
    role: "Software Developer Intern",
    org: "TechCiti Software Consulting Pvt. Ltd.",
    meta: "Bengaluru | Nov 2024 - Jan 2025",
    points: [
      "Provisioned and de-provisioned user accounts in Active Directory following onboarding and offboarding protocols for secure Day 1 access.",
      "Managed Security Groups and Distribution Lists, including membership updates, nesting support, and audit checks.",
      "Performed privileged-access reviews and documented SOPs for recurring identity management tasks.",
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
  const [contactStatus, setContactStatus] = useState("")

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

  const handleContactSubmit = async (e) => {
    e.preventDefault()
    setContactStatus("Sending message...")

    try {
      await emailjs.sendForm("venkateshagali", "venkateshagali2000", e.target, "k9M2VTHHzdMsN2Yjs")
      setContactStatus("Message sent successfully. I will get back to you soon.")
      e.target.reset()
    } catch {
      setContactStatus("Failed to send. Please email me directly at venkateshagali2000@gmail.com.")
    }
  }

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
              href="#contact"
              className="px-3 py-2 rounded-lg border border-indigo-200 text-indigo-700 hover:bg-indigo-50 transition"
            >
              Hire Me
            </a>
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
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">Venkatesha S</h2>
            <p className="mt-4 text-xl text-slate-600">Cloud and Identity-Focused Software Developer</p>
            <p className="mt-5 text-slate-600 max-w-xl leading-relaxed">
              Recent MCA graduate with internship experience in Active Directory administration, user lifecycle management,
              and Azure cloud fundamentals. Building a career around secure access, cloud infrastructure, and dependable software delivery.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              {["Active Directory", "Microsoft Azure Fundamentals", "User Lifecycle Management"].map((item) => (
                <span key={item} className="px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="px-6 py-3 rounded-lg border border-indigo-200 text-indigo-700 font-medium hover:bg-indigo-50 transition">
                Hire Me
              </a>
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
                <p className="text-xl font-semibold text-slate-900">Azure</p>
                <p>Cloud Track</p>
              </div>
              <div>
                <p className="text-xl font-semibold text-slate-900">2</p>
                <p>Internships</p>
              </div>
              <div>
                <p className="text-xl font-semibold text-slate-900">1</p>
                <p>AD Focus</p>
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
              I am building my career in cloud and identity-focused software work, with hands-on exposure to Active Directory,
              onboarding and offboarding workflows, access reviews, and secure user administration. My recent learning path is
              centered on Microsoft Azure fundamentals and practical infrastructure concepts.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Alongside cloud learning, I bring a development foundation in Java, SQL, JavaScript, and testing practices.
              I am targeting Cloud, Identity Access Management, Azure support, and software development roles where I can keep growing through hands-on ownership.
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
        <p className="text-slate-600 mb-10 max-w-2xl">Updated to reflect current resume focus on Azure fundamentals, Active Directory administration, testing discipline, and software foundations.</p>

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
            Projects and learning work that connect software development with secure storage, cloud concepts, and practical implementation experience.
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
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 rounded-lg bg-indigo-600 text-sm font-medium text-white hover:bg-indigo-700 transition">
                      Live Demo
                    </a>
                  )}
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
        <p className="text-slate-600 mb-10 max-w-2xl">Internship experience spanning Active Directory operations, identity governance tasks, and software testing fundamentals.</p>
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
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">Current Cloud Direction</h3>
            <p className="text-slate-600 leading-relaxed">
              My portfolio is now centered on cloud entry roles, identity administration, and software projects that show secure workflow thinking.
            </p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <p className="text-sm font-semibold text-slate-900 mb-3">Current focus</p>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-2">
              <li>Strengthen Azure and cloud infrastructure fundamentals through hands-on learning.</li>
              <li>Document Active Directory workflows, SOP-style tasks, and access governance exposure.</li>
              <li>Keep development projects visible to show technical range beyond cloud administration.</li>
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
            Explored a secure cloud framework using access control, protected storage, and keyword-searchable retrieval concepts
            to strengthen confidentiality for sensitive file systems.
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
          <p className="text-slate-600 mb-10 max-w-2xl">Current learning highlights include software testing, Google Analytics, conference participation, and Microsoft Learn Azure coursework listed in the resume.</p>

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
        <p className="text-slate-600 mb-10 max-w-2xl">Open to Cloud, Azure support, IAM, software development, and entry-level infrastructure opportunities.</p>

        <div className="grid md:grid-cols-2 gap-8">
          <form onSubmit={handleContactSubmit} className="bg-white border border-slate-200 rounded-2xl p-7 space-y-5">
            <div>
              <label className="block text-sm mb-1 text-slate-600">Name</label>
              <input
                type="text"
                name="from_name"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-slate-600">Email</label>
              <input
                type="email"
                name="from_email"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-slate-600">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>
            <button type="submit" className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition">
              Send Message
            </button>
            {contactStatus && <p className="text-sm text-slate-600">{contactStatus}</p>}
          </form>

          <div className="bg-white border border-slate-200 rounded-2xl p-7">
            <p className="text-xs uppercase tracking-wide text-indigo-600 font-semibold mb-2">Available for Hiring</p>
            <h4 className="text-lg font-semibold text-slate-900">Hire Me for Cloud, IAM, and Software Roles</h4>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              I am open to full-time and internship opportunities where I can support Azure-focused environments, identity operations, and software delivery while continuing to grow in cloud.
            </p>

            <div className="mt-6 border-t border-slate-200 pt-5">
              <p className="text-sm text-slate-400">Email</p>
              <a href="mailto:venkateshagali2000@gmail.com" className="text-slate-900 font-medium hover:text-indigo-600">
                venkateshagali2000@gmail.com
              </a>
            </div>

            <div className="mt-6">
              <p className="text-sm text-slate-400">LinkedIn</p>
              <a href="https://www.linkedin.com/in/venkatesha-agali2000/" target="_blank" rel="noreferrer" className="text-indigo-600 font-medium hover:underline">
                linkedin.com/in/venkatesha-agali2000
              </a>
            </div>

            <div className="mt-6">
              <p className="text-sm text-slate-400">GitHub</p>
              <a href="https://github.com/Venkateshagali" target="_blank" rel="noreferrer" className="text-indigo-600 font-medium hover:underline">
                github.com/Venkateshagali
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/Venkatesha_S_Resume_2026.pdf" download className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition">
                Download Resume
              </a>
              <a href="#projects" className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-100 transition">
                View Projects
              </a>
            </div>

            <p className="text-sm text-slate-500 mt-5">Location: Bengaluru, India | Last updated: April 2026</p>
          </div>

        </div>
      </motion.section>
    </div>
  )
}
