describe('Set test Login', () => {
  it('happy path login', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("input[name='username']").type('Admin')
    cy.get("input[name='password']").type('admin123')
    cy.get("button[type='submit']").click()
    cy.get("input[placeholder='Search']").type('My Info')
  })
  it('unhappy path login', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("input[name='username']").type('Admin')
    cy.get("input[name='password']").type('aadmin123')
    cy.get("button[type='submit']").click()
  })
  it.only('doble click', () => {
    cy.visit('https://demoqa.com/buttons')
    //cy.get("button[id='doubleClickBtn']").dblclick()
    //cy.get(".btn.btn-primary").dblclick()
    cy.get("button").eq(3).click()
    //cy.get('.right-click-target').rightclick();

    
   
  })

 
})

