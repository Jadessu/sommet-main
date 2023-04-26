'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';
const Feedback = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[670px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient" />
        <div
      className="w-40  rounded-full bg-cover bg-center mr-2 "
      
        />
        <img src="/junior.jpeg" alt=""  className="jr_image"/>
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
            Junior A.
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
          Co-fondateur | Sommet
          </p>
        </div>

  <p className="description">

  Junior A est un co-fondateur et directeur général de notre entreprise, responsable de la gestion globale de l'entreprise et de la supervision des opérations quotidiennes. Avec des années d'expérience dans l'industrie numérique, Junior  a une compréhension approfondie du paysage technologique en constante évolution et de la manière dont il peut être exploité pour stimuler la croissance des entreprises. En plus de son rôle dans l'entreprise, Junior  est également un ingénieur logiciel full-stack hautement qualifié qui dirige le développement d'une bourse décentralisée. Avec son expertise en gestion d'entreprise et en ingénierie logicielle, Junior  apporte une perspective unique et une précieuse contribution à notre équipe. Son leadership, sa vision et son dévouement à l'innovation sont au cœur du succès de notre entreprise.
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[670px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative "
      >
        <div className="feedback-gradient" />

        <div className="ml-auto">
        <img src="/tabi.jpg" alt="" className='tabi_image'/>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white text-end">
           Tabitha A.
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white text-end">
          Co-fondatrice | Sommet
          </p>
        </div>

        <p className="description text-right" >
        Tabita A est une co-fondatrice de notre entreprise et responsable marketing, chargée de la stratégie marketing et de la gestion des relations avec les clients. Avec ses compétences exceptionnelles en tant que réceptionniste, agent et traductrice de haut niveau, elle est un atout précieux pour notre entreprise. Elle apporte une grande expérience de travail avec une clientèle internationale et sait comment gérer efficacement les besoins de nos clients. En plus de son rôle dans la gestion des clients, elle est également chargée de la coordination des campagnes marketing et de la promotion de notre entreprise. Son dévouement à fournir un service de qualité supérieure à nos clients est ce qui fait de notre entreprise un choix de premier plan pour leurs besoins commerciaux.
        </p>

      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
