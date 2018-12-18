import { serverConfig as config } from "../config/serverConfig";

export function addToCart(id, quantity = 1, type = "") {
  const data = {
    product_id: id,
    quantity: quantity,
    type: type
  };

  return fetch(`http://${config.IP}:${config.PORT}/cart/add-item`, {
    credentials: "include",
    method: "POST",
    mode: "cors",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  }).then(response => {
    console.log(response);
    return true;
  }).catch(err => {
    console.log(err);
    return false;
  });
}

export async function getCart() {
  try {
    const response = await fetch(`http://${config.IP}:${config.PORT}/cart/get-cart`, {
      credentials: "include",
      method: "GET",
      mode: "cors"
    });
    return await response.json();
  }
  catch (err) {
    return err;
  }
}

export async function removeFromCart(id) {
  try {
    const response = await fetch(`http://${config.IP}:${config.PORT}/cart/remove-item/${id}`, {
      credentials: "include",
      method: "POST",
      mode: "cors"
    });
    return await response.json();
  }
  catch (err) {
    return err;
  }
}
