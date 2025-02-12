import { restore, sidebar } from "__support__/e2e/cypress";

describe.skip("collections sidebar (metabase#15006)", () => {
  beforeEach(() => {
    restore();
    cy.signInAsAdmin();

    cy.visit("/collection/root");
  });

  it("should be able to toggle collections sidebar when switched to mobile screen size", () => {
    cy.icon("close").should("not.be.visible");
    cy.icon("burger").should("not.be.visible");

    // resize window to mobile form factor
    cy.viewport(480, 800);

    sidebar().should("not.be.visible");

    cy.icon("burger").click();
    cy.icon("burger").should("not.be.visible");

    sidebar().within(() => {
      cy.findByText("First collection");
      cy.icon("close").click();
    });

    cy.icon("burger");
  });

  it("should close collections sidebar when collection is clicked in mobile screen size", () => {
    cy.viewport(480, 800);
    cy.icon("burger").click();

    sidebar().should("be.visible");

    sidebar().within(() => {
      cy.findByText("First collection").click();
    });

    cy.icon("burger");
  });
});
