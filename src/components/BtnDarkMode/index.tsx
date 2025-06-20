import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";

const BtnDarkMode = () => {

    const [darkMode, setDarkMode] = useState<boolean>(false);

    const toggleDarkMode = () => {
        setDarkMode(prev => !prev);
    };

    useEffect(() => {
        const body = document.querySelector('body');

        if(darkMode) {
            body?.classList.add('dark');
        } else {
            body?.classList.remove('dark');
        }


    }, [darkMode]);

    return (
        <button className="btn-dark-mode"
            onClick={toggleDarkMode}
        >
            { 
                !darkMode ? <FaMoon /> : <IoSunnySharp />
            }
        </button>
    );
};

export default BtnDarkMode;