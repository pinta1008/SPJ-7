import {Link} from "react-router-dom";
function Nav()
{
    return(
        <nav>
            <Link className="btn btn-primary" to="/Ucitaj">Pocetna</Link>
            <Link className="btn btn-primary" to="/Dodaj">Dodaj</Link>
        </nav>
    )
}
export default Nav;