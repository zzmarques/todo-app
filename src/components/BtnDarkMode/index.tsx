import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";

const BtnDarkMode = () => {

    const [darkMode, setDarkMode] = useState(false);

    return (
        <button className="btn-dark-mode">
            { 
                !darkMode ? <FaMoon /> : <IoSunnySharp />
            }
        </button>
    );
};

export default BtnDarkMode;