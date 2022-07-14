import BasePage from "./BasePage";

class Base extends BasePage {
    static get url() {
        return "/#/inventory.html";
      }
    static get item(){
        return cy.get('[class="inventory_item"]')
    }
    static get filter(){
        return cy.get('[class="product_sort_container"]')
    }
    static get saucetshirt(){
        return cy.get('[id="item_1_title_link"]')
    }
    static get clickbike(){
        return cy.get('[id="item_0_title_link"]')
    }
    static get burger(){
        return cy.get('[id="react-burger-menu-btn"]')
    }
    static get reset(){
        return cy.get('[id="reset_sidebar_link"]')
    }
    static get cartBadge(){
        return cy.get('[class="shopping_cart_badge"]')
    }
    static get testShirt(){
        return cy.get('[id="item_3_title_link"]')
    }
    

}

export default Base;
