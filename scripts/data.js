"use strict";

function initializeApplications() {
    let application1 = new Application();
    application1.name = "Mr. John worker";
    application1.dateOfBirth = new Date(1983, 2, 1);
    application1.annualIncome = 48000;
    application1.factors = [false, true, true, false];
    application1.purpose = "I want to build a new house with the loan";
    application1.amount = 150000;

    APPLICATION_LIST[0] = application1;

    let application2 = new Application();
    application2.name = "Miss Michelle Smartypants M.D. ";
    application2.dateOfBirth = new Date(1976, 12, 14);
    application2.annualIncome = 198050;
    application2.factors = [true, true, true, false];
    application2.purpose = "My partner needs the loan to buy new equipment for our medical practice";
    application2.amount = 4800;

    APPLICATION_LIST[1] = application2;

    let application3 = new Application();
    application3.name = "Mrs. Debbie Learner";
    application3.dateOfBirth = new Date(1952, 6, 20);
    application3.annualIncome = 21000;
    application3.factors = [true, true, true, true];
    application3.purpose = "Go on a cruise holiday";
    application3.amount = 6000;

    APPLICATION_LIST[2] = application3;
}
