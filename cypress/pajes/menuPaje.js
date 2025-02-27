class MenuPaje {
    
    selectorList(){
        const selectors = {
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
        }
    
        return selectors
    
    }
    
    accessMyInfo() {
        cy.get(this.selectorList().myInfoButton).click()
    
    }

    checkAccessInvalid() {
        cy.get(this.selectorList().wrongCredencialAlert)
    }
}

export default MenuPaje