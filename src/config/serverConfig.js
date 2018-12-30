export const serverConfig = {
  IP: "localhost",
  PORT: 8080
};

export const paymentConfig = {
  paymentMethods: [{
    supportedMethods: 'basic-card',
    data: {
      supportedNetworks: [
        'visa', 'mastercard', 'amex', 'discover',
        'diners', 'jcb', 'unionpay'
      ]
    }
  }, {
    supportedMethods: 'https://bobpay.xyz/pay',
  }],
  options: {
    requestShipping: true,
    requestPayerEmail: true,
    requestPayerPhone: true,
    requestPayerName: true,
    shippingType: 'delivery'
  }
};