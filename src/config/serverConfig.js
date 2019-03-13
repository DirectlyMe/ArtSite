// export const serverConfig = { IP: "https://cf81929c.ngrok.io", PORT: 80 };
export const serverConfig = { IP: "http://127.0.0.1", PORT: 3001 };

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
