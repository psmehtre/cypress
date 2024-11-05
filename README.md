# cypress

npm -i init   
npm --version         
npm install cypress --save -dev 
npx cypress --version         

`/// <reference types="Cypress" />`      //This line should be added in  support>command.js to get all the cypress functions


# Cypress Execution command lines - 

1. `npx cypress open` //To execute cases through cypress dashboard

2. `npx cypress run ` //will execute all the test specification files in headless mode

3. `npx cypress run --browser chrome` //will do the same but in headed mode for chrome

4. `npx cypress run --browser chrome --spec < path of specification file >` //here it will execute particular spec file in chrome

5. `npx cypress run --spec < path of specification file >` //here it will execute particular spec in headless mode


# For WebElement-locators in the cypress
CSS-Selectors & Xpath

1. CSS-Selectors
   tag id
   tag class
   tag attribute
   tag class attribute
   —————
   Syntax ->
   
   // tag is optional in the cypress
   
   #id
   .class
   [attribute= 'value']
   .class[attribute= 'value']
   ------ 

2. Xpath
   By default the Xpath is not included in cypress for this needs to add the plugins -

   npm install -D cypress-xpath
   `/// <reference types="cypress-xpath" />`     //This line should be added in  support>command.js
 
