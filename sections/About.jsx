'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => {
  const sectionClassNames = {
  
    scrollButtonContainer: 'absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center',
    scrollButton: 'w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2',
    scrollButtonDot: 'w-3 h-3 rounded-full bg-secondary mb-1',
  };

  const scrollContainer = (
    <div className={sectionClassNames.scrollButtonContainer}>
      <a href="#about">
        <div className={sectionClassNames.scrollButton}>
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className={sectionClassNames.scrollButtonDot}
          />
        </div>
      </a>
    </div>
  )
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText title="| À propos de nous" textStyles="text-center" />

        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
        >
          Bienvenue chez {' '}
          <span className="font-extrabold text-white">SOMMET DIGITAL,</span>  votre agence de marketing numérique à Lomé, au Togo. Nous offrons des services de marketing numérique sur mesure, y compris la conception de sites Web, la gestion des médias sociaux et l'optimisation des moteurs de recherche. Notre équipe expérimentée est dévouée à aider les entreprises au Togo à atteindre de nouveaux {' '}
          <span className="font-extrabold text-white">
            sommets
          </span>{' '}
          en ligne grâce à des stratégies de marketing numérique efficaces.
        
        </motion.p>

   {/* {scrollContainer} */}
      </motion.div>
    </section>
  )
};

export default About;
