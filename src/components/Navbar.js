import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { AuthContext } from "../context/AuthContext";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = ()=>{
    const {logout} = useLogout()
    const {user }= useAuthContext()

    const handleClick = ()=>{
        logout()

    }

    return(
        <header>
            <div className="container">
                <Link to={"/"}>
                    <h1>TEST</h1>
                </Link>
                <nav>
                    {user && (
                    <div>
                        <span>{user.id}</span>
                        <button onClick={handleClick}>Log out</button>
                        <Link to="/scheduling">Schedule</Link>

                    </div>
                    )}
                    {!user && (
                    <div>
                        <Link to="/">Login</Link>
                        <Link to= "/register"> Signup </Link>
                    </div>
                    )}

                </nav>
            </div>
        </header>
    )
}

export default Navbar