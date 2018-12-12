import { serverConfig as config } from "../config/serverConfig";

export function addToCart(id) {
  fetch(`http://${config.IP}:${config.PORT}/cart/add-item/${id}`, {
    credentials: "include",
    method: "POST",
    mode: "cors"
  }).then(response => console.log(response.json()));
}

export function getCart() {
  return fetch(`http://${config.IP}:${config.PORT}/cart/get-cart`, {
    credentials: "include",
    method: "GET",
    mode: "cors"
  })
    .then(response => response.json())
    .catch(err => err);
}

export function removeFromCart(id) {
  return fetch(`http://${config.IP}:${config.PORT}/cart/remove-item/${id}`, {
    credentials: "include",
    method: "POST",
    mode: "cors"
  })
    .then(response => response.json())
    .catch(err => err);
}
