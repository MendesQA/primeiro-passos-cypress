class MyInfoPaje {
    
    selectorList(){
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-mm-dd']",
            genericCombobox: ".oxd-select-text--arrow",
            secondItemCombobox: ".oxd-select-dropdown > :nth-child(2)",
            thirdItemComboboxCombobox: ".oxd-select-dropdown > :nth-child(3)",
            dateCloseButton: ".--close",
            saveButton: "[type='submit']",
            nationalButton: ".oxd-select-text-input"
            
        }
    
        return selectors
    
    }
    
    fillPersonalDetails(firstName, lastName) {
        cy.get(this.selectorList().firstNameField).clear().type(firstName)
        cy.get(this.selectorList().lastNameField).clear().type(lastName)
    
    }
    fillEmployeDetails(emploTest, oherIdTest, driverLicenseTest, expiryDate, niverTest, sinNumberTest) {
        cy.get(this.selectorList().genericField).eq(3).clear().type(emploTest)
        cy.get(this.selectorList().genericField).eq(4).clear().type(oherIdTest)
        cy.get(this.selectorList().genericField).eq(5).clear().type(driverLicenseTest)
        cy.get(this.selectorList().genericField).eq(6).clear().type(expiryDate)
        cy.get(this.selectorList().dateCloseButton).click()
        cy.get(this.selectorList().genericField).eq(7).clear().type(niverTest)
        //cy.get(this.selectorList().genericField).eq(8).clear().type(sinNumberTest)
    }
    saveButton(){
        cy.get(this.selectorList().saveButton).eq(0).click({force: true})
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close').click()
    }
    fillStatus() {
        cy.get(this.selectorList().genericCombobox).eq(0).click({force: true})
        cy.get(this.selectorList().secondItemCombobox).click()
        cy.get(this.selectorList().genericCombobox).eq(1).click({force: true})
       // cy.get(this.selectorList().thirdItemCombobox).click()
    }
}

export default MyInfoPaje