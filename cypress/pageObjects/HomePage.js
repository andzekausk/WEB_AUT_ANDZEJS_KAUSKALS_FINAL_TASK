import { BasePage } from "./BasePage";
export class HomePage extends BasePage{
    static get url(){
        return "";
    }
    static get firstNameField(){
        return cy.get('input#firstName');
    }
    static get lastNameField(){
        return cy.get('input#lastName');
    }
    static get userEmailField(){
        return cy.get('input#userEmail');
    }
    static get maleRadio(){
        return cy.get('input#gender-radio-1');
    }
    static get userNumberField(){
        return cy.get('input#userNumber');
    }
    static get currentAddressField(){
        return cy.get('textarea#currentAddress');
    }
    static get DateOfBirthInputField(){
        return cy.get('input#dateOfBirthInput');
    }
    static get subjectsContainerField(){
        return cy.get('div#subjectsContainer');
    }
    static get musicCheckbox(){
        return cy.get('input#hobbies-checkbox-3');
    }
    static get stateField(){
        return cy.get('div#state');
    }
    static get cityField(){
        return cy.get('div#city');
    }
  }
  