import { serverConfig as config } from "../config/serverConfig";

export async function addToCart(id, quantity = 1, type = "") {
    const data = {
        product_id: id,
        quantity: quantity,
        type: type
    };

    try {
        await fetch(`${config.IP}:${config.PORT}/api/cart/add-item`, {
            credentials: "include",
            method: "POST",
            mode: "cors",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        });
        return true;
    } catch (err) {
        return false;
    }
}

export async function getCart() {
    try {
        const response = await fetch(`${config.IP}:${config.PORT}/api/cart/get-cart`, {
            credentials: "include",
            method: "GET",
            mode: "cors"
        });
        return await response.json();
    } catch (err) {
        return err;
    }
}

export async function removeFromCart(id, quantity, type) {
    const data = {
        product_id: id,
        quantity: quantity,
        type: type
    };

    try {
        const response = await fetch(`${config.IP}/api/cart/remove-item`, {
            credentials: "include",
            method: "DELETE",
            mode: "cors",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        });
        return await response.text();
    } catch (err) {
        return err;
    }
}
