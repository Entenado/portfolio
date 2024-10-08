import styles from "../styles/Footer.module.css";
import React, { useState } from "react";
import { MdContentCopy } from "react-icons/md"; // Icono de copiar
import {
  FaGithub,
  FaLinkedin,
  FaFileAlt,
  FaCheck,
  FaDownload,
} from "react-icons/fa"; // Íconos de GitHub, LinkedIn y CV
import Link from "next/link";

const Footer = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("fuciliabel@gmail.com");
    setCopySuccess(true);

    setTimeout(() => {
      setCopySuccess(false);
    }, 8000);
  };

  return (
    <footer className={styles.footerContainer} id={styles.footer}>
      <div className={styles.container}>
        <p>
          <span className={styles.email}>fuciliabel@gmail.com</span>
          <button onClick={handleCopyEmail} className={styles.copyButton}>
            {copySuccess ? <FaCheck size={20} /> : <MdContentCopy size={20} />}
          </button>
        </p>

        <div className={styles.socialIcons}>
          <Link
            href="https://github.com/Entenado"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
          >
            <FaGithub size={20} />
          </Link>

          <Link
            href="https://www.linkedin.com/in/abel-fucili-12055aa5/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
          >
            <FaLinkedin size={20} />
          </Link>

          <Link
            href="/pdf/CV.pdf"
            target="_blank"
            className={styles.iconLink}
            rel="noopener noreferrer"
          >
            <FaFileAlt size={20} />
          </Link>
        </div>
      </div>

      <p className={styles.copyright}>
        © {new Date().getFullYear()} MiWeb. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
