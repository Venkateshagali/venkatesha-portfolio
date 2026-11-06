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
  ["experience", "Professional Experience"],
  ["github", "GitHub"],
  ["certificates", "Certificates"],
  ["contact", "Contact"],
]

const skills = {
  "Identity Governance": ["One Identity Manager", "SailPoint"],
  "Directory and scripting": ["Active Directory", "PowerShell"],
  "Authentication and access": ["Okta", "Duo", "Ping Identity"],
  "Privileged Access": ["CyberArk"],
  "IT service management": ["ServiceNow", "incidents", "tasks", "ITIL"],
}

const featuredProjects = [
  {
    title: "QPause - Quantum Immune Access Control System",
    problem: "Sensitive cloud storage needs stronger access control and safer file retrieval workflows.",
    solution:
      "Worked on an academic security project using JSP, Servlets, and MySQL to explore protected storage and access-control concepts.",
    tech: ["JSP", "Servlets", "MySQL", "Java", "Access Control"],
    repo: "https://github.com/Venkateshagali/QPause",
  },
]

const moreProjects = [
  {
    title: "Secure Data De-Duplication & Recovery",
    description:
      "Studied secure storage concepts around duplicate file handling, hashing, encryption, and recovery-focused workflows backed by database operations.",
    tech: ["Java", "SQL", "JavaScript", "HTML", "CSS"],
    repo: "https://github.com/Venkateshagali/Data-secure-duplication-and-recovery-based-on-public-key-encryption-with-keyword-search",
  },
  {
    title: "TripBuddy",
    description:
      "Built a full-stack travel planner with centralized trip data, budget tracking, and itinerary workflows.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript"],
    repo: "https://github.com/Venkateshagali/Tripbuddy",
    live: "https://tripbuddy-kappa.vercel.app/",
  },
  {
    title: "Movie Recommendation App",
    description:
      "Built a chat-style movie recommendation workflow with separate frontend and backend services.",
    tech: ["React", "Node.js", "Fastify", "OpenAI API", "Vercel"],
    repo: "https://github.com/Venkateshagali/movie-recommendation-app",
  },
]

const experiences = [
  {
    role: "Analyst – Information and Cybersecurity",
    org: "Gallagher",
    meta: "May 2026 – Present",
    scope: "Identity governance, directory administration, authentication, privileged access, and IT service management.",
    tools: [
      "One Identity Manager",
      "SailPoint",
      "Active Directory",
      "PowerShell",
      "Okta",
      "Duo",
      "Ping Identity",
      "CyberArk",
      "ServiceNow/ITIL",
    ],
  },
  {
    role: "Software Developer Intern",
    org: "TechCiti Software Consulting Pvt. Ltd.",
    meta: "Bengaluru | Nov 2024 - Jan 2025",
  },
  {
    role: "Software Testing Intern",
    org: "QSpiders CampusConnect",
    meta: "Bengaluru | Mar 2023 - May 2023",
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
              Contact
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
            <p className="mt-4 text-xl text-slate-600">IAM Analyst | IGA &amp; PAM</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="px-6 py-3 rounded-lg border border-indigo-200 text-indigo-700 font-medium hover:bg-indigo-50 transition">
                Contact
              </a>
              <a href="#projects" className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
                View Projects
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

      <motion.section id="experience" className="max-w-6xl mx-auto px-6 py-24" initial="hidden" whileInView="visible" variants={reveal} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h3 className="text-2xl font-semibold text-slate-900 mb-10">Professional Experience</h3>
        <div className="space-y-7">
          {experiences.map((item) => (
            <div key={item.role} className="bg-white rounded-2xl border border-slate-200 p-6">
              <h4 className="font-semibold text-slate-900 text-lg">{item.role}</h4>
              <p className="text-sm text-slate-600">{item.org}</p>
              <p className="text-sm text-slate-500 mt-1">{item.meta}</p>
              {item.scope && (
                <>
                  <p className="text-sm text-slate-600 mt-4">{item.scope}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.tools.map((tool) => (
                      <span key={tool} className="text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                        {tool}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section id="about" className="bg-white" initial="hidden" whileInView="visible" variants={reveal} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">About</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              IAM Analyst focused on Identity Governance and Administration, with hands-on experience across IGA and Privileged Access Management. Tools include One Identity Manager, SailPoint, Active Directory, PowerShell, Okta, Duo, Ping Identity, CyberArk, and ServiceNow.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Building deeper expertise in identity governance, automation, and security.
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
        <h3 className="text-2xl font-semibold text-slate-900 mb-4">IAM Skills and Tools</h3>

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
            Featured work related to security, access control, and protected data.
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
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="inline-block mt-5 ml-4 text-sm font-medium text-indigo-600 hover:underline">
                    Live Demo
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section id="github" className="bg-white" initial="hidden" whileInView="visible" variants={reveal} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">GitHub Profile</h3>
            <p className="text-slate-600 leading-relaxed">
              Explore my projects and code on GitHub.
            </p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <p className="text-sm font-semibold text-slate-900 mb-3">Projects and code</p>
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
          <p className="text-slate-600 mb-10 max-w-2xl">Selected certificates and conference participation.</p>

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
        <p className="text-slate-600 mb-10 max-w-2xl">For questions or professional enquiries, please get in touch.</p>

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
            <p className="text-xs uppercase tracking-wide text-indigo-600 font-semibold mb-2">Contact</p>
            <h4 className="text-lg font-semibold text-slate-900">Contact details</h4>

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
              <a href="#projects" className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-100 transition">
                View Projects
              </a>
            </div>

            <p className="text-sm text-slate-500 mt-5">Location: Bengaluru, India</p>
          </div>

        </div>
      </motion.section>
    </div>
  )
}
