import React, { Component } from "react";
import Context from "../Context";
import { postTransactionInfo } from "../api/TransactionCalls";
import PaymentFormPage from "../screens/PaymentFormPage/PaymentFormPage";

class PaymentFormContainer extends Component {
    postTransaction = async userInfo => {
        const isValid = this.checkUserInfo(userInfo);
        if (isValid) {
            const transactionInfo = {
                ...userInfo,
                amount: this.context.cartTotal
            };

            const response = await postTransactionInfo(transactionInfo);
            alert(response);
        }
    };

    checkUserInfo = userInfo => {
        const nameRegex = new RegExp(/([a-z])\w+/);
        const phoneRegex = new RegExp(
            /^([0-9]( |-)?)?(\(?[0-9]{3}\)?|[0-9]{3})( |-)?([0-9]{3}( |-)?[0-9]{4}|[a-zA-Z0-9]{7})$/
        );
        const emailRegex = new RegExp(/^.+@[^\.].*\.[a-z]{2,}$/); // eslint-disable-line
        const stateRegex = new RegExp(/([a-z])\w+/i);
        const cityRegex = new RegExp(/([a-z])+\w+/i);
        const zipRegex = new RegExp(/^[0-9]{5}([- /]?[0-9]{4})?$/);
        // const addressRegex = new RegExp(/([0-9])([a-z])\w+/i); this one may not be necessary

        const firstNameValid = {
            name: "firstName",
            valid: nameRegex.test(userInfo.firstName)
        };
        const lastNameValid = {
            name: "lastName",
            valid: nameRegex.test(userInfo.lastName)
        };
        const phoneValid = {
            name: "phone",
            valid: phoneRegex.test(userInfo.telephone)
        };
        const emailValid = {
            name: "email",
            valid: emailRegex.test(userInfo.email)
        };
        const stateValid = {
            name: "state",
            valid: stateRegex.test(userInfo.state)
        }; // TODO: change state input
        const cityValid = {
            name: "state",
            valid: cityRegex.test(userInfo.city)
        };
        const zipValid = {
            name: "zipcode",
            valid: zipRegex.test(userInfo.zipcode)
        };
        const addressValid = {
            name: "address",
            valid: true
        };

        const validList = [
            firstNameValid,
            lastNameValid,
            phoneValid,
            emailValid,
            stateValid,
            cityValid,
            zipValid,
            addressValid
        ];

        for (const item of validList) {
            if (item.valid === false) {
                alert(`Something doesn't look right, please check the ${item.name} field`);
                return false;
            }
        }

        return true;
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
