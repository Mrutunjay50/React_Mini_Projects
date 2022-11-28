import { useState } from 'react';
import {close,menu} from '../assets';
import styles from '../style';
import {navLinks} from '../constants';
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-primary w-full overflow-hidden">
                <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                    <div className={`${styles.boxWidth}`}>
    <nav className='w-full py-3 flex justify-between items-center navbar'>
      <span className='text-gradient ss:leading-[75px] font-serif leading-[60px] ss:text-[60px] text-[42px]'>MP</span>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav,index) => (
          
          <Link to={nav.link} key={nav.id}>
          <li
          
          className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index===navLinks.length-1 ? 'mr-0' : 'mr-10'}`}
          >
            {/* <a href={`#${nav.id}`}> */}
              {nav.title}
            {/* </a> */}
          </li>
          </Link>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain'
            onClick={()=> setToggle((prev)=>!prev)}
          />
          <div className={`${toggle ? "flex" : "hidden"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[90%] rounded-xl sidebar`}>
            <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav,index) => (
              <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index===navLinks.length-1 ? 'mr-0' : 'mb-4'}`}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
            </ul>
          </div>
      </div>
    </nav>
    </div>
    </div>
</div>
  )
};

export default Navbar;