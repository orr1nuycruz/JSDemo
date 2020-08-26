"use strict";

(function (content) {

    // let orrin = 99910;
    // content.orrin = { 
    //     orrin: 99, 
    //     sayOrrin: function () { 
    //         console.log(orrin) 
    //     } 
    // };
    // let mark = 4;
    // let dahyun = 10;

    // content.orrin = orrin;
    // content.mark = mark;
    // content.dahyun = dahyun;

    function OutputforFormDatatoConsole() {
        var fullName = document.getElementById("FullName");
        var emailAddress = document.getElementById("EmailAddress");
        var contactNumber = document.getElementById("ContactNumber");
        var message = document.getElementById("Message");

        // console.log("Fullname: " + fullName.value);
        console.log("%cForm Data", "font-weight:bold; font-size: 20px;");
        console.log("---------------------------------------------");
        console.log("%cFull Name     : " + fullName.value, "color: blue");
        console.log("Email Addess  : " + emailAddress.value);
        console.log("Contact Number: " + contactNumber.value);
        console.log("Message       : " + message.value);
        console.log("---------------------------------------------");
        console.log();
        console.log("%cForm Properties", "font-weight:bold; font-size: 20px;");
        console.log("---------------------------------------------");
        console.log("%cForm Length : " + document.forms[0].length, "color: blue;");

        for (var index = 0; index < document.forms[0].length; index++) {
            console.log("%cForm Element : " + document.forms[0].elements[index].value, "color: blue;");
        };
    }

    function ContactContent() {
        // document.forms[0].autocomplete = true;

        console.log("%cContact Page being accessed", "font-weight:bold; font-size: 20px; font-color: red");
        console.log(navigator);
        console.log(history);
        console.log(document);
        console.log(screen);
        console.log(location);

        document.getElementsByClassName("card-title")[0].textContent = "This you?";

        // create a new HTML element
        var cancelButton = document.createElement("button");
        // configure the html element
        cancelButton.setAttribute("class", "btn btn-warning");
        cancelButton.classList.add("btn-lg");
        // cancelButton.setAttribute("type", "reset");
        cancelButton.textContent = "Cancel Pls";
        cancelButton.addEventListener("click", function (event) {
            event.preventDefault();
            window.open("index.html", "_parent");
        });

        // add the Html element to the page somewhere
        document.forms[0].appendChild(cancelButton);

        //use the history object to wipeout the url

        var SubmitButton = document.getElementById("sendBtn");
        SubmitButton.addEventListener("click", function (event) {
            event.preventDefault();
            OutputforFormDatatoConsole(); // takes out the default function of the submit type button
        });
    }

    //properties
    content.ContactContent = ContactContent;
})(content || (content = {}));