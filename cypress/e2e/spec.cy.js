import Login from "../pageObject/LoginPage"

describe('empty spec', () => {
  it('Login with locked_out_use', () => {
    Login.visit()
    Login.username.type('locked_out_user')
    Login.password.type('secret_sauce')
    Login.loginButton.click()
  })
})