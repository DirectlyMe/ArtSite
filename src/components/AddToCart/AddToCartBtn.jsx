import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss";
import { toast } from "react-toastify";

class AddToCartButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
            showMenu: false,
            showTypes: false,
            selectedType: {},
            basePrice: 0,
            calculatedPrice: 0
        };

        this.optionsMenu = React.createRef();
    }

    componentDidMount() {
        this.setState({
            selectedType: this.props.selectedType,
            basePrice: this.props.selectedType.price
        });
        setTimeout(() => {
            this.calcPrice(this.state.basePrice, this.state.quantity);
        }, 0);
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState({
                selectedType: this.props.selectedType,
                basePrice: this.props.selectedType.price,
                quantity: 1
            });
            setTimeout(() => {
                this.calcPrice(this.state.basePrice, this.state.quantity);
            }, 0);
        }
    }

    showMenu = event => {
        event.preventDefault();

        this.setState({ showMenu: true }, () => {
            document.addEventListener("click", this.closeMenu);
        });
    };

    closeMenu = event => {
        const node = this.optionsMenu.current;
        if (node) {
            if (!node.contains(event.target)) {
                this.setState({ showMenu: false }, () => {
                    document.removeEventListener("click", this.closeMenu);
                });
            }
        }
    };

    showTypes = () => {
        this.setState(prevState => ({ showTypes: !prevState.showTypes }));
    };

    changeSelectedType = type => {
        this.setState(prevState => ({
            selectedType: type,
            basePrice: type.price,
            quantity: 1
        }));

        setTimeout(() => {
            this.calcPrice(this.state.basePrice, this.state.quantity);
            this.showTypes();
        }, 0);
    };

    calcPrice = (price, quantity) => {
        const itemPrice = price * quantity;
        this.setState({ price: itemPrice, quantity });
    };

    quantityDecrease = () => {
        let { basePrice, quantity } = this.state;

        if (quantity <= 1) return;

        quantity -= 1;
        this.calcPrice(basePrice, quantity);
    };

    quantityIncrease = () => {
        let { basePrice, quantity, selectedType } = this.state;

        selectedType.type !== "Canvas" ? (quantity += 1) : (quantity = 1);

        this.calcPrice(basePrice, quantity);
    };
   
    render() {
        const typesList = this.props.item.types.map(type => (
            <li key={type.type} onClick={() => this.changeSelectedType(type)}>
                {type.type}
            </li>
        ));

        return (
            <div onClick={this.showMenu}>
                <FontAwesomeIcon icon="cart-plus" size="2x" className="add-to-cart" />
                {this.state.showMenu ? (
                    <div className="add-to-cart--menu" ref={this.optionsMenu}>
                        <span>Quantity</span>
                        <div className="quantity-options">
                            <button
                                className="quantity-minus--btn"
                                onClick={() => this.quantityDecrease()}
                            >
                                <FontAwesomeIcon icon="minus" size="lg" />
                            </button>
                            <div className="quantity-number">{this.state.quantity}</div>
                            <button
                                className="quantity-plus--btn"
                                onClick={() => this.quantityIncrease()}
                            >
                                <FontAwesomeIcon icon="plus" size="lg" />
                            </button>
                        </div>
                        <div style={{ paddingTop: "10px" }}>Type</div>
                        <div className="type-options">
                            <div className="type-selector" onClick={this.showTypes}>
                                {this.state.selectedType.type}
                                <FontAwesomeIcon
                                    icon="angle-down"
                                    size="1x"
                                    style={{ paddingTop: "2px" }}
                                />
                            </div>
                            {this.state.showTypes ? (
                                <div className="type-dropdown">{typesList}</div>
                            ) : null}
                        </div>
                        <div className="price-label">${this.state.price}</div>
                        {this.state.selectedType.sold ? (
                            <button
                                className="add-to-cart--btn---sold"
                                onClick={() =>
                                  toast.error("Sorry, this item is currently sold out.", 
                                  {
                                    className: "add-to-cart-toast--error",
                                  })
                                }
                            >
                                Sold
                            </button>
                        ) : (
                            <button
                                className="add-to-cart--btn"
                                onClick={() =>
                                    this.props.addToCartFunc(
                                        this.props.item.product_id,
                                        this.state.quantity,
                                        this.state.selectedType.type
                                    )
                                }
                            >
                                Add
                            </button>
                        )}
                    </div>
                ) : null}
            </div>
        );
    }
}

export default AddToCartButton;
