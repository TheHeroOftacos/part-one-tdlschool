import BasePage from "./BasePage";

class shopping extends BasePage {
    static get url() {
        return "/#/cart.html";
      }
    static get cart(){
return cy.get('[id="shopping_cart_container"]')
    }
    static get checkout(){
        return cy.get('[id="checkout"]')
    }


}

export default shopping;