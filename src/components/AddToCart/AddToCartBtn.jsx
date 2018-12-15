import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addToCart } from "../../api/CartCalls";
import "./styles.scss";

class AddToCartButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      showMenu: false,
      showTypes: false,
      types: ["Print", "Canvas"],
      selectedType: "Print"
    };

    this.optionsMenu = React.createRef();
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        quantity: 1,
        selectedType: "Print"
      });
      console.log(this.props.productId);
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

  render() {
    const typesList = this.state.types.map(type => (
      <li key={type} onClick={() => this.setState({ selectedType: type })}>{type}</li>
    ));
    return (
      <div onClick={this.showMenu}>
        <FontAwesomeIcon icon="plus" size="2x" className="add-to-cart" />
        {this.state.showMenu ? (
          <div className="add-to-cart--menu" ref={this.optionsMenu}>
            <span>Quantity</span>
            <div className="quantity-options">
              <button
                className="quantity-minus--btn"
                onClick={event => {
                  event.preventDefault();
                  if (this.state.quantity > 1) {
                    this.setState(prevState => ({
                      quantity: prevState.quantity - 1
                    }));
                  }
                }}
              >
                <FontAwesomeIcon icon="minus" size="lg" />
              </button>
              <div className="quantity-number">{this.state.quantity}</div>
              <button
                className="quantity-plus--btn"
                onClick={event => {
                  event.preventDefault();
                  this.setState(prevState => ({
                    quantity: prevState.quantity + 1
                  }));
                }}
              >
                <FontAwesomeIcon icon="plus" size="lg" />
              </button>
            </div>
            <div style={{ paddingTop: "10px" }}>Type</div>
            <div className="type-options">
              <div className="type-selector" onClick={this.showTypes}>
                {this.state.selectedType}
                <FontAwesomeIcon
                  icon="angle-down"
                  size="1x"
                  style={{ paddingTop: "2px" }}
                />
              </div>
              <div className="type-dropdown">{typesList}</div>
            </div>
            <span style={{ paddingTop: "12px" }}>
              <button
                className="add-to-cart--btn"
                onClick={() =>
                  addToCart(this.props.productId, this.state.quantity)
                }
              >
                Add
              </button>
            </span>
          </div>
        ) : null}
      </div>
    );
  }
}

export default AddToCartButton;
