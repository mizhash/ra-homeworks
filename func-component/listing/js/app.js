'use strict';

getData();

function getData() {
    return fetch('https://neto-api.herokuapp.com/etsy', {
        method: 'GET'
    })
        .then((res) => {
            if (200 <= res.status && res.status < 300) {
                return res;
            }
            throw new Error(res.statusText);
        })
        .then((res) => res.json())
        .then((data) => {
            ReactDOM.render(<Listing items={data} />, document.getElementById('root'));
        })
        .catch(console.log);
}

function Listing({items}) {
    return (
        <div className="item-list">
            {
                Array.isArray(items) &&
                items.length !== 0 &&
                items.map(item => <ListingItem key={item.listing_id} item={item} />)
            }
        </div>
    )
}

Listing.defaultProps = {
    items: []
};

function getFullPrice(currency_code, price = 0) {
    switch(currency_code) {
        case 'USD':
            return `$${price}`;
        case 'EUR':
            return `€${price}`;
    }
    return `${price} ${currency_code}`;
}

function getQuantityLevel(quantity) {
    if (quantity > 20) {
        return 'high';
    } else if (quantity > 10) {
        return 'medium';
    }
    return 'low';
}

function ListingItem({item}) {
    return (
        <div className="item">
            <div className="item-image">
                <a href={item.url}>
                    <img src={item.MainImage.url_570xN} />
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{item.title.length > 50 ? `${item.title.slice(0, 50)}...` : item.title}</p>
                <p className="item-price">{getFullPrice(item.currency_code, item.price)}</p>
                <p className={`item-quantity level-${getQuantityLevel(item.quantity)}`}>{item.quantity} left</p>
            </div>
        </div>
    );
}
