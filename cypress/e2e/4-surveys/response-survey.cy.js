import LoginFunctions from "../../functions/LoginFunctions";
import ResponseSurveyFunctions from "../../functions/ResponseSurveyFunctions";

describe("Submit response to Survey", () => {
  const loginFunctions = new LoginFunctions();
  const responseSurveyFunctions = new ResponseSurveyFunctions();

  before(() => {
    loginFunctions.login_as_admin();
  });

  it("Opens Survey to fill in", () => {
    responseSurveyFunctions.open_response_page();
    responseSurveyFunctions.fill_fields_steps();
    responseSurveyFunctions.submit_reponse_steps();
  });
});
