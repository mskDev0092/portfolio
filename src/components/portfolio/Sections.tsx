"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { USER_DATA } from "@/lib/data";

// Hero Section
export const HeroSection = ({
  onStoryMode,
  typingText,
}: {
  onStoryMode: () => void;
  typingText: string;
}) => (
  <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 pt-20">
    {/* Decorative Elements */}
    <div className="absolute top-1/4 left-10 w-32 h-32 border-l-2 border-t-2 border-neonBlue/20 hidden lg:block" />
    <div className="absolute bottom-1/4 right-10 w-32 h-32 border-r-2 border-b-2 border-neonPurple/20 hidden lg:block" />

    <div className="text-center max-w-4xl relative z-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="inline-block px-4 py-1 border border-neonBlue/50 rounded-full text-neonBlue text-sm mb-6 tracking-widest bg-black/40 backdrop-blur-sm"
      >
        <i className="fa-solid fa-satellite-dish mr-2 animate-spin-slow" />
        ESTABLISHING UPLINK...
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="font-display text-4xl md:text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-neonBlue to-white mb-6 drop-shadow-2xl"
      >
        HELLO, WORLD.
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="font-display text-xl md:text-3xl text-gray-300 mb-8 min-h-[40px]"
      >
        I am <span className="text-neonBlue font-bold">{typingText}</span>
        <span className="animate-pulse text-neonBlue">|</span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg leading-relaxed"
      >
        Welcome to my digital sector. I build scalable web applications,
        immersive UI/UX, and solve complex logic problems. Explore my missions
        and certifications below.
      </motion.p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          asChild
          className="group relative px-8 py-6 bg-neonBlue/10 border border-neonBlue text-neonBlue font-display font-bold tracking-wider hover:bg-neonBlue hover:text-black transition-all duration-300"
        >
          <a href="#missions">
            <i className="fa-solid fa-rocket mr-2" />
            VIEW MISSIONS
          </a>
        </Button>

        <Button
          asChild
          variant="outline"
          className="px-8 py-6 border border-gray-600 text-gray-300 font-display font-bold tracking-wider hover:border-neonPurple hover:text-neonPurple transition-all duration-300"
        >
          <a
            href="https://github.com/mskDev0092"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github mr-2" />
            GITHUB PROFILE
          </a>
        </Button>

        <Button
          onClick={onStoryMode}
          className="px-8 py-6 bg-neonGreen/10 border border-neonGreen text-neonGreen font-display font-bold tracking-wider hover:bg-neonGreen hover:text-black transition-all duration-300"
        >
          <i className="fa-solid fa-gamepad mr-2" />
          STORY MODE
        </Button>
      </div>
    </div>

    {/* Scroll Indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <span className="text-[10px] text-neonBlue tracking-widest uppercase">
        Scroll to Explore
      </span>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <i className="fa-solid fa-chevron-down text-neonBlue" />
      </motion.div>
    </motion.div>
  </section>
);

// About Section
export const AboutSection = () => (
  <section
    id="about"
    className="min-h-screen py-20 px-4 flex items-center relative"
  >
    <div className="absolute top-0 left-0 w-full hud-line opacity-30" />

    <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
      {/* ID Card */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="order-2 md:order-1 flex justify-center"
      >
        <div className="relative w-72 md:w-80 h-96 glass-panel p-2 group cursor-pointer">
          <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-neonBlue" />
          <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-neonPurple" />

          <div className="h-full bg-black/60 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-neonBlue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-32 h-32 rounded-full border-2 border-neonBlue mb-4 overflow-hidden shadow-neon-blue flex items-center justify-center bg-gradient-to-br from-neonBlue/20 to-neonPurple/20"
            >
              <i className="fa-solid fa-user-astronaut text-5xl text-neonBlue" />
            </motion.div>

            <h3 className="font-display text-2xl text-white">mskDev0092</h3>
            <p className="text-neonPurple text-sm tracking-widest uppercase mb-6">
              Full Stack Architect
            </p>

            <div className="w-full space-y-3 text-left text-sm font-mono text-gray-400">
              <div className="flex justify-between border-b border-gray-800 pb-1">
                <span>Class:</span> <span className="text-white">Engineer</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-1">
                <span>Location:</span>{" "}
                <span className="text-white">Remote</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-1">
                <span>Status:</span>
                <span className="text-neonGreen flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-neonGreen animate-pulse" />
                  Online
                </span>
              </div>
              <div className="flex justify-between">
                <span>Alignment:</span>{" "}
                <span className="text-neonBlue">Code for Good</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="order-1 md:order-2"
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-2">
          <span className="text-neonPurple">#</span> THE OPERATIVE
        </h2>
        <div className="w-20 h-1 bg-neonPurple mb-8" />

        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
          I don&apos;t just write code; I architect digital experiences. With a
          background in solving algorithmic challenges and a passion for clean
          UI, I transform abstract requirements into functional,
          high-performance software.
        </p>

        <div className="space-y-6">
          {[
            { label: "Frontend Mastery", value: 92, color: "neonBlue" },
            { label: "Backend Architecture", value: 88, color: "neonPurple" },
            { label: "System Design", value: 82, color: "neonGreen" },
            { label: "Problem Solving", value: 95, color: "neonPink" },
          ].map((skill, index) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span className={cn("font-bold", `text-${skill.color}`)}>
                  {skill.label}
                </span>
                <span className="text-white">{skill.value}%</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className={cn(
                    "h-full rounded-full",
                    skill.color === "neonBlue" && "bg-neonBlue",
                    skill.color === "neonPurple" && "bg-neonPurple",
                    skill.color === "neonGreen" && "bg-neonGreen",
                    skill.color === "neonPink" && "bg-neonPink",
                  )}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

// Skills Section
export const SkillsSection = () => (
  <section id="skills" className="py-20 px-4 relative">
    <div className="absolute top-0 left-0 w-full hud-line opacity-30" />

    <div className="container mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-5xl font-bold text-white mb-2"
      >
        <span className="text-neonPurple">#</span> TECH ARSENAL
      </motion.h2>
      <div className="w-20 h-1 bg-neonPurple mb-8" />

      {Object.entries(USER_DATA.skills).map(([category, certs], catIndex) => (
        <div key={category} className="mb-12">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.1 }}
            className="font-display text-xl md:text-2xl text-neonPurple mb-6 flex items-center gap-3"
          >
            <i
              className={cn(
                catIndex === 0 && "fa-solid fa-palette",
                catIndex === 1 && "fa-solid fa-server",
                catIndex === 2 && "fa-solid fa-brain",
                catIndex === 3 && "fa-solid fa-cloud",
                catIndex === 4 && "fa-solid fa-vial",
              )}
            />
            {category}
          </motion.h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {certs.map((cert, certIndex) => (
              <motion.a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: certIndex * 0.05 }}
                className="holo-card glass-panel p-4 rounded-lg block group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-neonGreen/10 flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-certificate text-neonGreen" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-white group-hover:text-neonBlue transition-colors line-clamp-2 text-sm">
                      {cert.title}
                    </h4>
                    <p className="text-gray-400 text-xs mt-1">
                      {cert.provider}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

// Projects Section
export const ProjectsSection = () => (
  <section id="missions" className="py-20 px-4 relative">
    <div className="absolute top-0 left-0 w-full hud-line opacity-30" />

    <div className="container mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-5xl font-bold text-white mb-2"
      >
        <span className="text-neonPurple">#</span> MISSION LOG
      </motion.h2>
      <div className="w-20 h-1 bg-neonPurple mb-8" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {USER_DATA.projects.map((proj, index) => (
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="holo-card glass-panel p-6 rounded-lg"
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-neonBlue/10 flex items-center justify-center shrink-0">
                <i className="fa-solid fa-rocket text-neonBlue" />
              </div>
              <div>
                <h4 className="font-bold text-white line-clamp-2">
                  {proj.title}
                </h4>
                <p className="text-gray-400 text-xs">{proj.from}</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
              {proj.topics || proj.stack || "Various technologies"}
            </p>

            <div className="flex gap-4">
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neonBlue hover:text-neonPurple transition-colors text-sm flex items-center gap-1"
              >
                <i className="fa-brands fa-github" /> Code
              </a>
              {proj.live && (
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neonGreen hover:text-neonPurple transition-colors text-sm flex items-center gap-1"
                >
                  <i className="fa-solid fa-external-link-alt" /> Live
                </a>
              )}
            </div>

            {proj.stack && (
              <div className="mt-4 flex flex-wrap gap-2">
                {proj.stack.split("/").map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="text-xs border-neonPurple/30 text-neonPurple"
                  >
                    {tech.trim()}
                  </Badge>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// Contact Section
export const ContactSection = () => (
  <section id="contact" className="py-20 px-4 relative">
    <div className="absolute top-0 left-0 w-full hud-line opacity-30" />

    <div className="container mx-auto max-w-2xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-5xl font-bold text-white mb-2"
      >
        <span className="text-neonPurple">#</span> ESTABLISH UPLINK
      </motion.h2>
      <div className="w-20 h-1 bg-neonPurple mb-8" />

      <p className="text-gray-400 mb-8">
        Transmit your coordinates. Let&apos;s collaborate on the next digital
        frontier.
      </p>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="glass-panel p-8 rounded-lg space-y-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <Input
          placeholder="Identity"
          className="bg-transparent border-gray-600 text-white placeholder:text-gray-500 focus:border-neonBlue"
        />
        <Input
          type="email"
          placeholder="Signal Address"
          className="bg-transparent border-gray-600 text-white placeholder:text-gray-500 focus:border-neonBlue"
        />
        <Textarea
          placeholder="Transmission"
          className="bg-transparent border-gray-600 text-white placeholder:text-gray-500 focus:border-neonBlue min-h-[120px]"
        />
        <Button
          type="submit"
          className="w-full bg-neonPurple/20 border border-neonPurple text-neonPurple font-bold hover:bg-neonPurple hover:text-black transition py-6"
        >
          <i className="fa-solid fa-paper-plane mr-2" />
          SEND SIGNAL
        </Button>
      </motion.form>
    </div>
  </section>
);
