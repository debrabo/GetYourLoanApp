"use strict";

class Application {
    id = create_UUID();
    name;
    dateOfBirth;
    annualIncome;
    factors = [];
    purpose;
    amount;
}

const APPLICATION_LIST = [];

// Fires when the page loads
window.onload = function () {
    initializeApplications();
    bindApplicationsToDropDown();
}

function bindApplicationsToDropDown() {
    let dropDown = document.getElementById("applications");

    dropDown.options.length = 0;

    let application = document.createElement("option");
    application.textContent = "Choose your application";
    application.disabled = true;
    application.selected = true;
    dropDown.appendChild(application);

    for (let i = 0; i < APPLICATION_LIST.length; i++) {
        let application = APPLICATION_LIST[i];

        let element = document.createElement("option");
        element.textContent = application.name;
        element.value = application.id.toString();
        dropDown.appendChild(element);
    }
}



