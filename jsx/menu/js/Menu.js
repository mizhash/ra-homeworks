function Menu({items, opened}) {
    if (!items) {
        return null;
    }

    let menu;
    if (opened) {
        const liArr = items.map((item, index) => <li key={index}><a href={item.href}>{item.title}</a></li>);
        menu = (
            <div className="menu menu-open">
                <div className="menu-toggle"><span></span></div>
                <nav>
                    <ul>
                        {liArr}
                    </ul>
                </nav>
            </div>
        );
    } else {
        menu = (
            <div className="menu">
                <div className="menu-toggle"><span></span></div>
            </div>
        );
    }
    return menu;
}