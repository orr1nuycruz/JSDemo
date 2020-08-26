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


    function ContactContent() {
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

        //set Title for the pushState
        document.title = "hello there";
        //use the history object to wipeout the url
        history.pushState("", document.title, "/contact");

        // use the location object to output my pathname
        console.log(location.pathname);
        console.log(location.host);
    }

    //properties
    content.ContactContent = ContactContent;
})(content || (content = {}));