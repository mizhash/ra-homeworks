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

function ListingItem({item}) {
    const currency_prefix = item.currency_code === 'USD' ? '$' : (item.currency_code === 'EUR' ? '€' : '');
    const currency_suffix = item.currency_code !== 'USD' && item.currency_code !== 'EUR' ? item.currency_code : '';
    return (
        <div className="item">
            <div className="item-image">
                <a href={item.url}>
                    <img src={item.MainImage.url_570xN} />
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{item.title.length > 50 ? `${item.title.slice(0, 50)}...` : item.title}</p>
                <p className="item-price">{`${currency_prefix}${item.price} ${currency_suffix}`}</p>
                <p className={`item-quantity level-${item.quantity <= 10 ? 'low' : (item.quantity <= 20 ? 'medium' : 'high')}`}>{item.quantity} left</p>
            </div>
        </div>
    );
}
