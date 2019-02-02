import React, { Component } from "react";
import Context from "../Context";
import { postTransactionInfo } from "../api/TransactionCalls";
import PaymentFormPage from "../screens/PaymentFormPage/PaymentFormPage";

class PaymentFormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: "Home"
        };
    }

    postTransaction = async userInfo => {
        const response = await postTransactionInfo(userInfo);

        alert(response);
    };

    render() {
        return (
            <div>
                <PaymentFormPage
                    {...this.state}
                    postTransactionFunc={this.postTransaction}
                />
            </div>
        );
    }
}
PaymentFormContainer.contextType = Context;

export default PaymentFormContainer;
