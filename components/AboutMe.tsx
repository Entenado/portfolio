import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaDownload } from "react-icons/fa";
import styles from "../styles/About.module.css";
import Link from "next/link";

export default function AboutMe() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true, // Animar solo una vez cuando el componente entra en vista
    threshold: 0.1, // Porcentaje de visibilidad necesario para activar la animación
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 100 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      id="about"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1 className={styles.skillsHeading}>Sobre mí</h1>

      <div className={styles.aboutContent}>
        <div className={styles.aboutText}>
          <span className={styles.span}>Quíen soy</span>
          <h2 className={styles.title}> Desarrollador Web</h2>

          <Link href="/pdf/CV.pdf" target="_blank" className={styles.btn}>
            Descarga CV
            <FaDownload />
          </Link>
        </div>
        <div className={styles.aboutData}>
          <p className={styles.text}>
          Soy desarrollador backend con experiencia en la creación de aplicaciones escalables utilizando microservicios, Docker, Kubernetes y herramientas de seguridad como Spring Security y JWT. Mi enfoque principal es el desarrollo de soluciones robustas y bien estructuradas.

Además, tengo un background en administración de empresas con foco en procurement, almacenamiento y facturación, lo que me brinda una visión integral tanto del negocio como de la tecnología.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
