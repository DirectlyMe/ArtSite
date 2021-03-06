import React, { Component } from "react";
import Context from "../Context";
import { postTransactionInfo } from "../api/TransactionCalls";
import PaymentFormPage from "../screens/PaymentFormPage/PaymentFormPage";
import { toast } from "react-toastify";
import { withRouter, RouteComponentProps } from "react-router-dom";

interface IProps extends RouteComponentProps<any> {}

class PaymentFormContainer extends Component<IProps, {}> {
    postTransaction = async (userInfo: IUserInfo) => {
        const isValid = this.checkUserInfo(userInfo);
        if (isValid) {
            const transactionInfo = {
                ...userInfo,
                amount: this.context.cartTotal + this.context.cartTax + this.context.cartShipping,
                tax: this.context.cartTax,
                shipping: this.context.cartShipping,
                cartItems: this.context.cartItems
            };

            const response = await postTransactionInfo(transactionInfo);

            if (response.transactionStatus === true) {
                toast.success(`Payment Received, we've emailed a receipt to ${transactionInfo.email}`, {
                    className: "submit-payment-toast--success"
                });

                this.context.updateCart();
                this.props.history.push("/");
            } else {
                toast.error("Sorry something went wrong, try checking the payment information you entered.", {
                    className: "submit-payment-toast--error",
                });
            }
        }
    };

    checkUserInfo = (userInfo: IUserInfo) => {
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
                toast.error("Sorry something went wrong, try checking the payment information you entered.", {
                    className: "submit-payment-toast--error",
                });
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

export default withRouter(PaymentFormContainer);
