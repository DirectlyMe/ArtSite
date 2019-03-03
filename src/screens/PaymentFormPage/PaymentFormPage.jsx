import React, { Component } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import MediaQuery from "react-responsive";
import Context from "../../Context";
import PageHeading from "../../components/PageHeading";
import "./styles.scss";

class PaymentFormPage extends Component {
    render() {
        const { width } = this.context;
        return (
            <StripeProvider apiKey="pk_test_T0QmVwOvjHsnfM3pP4lrjD6J">
                <div>
                    <MediaQuery query="(min-width: 900px)">
                        <div className="checkout-page" style={{ width: width * 0.8 }}>
                            <PageHeading text="Checkout" size={48} marginTop={60} />
                            <Elements>
                                <CheckoutForm
                                    postTransactionFunc={this.props.postTransactionFunc}
                                />
                            </Elements>
                        </div>
                    </MediaQuery>
                    <MediaQuery query="(max-width: 899px)">
                        <div />
                    </MediaQuery>
                </div>
            </StripeProvider>
        );
    }
}
PaymentFormPage.contextType = Context;

export default PaymentFormPage;
