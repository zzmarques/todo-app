import "../../sass/components/_Header.scss";
import BtnDarkMode from "../BtnDarkMode";

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>Todo</h1>
            </div>

            <BtnDarkMode/>
        </header>
    );
};

export default Header;
