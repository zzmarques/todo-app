import "../../sass/components/_AsideNav.scss";

type VersionProps  = {
    version: string
}

const AsideNav = ({ version }: VersionProps) => {
    return (
        <aside className={`aside-nav ${version !== "mob" ? 'show' : ''}`}>
            <ul>
                <li>All</li>
                <li>Active</li>
                <li>Completed</li>
            </ul>
        </aside>
    );
};

export default AsideNav;