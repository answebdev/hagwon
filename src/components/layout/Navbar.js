import { Link } from 'react-router-dom';
import classes from '../../styles/Navbar.module.css';

// Hide nav bar on scroll down and show it on scroll up -
// https://stackoverflow.com/questions/51340863/hide-nav-bar-on-scroll-down-and-show-it-on-scroll-up
// Also: https://www.devtwins.com/blog/sticky-navbar-hides-scroll

// window.onscroll = function (e) {
//   var scrollY = window.pageYOffset || document.documentElement.scrollTop;
//   var header = document.querySelector('header');
//   var height = -header.clientHeight;
//   header.style.transition = 'transform 0.1s';

//   scrollY <= Math.max(this.lastScroll, 50) ||
//   window.innerWidth <= 1200 ||
//   this.loaded === undefined
//     ? (header.style.transform = 'translateY(0px)')
//     : (header.style.transform = 'translateY(' + height + 'px)');

//   this.lastScroll = scrollY;
//   this.loaded = true;
// };

const Navbar = () => (
  <div className='navbar'>
    <header className={classes.Navbar}>
      <div className={`${classes.NavbarTitle} ${classes.NavbarItem}`}>
        <div>
          <Link className={classes.BrandLink} to='/'>
            ABC English
          </Link>
        </div>
      </div>
      <ul>
        <div className={classes.ItemsDiv}>
          <div className={classes.Pages}>
            <li className={classes.NavbarItem}>
              <Link className={classes.NavLink} to='/'>
                Home
              </Link>
            </li>
            <li className={classes.NavbarItem}>
              <Link className={classes.NavLink} to='/courses'>
                Courses
              </Link>
            </li>
            <li className={classes.NavbarItem}>
              <Link className={classes.NavLink} to='/instructors'>
                Instructors
              </Link>
            </li>
            <li className={classes.NavbarItem}>
              <Link className={classes.NavLink} to='/contact'>
                Contact
              </Link>
            </li>
          </div>

          {/* <div className={classes.Socials}>
            <li className={classes.NavbarItem}>
              <a
                className={classes.SocialIcons}
                href='https://www.instagram.com/likejisun/'
                rel='noopener noreferrer'
                target='_blank'
              >
                <i class='fa-brands fa-instagram'></i>
              </a>
            </li>
            <li className={classes.NavbarItem}>
              <a
                className={classes.SocialIcons}
                href='https://www.facebook.com/lovelyjisuni'
                rel='noopener noreferrer'
                target='_blank'
              >
                <i class='fa-brands fa-facebook-square'></i>
              </a>
            </li>
            <li className={classes.NavbarItem}>
              <a
                className={classes.SocialIcons}
                href='https://www.linkedin.com/in/jisun-kim-421a6a176/'
                rel='noopener noreferrer'
                target='_blank'
              >
                <i class='fa-brands fa-linkedin'></i>
              </a>
            </li>
          </div> */}
        </div>
      </ul>
    </header>
  </div>
);

export default Navbar;
