import axios from "axios";
import { serverConfig as config } from "../config/serverConfig";

export function addToCart(id) {
  axios
    .post(`http://${config.IP}:${config.PORT}/cart/additem/${id}`)
    .then(res => console.log(res));
}

export function getCart() {
  return new Promise((resolve, reject) => {
    axios
      .get(`http://${config.IP}:${config.PORT}/cart/getcart`)
      .then(response => resolve(response.data))
      .catch(err => reject(err));
  });
}

export function removeFromCart(id) {
  return new Promise((resolve, reject) => {
    axios
      .get(`http://${config.IP}:${config.PORT}/cart/deleteitem/${id}`)
      .then(res => resolve(res.data))
      .catch(err => reject(err));
  });
}
