import LoginFunctions from "../../functions/LoginFunctions";
import RoleFunctions from "../../functions/RoleFunctions";

describe("Automated Tests for Roles", () => {
  const loginFunctions = new LoginFunctions();
  const roleFunctions = new RoleFunctions();

  it("Tests Role Creation", () => {
    loginFunctions.login_as_admin();
    roleFunctions.add_and_verify_role();
  });
  it("Adds and verifies Role", () => {});
});
