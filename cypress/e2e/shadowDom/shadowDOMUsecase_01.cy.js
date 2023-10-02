describe("Enter data in Fields Inside Shadow DOM Using shadow() method ", () => {
    beforeEach(() => {
      cy.visit("https://www.lambdatest.com/selenium-playground/shadow-dom");
    });
    it("Enter data in all Fields", () => {
      cy.get("shadow-signup-form").shadow().find('input[name="username"]').type("Kailash", { force: true });
      cy.get("shadow-signup-form").shadow().find('input[name="email"]').type("lambdatest@qa.com", { force: true });
      cy.get("shadow-signup-form").shadow().find('input[name="password"]').type("lambdatest@123");
      cy.get("shadow-signup-form").shadow().find('input[name="confirm_password"]').type("lambdatest@123");
    });
 
});
describe("Enter data in Fields Inside Shadow DOM By enabling Flag “includeShadowDom”: true, in Config File ", () => {
  beforeEach(() => {
    cy.visit("https://www.lambdatest.com/selenium-playground/shadow-dom");
  });
  it("Enter data in Fields Which are Inside the Shadow DOM ", () => {
    cy.visit("https://www.lambdatest.com/selenium-playground/shadow-dom");
    cy.get('[name="username"]').type("LambdaTest", { force: true });
    cy.get('[name="email"]').eq(0).type("LambdaTest@qa.com", { force: true });
    cy.get('[name="password"]').type("LambdaTest123", { force: true });
    cy.get('[name="confirm_password"]').type("LambdaTest123", { force: true });
    });
    

})
describe("Enter data in Fields Inside Shadow DOM  By adding Flag in commands “includeShadowDom”: true, ", () => {
  beforeEach(() => {
    cy.visit("https://www.lambdatest.com/selenium-playground/shadow-dom");
  });
  it("Enter data in Fields Which are Inside the Shadow DOM ", () => {
    cy.get("shadow-signup-form").find('input[name="username"]',{ includeShadowDom: true }).type("Kailash", { force: true });
    cy.get("shadow-signup-form").find('input[name="email"]',{ includeShadowDom: true }).type("lambdatest@qa.com", { force: true });
    cy.get("shadow-signup-form").find('input[name="password"]',{ includeShadowDom: true }).type("lambdatest@123");
    cy.get("shadow-signup-form").find('input[name="confirm_password"]',{ includeShadowDom: true }).type("lambdatest@123");
    });
});