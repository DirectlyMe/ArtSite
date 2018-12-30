import { serverConfig as config } from "../config/serverConfig";

export async function addToCart(id, quantity = 1, type = "") {
  const data = {
    product_id: id,
    quantity: quantity,
    type: type
  };

  try {
    const response = await fetch(
      `http://${config.IP}:${config.PORT}/cart/add-item`,
      {
        credentials: "include",
        method: "POST",
        mode: "cors",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      }
    );
    console.log(response);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}

export async function getCart() {
  try {
    const response = await fetch(
      `http://${config.IP}:${config.PORT}/cart/get-cart`,
      {
        credentials: "include",
        method: "GET",
        mode: "cors"
      }
    );
    return await response.json();
  } catch (err) {
    return err;
  }
}

export async function removeFromCart(id, type) {
  const data = {
    product_id: id,
    type: type
  };

  try {
    const response = await fetch(
      `http://${config.IP}:${config.PORT}/cart/remove-item`,
      {
        credentials: "include",
        method: "DELETE",
        mode: "cors",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      }
    );
    return await response.json();
  } catch (err) {
    return err;
  }
}
