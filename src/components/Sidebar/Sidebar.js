import { Link } from "react-router-dom";

function Sidebar(props) {
    return (
        <div>
            <ul>
                <Link to="/authors"><li>Author</li></Link>
                <Link to="/favorite-authors"><li>Favorite Author</li></Link>
            </ul>
        </div>
    );
}

export default Sidebar;