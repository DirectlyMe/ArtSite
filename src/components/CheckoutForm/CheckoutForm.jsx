import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import { toast } from "react-toastify";
import Context from "../../Context";
import classnames from "classnames";
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
            tokenId: "",
            isBillingSame: true,
            billingFirstName: "",
            billingLastName: "",
            billingState: "",
            billingCity: "",
            billingStreetAddress: "",
            billingZipcode: ""
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

        let billingToken;
        if (this.state.isBillingSame) {
            const { token } = await this.props.stripe.createToken({
                name: `${this.state.firstName} ${this.state.lastName}`,
                address_line1: this.state.streetAddress,
                address_zip: this.state.zipcode,
                address_city: this.state.city
            });

            billingToken = token;
        } else {
            const { token } = await this.props.stripe.createToken({
                name: `${this.state.billingFirstName} ${this.state.billingLastName}`,
                address_line1: this.state.billingStreetAddress,
                address_zip: this.state.billingZipcode,
                address_city: this.state.billingCity
            });

            billingToken = token;
        }

        if (billingToken) {
            this.setState({ tokenId: billingToken.id }, () => {
                const userInfo = {
                    ...this.state
                };

                this.props.postTransactionFunc(userInfo);
            });
        } else {
            toast.error(
                "Sorry something went wrong, try checking the payment information you entered.",
                {
                    className: "submit-payment-toast--error"
                }
            );
        }
    };

    changeBillingToggle = (event, isSame) => {
        event.preventDefault();
        this.setState({ isBillingSame: isSame });
    };

    render() {
        return (
            <div className="checkout--payment-forms---wrapper">
                <form className="checkout--payment-forms">
                    <div className="checkout--payment-forms---segment">
                        <h4 className="contact-header">Contact Info</h4>
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
                    </div>
                    <div className="checkout--payment-forms---segment">
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
                    </div>
                    <h4 className="contact-header">Billing Info</h4>
                    <div className="checkout--payment-forms---billing-toggle">
                        <button
                            className={classnames(
                                "checkout--payment-forms---billing-toggle",
                                {
                                    ["checkout--payment-forms---billing-toggle-active"]: this // eslint-disable-line
                                        .state.isBillingSame
                                }
                            )}
                            style={{ borderRadius: "10px 0 0 10px" }}
                            onClick={event => this.changeBillingToggle(event, true)}
                        >
                            Same as shipping
                        </button>
                        <button
                            className={classnames(
                                "checkout--payment-forms---billing-toggle",
                                {
                                    ["checkout--payment-forms---billing-toggle-active"]: !this // eslint-disable-line
                                        .state.isBillingSame
                                }
                            )}
                            style={{ borderRadius: "0 10px 10px 0" }}
                            onClick={event => this.changeBillingToggle(event, false)}
                        >
                            Different than shipping
                        </button>
                    </div>
                    {!this.state.isBillingSame ? (
                        <div className="checkout--payment-forms---segment">
                            <div className="checkout--payment-forms---billing-info">
                                <label className="checkout--payment-forms---header">
                                    First Name
                                    <br />
                                    <input
                                        type="text"
                                        required
                                        value={this.state.billingFirstName}
                                        onChange={this.handleChange}
                                        name="billingFirstName"
                                    />
                                </label>
                                <label className="checkout--payment-forms---header">
                                    Last Name
                                    <br />
                                    <input
                                        type="text"
                                        required
                                        value={this.state.billingLastName}
                                        onChange={this.handleChange}
                                        name="billingLastName"
                                    />
                                </label>
                                <label className="checkout--payment-forms---header">
                                    State
                                    <br />
                                    <input
                                        type="text"
                                        required
                                        value={this.state.billingState}
                                        onChange={this.handleChange}
                                        name="billingState"
                                    />
                                </label>
                                <label className="checkout--payment-forms---header">
                                    City
                                    <br />
                                    <input
                                        type="text"
                                        value={this.state.billingCity}
                                        onChange={this.handleChange}
                                        name="billingCity"
                                    />
                                </label>
                                <label className="checkout--payment-forms---header">
                                    Street Address
                                    <br />
                                    <input
                                        type="text"
                                        required
                                        value={this.state.billingStreetAddress}
                                        onChange={this.handleChange}
                                        name="billingStreetAddress"
                                    />
                                </label>
                                <label className="checkout--payment-forms---header">
                                    Zipcode
                                    <br />
                                    <input
                                        type="text"
                                        required
                                        value={this.state.billingZipcode}
                                        onChange={this.handleChange}
                                        name="billingZipcode"
                                    />
                                </label>
                            </div>
                        </div>
                    ) : null}
                    <div className="checkout-form">
                        <h4 className="contact-header">Payment Info</h4>
                        <CardElement
                            style={{
                                base: { fontSize: "16px", color: "black", opacity: "1" }
                            }}
                        />
                        <button className="checkout-form--submit" onClick={this.submit}>
                            Complete
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
CheckoutForm.contextType = Context;

export default injectStripe(CheckoutForm);
