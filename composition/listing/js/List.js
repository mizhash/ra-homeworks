'use strict';

function List({items}) {
    if (!Array.isArray(items) || items.length === 0) {
        return null;
    }

    const colors = {
        unisex: 'black',
        female: 'orange',
        male: 'blue'
    };

    const listItems = items.map(item => {
        const color = colors[item.type];
        return <Item key={item.title} color={color} item={item} />;
    });

    return (
        <div>
            {listItems}
        </div>
    );
}