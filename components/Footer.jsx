'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';
import Image from 'next/image';

const Footer = () => {
  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };

  return (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
        Contactez-nous
        </h4>
        <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]">
          <Image
            src="/mail.svg"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-normal text-[16px] text-white">
          <Mailto email="juniorthedeveloper@gmail.com" subject="Demande de services de marketing numérique" body="Hello ">
          Envoyer un courrier!
  </Mailto>
          </span>
        </button>
      </div>

      <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />
        

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
           SOMMET DIGITAL
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2023 SOMMET DIGITAL. All rights reserved.
          </p>
x
          <div className="flex gap-4" >
              {socials.map((social) => (
              <a href={social?.social ?? '#'} rel='noreferrer' target="_blank"  key={social.name}>
                  
              <Image
                key={social.name}
                src={social.url}
                alt={social.name}
                    className="w-[24px] h-[24px] object-contain cursor-pointer"
                   
                />
                </a>
            ))}
          </div>
        </div>
      </div>
      </div>
      
  </motion.footer>
)
            };

export default Footer;
