/// <reference types="Cypress" />

import SurveyLocators from "../locators/SurveyLocators";

class SurveyFunctions {
  open_survey_creation_page_steps() {
    cy.get(SurveyLocators.stngsBtn).click();
    cy.get(SurveyLocators.surveysBtn).click();
    cy.get(SurveyLocators.addSurveyBtn).click();
  }

  add_survey_details_steps() {
    cy.get(SurveyLocators.srvyNameField).type("Automated Survey");
    cy.get("textarea[placeholder=Description]").type("Automated Description");
  }

  add_survey_fields_steps() {
    //Survey Main Title
    cy.get(
      // ".mat-focus-indicator.field-item__control.mat-icon-button.mat-button-base"
      ".mzima-button.mzima-button--gray.mzima-button--clear.mzima-button--medium.mzima-button--block.mzima-button--icon-only.ng-star-inserted"
    )
      .eq(0)
      .click();
    cy.get("input[placeholder='Name this field']").type(" - Automated");
    cy.contains(
      // ".mat-focus-indicator.mat-raised-button.mat-button-base.mat-primary",
      ".mzima-button.mzima-button--primary.mzima-button--solid.mzima-button--medium.mzima-button--block.ng-star-inserted",
      "Update"
    ).click();

    //Survey Main Description
    cy.get(
      // ".mat-focus-indicator.field-item__control.mat-icon-button.mat-button-base"
      ".mzima-button.mzima-button--gray.mzima-button--clear.mzima-button--medium.mzima-button--block.mzima-button--icon-only.ng-star-inserted"
    )
      .eq(1)
      .click();
    cy.get("input[placeholder='Name this field']").type(" - Automated");
    cy.contains(
      // ".mat-focus-indicator.mat-raised-button.mat-button-base.mat-primary",
      ".mzima-button.mzima-button--primary.mzima-button--solid.mzima-button--medium.mzima-button--block.ng-star-inserted",
      "Update"
    ).click();

    //click Add field button to open list of fields
    cy.get(
      ".mat-tab-body-content > .form-head-panel > mzima-client-button > .mzima-button"
    ).click();

    //short text field
    cy.contains(".mat-ripple.list-item.ng-star-inserted", "Short text").click();
    cy.get("input[placeholder='Name this field']").type(" - Automated");
    cy.contains("Save").click();

    //long text field
    cy.get(
      ".mat-tab-body-content > .form-head-panel > mzima-client-button > .mzima-button"
    ).click();

    cy.contains(".mat-ripple.list-item.ng-star-inserted", "Long text").click();
    cy.get("input[placeholder='Name this field']").type(" - Automated");
    cy.contains("Save").click();

    //decimal field
    cy.get(
      ".mat-tab-body-content > .form-head-panel > mzima-client-button > .mzima-button"
    ).click();
    cy.contains(
      ".mat-ripple.list-item.ng-star-inserted",
      "Number (Decimal)"
    ).click();
    cy.get("input[placeholder='Name this field']").type(" - Automated");
    cy.contains("Save").click();

    //integer field
    cy.get(
      ".mat-tab-body-content > .form-head-panel > mzima-client-button > .mzima-button"
    ).click();
    cy.contains(
      ".mat-ripple.list-item.ng-star-inserted",
      "Number (Integer)"
    ).click();
    cy.get("input[placeholder='Name this field']").type(" - Automated");
    cy.contains("Save").click();

    //location field
    cy.get(
      ".mat-tab-body-content > .form-head-panel > mzima-client-button > .mzima-button"
    ).click();
    cy.contains(".mat-ripple.list-item.ng-star-inserted", "Location").click();
    cy.get("input[placeholder='Name this field']").type(" - Automated");
    cy.contains("Save").click();

    //date field
    cy.get(
      ".mat-tab-body-content > .form-head-panel > mzima-client-button > .mzima-button"
    ).click();
    cy.contains(".mat-ripple.list-item.ng-star-inserted", "Date").click();
    cy.get("input[placeholder='Name this field']").type(" - Automated");
    cy.contains("Save").click();

    //dateTime field
    cy.get(
      ".mat-tab-body-content > .form-head-panel > mzima-client-button > .mzima-button"
    ).click();
    cy.contains(
      ".mat-ripple.list-item.ng-star-inserted",
      "Date & Time"
    ).click();
    cy.get("input[placeholder='Name this field']").type(" - Automated");
    cy.contains("Save").click();

    //select field
    cy.get(
      ".mat-tab-body-content > .form-head-panel > mzima-client-button > .mzima-button"
    ).click();
    cy.contains(".mat-ripple.list-item.ng-star-inserted", "Select").click();
    cy.get("input[placeholder='Name this field']").type(" - Automated");
    //add select options
    cy.get(
      ":nth-child(3) > .form-head-panel > mzima-client-button > .mzima-button"
    ).click();
    cy.get('input[placeholder="Name this field').eq(1).type("S1");
    cy.get(
      ":nth-child(3) > .form-head-panel > mzima-client-button > .mzima-button"
    ).click();
    cy.get('input[placeholder="Name this field').eq(2).type("S2");
    cy.get(
      ":nth-child(3) > .form-head-panel > mzima-client-button > .mzima-button"
    ).click();
    cy.get('input[placeholder="Name this field').eq(3).type("S3");

    cy.contains("Save").click();

    //radio field
    cy.get(
      ".mat-tab-body-content > .form-head-panel > mzima-client-button > .mzima-button"
    ).click();
    cy.contains(
      ".mat-ripple.list-item.ng-star-inserted",
      "Radio Button(s)"
    ).click();
    cy.get("input[placeholder='Name this field']").type(" - Automated");
    //add radio options
    cy.get(
      ":nth-child(3) > .form-head-panel > mzima-client-button > .mzima-button"
    ).click();
    cy.get('input[placeholder="Name this field').eq(1).type("R1");
    cy.get(
      ":nth-child(3) > .form-head-panel > mzima-client-button > .mzima-button"
    ).click();
    cy.get('input[placeholder="Name this field').eq(2).type("R2");
    cy.get(
      ":nth-child(3) > .form-head-panel > mzima-client-button > .mzima-button"
    ).click();
    cy.get('input[placeholder="Name this field').eq(3).type("R3");
    cy.contains("Save").click();

    //checkbox field
    cy.get(
      ".mat-tab-body-content > .form-head-panel > mzima-client-button > .mzima-button"
    ).click();
    cy.contains(
      ".mat-ripple.list-item.ng-star-inserted",
      "Checkbox(es)"
    ).click();
    cy.get("input[placeholder='Name this field']").type(" - Automated");
    //add checkbox options
    cy.get(
      ":nth-child(3) > .form-head-panel > mzima-client-button > .mzima-button"
    ).click();
    cy.get('input[placeholder="Name this field').eq(1).type("C1");
    cy.get(
      ":nth-child(3) > .form-head-panel > mzima-client-button > .mzima-button"
    ).click();
    cy.get('input[placeholder="Name this field').eq(2).type("C2");
    cy.get(
      ":nth-child(3) > .form-head-panel > mzima-client-button > .mzima-button"
    ).click();
    cy.get('input[placeholder="Name this field').eq(3).type("C3");
    cy.contains("Save").click();

    //related post field
    cy.get(
      ".mat-tab-body-content > .form-head-panel > mzima-client-button > .mzima-button"
    ).click();
    cy.contains(
      ".mat-ripple.list-item.ng-star-inserted",
      "Related Post"
    ).click();
    cy.get("input[placeholder='Name this field']").type(" - Automated");
    cy.contains("Save").click();

    //image field
    cy.get(
      ".mat-tab-body-content > .form-head-panel > mzima-client-button > .mzima-button"
    ).click();
    cy.contains(".mat-ripple.list-item.ng-star-inserted", "Image").click();
    cy.get("input[placeholder='Name this field']").type(" - Automated");
    cy.contains("Save").click();

    //embed field
    cy.get(
      ".mat-tab-body-content > .form-head-panel > mzima-client-button > .mzima-button"
    ).click();
    cy.contains(
      ".mat-ripple.list-item.ng-star-inserted",
      "Embed video"
    ).click();
    cy.get("input[placeholder='Name this field']").type(" - Automated");
    cy.contains("Save").click();

    //markdown field
    cy.get(
      ".mat-tab-body-content > .form-head-panel > mzima-client-button > .mzima-button"
    ).click();
    cy.contains(".mat-ripple.list-item.ng-star-inserted", "Markdown").click();
    cy.get("input[placeholder='Name this field']").type(" - Automated");
    cy.contains("Save").click();

    //categories field
    // cy.contains(".mat-ripple.list-item.ng-star-inserted", "Categories").click();
  }

  complete_add_survey_steps() {
    cy.get(".form-controls-panel > :nth-child(2) > .mzima-button").click();
  }

  verify_created_survey_exists() {}
}

export default SurveyFunctions;
