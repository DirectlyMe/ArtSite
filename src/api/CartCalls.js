
import { serverConfig as config } from "../config/serverConfig";

export function addToCart(id) {
  fetch(`http://${config.IP}:${config.PORT}/cart/additem/${id}`)
    .then(response => console.log(response));
}

export function getCart() {
  return fetch(`http://${config.IP}:${config.PORT}/cart/getcart`)
      .then(response =>  response.json())
      .catch(err => err);
}

export function removeFromCart(id) {
  return fetch(`http://${config.IP}:${config.PORT}/cart/deleteitem/${id}`)
      .then(response =>  response.json())
      .catch(err => err);
}
