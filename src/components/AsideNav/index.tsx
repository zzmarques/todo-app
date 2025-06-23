import "../../sass/components/_AsideNav.scss";

type VersionProps  = {
    version: string;
    onChangeFilter: (filter: "all" | "active" | "completed") => void;
    currentFilter: "all" | "active" | "completed" | "";
}

const AsideNav = ({ version, onChangeFilter, currentFilter }: VersionProps) => {
    return (
        <aside className={`aside-nav ${version !== "mob" ? 'show' : ''}`}>
            <ul>
                <li 
                    className={currentFilter === "all" ? "ativo" : ""}
                    onClick={() => onChangeFilter("all")}
                >
                    All
                </li>

                <li 
                    className={currentFilter === "active" ? "ativo" : ""}
                    onClick={() => onChangeFilter("active")}
                >
                    Active
                </li>


                <li 
                    className={currentFilter === "completed" ? "ativo" : ""}
                    onClick={() => onChangeFilter("completed")}
                >
                    Completed
                </li>
            </ul>
        </aside>
    );
};

export default AsideNav;