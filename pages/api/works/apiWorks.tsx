

import image3 from "../../../assets/works/perfumes.png";
import image4 from "../../../assets/works/adoptifu.png";
import image5 from "../../../assets/works/pro.jpg";
import { StaticImageData } from "next/image";

interface Item {
  name: string;
  image: StaticImageData;
  text: string;
  tags: string[];
  repo: string;
  web: string;
}

export const items: Item[] = [
  {
    name: "Adoptify",
    image: image4,
    text: "Aplicación enfocada en relacionar refugios con adoptantes, para que cada peludito encuentre su hogar ",
    tags: ["Angular", "Microservicios", "Java", "Springboot", "JWT", "Docker", "Docker-compose"],
    repo: "https://github.com/Entenado/Adoptify-docker-compose-",
    web: "https://c19-42-n-java-react.vercel.app/",
  },
  {
    name: "Pro-SkillFinder",
    image: image5,
    text: "Gestion de proveedores, encontrando las mejores habilidades, mas cercanas a tu localidad",
    tags: ["Java, HTML, CSS, Spring-Framework, Spring-Security, Mysql"],
    repo: "https://github.com/Entenado/ProSkillFinder.git",
    web: "https://spring-render-ddpw.onrender.com/",
  },
  {
    name: "Frangance.net",
    image: image3,
    text: "E-commerce de perfumes, enfocado a una tienda online",
    tags: ["React", "Node", "CSS", "PostgreSQL", "Axioss", "Java", "ApiRest", "SpringBoot"],
    repo: "https://github.com/Entenado/Fragance.net/tree/master/fragance.net",
    web: "https://www.linkedin.com/feed/update/urn:li:activity:7113652407397462016/",
  },
];
