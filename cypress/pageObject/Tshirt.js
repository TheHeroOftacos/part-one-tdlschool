import BasePage from "./BasePage";

class shirt extends BasePage {
    static get url() {
        return "/#/inventory-item.html?id=4";
      }
    static get sauceAddToCart(){
        return cy.get('[id="add-to-cart-sauce-labs-bolt-t-shirt"]')
    }
    static get shoppingCartNumb(){
        return cy.get('[class="shopping_cart_badge"]')
    }
    static get BackButton(){
        return cy.get('[id="back-to-products"]')
    }
    static get remove(){
        return cy.get('[id="remove-sauce-labs-bolt-t-shirt"]')
    }
    static get  TestAddToCart(){
        return cy.get('[id="add-to-cart-test.allthethings()-t-shirt-(red)"]')
    }


}

export default shirt;