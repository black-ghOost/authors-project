import { Link } from "react-router-dom";
import styles from './Sidebar.module.css';

function Sidebar(props) {
    return (
        <div className={styles.sidebar__container}>
            <ul>
                <Link className={styles.text__decoration} to="/authors"><li>Author</li></Link>
                <Link className={styles.text__decoration} to="/favorite-authors"><li>Favorite Author</li></Link>
            </ul>
        </div>
    );
}

export default Sidebar;