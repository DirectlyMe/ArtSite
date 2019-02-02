import * as cartCalls from "../CartCalls";

const testItem = {
    product_id: 7,
    quantity: 1,
    type: "Canvas"
};

describe("Cart operations", () => {
    it("Adds a item to the cart", async () => {
        const response = await cartCalls.addToCart(testItem);
        expect(response).toBeTruthy();
    });
    
    it("Deletes a item from the cart", async () => {
        await cartCalls.addToCart(testItem);
        const cart = await cartCalls.removeFromCart(testItem);
        console.log(cart);
        // expect(cart).toEqual(`${testItem.product_id} removed`);
    });
});