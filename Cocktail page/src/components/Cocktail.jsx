import { Link } from "react-router-dom";
import "../styles/Cocktail.css";

function Cocktail({ id, name, info, image, glass }) {
    return (
        <article className="cocktail-card">
            <img src={image} alt={name} />
            <div className="cocktail-description">
                <h2>{name}</h2>
                <h3>{glass}</h3>
                <p>{info}</p>
                <Link to={`/cocktail/${id}`} className="details-btn">
                    Details
                </Link>
            </div>
        </article>
    );
}

export default Cocktail;
