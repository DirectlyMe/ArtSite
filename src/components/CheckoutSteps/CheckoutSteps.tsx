import React, { FunctionComponent } from "react";

enum Steps {
    shipping = "shipping",
    billing = "billing",
    info = "info"
}

interface ICheckoutSteps {
    active: Steps;
}

const CheckoutSteps: FunctionComponent<ICheckoutSteps> = ({ active }) => {
    return (
        <div></div>
    );
};

export default CheckoutSteps;
