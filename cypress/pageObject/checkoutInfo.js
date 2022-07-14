import BasePage from "./BasePage";

class info extends BasePage {
    static get url() {
        return "/#/checkout-step-one.html";
      }
    static get firstName(){
        return cy.get('[id="first-name"]')
    }
    static get lastName(){
        return cy.get('[id="last-name"]')
    }
    static get postal(){
        return cy.get('[id="postal-code"]')
    }
    static get continue(){
        return cy.get('[id="continue"]')
    }
    static get check(){
        return cy.get('[id="item_3_title_link"]')
    }
    static get finish(){
        return cy.get('[id="finish"]')
    }
    static get finishedOrder(){
        return cy.get('[id="checkout_complete_container"]')
    }
    


}

export default info;