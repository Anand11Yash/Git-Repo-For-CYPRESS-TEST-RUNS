//This is an edit to this file to see if the changes being made on the Lenovo E41-45 system are being synced with the Online repository on GitHub.

describe('The Aim Of This Test Suit Is To Ensure Visility & Working Of', () => {
    it('Title, Buttons and Questions', () => {
        cy.visit('calc.html')

        cy.contains('Click here to understand this Calculator & Carbon Footprint!').click().click().should('exist')
        .should('be.visible')

        cy.contains('Carbon Footprint Calculator').should('exist')
        .should('be.visible')
        .and('contain', 'Carbon Footprint Calculator');

        cy.get('#AC').should('exist')
        .should('be.visible')

        cy.get('#ELECTRICITY').should('exist')
        .should('be.visible')

        cy.get('#TV').should('exist')
        .should('be.visible')

        cy.get('#SOLARPANELS').should('exist')
        .should('be.visible')
        
        cy.get('#CNG').should('exist')
        .should('be.visible')
        
        cy.get('#PETROL').should('exist')
        .should('be.visible')
        
        cy.get('#LPG').should('exist')
        .should('be.visible')
        
        cy.get('#DIESEL').should('exist')
        .should('be.visible')
        
        cy.get('#LPGFORVEHICLE').should('exist')
        .should('be.visible')
        
        cy.get('#COAL').should('exist')
        .should('be.visible')
        
        cy.get('#WATER').should('exist')
        .should('be.visible')
        
        cy.get('#BEEF').should('exist')
        .should('be.visible')
        
        cy.get('#CHICKEN').should('exist')
        .should('be.visible')
        
        cy.get('#EGGS').should('exist')
        .should('be.visible')
        
        cy.get('#FISH').should('exist')
        .should('be.visible')
        
        cy.get('#MUTTON').should('exist')
        .should('be.visible')
        
        cy.get('#PORK').should('exist')
        .should('be.visible')
        
        cy.get('#VEGETABLES').should('exist')
        .should('be.visible')
        
        cy.get('#MILK').should('exist')
        .should('be.visible')
        
        cy.get('#FOOD').should('exist')
        .should('be.visible')
        
        cy.get('#COCACOLA').should('exist')
        .should('be.visible')
        
        cy.get('#COOKINGOIL').should('exist')
        .should('be.visible')
        
        cy.get('#MOTORCYCLE').should('exist')
        .should('be.visible')
        
        cy.get('#AEROPLANE').should('exist')
        .should('be.visible')
        
        cy.get('#BUS').should('exist')
        .should('be.visible')
        
        cy.get('#TRAIN').should('exist')
        .should('be.visible')
        
        cy.get('#AUTORICKSHAW').should('exist')
        .should('be.visible')
        
        cy.get('#CAR').should('exist')
        .should('be.visible')
        
        cy.get('#BICYCLE').should('exist')
        .should('be.visible')
        
        cy.contains('Find Your Carbon Footprint').click()
        cy.get('#result').should('exist')

        cy.get('.documentation').click().should('exist')
        .should('be.visible')

        cy.get('.GitHub').click().should('exist')
        .should('be.visible')
         
        cy.wait(3000)   
    })

})

