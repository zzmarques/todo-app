import { FaMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";
import "../../sass/components/_Header.scss";

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>Todo</h1>
            </div>

            <div className="btn-dark-mode">
                <FaMoon />
            </div>
        </header>
    );
};

export default Header;
