describe("Givent ", () => {
  it("Does not do much!", () => {
    cy.visit(
      "https://cristian-bermudez-front-final-project-202204-bcn.netlify.app/login"
    );

    cy.get("h2").contains("LOGIN");

    cy.get('input[placeholder="Username"]').type("manolo");
    cy.get('input[placeholder="Password"]').type("manolo");

    cy.get("button").should("contain.text", "LOGIN").click();
  });
});
