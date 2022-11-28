import React from 'react'
import {features} from '../constants';
import styles,{layout} from '../style';
import Button from './Button';
import {Link} from "react-router-dom";


const FeatureCard = ({icon,title,content,index}) =>(
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length-1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>
        {content}
      </p>
    </div>
  </div>
)




const Service = () => {
  return (
    <div className={`${styles.flexStart} ${styles.paddingX} bg-primary `}>
    <div className={`${styles.boxWidth}`}>
    <section id='service' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
        Here are the Mini Projects<br className="sm:block hidden" />
        I worked On 
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Each Project in this section is made through using react and react hooks.
        </p>
        <Button className="mt-10" />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <Link to={feature.link} key={index}><FeatureCard key={feature.id} {...feature} index={index} /></Link>
        ))}
      </div>
    </section>
    </div>
    </div>
  )
}

export default Service;