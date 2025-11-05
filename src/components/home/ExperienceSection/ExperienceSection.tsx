"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, Rocket, Star } from "lucide-react";

const experiences = [
  {
    title: "Junior Frontend Engineer",
    company: "SM Technology (Betopia Group)",
    location: "Dhaka, Bangladesh",
    period: "May 2024 - Present",
    duration: "7 months",
    description: [
      "Developing and maintaining web applications using React and Next.js",
      "Collaborating with backend team to integrate RESTful APIs",
      "Implementing responsive UI components with Tailwind CSS",
      "Optimizing application performance and user experience",
      "Participating in code reviews and agile development processes",
    ],
    current: true,
    tech: ["React", "Next.js", "TypeScript", "Tailwind", "Node.js"],
    achievements: 5,
    type: "Full-time",
  },
  {
    title: "Full Stack Developer",
    company: "Freelance",
    location: "Remote",
    period: "2023 - 2024",
    duration: "1 year",
    description: [
      "Built custom web applications for clients using MERN stack",
      "Delivered 10+ successful projects with high client satisfaction",
      "Implemented payment gateways and third-party integrations",
      "Provided ongoing maintenance and support for deployed applications",
    ],
    current: false,
    tech: ["React", "Node.js", "MongoDB", "Express", "Firebase"],
    achievements: 12,
    type: "Contract",
  },
  {
    title: "Software Development Intern",
    company: "Tech Solutions Ltd",
    location: "Dhaka, Bangladesh",
    period: "2023",
    duration: "6 months",
    description: [
      "Assisted in developing frontend components for enterprise applications",
      "Learned industry best practices and coding standards",
      "Worked with senior developers on real-world projects",
      "Gained experience in version control with Git and GitHub",
    ],
    current: false,
    tech: ["JavaScript", "HTML/CSS", "Git", "React"],
    achievements: 3,
    type: "Internship",
  },
];

// ✅ Type-safe Framer Motion Variants
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
  hover: {
    y: -6,
    scale: 1.02,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function Experience() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-24 px-6 sm:px-8 bg-linear-to-br from-white via-blue-50/50 to-white dark:from-purple-950/20 dark:via-slate-950 dark:to-slate-950 overflow-hidden"
    >
      {/* Background gradients */}
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
      />

      {/* Header */}
      <div className="max-w-5xl mx-auto text-center relative z-10 mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 mb-4"
        >
          <div className="p-3 bg-linear-to-r from-purple-500 to-blue-500 rounded-xl shadow-md">
            <Rocket className="w-6 h-6 text-white" />
          </div>
          <span className="text-sm font-medium text-purple-600 dark:text-purple-300 tracking-wide uppercase font-rowdies">
            Career Path
          </span>
        </motion.div>

        <h2 className="text-5xl font-bold mb-4 bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-lobster">
          My Experience
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto font-serif">
          A journey through innovation, growth, and building impactful digital
          experiences.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[3px] bg-linear-to-b from-purple-500/30 via-blue-500/20 to-transparent rounded-full -translate-x-1/2" />

        <div className="space-y-20 font-serif">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover="hover"
              className={`relative flex flex-col md:flex-row items-center gap-10 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline node */}
              <div className="absolute left-6 md:left-1/2 w-6 h-6 rounded-full bg-linear-to-r from-purple-500 to-blue-500 transform -translate-x-1/2 shadow-lg ring-4 ring-white/70 dark:ring-slate-900/70" />

              {/* Experience Card */}
              <div
                className={`w-full md:w-5/12 p-8 rounded-3xl relative border border-white/20 dark:border-slate-700/40 backdrop-blur-xl bg-linear-to-br from-white/60 via-white/30 to-transparent dark:from-slate-800/70 dark:via-slate-800/40 hover:bg-white/70 dark:hover:bg-slate-800/80 transition-all duration-500 ${
                  exp.current ? "ring-2 ring-purple-500/40" : ""
                }`}
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`p-3 rounded-2xl bg-linear-to-r ${
                      exp.current
                        ? "from-purple-500 to-blue-500"
                        : "from-gray-500 to-gray-700"
                    } shadow-md`}
                  >
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-lobster">
                      {exp.title}
                    </h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium font-serif">
                      {exp.company}
                    </p>
                  </div>
                </div>

                {/* Location & Date */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2 font-antic">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                  <div className="flex items-center gap-2 font-antic">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-2 mb-6 text-gray-700 dark:text-gray-300">
                  {exp.description.map((item, j) => (
                    <li key={j} className="flex gap-3">
                      <div className="w-2 h-2 bg-linear-to-r from-purple-500 to-blue-500 rounded-full mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Tech + Achievements */}
                <div className="flex flex-wrap justify-between items-center gap-3">
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t, k) => (
                      <span
                        key={k}
                        className="px-3 py-1 rounded-full text-sm font-medium bg-linear-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-purple-700 dark:text-purple-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Star className="w-4 h-4 text-yellow-500" />
                    {exp.achievements}+ achievements
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      {/* <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="text-center mt-20"
      >
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-purple-600 to-blue-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <Code2 className="w-5 h-5" />
          View Full Resume
          <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        </motion.a>
      </motion.div> */}
    </section>
  );
}
