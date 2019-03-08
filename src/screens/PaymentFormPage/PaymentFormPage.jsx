import React, { useContext } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import MediaQuery from "react-responsive";
import Context from "../../Context";
import PageHeading from "../../components/PageHeading";
import "./styles.scss";

const PaymentFormPage = ({ postTransactionFunc }) => {
    const context = useContext(Context);

    return (
        <StripeProvider apiKey="pk_test_T0QmVwOvjHsnfM3pP4lrjD6J">
            <div>
                <MediaQuery query="(min-width: 900px)">
                    <div className="checkout-page" style={{ width: context.width * 0.8 }}>
                        <PageHeading text="Checkout" size={48} marginTop={60} />
                        <Elements>
                            <CheckoutForm
                                postTransactionFunc={postTransactionFunc}
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
};

export default PaymentFormPage;
