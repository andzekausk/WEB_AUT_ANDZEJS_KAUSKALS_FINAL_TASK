import { HomePage } from "../pageObjects/HomePage";

describe('Demoqa scenario', () => {
  it('Demoqa scenario ', () => {
    // a. Open https://demoqa.com/automation-practice-form
    HomePage.visit();
    // b. Input all the necessary information in the text fields, buttons, etc, where it is not
    // stated otherwise.
    const name = "Andžejs"; 
    const lastname = "Kauškals";
    const email = "s23kausandz@venta.lv";
    const usernumber = "1234567890";
    const currentaddress = "Grove street";
    HomePage.firstNameField.type(name);
    HomePage.lastNameField.type(lastname);
    HomePage.userEmailField.type(email);
    HomePage.maleRadio.click({force: true});
    HomePage.userNumberField.type(usernumber);
    HomePage.currentAddressField.type(currentaddress);     
    // c. Set the - Date of Birth - with Calendar widget to - 28th of February, 1930.
    const dateofbirth = "28 February,1930";
    HomePage.DateOfBirthInputField.type(`{selectall}${dateofbirth}{enter}`);
    // d. Set Subjects to Economics.
    const subjects = "Economics"
    HomePage.subjectsContainerField.type(`${subjects}{enter}`);
    // e. Set Hobbies to Music.
    HomePage.musicCheckbox.click({force: true});
    // f. Upload an image of your choice.
    const file = "man.jpg";
    HomePage.uploadPictureButton.selectFile(`cypress/files/${file}`);
    // g. Set State to NCR.
    const state = "NCR";
    HomePage.stateField.type(`${state}{enter}`);
    // h. Set City to Delhi.
    const city = "Delhi"
    HomePage.cityField.type(`${city}{enter}`);
    // i. Click Submit.
    HomePage.submitButton.click();
    // j. Validate that each Labeled row contains the correct information
    HomePage.getRow("Student Name").should("contain", `${name} ${lastname}`);
    HomePage.getRow("Student Email").should("contain", email);
    HomePage.getRow("Gender").should("contain", "Male");
    HomePage.getRow("Mobile").should("contain", usernumber);
    HomePage.getRow("Date of Birth").should("contain", dateofbirth);
    HomePage.getRow("Subjects").should("contain", subjects);
    HomePage.getRow("Hobbies").should("contain", "Music");
    HomePage.getRow("Picture").should("contain", file);
    HomePage.getRow("Address").should("contain", currentaddress);
    HomePage.getRow("State and City").should("contain", `${state} ${city}`);
  })
})