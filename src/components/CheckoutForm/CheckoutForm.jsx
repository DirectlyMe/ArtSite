import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import { toast } from "react-toastify";
import Context from "../../Context";
import "./styles.scss";

class CheckoutForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            telephone: "",
            firstName: "",
            lastName: "",
            state: "",
            city: "",
            streetAddress: "",
            zipcode: "",
            tokenId: ""
        };
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    checkFields = () => {
        for (let field in Object.values(this.state)) {
            if (field === "") {
                return false;
            }
        }

        return true;
    };

    submit = async ev => {
        ev.preventDefault();

        let { token } = await this.props.stripe.createToken({
            name: `${this.state.firstName} ${this.state.lastName}`,
            address_line1: this.state.streetAddress,
            address_zip: this.state.zipcode,
            address_city: this.state.city
        });

        if (token) {
            this.setState({ tokenId: token.id }, () => {
                    const userInfo = {
                        ...this.state
                    };

                    this.props.postTransactionFunc(userInfo);
            });
        } else {
            toast.error("Sorry something went wrong, try checking the payment information you entered.", {
                className: "submit-payment-toast--error",
            });
        }
    };

    render() {
        return (
            <div className="checkout--payment-forms---wrapper">
                <h4 className="contact-header">Contact Info</h4>
                <form className="checkout--payment-forms">
                    <div className="checkout--payment-forms---contact">
                        <label className="checkout--payment-forms---header">
                            Email
                            <br />
                            <input
                                type="text"
                                required
                                value={this.state.email}
                                onChange={this.handleChange}
                                name="email"
                            />
                        </label>
                        <label className="checkout--payment-forms---header">
                            Phone
                            <br />
                            <input
                                type="text"
                                required
                                value={this.state.phone}
                                onChange={this.handleChange}
                                name="telephone"
                            />
                        </label>
                    </div>
                    <h4 className="contact-header">Shipping Info</h4>
                    <div className="checkout--payment-forms---shipping">
                        <label className="checkout--payment-forms---header">
                            First Name
                            <br />
                            <input
                                type="text"
                                required
                                value={this.state.firstName}
                                onChange={this.handleChange}
                                name="firstName"
                            />
                        </label>
                        <label className="checkout--payment-forms---header">
                            Last Name
                            <br />
                            <input
                                type="text"
                                required
                                value={this.state.lastName}
                                onChange={this.handleChange}
                                name="lastName"
                            />
                        </label>
                        <label className="checkout--payment-forms---header">
                            State
                            <br />
                            <input
                                type="text"
                                required
                                value={this.state.state}
                                onChange={this.handleChange}
                                name="state"
                            />
                        </label>
                        <label className="checkout--payment-forms---header">
                            City
                            <br />
                            <input
                                type="text"
                                value={this.state.city}
                                onChange={this.handleChange}
                                name="city"
                            />
                        </label>
                        <label className="checkout--payment-forms---header">
                            Street Address
                            <br />
                            <input
                                type="text"
                                required
                                value={this.state.streetAddress}
                                onChange={this.handleChange}
                                name="streetAddress"
                            />
                        </label>
                        <label className="checkout--payment-forms---header">
                            Zipcode
                            <br />
                            <input
                                type="text"
                                required
                                value={this.state.zipcode}
                                onChange={this.handleChange}
                                name="zipcode"
                            />
                        </label>
                    </div>
                    <h4 className="contact-header">Payment Info</h4>
                    <div className="checkout-form">
                        <CardElement light/>
                        <button className="checkout-form--submit" onClick={this.submit}>
                            Send
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
CheckoutForm.contextType = Context;

export default injectStripe(CheckoutForm);
