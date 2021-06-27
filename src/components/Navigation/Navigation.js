import { Link } from 'react-router-dom';
import routes from '../../routes';
import Nav from 'react-bootstrap/Nav';
import styles from './Navigation.module.scss';

const Navigation = () => (
  <Nav variant="pills" defaultActiveKey={routes.home} className={styles.nav}>
    <Nav.Item className={styles['nav-item']}>
      <Nav.Link
        as={Link}
        to={routes.home}
        eventKey={routes.home}
        className={styles['nav-link']}
      >
        Home
      </Nav.Link>
    </Nav.Item>
    <Nav.Item className={styles['nav-item']}>
      <Nav.Link
        as={Link}
        to={routes.movies}
        eventKey={routes.movies}
        className={styles['nav-link']}
      >
        Movies
      </Nav.Link>
    </Nav.Item>
  </Nav>
);

export default Navigation;
