"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    //bg-white/80 dark:bg-[#0d0d0d]/80
    <footer
      className="border-t border-gray-200 dark:border-slate-800
    bg-linear-to-br from-white via-blue-50/50 to-white dark:from-slate-950 dark:via-purple-950/20 dark:to-slate-950 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col space-y-8"
        >
          {/* Navigation + Social Links */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center md:justify-start gap-6 font-antic">
              <a
                href="/terms"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Terms & Conditions
              </a>
              <a
                href="/privacy"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/cookies"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Cookies
              </a>
            </nav>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-500 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-gray-200 transition-colors"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Brand Section */}
          <div className="text-center">
            <h2 className="text-5xl md:text-9xl font-extrabold bg-linear-to-r from-black via-purple-500 to-blue-600 bg-clip-text text-transparent dark:from-white dark:via-purple-500 dark:to-blue-600 font-bitcount">
              Rakibutsho<span className="text-red-700 font-mono">.</span>
            </h2>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            <p className="font-serif">
              &copy; {currentYear} All rights reserved by{" "}
              <span className="font-semibold text-lg text-gray-700 dark:text-gray-300 font-lobster">
                Md. Rakibul Islam 😊
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
