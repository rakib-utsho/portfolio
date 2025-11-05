import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Building2, Calendar, GraduationCap } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };
  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-white via-blue-50/50 to-white dark:from-purple-950/20 dark:via-slate-950 dark:to-slate-950 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-lobster">
            About Me
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div
            variants={itemVariants}
            className="bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-800"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-serif text-justify">
              Hi, I am{" "}
              <span className="text-purple-600 dark:text-purple-400 font-semibold">
                Md. Rakibul Islam
              </span>
              , a passionate Full Stack Developer from Bangladesh. Currently
              working as{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Junior Frontend Engineer at SM Technology (Betopia Group)
              </span>{" "}
              for the last 7 months. Expert in{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                MERN Stack
              </span>
              , currently learning{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Go (Golang)
              </span>{" "}
              to strengthen backend skills. Completed BSc in CSE from BUBT
              (2020–2023).
            </p>
          </motion.div>
          <div>
            <motion.h3
              variants={itemVariants}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center font-lobster"
            >
              Education Qualification
            </motion.h3>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-linear-to-br from-blue-100/30 to-purple-100/30 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-8 shadow-lg border border-purple-200 dark:border-purple-800 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 font-serif">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      BSc in Computer Science & Engineering
                    </h4>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
                      <Building2 className="w-4 h-4" />
                      <span>
                        Bangladesh University of Business & Technology (BUBT)
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>2020 - 2023</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-700 dark:bg-gray-600 rounded-xl">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 font-serif">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Higher Secondary Certificate (HSC)
                    </h4>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
                      <Building2 className="w-4 h-4" />
                      <span>Bogura Cantonment Public School & College</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>2017 - 2019</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
