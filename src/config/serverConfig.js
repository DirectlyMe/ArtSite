export const serverConfig =
    process.env.NODE_ENV === "development"
        ? { IP: "http://localhost", PORT: 8001 }
        : { IP: "https://olyveart.com", PORT: 3001 };

export const paymentConfig = {
    paymentMethods: [
        {
            supportedMethods: "basic-card",
            data: {
                supportedNetworks: [
                    "visa",
                    "mastercard",
                    "amex",
                    "discover",
                    "diners",
                    "jcb",
                    "unionpay"
                ]
            }
        },
        {
            supportedMethods: "https://bobpay.xyz/pay"
        }
    ],
    options: {
        requestShipping: true,
        requestPayerEmail: true,
        requestPayerPhone: true,
        requestPayerName: true,
        shippingType: "delivery"
    }
};
