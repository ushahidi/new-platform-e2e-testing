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
    // cy.get(
    //   ".mat-tab-body-content > .form-head-panel > mzima-client-button > .mzima-button"
    // ).click();
    // cy.contains(".mat-ripple.list-item.ng-star-inserted", "Date & Time").click();

    //select field
    // cy.get(
    //   ".mat-tab-body-content > .form-head-panel > mzima-client-button > .mzima-button"
    // ).click();
    // cy.contains(".mat-ripple.list-item.ng-star-inserted", "Select").click();
    // cy.contains(
    //   ".mat-focus-indicator.mat-stroked-button.mat-button-base",
    //   "Add field"
    // ).click();

    //radio field
    // cy.contains(".mat-ripple.list-item.ng-star-inserted", "Radio Button(s)").click();

    //checkbox field
    // cy.contains(".mat-ripple.list-item.ng-star-inserted", "Checkbox(es)").click();
    // cy.contains(
    //   ".mat-focus-indicator.mat-stroked-button.mat-button-base",
    //   "Add field"
    // ).click();
    //related post field
    // cy.contains(".mat-ripple.list-item.ng-star-inserted", "Related Post").click();
    // cy.contains(
    //   ".mat-focus-indicator.mat-stroked-button.mat-button-base",
    //   "Add field"
    // ).click();
    //image field
    // cy.contains(".mat-ripple.list-item.ng-star-inserted", "Image").click();
    // cy.contains(
    //   ".mat-focus-indicator.mat-stroked-button.mat-button-base",
    //   "Add field"
    // ).click();
    //embed field
    // cy.contains(".mat-ripple.list-item.ng-star-inserted", "Embed video").click();
    // cy.contains(
    //   ".mat-focus-indicator.mat-stroked-button.mat-button-base",
    //   "Add field"
    // ).click();
    //markdown field
    // cy.contains(".mat-ripple.list-item.ng-star-inserted", "Markdown").click();
    // cy.contains(
    //   ".mat-focus-indicator.mat-stroked-button.mat-button-base",
    //   "Add field"
    // ).click();
    //categories field
    // cy.contains(".mat-ripple.list-item.ng-star-inserted", "Categories").click();
  }

  complete_add_survey_steps() {
    cy.get(".form-controls-panel > :nth-child(2) > .mzima-button").click();
  }

  verify_created_survey_exists() {
    
  }
}

export default SurveyFunctions;
