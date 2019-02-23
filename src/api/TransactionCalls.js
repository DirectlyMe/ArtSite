 import { serverConfig as config } from "../config/serverConfig";

export async function postTransactionInfo(userInfo) {
    try {
        const response = fetch(`${config.IP}:${config.PORT}/transaction/post-transaction`, {
            credentials: "include",
            method: "POST",
            mode: "cors",
            body: JSON.stringify(userInfo),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        });

        return response;
    } catch (err) {
        console.log(err);
        return false;
    }
}
