import React, { Component } from "react";
import Context from "../Context";
import CartPage from "../screens/CartPage/CartPage";
import { removeFromCart } from "../api/CartCalls";
import { paymentConfig } from "../config/serverConfig";

class CartContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            calcPriceFunc: this.calcPrice,
            removeItemFunc: this.removeItem,
            checkoutOrderFunc: this.checkoutOrder
        };
    }

    componentDidMount = async () => {
        if (this.context.cartItems !== undefined && this.context.cartItems.length > 0) {
            this.calcPrice();
        }
    };

    removeItem = async (id, quantity, type) => {
        await removeFromCart(id, quantity, type);
        this.calcPrice();
    };

    calcPrice = async () => {
        let total = 0;

        await this.context.updateCart();
        this.context.cartItems.map(item => (total += item.price * item.quantity));
        this.setState({ total });
    };

    checkoutOrder = () => {
        // if (!window.PaymentRequest || this.state.total === 0) return;

        const payments = this.context.cartItems.map(item => {
            return {
                label: item.title,
                amount: { currency: "USD", value: item.price * item.quantity },
                quantity: item.quantity,
                type: item.type
            };
        });

        const paymentDetails = {
            displayItems: payments,
            total: {
                label: "Total Due",
                amount: { currency: "USD", value: this.state.total }
            }
        };

        const request = new PaymentRequest(
            paymentConfig.paymentMethods,
            paymentDetails,
            paymentConfig.options
        );

        request
            .show()
            .then(response => {
                response.complete("success");
            })
            .catch(err => {
                console.log(err);
            });
    };

    render() {
        return (
            <div>
                <CartPage {...this.state} />
            </div>
        );
    }
}
CartContainer.contextType = Context;

export default CartContainer;
