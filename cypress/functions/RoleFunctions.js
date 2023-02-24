import RoleLocators from "../locators/RoleLocators";

class RoleFunctions {
  open_roles_page() {
    cy.get(RoleLocators.stngsBtn).click();
    cy.get(RoleLocators.roleBtn).click();
  }

  add_role(roleName, roleDescription) {
    cy.get(RoleLocators.addRoleBtn).click();
    cy.get(RoleLocators.roleNameFld).type(roleName);
    cy.get(RoleLocators.roleDescFld).type(roleDescription);
    cy.get(RoleLocators.manageUsersBox).click();
    cy.get(RoleLocators.addSaveBtn).click();
  }

  verify_role() {}

  add_and_verify_role() {
    this.open_roles_page();
    this.add_role("Auto Role", "An automated description for automated role");
    this.verify_role();
  }
}

export default RoleFunctions;
