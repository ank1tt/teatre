// import React from "react";
// import { Link } from "react-router-dom";
// import styles from "./NavigationBar.module.css";

// const NavigationBar = () => {
//   return (
//     <nav className={styles.nav}>
//       <div className={styles.nav__left}>
//         <Link to="/home">
//           <img
//             src="https://getlogo.net/wp-content/uploads/2020/04/bookmyshow-logo-vector.png"
//             alt="teatre Logo"
//             className={styles.nav__logo}
//           />
//         </Link>
//         <div className={styles.nav__search}>
//           <input type="text" placeholder="Search..." />
//           <button>Search</button>
//         </div>
//       </div>
//       <div className={styles.nav__right}>
//         <div className={styles.nav__links}>
//           <ul>
//             <li>
//               <Link to="/home">Home</Link>
//             </li>
//             <li>
//               <Link to="/login">Sign In</Link>
//             </li>
//             <li>
//               <Link to="/register">Sign Up</Link>
//             </li>
//             <li>
//               <Link to="/bookings">My Bookings</Link>
//               <li>
//                 <Link to="/contact">Contact</Link>
//               </li>
//               <li>
//                 <Link to="/about">About</Link>
//               </li>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavigationBar;

import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavigationBar.module.css";

const NavigationBar = () => {
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
              <Link to="/bookings">My Bookings</Link>
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
