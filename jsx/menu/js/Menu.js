function Menu({items, opened}) {
    if (!items) {
        return null;
    }

    return (
        <div className={`menu ${opened ? 'menu-open' : ''}`}>
            <div className="menu-toggle"><span></span></div>
            {opened && (
                <nav>
                    <ul>
                        {items.map((item, index) => <li key={index}><a href={item.href}>{item.title}</a></li>)}
                    </ul>
                </nav>
            )}
        </div>
    );
}