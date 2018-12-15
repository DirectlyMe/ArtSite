import { serverConfig as config } from "../config/serverConfig";

export function addToCart(id, quantity = 1) {
  console.log(id, quantity);
  fetch(`http://${config.IP}:${config.PORT}/cart/add-item`, {
    credentials: "include",
    method: "POST",
    mode: "cors",
    body: {
      id,
      quantity
    }
  }).then(response => console.log(response.json()));
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
