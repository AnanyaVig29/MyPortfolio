import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import './Skills.css';

const skillsData = {
  languages: [
    { name: "JavaScript", level: 92 },
    { name: "Python", level: 80 },
    { name: "Java", level: 78 },
    { name: "C", level: 75 },
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 93 }
  ],
  frameworks: [
    { name: "React.js", level: 95 },
    { name: "Tailwind CSS", level: 93 },
    { name: "GSAP", level: 85 },
    { name: "Framer Motion", level: 85 }
  ],
  databases: [
    { name: "MySQL", level: 82 },
  ],
  tools: [
    { name: "Git/GitHub", level: 95 },
    { name: "VS Code", level: 98 },
    { name: "Figma", level: 85 },
    {name: "Google Collab", level: 90 },
    { name: "PyCharm", level: 90 }
  ]
};

const SkillBar = ({ skill, index, categoryIndex }) => {
  const barRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: barRef,
    offset: ["start end", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [50, -50]), springConfig);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <motion.div
      ref={barRef}
      className="skill-item"
      style={{ y, scale }}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: categoryIndex * 0.1 + index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ x: 10, transition: { duration: 0.2 } }}
    >
      <div className="skill-header">
        <span className="skill-name">{skill.name}</span>
        <motion.span 
          className="skill-percentage"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: categoryIndex * 0.1 + index * 0.05 + 0.3 }}
          viewport={{ once: true }}
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="skill-bar-bg">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: categoryIndex * 0.1 + index * 0.05 + 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );
};

const SkillCategory = ({ title, skills, index }) => {
  const categoryRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: categoryRef,
    offset: ["start end", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [80, -80]), springConfig);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [index % 2 === 0 ? -1 : 1, 0, index % 2 === 0 ? 1 : -1]);

  return (
    <motion.div
      ref={categoryRef}
      className="skill-category"
      style={{ y, rotate }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="category-header"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="category-title">{title}</h3>
        <div className="category-line" />
      </motion.div>
      <div className="skills-list">
        {skills.map((skill, skillIndex) => (
          <SkillBar 
            key={skillIndex} 
            skill={skill} 
            index={skillIndex} 
            categoryIndex={index}
          />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const titleY = useSpring(useTransform(scrollYProgress, [0, 1], [220, -220]), springConfig);
  const contentY = useSpring(useTransform(scrollYProgress, [0, 1], [120, -120]), springConfig);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-2.5, 0, 2.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.7]);

  return (
    <section className="skills-section" id="skills" ref={sectionRef}>
      <div className="container">
        <motion.div 
          className="section-title-box"
          style={{ y: titleY, rotate, opacity }}
        >
          <motion.h2 
            className="text-display"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            TECHNICAL
          </motion.h2>
          <motion.h2 
            className="text-display text-outline"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            SKILLS
          </motion.h2>
        </motion.div>

        <motion.div 
          className="skills-grid"
          style={{ y: contentY }}
        >
          <SkillCategory title="Languages" skills={skillsData.languages} index={0} />
          <SkillCategory title="Frameworks & Libraries" skills={skillsData.frameworks} index={1} />
          <SkillCategory title="Databases" skills={skillsData.databases} index={2} />
          <SkillCategory title="Tools & Technologies" skills={skillsData.tools} index={3} />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