describe('Verifying Inputs', () => {
    it('1. Ensuring the result is NOT calculated for NO INPUTS',() => {
        cy.visit('calc.html')

        cy.get('#AC')
        
        cy.get('#ELECTRICITY')

        cy.get('#TV')
        
        cy.get('#SOLARPANELS')

        cy.get('#CNG')

        cy.get('#PETROL')

        cy.get('#LPG')

        cy.get('#DIESEL')

        cy.get('#LPGFORVEHICLE')

        cy.get('#COAL')

        cy.get('#WATER')

        cy.get('#BEEF')

        cy.get('#CHICKEN')

        cy.get('#EGGS')

        cy.get('#FISH')

        cy.get('#MUTTON')

        cy.get('#PORK')

        cy.get('#VEGETABLES')

        cy.get('#MILK')

        cy.get('#FOOD')

        cy.get('#COCACOLA')

        cy.get('#COOKINGOIL')

        cy.get('#MOTORCYCLE')

        cy.get('#AEROPLANE')

        cy.get('#BUS')
        
        cy.get('#TRAIN')
        
        cy.get('#AUTORICKSHAW')

        cy.get('#CAR')

        cy.get('#BICYCLE')

        cy.contains('Find Your Carbon Footprint').click()        
        cy.get('#result').should('exist')
    })

    it('2. To ensure the result is being calculated for ZERO INPUTS IS ZERO', () => {

        cy.visit('calc.html')
        
        cy.get('#AC').type('0').should('exist')
        .should('be.visible')
        
        cy.get('#ELECTRICITY').type('0').should('exist')
        .should('be.visible')
        
        cy.get('#TV').type('0').should('exist')
        .should('be.visible')
        
        cy.get('#SOLARPANELS').type('0').should('exist')
        .should('be.visible')
        
        cy.get('#CNG').type('0').should('exist')
        .should('be.visible')
        
        cy.get('#PETROL').type('0').should('exist')
        .should('be.visible')
        
        cy.get('#LPG').type('0').should('exist')
        .should('be.visible')
        
        cy.get('#DIESEL').type('0').should('exist')
        .should('be.visible')
        
        cy.get('#LPGFORVEHICLE').type('0').should('exist')
        .should('be.visible')
        
        cy.get('#COAL').type('0').should('exist')
        .should('be.visible')
        
        cy.get('#WATER').type('0').should('exist')
        .should('be.visible')
        
        cy.get('#BEEF').type('0').should('exist')
        .should('be.visible')
        
        cy.get('#CHICKEN').type('0').should('exist')
        .should('be.visible')
        
        cy.get('#EGGS').type('0').should('exist')
        .should('be.visible')
        
        cy.get('#FISH').type('0').should('exist')
        .should('be.visible')
        
        cy.get('#MUTTON').type('0').should('exist')
        .should('be.visible')
        
        cy.get('#PORK').type('0').should('exist')
        .should('be.visible')
        
        cy.get('#VEGETABLES').type('0').should('exist')
        .should('be.visible')
        
        cy.get('#MILK').type('0').should('exist')
        .should('be.visible')
        
        cy.get('#FOOD').type('0').should('exist')
        .should('be.visible')
        
        cy.get('#COCACOLA').type('0').should('exist')
        .should('be.visible')
        
        cy.get('#COOKINGOIL').type('0').should('exist')
        .should('be.visible')
        
        cy.get('#MOTORCYCLE').type('0').should('exist')
        .should('be.visible')
        
        cy.get('#AEROPLANE').type('0').should('exist')
        .should('be.visible')
        
        cy.get('#BUS').type('0').should('exist')
        .should('be.visible')
        
        cy.get('#TRAIN').type('0').should('exist')
        .should('be.visible')
        
        cy.get('#AUTORICKSHAW').type('0').should('exist')
        .should('be.visible')
        
        cy.get('#CAR').type('0').should('exist')
        .should('be.visible')
        
        cy.get('#BICYCLE').type('0').should('exist')
        .should('be.visible')
                
        cy.contains('Find Your Carbon Footprint').click()        
        cy.get('#result').should('exist')

        cy.wait(5000)
    })

    it('3. To ensure the result is being calculated for SINGLE DIGIT POSITIVE NUMBERS', () => {

        cy.visit('calc.html')
        
        cy.get('#AC').type('3').should('exist')
        .should('be.visible')
        
        cy.get('#ELECTRICITY').type('1').should('exist')
        .should('be.visible')
        
        cy.get('#TV').type('1').should('exist')
        .should('be.visible')
        
        cy.get('#SOLARPANELS').type('6').should('exist')
        .should('be.visible')
        
        cy.get('#CNG').type('4').should('exist')
        .should('be.visible')
        
        cy.get('#PETROL').type('3').should('exist')
        .should('be.visible')
        
        cy.get('#LPG').type('9').should('exist')
        .should('be.visible')
        
        cy.get('#DIESEL').type('4').should('exist')
        .should('be.visible')
        
        cy.get('#LPGFORVEHICLE').type('2').should('exist')
        .should('be.visible')
        
        cy.get('#COAL').type('7').should('exist')
        .should('be.visible')
        
        cy.get('#WATER').type('5').should('exist')
        .should('be.visible')
        
        cy.get('#BEEF').type('9').should('exist')
        .should('be.visible')
        
        cy.get('#CHICKEN').type('1').should('exist')
        .should('be.visible')
        
        cy.get('#EGGS').type('2').should('exist')
        .should('be.visible')
        
        cy.get('#FISH').type('5').should('exist')
        .should('be.visible')
        
        cy.get('#MUTTON').type('3').should('exist')
        .should('be.visible')
        
        cy.get('#PORK').type('8').should('exist')
        .should('be.visible')
        
        cy.get('#VEGETABLES').type('4').should('exist')
        .should('be.visible')
        
        cy.get('#MILK').type('5').should('exist')
        .should('be.visible')
        
        cy.get('#FOOD').type('7').should('exist')
        .should('be.visible')
        
        cy.get('#COCACOLA').type('8').should('exist')
        .should('be.visible')
        
        cy.get('#COOKINGOIL').type('6').should('exist')
        .should('be.visible')
        
        cy.get('#MOTORCYCLE').type('3').should('exist')
        .should('be.visible')
        
        cy.get('#AEROPLANE').type('2').should('exist')
        .should('be.visible')
        
        cy.get('#BUS').type('9').should('exist')
        .should('be.visible')
        
        cy.get('#TRAIN').type('3').should('exist')
        .should('be.visible')
        
        cy.get('#AUTORICKSHAW').type('2').should('exist')
        .should('be.visible')
        
        cy.get('#CAR').type('5').should('exist')
        .should('be.visible')
        
        cy.get('#BICYCLE').type('6').should('exist')
        .should('be.visible')
                
        cy.contains('Find Your Carbon Footprint').click()        
        cy.get('#result').should('exist')
        
        cy.wait(5000)
    })

    it('4. To ensure the result is being calculated for LARGE DIGIT POSITIVE NUMBERS', () => {

        cy.visit('calc.html')
        
        cy.get('#AC').type('2341').should('exist')
        .should('be.visible')
        
        cy.get('#ELECTRICITY').type('2133').should('exist')
        .should('be.visible')
        
        cy.get('#TV').type('1233').should('exist')
        .should('be.visible')
        
        cy.get('#SOLARPANELS').type('2332').should('exist')
        .should('be.visible')
        
        cy.get('#CNG').type('2443').should('exist')
        .should('be.visible')
        
        cy.get('#PETROL').type('2442').should('exist')
        .should('be.visible')
        
        cy.get('#LPG').type('2353').should('exist')
        .should('be.visible')
        
        cy.get('#DIESEL').type('4562').should('exist')
        .should('be.visible')
        
        cy.get('#LPGFORVEHICLE').type('2442').should('exist')
        .should('be.visible')
        
        cy.get('#COAL').type('2344').should('exist')
        .should('be.visible')
        
        cy.get('#WATER').type('2434').should('exist')
        .should('be.visible')
        
        cy.get('#BEEF').type('2343').should('exist')
        .should('be.visible')
        
        cy.get('#CHICKEN').type('2415').should('exist')
        .should('be.visible')
        
        cy.get('#EGGS').type('5356').should('exist')
        .should('be.visible')
        
        cy.get('#FISH').type('3421').should('exist')
        .should('be.visible')
        
        cy.get('#MUTTON').type('1513').should('exist')
        .should('be.visible')
        
        cy.get('#PORK').type('1341').should('exist')
        .should('be.visible')
        
        cy.get('#VEGETABLES').type('1231').should('exist')
        .should('be.visible')
        
        cy.get('#MILK').type('1235').should('exist')
        .should('be.visible')
        
        cy.get('#FOOD').type('5432').should('exist')
        .should('be.visible')
        
        cy.get('#COCACOLA').type('1423').should('exist')
        .should('be.visible')
        
        cy.get('#COOKINGOIL').type('2342').should('exist')
        .should('be.visible')
        
        cy.get('#MOTORCYCLE').type('2142').should('exist')
        .should('be.visible')
        
        cy.get('#AEROPLANE').type('2352').should('exist')
        .should('be.visible')
        
        cy.get('#BUS').type('1434').should('exist')
        .should('be.visible')
        
        cy.get('#TRAIN').type('2552').should('exist')
        .should('be.visible')
        
        cy.get('#AUTORICKSHAW').type('2332').should('exist')
        .should('be.visible')
        
        cy.get('#CAR').type('2524').should('exist')
        .should('be.visible')
        
        cy.get('#BICYCLE').type('2525').should('exist')
        .should('be.visible')
                
        cy.contains('Find Your Carbon Footprint').click()
        cy.get('#result').should('exist')
        
        cy.wait(5000)
    })

    it('5. Ensuring the result is being calculated for DECIMAL NUMBERS', () => {

        cy.visit('calc.html')
        
        cy.get('#AC').type('23.1').should('exist')
        .should('be.visible')
        
        cy.get('#ELECTRICITY').type('5.6').should('exist')
        .should('be.visible')
        
        cy.get('#TV').type('33.5').should('exist')
        .should('be.visible')
        
        cy.get('#SOLARPANELS').type('87.4').should('exist')
        .should('be.visible')
        
        cy.get('#CNG').type('34.5').should('exist')
        .should('be.visible')
        
        cy.get('#PETROL').type('23.2').should('exist')
        .should('be.visible')
        
        cy.get('#LPG').type('43.4').should('exist')
        .should('be.visible')
        
        cy.get('#DIESEL').type('76.8').should('exist')
        .should('be.visible')
        
        cy.get('#LPGFORVEHICLE').type('12.2').should('exist')
        .should('be.visible')
        
        cy.get('#COAL').type('65.3').should('exist')
        .should('be.visible')
        
        cy.get('#WATER').type('1.1').should('exist')
        .should('be.visible')
        
        cy.get('#BEEF').type('0.67').should('exist')
        .should('be.visible')
        
        cy.get('#CHICKEN').type('12.3').should('exist')
        .should('be.visible')
        
        cy.get('#EGGS').type('16.6').should('exist')
        .should('be.visible')
        
        cy.get('#FISH').type('88.5').should('exist')
        .should('be.visible')
        
        cy.get('#MUTTON').type('3.5').should('exist')
        .should('be.visible')
        
        cy.get('#PORK').type('5.3').should('exist')
        .should('be.visible')
        
        cy.get('#VEGETABLES').type('8.222').should('exist')
        .should('be.visible')
        
        cy.get('#MILK').type('54.2').should('exist')
        .should('be.visible')
        
        cy.get('#FOOD').type('3434.4').should('exist')
        .should('be.visible')
        
        cy.get('#COCACOLA').type('542.4').should('exist')
        .should('be.visible')
        
        cy.get('#COOKINGOIL').type('34.2').should('exist')
        .should('be.visible')
        
        cy.get('#MOTORCYCLE').type('21.1').should('exist')
        .should('be.visible')
        
        cy.get('#AEROPLANE').type('12.2').should('exist')
        .should('be.visible')
        
        cy.get('#BUS').type('76.4').should('exist')
        .should('be.visible')
        
        cy.get('#TRAIN').type('43.6').should('exist')
        .should('be.visible')
        
        cy.get('#AUTORICKSHAW').type('23.67654').should('exist')
        .should('be.visible')
        
        cy.get('#CAR').type('34.3').should('exist')
        .should('be.visible')
        
        cy.get('#BICYCLE').type('23.2').should('exist')
        .should('be.visible')
                
        cy.contains('Find Your Carbon Footprint').click()
        cy.get('#result').should('exist')
        
        cy.wait(5000)
    })

    it('6. Ensuring the result is NOT being calculated for NEGATIVE INTEGERS & that placeholders are disabled after wrong input', () => {
        
        cy.visit('calc.html')
        
        cy.get('#AC').type('-1').should('exist')
        .should('be.visible')

        cy.get('#ACError').should('exist')
        .should('be.visible')

        cy.get('#ELECTRICITY').should('be.disabled')
        
        cy.get('#TV').should('be.disabled')
        
        cy.get('#SOLARPANELS').should('be.disabled')
        
        cy.get('#CNG').should('be.disabled')
        
        cy.get('#PETROL').should('be.disabled')
        
        cy.get('#LPG').should('be.disabled')
        
        cy.get('#DIESEL').should('be.disabled')
        
        cy.get('#LPGFORVEHICLE').should('be.disabled')
        
        cy.get('#COAL').should('be.disabled')
        
        cy.get('#WATER').should('be.disabled')
        
        cy.get('#BEEF').should('be.disabled')
        
        cy.get('#CHICKEN').should('be.disabled')
        
        cy.get('#EGGS').should('be.disabled')
        
        cy.get('#FISH').should('be.disabled')
        
        cy.get('#MUTTON').should('be.disabled')
        
        cy.get('#PORK').should('be.disabled')
        
        cy.get('#VEGETABLES').should('be.disabled')
        
        cy.get('#MILK').should('be.disabled')
        
        cy.get('#FOOD').should('be.disabled')
        
        cy.get('#COCACOLA').should('be.disabled')
        
        cy.get('#COOKINGOIL').should('be.disabled')
        
        cy.get('#MOTORCYCLE').should('be.disabled')
        
        cy.get('#AEROPLANE').should('be.disabled')
        
        cy.get('#BUS').should('be.disabled')
        
        cy.get('#TRAIN').should('be.disabled')
        
        cy.get('#AUTORICKSHAW').should('be.disabled')
        
        cy.get('#CAR').should('be.disabled')
        
        cy.get('#BICYCLE').should('be.disabled')

        cy.contains('Find Your Carbon Footprint').click()
        cy.get('#result').should('exist')

        cy.wait(5000)
    })

    it('7. Ensuring the result is NOT being calculated for LARGE DIGIT NEGATIVE INTEGERS & that placeholders are disabled after wrong input', () => {
        
        cy.visit('calc.html')
        
        cy.get('#AC').type('-3445235235').should('exist')
        .should('be.visible')

        cy.get('#ACError').should('exist')
        .should('be.visible')

        cy.get('#ELECTRICITY').should('be.disabled')
            
        cy.get('#TV').should('be.disabled')
        
        cy.get('#SOLARPANELS').should('be.disabled')
        
        cy.get('#CNG').should('be.disabled')
        
        cy.get('#PETROL').should('be.disabled')
        
        cy.get('#LPG').should('be.disabled')
        
        cy.get('#DIESEL').should('be.disabled')
        
        cy.get('#LPGFORVEHICLE').should('be.disabled')
        
        cy.get('#COAL').should('be.disabled')
        
        cy.get('#WATER').should('be.disabled')
        
        cy.get('#BEEF').should('be.disabled')
        
        cy.get('#CHICKEN').should('be.disabled')
        
        cy.get('#EGGS').should('be.disabled')
        
        cy.get('#FISH').should('be.disabled')
        
        cy.get('#MUTTON').should('be.disabled')
        
        cy.get('#PORK').should('be.disabled')
        
        cy.get('#VEGETABLES').should('be.disabled')
        
        cy.get('#MILK').should('be.disabled')
        
        cy.get('#FOOD').should('be.disabled')
        
        cy.get('#COCACOLA').should('be.disabled')
        
        cy.get('#COOKINGOIL').should('be.disabled')
        
        cy.get('#MOTORCYCLE').should('be.disabled')
        
        cy.get('#AEROPLANE').should('be.disabled')
        
        cy.get('#BUS').should('be.disabled')
        
        cy.get('#TRAIN').should('be.disabled')
        
        cy.get('#AUTORICKSHAW').should('be.disabled')
        
        cy.get('#CAR').should('be.disabled')
        
        cy.get('#BICYCLE').should('be.disabled')

        cy.get('#result').should('exist')

        cy.contains('Find Your Carbon Footprint').click()
        cy.get('#result').should('exist')

        cy.wait(5000)
    })
    
    it('8. Ensuring the result is NOT being calculated for SMALL ALPHABETS & that placeholders are disabled after wrong input', () => {

        cy.visit('calc.html')
        
        cy.get('#AC').type('o').should('exist')
        .should('be.visible')

        cy.get('#ACError').should('exist')
        .should('be.visible')

        cy.get('#ELECTRICITY').should('be.disabled')
            
        cy.get('#TV').should('be.disabled')
        
        cy.get('#SOLARPANELS').should('be.disabled')
        
        cy.get('#CNG').should('be.disabled')
        
        cy.get('#PETROL').should('be.disabled')
        
        cy.get('#LPG').should('be.disabled')
        
        cy.get('#DIESEL').should('be.disabled')
        
        cy.get('#LPGFORVEHICLE').should('be.disabled')
        
        cy.get('#COAL').should('be.disabled')
        
        cy.get('#WATER').should('be.disabled')
        
        cy.get('#BEEF').should('be.disabled')
        
        cy.get('#CHICKEN').should('be.disabled')
        
        cy.get('#EGGS').should('be.disabled')
        
        cy.get('#FISH').should('be.disabled')
        
        cy.get('#MUTTON').should('be.disabled')
        
        cy.get('#PORK').should('be.disabled')
        
        cy.get('#VEGETABLES').should('be.disabled')
        
        cy.get('#MILK').should('be.disabled')
        
        cy.get('#FOOD').should('be.disabled')
        
        cy.get('#COCACOLA').should('be.disabled')
        
        cy.get('#COOKINGOIL').should('be.disabled')
        
        cy.get('#MOTORCYCLE').should('be.disabled')
        
        cy.get('#AEROPLANE').should('be.disabled')
        
        cy.get('#BUS').should('be.disabled')
        
        cy.get('#TRAIN').should('be.disabled')
        
        cy.get('#AUTORICKSHAW').should('be.disabled')
        
        cy.get('#CAR').should('be.disabled')
        
        cy.get('#BICYCLE').should('be.disabled')
        
        cy.contains('Find Your Carbon Footprint').click()
        cy.get('#result').should('exist')
        
        cy.wait(5000)
    })
    
    it('9. Ensuring the result is NOT being calculated for CAPITAL ALPHABETS & that placeholders are disabled after wrong input', () => {

        cy.visit('calc.html')
        
        cy.get('#AC').type('A').should('exist')
        .should('be.visible')

        cy.get('#ACError').should('exist')
        .should('be.visible')

        cy.get('#ELECTRICITY').should('be.disabled')
            
        cy.get('#TV').should('be.disabled')
        
        cy.get('#SOLARPANELS').should('be.disabled')
        
        cy.get('#CNG').should('be.disabled')
        
        cy.get('#PETROL').should('be.disabled')
        
        cy.get('#LPG').should('be.disabled')
        
        cy.get('#DIESEL').should('be.disabled')
        
        cy.get('#LPGFORVEHICLE').should('be.disabled')
        
        cy.get('#COAL').should('be.disabled')
        
        cy.get('#WATER').should('be.disabled')
        
        cy.get('#BEEF').should('be.disabled')
        
        cy.get('#CHICKEN').should('be.disabled')
        
        cy.get('#EGGS').should('be.disabled')
        
        cy.get('#FISH').should('be.disabled')
        
        cy.get('#MUTTON').should('be.disabled')
        
        cy.get('#PORK').should('be.disabled')
        
        cy.get('#VEGETABLES').should('be.disabled')
        
        cy.get('#MILK').should('be.disabled')
        
        cy.get('#FOOD').should('be.disabled')
        
        cy.get('#COCACOLA').should('be.disabled')
        
        cy.get('#COOKINGOIL').should('be.disabled')
        
        cy.get('#MOTORCYCLE').should('be.disabled')
        
        cy.get('#AEROPLANE').should('be.disabled')
        
        cy.get('#BUS').should('be.disabled')
        
        cy.get('#TRAIN').should('be.disabled')
        
        cy.get('#AUTORICKSHAW').should('be.disabled')
        
        cy.get('#CAR').should('be.disabled')
        
        cy.get('#BICYCLE').should('be.disabled')
        
        cy.contains('Find Your Carbon Footprint').click()
        cy.get('#result').should('exist')

        cy.wait(5000)
    })

    it('10. Ensuring the result is NOT being calculated for SYMBOLS & that placeholders are disabled after wrong input', () => {

        cy.visit('calc.html')
        
        cy.get('#AC').type('@').should('exist')
        .should('be.visible')

        cy.get('#ACError').should('exist')
        .should('be.visible')

        cy.get('#ELECTRICITY').should('be.disabled')
            
        cy.get('#TV').should('be.disabled')
        
        cy.get('#SOLARPANELS').should('be.disabled')
        
        cy.get('#CNG').should('be.disabled')
        
        cy.get('#PETROL').should('be.disabled')
        
        cy.get('#LPG').should('be.disabled')
        
        cy.get('#DIESEL').should('be.disabled')
        
        cy.get('#LPGFORVEHICLE').should('be.disabled')
        
        cy.get('#COAL').should('be.disabled')
        
        cy.get('#WATER').should('be.disabled')
        
        cy.get('#BEEF').should('be.disabled')
        
        cy.get('#CHICKEN').should('be.disabled')
        
        cy.get('#EGGS').should('be.disabled')
        
        cy.get('#FISH').should('be.disabled')
        
        cy.get('#MUTTON').should('be.disabled')
        
        cy.get('#PORK').should('be.disabled')
        
        cy.get('#VEGETABLES').should('be.disabled')
        
        cy.get('#MILK').should('be.disabled')
        
        cy.get('#FOOD').should('be.disabled')
        
        cy.get('#COCACOLA').should('be.disabled')
        
        cy.get('#COOKINGOIL').should('be.disabled')
        
        cy.get('#MOTORCYCLE').should('be.disabled')
        
        cy.get('#AEROPLANE').should('be.disabled')
        
        cy.get('#BUS').should('be.disabled')
        
        cy.get('#TRAIN').should('be.disabled')
        
        cy.get('#AUTORICKSHAW').should('be.disabled')
        
        cy.get('#CAR').should('be.disabled')
        
        cy.get('#BICYCLE').should('be.disabled')
        
        cy.contains('Find Your Carbon Footprint').click()
        cy.get('#result').should('exist')
        
        cy.wait(5000)
    })

    it('11. Ensuring the result is NOT being calculated if ALL ANSWERS ARE POSITIVE EXCEPT ONE NEGATIVE INTEGER', () => {

        cy.visit('calc.html')
        
        cy.get('#AC').type('1').should('exist')
        .should('be.visible')
        
        cy.get('#ELECTRICITY').type('7').should('exist')
        .should('be.visible')
        
        cy.get('#TV').type('3').should('exist')
        .should('be.visible')
        
        cy.get('#SOLARPANELS').type('8').should('exist')
        .should('be.visible')
        
        cy.get('#CNG').type('9').should('exist')
        .should('be.visible')
        
        cy.get('#PETROL').type('4').should('exist')
        .should('be.visible')
        
        cy.get('#LPG').type('6').should('exist')
        .should('be.visible')
        
        cy.get('#DIESEL').type('3').should('exist')
        .should('be.visible')
        
        cy.get('#LPGFORVEHICLE').type('3').should('exist')
        .should('be.visible')
        
        cy.get('#COAL').type('7').should('exist')
        .should('be.visible')
        
        cy.get('#WATER').type('4').should('exist')
        .should('be.visible')
        
        cy.get('#BEEF').type('6').should('exist')
        .should('be.visible')
        
        cy.get('#CHICKEN').type('5').should('exist')
        .should('be.visible')
        
        cy.get('#EGGS').type('9').should('exist')
        .should('be.visible')
        
        cy.get('#FISH').type('0').should('exist')
        .should('be.visible')
        
        cy.get('#MUTTON').type('3').should('exist')
        .should('be.visible')
        
        cy.get('#PORK').type('5').should('exist')
        .should('be.visible')
        
        cy.get('#VEGETABLES').type('3').should('exist')
        .should('be.visible')
        
        cy.get('#MILK').type('2').should('exist')
        .should('be.visible')
        
        cy.get('#FOOD').type('1').should('exist')
        .should('be.visible')
        
        cy.get('#COCACOLA').type('8').should('exist')
        .should('be.visible')
        
        cy.get('#COOKINGOIL').type('6').should('exist')
        .should('be.visible')
        
        cy.get('#MOTORCYCLE').type('5').should('exist')
        .should('be.visible')
        
        cy.get('#AEROPLANE').type('4').should('exist')
        .should('be.visible')
        
        cy.get('#BUS').type('3').should('exist')
        .should('be.visible')
        
        cy.get('#TRAIN').type('6').should('exist')
        .should('be.visible')
        
        cy.get('#AUTORICKSHAW').type('6').should('exist')
        .should('be.visible')
        
        cy.get('#CAR').type('6').should('exist')
        .should('be.visible')
        
        cy.get('#BICYCLE').type('-5').should('exist')
        .should('be.visible')

        cy.get('#BICYCLEERROR').should('be.exist')
        .should('be.visible')

        cy.contains('Find Your Carbon Footprint').click()
        cy.get('#result').should('exist')

        cy.wait(5000)
    })

    it('12. Ensuring the result is NOT being calculated if ALL ANSWERS ARE POSITIVE EXCEPT ONE NEGATIVE INTEGER', () => {

        cy.visit('calc.html')
        
        cy.get('#AC').type('65').should('exist')
        .should('be.visible')
        
        cy.get('#ELECTRICITY').type('4').should('exist')
        .should('be.visible')
        
        cy.get('#TV').type('34').should('exist')
        .should('be.visible')
        
        cy.get('#SOLARPANELS').type('76').should('exist')
        .should('be.visible')
        
        cy.get('#CNG').type('45').should('exist')
        .should('be.visible')
        
        cy.get('#PETROL').type('43').should('exist')
        .should('be.visible')
        
        cy.get('#LPG').type('45').should('exist')
        .should('be.visible')
        
        cy.get('#DIESEL').type('34').should('exist')
        .should('be.visible')
        
        cy.get('#LPGFORVEHICLE').type('34').should('exist')
        .should('be.visible')
        
        cy.get('#COAL').type('12').should('exist')
        .should('be.visible')
        
        cy.get('#WATER').type('98').should('exist')
        .should('be.visible')
        
        cy.get('#BEEF').type('23').should('exist')
        .should('be.visible')
        
        cy.get('#CHICKEN').type('56').should('exist')
        .should('be.visible')
        
        cy.get('#EGGS').type('34').should('exist')
        .should('be.visible')
        
        cy.get('#FISH').type('76').should('exist')
        .should('be.visible')
        
        cy.get('#MUTTON').type('12').should('exist')
        .should('be.visible')
        
        cy.get('#PORK').type('54').should('exist')
        .should('be.visible')
        
        cy.get('#VEGETABLES').type('78').should('exist')
        .should('be.visible')
        
        cy.get('#MILK').type('34').should('exist')
        .should('be.visible')
        
        cy.get('#FOOD').type('23').should('exist')
        .should('be.visible')
        
        cy.get('#COCACOLA').type('43').should('exist')
        .should('be.visible')
        
        cy.get('#COOKINGOIL').type('76').should('exist')
        .should('be.visible')
        
        cy.get('#MOTORCYCLE').type('45').should('exist')
        .should('be.visible')
        
        cy.get('#AEROPLANE').type('78').should('exist')
        .should('be.visible')
        
        cy.get('#BUS').type('12').should('exist')
        .should('be.visible')
        
        cy.get('#TRAIN').type('56').should('exist')
        .should('be.visible')
        
        cy.get('#AUTORICKSHAW').type('34').should('exist')
        .should('be.visible')
        
        cy.get('#CAR').type('45').should('exist')
        .should('be.visible')
        
        cy.get('#BICYCLE').type('$').should('exist')
        .should('be.visible')

        cy.get('#BICYCLEERROR').should('be.exist')
        .should('be.visible')

        cy.contains('Find Your Carbon Footprint').click()
        cy.get('#result').should('exist')

        cy.wait(5000)
    })

    it('13. Ensuring the result is NOT being calculated if ALL ANSWERS ARE POSITIVE EXCEPT ONE ALPHABET', () => {

        cy.visit('calc.html')
        
        cy.get('#AC').type('76').should('exist')
        .should('be.visible')
        
        cy.get('#ELECTRICITY').type('34.23').should('exist')
        .should('be.visible')
        
        cy.get('#TV').type('43').should('exist')
        .should('be.visible')
        
        cy.get('#SOLARPANELS').type('34').should('exist')
        .should('be.visible')
        
        cy.get('#CNG').type('23').should('exist')
        .should('be.visible')
        
        cy.get('#PETROL').type('87').should('exist')
        .should('be.visible')
        
        cy.get('#LPG').type('23').should('exist')
        .should('be.visible')
        
        cy.get('#DIESEL').type('43').should('exist')
        .should('be.visible')
        
        cy.get('#LPGFORVEHICLE').type('23').should('exist')
        .should('be.visible')
        
        cy.get('#COAL').type('3').should('exist')
        .should('be.visible')
        
        cy.get('#WATER').type('5').should('exist')
        .should('be.visible')
        
        cy.get('#BEEF').type('3').should('exist')
        .should('be.visible')
        
        cy.get('#CHICKEN').type('87').should('exist')
        .should('be.visible')
        
        cy.get('#EGGS').type('7').should('exist')
        .should('be.visible')
        
        cy.get('#FISH').type('54').should('exist')
        .should('be.visible')
        
        cy.get('#MUTTON').type('876').should('exist')
        .should('be.visible')
        
        cy.get('#PORK').type('76').should('exist')
        .should('be.visible')
        
        cy.get('#VEGETABLES').type('23.454').should('exist')
        .should('be.visible')
        
        cy.get('#MILK').type('23').should('exist')
        .should('be.visible')
        
        cy.get('#FOOD').type('32').should('exist')
        .should('be.visible')
        
        cy.get('#COCACOLA').type('54').should('exist')
        .should('be.visible')
        
        cy.get('#COOKINGOIL').type('32').should('exist')
        .should('be.visible')
        
        cy.get('#MOTORCYCLE').type('34').should('exist')
        .should('be.visible')
        
        cy.get('#AEROPLANE').type('54').should('exist')
        .should('be.visible')
        
        cy.get('#BUS').type('45').should('exist')
        .should('be.visible')
        
        cy.get('#TRAIN').type('6.235').should('exist')
        .should('be.visible')
        
        cy.get('#AUTORICKSHAW').type('34').should('exist')
        .should('be.visible')
        
        cy.get('#CAR').type('43').should('exist')
        .should('be.visible')
        
        cy.get('#BICYCLE').type('C').should('exist')
        .should('be.visible')

        cy.contains('Find Your Carbon Footprint').click()
        cy.get('#result').should('exist')

        cy.wait(5000)
    })
})
