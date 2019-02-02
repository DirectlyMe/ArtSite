import React, { Component } from "react";
import MediaQuery from "react-responsive";
import classnames from "classnames";
import Context from "../../Context";
import PageHeading from "../../components/PageHeading";
import "./styles.scss";

class PaymentFormPage extends Component {
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
            cardHolderName: "",
            cardNumber: "",
            cvc: "",
            ccExp: ""
        };
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    updateUserInfo = event => {
        event.preventDefault();
       
        const userInfo = {
            ...this.state
        };

        for (let info in userInfo) {
            console.log(info);
        }

        alert("User info updated" + userInfo);

        this.props.postTransactionFunc(userInfo);
    };

    render() {
        const { width } = this.context;
        return (
            <div>
                <MediaQuery query="(min-width: 900px)">
                    <div className="checkout-page" style={{ width: width * 0.8 }}>
                        <PageHeading text="Checkout" size={48} marginTop={60} />
                        <div className="checkout--payment-forms---wrapper">
                            <h4 className="contact-header">Contact Info</h4>
                            <form
                                className="checkout--payment-forms"
                                onSubmit={this.updateUserInfo}
                            >
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
                                <div className="checkout--payment-forms---payment-info">
                                    <label
                                        htmlFor="frmNameCC"
                                        className="checkout--payment-forms---header"
                                    >
                                        Name on card
                                        <br />
                                        <input
                                            name="cardHolderName"
                                            id="frmNameCC"
                                            required
                                            placeholder="Full Name"
                                            autoComplete="cc-name"
                                            value={this.state.cardHolderName}
                                            onChange={this.handleChange}
                                        />
                                    </label>
                                    <label
                                        htmlFor="frmCCNum"
                                        className="checkout--payment-forms---header"
                                    >
                                        Card Number
                                        <br />
                                        <input
                                            name="cardNumber"
                                            id="frmCCNum"
                                            required
                                            autoComplete="cc-number"
                                            value={this.state.cardNumber}
                                            onChange={this.handleChange}
                                        />
                                    </label>
                                    <label
                                        htmlFor="frmCCCVC"
                                        className={classnames(
                                            "checkout--payment-forms---header",
                                            "CVC-number"
                                        )}
                                    >
                                        CVC
                                        <br />
                                        <input
                                            name="cvc"
                                            id="frmCCCVC"
                                            required
                                            autoComplete="cc-csc"
                                            value={this.state.cvc}
                                            onChange={this.handleChange}
                                        />
                                    </label>
                                    <label htmlFor="frmCCExp">
                                        Expiry
                                        <br />
                                        <input
                                            name="ccExp"
                                            id="frmCCExp"
                                            required
                                            placeholder="MM-YYYY"
                                            autoComplete="cc-exp"
                                            value={this.state.ccExp}
                                            onChange={this.handleChange}
                                        />
                                    </label>
                                </div>
                                <input type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                </MediaQuery>
                <MediaQuery query="(max-width: 899px)">
                    <div />
                </MediaQuery>
            </div>
        );
    }
}
PaymentFormPage.contextType = Context;

export default PaymentFormPage;
