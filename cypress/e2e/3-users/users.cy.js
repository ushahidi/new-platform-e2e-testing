import LoginFunctions from "../../functions/LoginFunctions";
import UserFunctions from "../../functions/UserFunctions";

describe("Automated Tests for Users", () => {
  const loginFunctions = new LoginFunctions();
  const userFunctions = new UserFunctions();

  before(() => {
    loginFunctions.login_as_admin();
  });
  it("Adds a User", () => {
    userFunctions.navigate_and_add_user();
  });
});
