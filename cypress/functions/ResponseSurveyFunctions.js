/// <reference types="Cypress" />

import ResponseLocators from "../locators/ResponseLocators";

class ResponseSurveyFunctions {
  open_response_page() {
    cy.get(".submit-post-button > .mzima-button").click();
    cy.get('[data-qa="add-post-modal-surveys-item125"]').click();
  }

  fill_fields_steps() {
    cy.get(
      ':nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > [data-qa="null"]'
    ).type("Automated Title One");
    cy.get('[data-qa="post-item-f8e358e4-b21b-4d11-9abb-4e4a08a00c8b"]').type(
      "Automated Description Field Two"
    );
    cy.get(
      ':nth-child(3) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > [data-qa="null"]'
    ).type("Automated Short Text Field Three");
    cy.get('[data-qa="post-item-aaf9a66c-a634-4eb9-be9c-91322fc1bf96"]').type(
      "Automated Long Text Field Four"
    );
    cy.get(
      ':nth-child(5) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > [data-qa="null"]'
    ).type("5");
    cy.get(
      ':nth-child(6) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > [data-qa="null"]'
    ).type("6.0");
 
    //date-time field
    // cy.get(
    //   ':nth-child(9) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > [data-qa="null”]'
    // ).click();
    // cy.get(".actions > .mat-focus-indicator").click();

    //select field
    cy.get("#mat-select-value-5").click();
    cy.get(
      '[data-qa="post-item-post-select-optionS1"] > .mat-option-text'
    ).click();

    //radio field
    cy.get(
      '[data-qa="post-item-post-radio-optionR2"] > .mat-radio-label'
    ).click();

    //checkbox field
    cy.get(
      '[data-qa="post-item-post-checkbox-optionF1"] > .mat-list-item-content > .mat-pseudo-checkbox'
    ).click();
    //select and unselect option 2
    cy.get(
      '[data-qa="post-item-post-checkbox-optionF2"] > .mat-list-item-content > .mat-pseudo-checkbox'
    ).click();
    cy.get(
      '[data-qa="post-item-post-checkbox-optionF2"] > .mat-list-item-content > .mat-pseudo-checkbox'
    ).click();
    cy.get(
      '[data-qa="post-item-post-checkbox-optionF3"] > .mat-list-item-content > .mat-pseudo-checkbox'
    ).click();
  }

  submit_reponse_steps() {
    cy.get(ResponseLocators.submitBtn).click();
  }
}

export default ResponseSurveyFunctions;
