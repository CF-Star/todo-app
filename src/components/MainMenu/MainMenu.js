import { Link } from "react-router-dom";

//https://reactrouter.com/docs/en/v6/getting-started/tutorial#add-some-links

function MainMenu() {
    return (
        <nav>
            <Link to="/" className="linkButton" >Tasks</Link>
            <Link to="/help" className="linkButton">Help</Link>
        </nav>
    );
}
        export default MainMenu; 
 