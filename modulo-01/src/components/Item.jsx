const Item = ({ item, onClick, updateQuantity }) => {
    return (
        <div className={`product${item.isInBag ? ' selected' : ''}`} onClick={onClick}>
            <div className="photo">
                <img src={`././img/${item.photo}`} />
            </div>
            <div className="description">
                <span className="name">{item.name}</span>
                <span className="price">$ {item.price}</span>
                {item.isInBag &&
                    <div className="quantity-area">
                        <button disabled={item.quantity <= 1} onClick={e => updateQuantity(e, item.id, -1)}>-</button>
                        <span className="quantity">{item.quantity}</span>
                        <button onClick={e => updateQuantity(e, item.id, +1)}>+</button>
                    </div>
                }
            </div>
        </div>
    );
};

export default Item;
