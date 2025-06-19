import { GrFormCheckmark } from "react-icons/gr";
import "../../sass/components/_Mark.scss";

type MarkProps = {
    isActive: boolean;
    onToggle: () => void;
};

const Mark = ({ isActive, onToggle }: MarkProps) => {

    return (
        <div 
            className={`mark ${isActive ? "active" : ""}`} 
            onClick={onToggle}
        >
            {isActive && <GrFormCheckmark />}
        </div>
    );
};

export default Mark;