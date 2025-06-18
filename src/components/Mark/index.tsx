import { GrFormCheckmark } from "react-icons/gr";
import "../../sass/components/_Mark.scss";
import { useState } from "react";


const Mark = () => {

    const [mark, setMark] = useState<boolean>(false);

    const toggleMark = () => {
        setMark(prev => !prev)
    };

    return (
        <div className={`mark ${mark && 'active'}`} onClick={toggleMark}>
            {mark && <GrFormCheckmark/>}
        </div>
    );
};

export default Mark;