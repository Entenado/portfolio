import React, { useState } from "react";
import styles from "../styles/Skills.module.css";
import { TbBrandJavascript } from "react-icons/tb";
import { FaFigma } from "react-icons/fa";
import { FaTrello } from "react-icons/fa";
import {
  FaReact,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaNode,
  FaJava,
  FaBootstrap,
  FaJira,
  FaBitbucket,
} from "react-icons/fa";
import { SiSpringsecurity } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiKubernetes } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { SiSass, SiMysql, SiMongodb, SiSpring, SiNestjs } from "react-icons/si";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SkillProps {
  id: string;
  name: string;
  icon: JSX.Element;
  colorClass: string;
  onClick: (id: string) => void;
  isAnimating: string;
}

const Skill: React.FC<SkillProps> = ({
  id,
  name,
  icon,
  colorClass,
  onClick,
  isAnimating,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className={`${styles.skillItem} ${colorClass} ${isAnimating}`}
      onClick={() => onClick(id)}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <p className={styles.skillName}>{name}</p>
      {icon}
    </motion.div>
  );
};

export const Skills: React.FC = () => {
  const [animate, setAnimate] = useState<{ [key: string]: string }>({});

  const handleClick = (id: string) => {
    setAnimate((prevState) => ({
      ...prevState,
      [id]: "animate__animated animate__flip",
    }));

    setTimeout(() => {
      setAnimate((prevState) => ({
        ...prevState,
        [id]: "",
      }));
    }, 1000);
  };

  const skills = [
    {
      id: "react",
      name: "React",
      icon: <FaReact className={styles.skillIcon} />,
      colorClass: styles.reactColor,
    },
    {
      id: "js",
      name: "JavaScript",
      icon: <TbBrandJavascript className={styles.skillIcon} />,
      colorClass: styles.jsColor,
    },
    {
      id: "github",
      name: "GitHub",
      icon: <FaGithub className={styles.skillIcon} />,
      colorClass: styles.githubColor,
    },
    {
      id: "k8s",
      name: "Kubernetes",
      icon: <SiKubernetes className={styles.skillIcon} />,
      colorClass: styles.tsColor,
    },
    {
      id: "figma",
      name: "Figma",
      icon: <FaFigma className={styles.skillIcon} />,
      colorClass: styles.sassColor,
    },
    {
      id: "trello",
      name: "Trello",
      icon: <FaTrello className={styles.skillIcon} />,
      colorClass: styles.bootstrapColor,
    },
    {
      id: "java",
      name: "Java",
      icon: <FaJava className={styles.skillIcon} />,
      colorClass: styles.javaColor,
    },
    {
      id: "springcloud",
      name: "SpringCloud",
      icon: <BiLogoSpringBoot className={styles.skillIcon} />,
      colorClass: styles.expressColor,
    },
    {
      id: "springsecurity",
      name: "SpringSecurity",
      icon: <SiSpringsecurity className={styles.skillIcon} />,
      colorClass: styles.nestColor,
    },
    {
      id: "mysql",
      name: "MySQL",
      icon: <SiMysql className={styles.skillIcon} />,
      colorClass: styles.mysqlColor,
    },
    {
      id: "spring",
      name: "Spring",
      icon: <SiSpring className={styles.skillIcon} />,
      colorClass: styles.springColor,
    },
    {
      id: "docker",
      name: "Docker",
      icon: <FaDocker className={styles.skillIcon} />,
      colorClass: styles.dockerColor,
    },
    {
      id: "mongodb",
      name: "MongoDB",
      icon: <SiMongodb className={styles.skillIcon} />,
      colorClass: styles.mongoColor,
    },
    {
      id: "spring",
      name: "Spring",
      icon: <SiSpring className={styles.skillIcon} />,
      colorClass: styles.springColor,
    },

  ];

  return (
    <section id="skill" className={styles.skill}>
      <h1 className={styles.skillsHeading}>Habilidades</h1>
      <section className={styles.skillsSection}>
        {["Frontend/Gestion", "Backend"].map((category, idx) => (
          <div key={idx} className={styles.skillCategory}>
            <h2 className={styles.categoryTitle}>{category}</h2>
            <div className={styles.skillList}>
              {skills.slice(idx * 6, (idx + 1) * 6).map((skill) => (
                <Skill
                  key={skill.id}
                  id={skill.id}
                  name={skill.name}
                  icon={skill.icon}
                  colorClass={skill.colorClass}
                  onClick={handleClick}
                  isAnimating={animate[skill.id] || ""}
                />
              ))}
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};
