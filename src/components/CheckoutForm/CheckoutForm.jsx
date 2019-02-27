import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import "./styles.scss";

class CheckoutForm extends Component {
    submit = async ev => {
        let { token } = await this.props.stripe.createToken({ name: "Name" });
        let response = await fetch("/charge", {
            method: "POST",
            headers: { "Content-Type": "text/plain" },
            body: token.id
        });

        if (response.ok) alert("Purchase Complete!");
    };

    render() {
        return (
            <div className="checkout">
                <p>Would you like to complete the purchase?</p>
                <CardElement />
                <button onClick={this.submit}>Send</button>
            </div>
        );
    }
}

export default injectStripe(CheckoutForm);
