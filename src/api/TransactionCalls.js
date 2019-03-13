import { serverConfig as config } from "../config/serverConfig";

export async function postTransactionInfo(userInfo) {
    try {
        const response = await fetch(`${config.IP}:${config.PORT}/api/transaction/post-transaction`, {
            credentials: "include",
            method: "POST",
            mode: "cors",
            body: JSON.stringify(userInfo),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        });

        return await response.json();
    } catch (err) {
        console.log(err);
        return "Transaction failed";
    }
}
