import UserLocators from "../locators/UserLocators";

class UserFunctions {
  open_user_page() {
    cy.wait(2000);
    cy.get(UserLocators.stngsBtn).click();
    cy.get(UserLocators.usersBtn).click();
  }

  add_user(userName, userEmail, pwd) {
    cy.get(UserLocators.addUserBtn).click();
    cy.get(UserLocators.nameField).type(userName);
    cy.get(UserLocators.emailField).type(userEmail);
    cy.get(UserLocators.pwdField).type(pwd);
    cy.get(UserLocators.userRoleSlct).click();
    cy.get(UserLocators.roleAdmin).click();
    cy.get(UserLocators.saveBtn).click();
  }

  navigate_and_add_user() {
    this.open_user_page();
    this.add_user(
      "Auto User",
      "autouser@ushahidi.com",
      Cypress.env("ush_user_pwd")
    );
  }
}

export default UserFunctions;
