import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './Navigation.module.scss';

const Navigation = () => (
  <nav className={styles.nav}>
    <ul className={styles['nav-list']}>
      <li className={styles['nav-item']}>
        <NavLink
          exact
          to={routes.home}
          className={styles['nav-link']}
          activeClassName={styles['nav-link--active']}
        >
          Home
        </NavLink>
      </li>
      <li className={styles['nav-item']}>
        <NavLink
          to={routes.movies}
          className={styles['nav-link']}
          activeClassName={styles['nav-link--active']}
        >
          Movies
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
