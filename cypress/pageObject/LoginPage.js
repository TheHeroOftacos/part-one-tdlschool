import BasePage from "./BasePage";

class Login extends BasePage {
    static get url() {
        return "/#/";
      }
    static get username(){
        return cy.get('[id="user-name"]')
    }
    static get password(){
        return cy.get('[id="password"]')
    }
    static get loginButton(){
        return cy.get('[id="login-button"]')
    }
    static get error(){
        return cy.get('[class="error-message-container error"]')
    }
    

}

export default Login;
