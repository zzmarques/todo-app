import "../../sass/components/_AsideNav.scss";

const AsideNav = () => {
    return (
        <aside className="aside-nav">
            <ul>
                <li>All</li>
                <li>Active</li>
                <li>Completed</li>
            </ul>
        </aside>
    );
};

export default AsideNav;