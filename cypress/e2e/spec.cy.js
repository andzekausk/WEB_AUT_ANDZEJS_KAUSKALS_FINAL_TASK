import { HomePage } from "../pageObjects/HomePage";

describe('Demoqa scenario', () => {
  it('Demoqa scenario ', () => {
    // a. Open https://demoqa.com/automation-practice-form
    HomePage.visit();
    // b. Input all the necessary information in the text fields, buttons, etc, where it is not
    // stated otherwise.
    HomePage.firstNameField.type("Andžejs");
    HomePage.lastNameField.type("Kauškals");
    HomePage.userEmailField.type("s23kausandz@venta.lv");
    HomePage.maleRadio.click({force: true});
    HomePage.userNumberField.type("21234567");
    HomePage.currentAddressField.type("Grove street");     
    // c. Set the - Date of Birth - with Calendar widget to - 28th of February, 1930.
    HomePage.DateOfBirthInputField.type('{selectall}28 Feb 1930{enter}');
    // d. Set Subjects to Economics.
    HomePage.subjectsContainerField.type('ec{enter}');
    // e. Set Hobbies to Music.
    HomePage.musicCheckbox.click({force: true});
  })
})