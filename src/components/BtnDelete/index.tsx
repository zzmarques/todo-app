
type BtnDeleteProps = {
    onClearCompleted: () => void;
};

const BtnDelete = ({ onClearCompleted }: BtnDeleteProps) => {
    return (
        <button 
            className="btn-clear" 
            onClick={onClearCompleted}
        >
            Clear Completed
        </button>
    );
};

export default BtnDelete;