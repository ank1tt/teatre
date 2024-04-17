// import React from 'react'
// import { Link } from 'react-router-dom';
// import styles from './NavigationBar.module.css';

// const NavigationBar = () => 
// {
//   return (
//     <div className={styles.nav}>
//         <nav>
//             <ul>
//                 <li className={styles.nav_links}><Link to="/home">Home</Link></li>
//                 <li className={styles.nav_links}><Link to="/news">News</Link></li>
//                 <li className={styles.nav_links}><Link to="/contact">Contact</Link></li>
//                 <li className={styles.nav_links}><Link to="/about">About</Link></li>
//                 <li className={styles.nav_links}><Link to="/login">Login</Link></li>
//                 <li className={styles.nav_links}><Link to="/register">Sign-Up</Link></li>
//                 <li className={styles.nav_links}><Link to="/bookings">My Bookings</Link></li>
//             </ul>
//         </nav>
//     </div>
//   );
// };

// export default NavigationBar

import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavigationBar.module.css";


const NavigationBar = () => {
  const userId = localStorage.getItem('userId');
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__left}>
        <Link to="/home" className={styles.nav__logo}>
          Teatre
        </Link>
        {/* <div className={styles.nav__search}>
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div> */}
      </div>
      <div className={styles.nav__right}>
        <div className={styles.nav__links}>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/login">Sign In</Link>
            </li>
            <li>
              <Link to="/register">Sign Up</Link>
            </li>
            <li>
              {/* <Link to="/:userId/bookings">My Bookings</Link> */}
              <Link to={`/${userId}/bookings`}>My Bookings</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
