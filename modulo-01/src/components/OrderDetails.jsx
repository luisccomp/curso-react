const OrderDetails = ({ itemsInBag }) => {
    const calculateTotal = (itemsInBag) => {
        return itemsInBag
            .reduce((total, item) => total + (item.price * item.quantity), 0)
            .toFixed(2);
    }

    return (
        <section className="summary">
                <strong>Order Details</strong>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itemsInBag.map(item => (
                            <tr key={item.id}>
                                <td>{item.quantity}x {item.name}</td>
                                <td>$ {(item.price * item.quantity).toFixed(2)}</td>
                            </tr>
                        ))}
                        
                        <tr>
                            <th>Total</th>
                            <th>$ {calculateTotal(itemsInBag)}</th>
                        </tr>
                    </tbody>
                </table>
        </section>
    );
};

export default OrderDetails;
