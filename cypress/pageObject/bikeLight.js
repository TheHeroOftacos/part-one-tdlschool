import BasePage from "./BasePage";

class Bike extends BasePage {
    static get url() {
        return "/#/inventory-item.html?id=4";
      }
    static get bikeAddToCart(){
        return cy.get('[id="add-to-cart-sauce-labs-bike-light"]')
    }

    
}

export default Bike;
