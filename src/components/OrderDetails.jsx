function OrderDetails({ itemsInBag }) {

  function calculateTotal() {
    return itemsInBag
      .reduce((acc, curr) => acc + curr.price, 0)
      .toFixed(2)
  }

  return (
    <>
      <section className="summary">
        <strong>Order Summary</strong>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {itemsInBag.map(item =>
              <tr>
                <td>{item.quantity}x {item.name}</td>
                <td>$ {(item.price * item.quantity).toFixed(2)} </td>
              </tr>
            )}
            <td>
              <th>Total</th>
              <th>$ {calculateTotal()}</th>
            </td>
          </tbody>
        </table>
      </section>
    </>
  )

}

export default OrderDetails