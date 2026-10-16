import { BriefcaseBusiness, Code2, Mail, Send } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const footerLinks = {
  Product: ["Features", "Pricing", "Security", "Roadmap", "Changelog"],
  Company: ["About", "Blog", "Careers", "Press", "Partners"],
  Resources: [
    "Documentation",
    "Help Center",
    "Community",
    "API Reference",
    "Status",
  ],
  Legal: ["Privacy", "Terms", "Cookie Policy", "Licenses", "Compliance"],
};

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.footer
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: "easeOut" }}
      className="border-t border-[#7F011F] bg-[#7F011F] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
          <div className="col-span-2 sm:col-span-3 lg:col-span-2 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-2 mb-3 sm:mb-4">
              <span className="text-lg sm:text-xl font-bold">
                TOPIZA
              </span>
            </div>
            <p className="text-white/80 mb-4 sm:mb-6 max-w-xs mx-auto sm:mx-0 text-sm sm:text-base">
              Discover great food and local businesses, delivered to your door.
            </p>
            <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
              <a
                href="#"
                aria-label="Share"
                className="p-2 sm:p-2.5 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
              >
                <Send className="w-5 h-5 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                aria-label="Code"
                className="p-2 sm:p-2.5 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
              >
                <Code2 className="w-5 h-5 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                aria-label="Business"
                className="p-2 sm:p-2.5 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
              >
                <BriefcaseBusiness className="w-5 h-5 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                aria-label="Email"
                className="p-2 sm:p-2.5 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
              >
                <Mail className="w-5 h-5 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          <div className="col-span-2 sm:col-span-3 lg:col-span-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">
                    {category}
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-white/80 hover:text-white transition-colors duration-200 text-xs sm:text-sm"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-white/20">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className="text-white/80 text-xs sm:text-sm">
              © {new Date().getFullYear()} TOPIZA. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 sm:space-x-6 text-xs sm:text-sm">
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors duration-200"
              >
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}