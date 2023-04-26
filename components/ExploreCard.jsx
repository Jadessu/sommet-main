'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick, info }) => {



  
    // const bgText = `linear-gradient(to bottom, rgba(1, 5, 29, 0.52), rgba(10, 2, 37, 0.73)), url(${imgUrl})`
  const selectedOpacity = active === id ? 0.52 : 0;
  const selectedOpacity2 = active === id ? 0.72 : 0.6;
  const listItems = (
    <ul className="mb-8 space-y-4 text-left text-white dark:text-white " style={{padding: '0 4px'}}>
    {info.map((item, index) => (
      <li className="flex items-center space-x-3" key={index}>
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>

        {item}
      </li>
    ))}
  </ul>
)
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`relative ${active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
        } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
      onClick={() => handleClick(id)}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(1, 5, 29, ${selectedOpacity}), rgba(10, 2, 37, ${selectedOpacity2})), url(${imgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
      }}
    >
      {active === id && (
        listItems
      )}
      {/* <img
      src={imgUrl}
      alt="planet-04"
      className="absolute w-full h-full object-cover rounded-[24px]"
    /> */}
      {active !== id ? (
        <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
          <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
            {title}
          </h2>
        </div>
      )}
    </motion.div>
  )
};

export default ExploreCard;
