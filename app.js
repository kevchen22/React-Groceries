class Part extends React.Component {
    render() {
        let obj = this.props.obj
        return (
            <div className="parts">
                <p>Item: {obj.item}</p>
                <p>Brand: {obj.brand}</p>
                <p>Units: {obj.units}</p>
                <p>Quantity: {obj.quantity}</p>
                <button onClick={this.togglePurchase}>Remove</button>           
            </div>
        )
    }
}

class App extends React.Component {

    state = {
        groceries: groceries,
        item: '',
        brand: '',
        units: '',
        quantity: 0,
        isPurchased: false
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const newGrocery = {
            item: this.state.item,
            brand: this.state.brand,
            units: this.state.units,
            quantity: this.state.quantity,
            isPurchased: this.state.isPurchased
        }

        this.setState({
            groceries: [newGrocery, ...this.state.groceries]
        })
    }

    togglePurchase = () => {
        this.setState({
            isPurchased: !this.state.isPurchased
        })
    }

    render() {
        return (
            <div>
                <h1>Add Groceries</h1>
                <form class="form" onSubmit={this.handleSubmit}>
                    <label htmlFor="item">Item:</label>
                    <input type="text" value={this.state.item} onChange={this.handleChange} id="item" />
                    <label htmlFor="brand">Brand:</label>
                    <input type="text" id="brand" value={this.state.brand} onChange={this.handleChange} />
                    <label htmlFor="units">Units:</label>
                    <input type="text" id="units" value={this.state.units} onChange={this.handleChange} />
                    <label htmlFor="quantity">Quantity:</label>
                    <input type="number" id="quantity" value={this.state.quantity} onChange={this.handleChange} />
                    <label htmlFor="isPurchased">Purchased (true or false only):</label>
                    <input type="boolean" id="isPurchased" value={this.state.isPurchased} onChange={this.handleChange} />
                    <input type="submit" />
                </form>

                <div>
                    <h2>Preview our new item</h2>
                    <h3>Item: {this.state.item}</h3>
                    <h4>Brand: {this.state.brand}</h4>
                    <h5>Units: {this.state.units}</h5>
                    <h5>Quantity: {this.state.quantity}</h5>
                    <h5>Purchased: {this.state.isPurchased}</h5>
                </div>

                <div className="main">
                    <h1>Grocery List</h1>
                    <ul>
                        {this.state.groceries.filter(grocery => !grocery.isPurchased).map(grocery => <Part obj={grocery} />)}
                    </ul>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('.container')
) 
