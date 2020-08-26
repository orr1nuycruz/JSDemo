// IIFE immediatly Invoked Function Expression

let app
(function (app) {
    //(function () {
    // prevent auto-declaring variables
    "use strict"

    //function scope variable

    //let AboutButton = document.getElementById("AboutButton");



    function Start() {
        let title = document.title;

        console.log("%cApp Started", "font-weight:bold; font-size: 20px");
        console.log("%c-------------", "font-weight:bold; font-size: 20px");
        console.log("Title: " + title);

        try {
            switch (title) {
                case "Home":
                    // HomeContent();
                    
                    content.HomeContent();
                    break;

                case "About":
                    //AboutContent();

                    content.AboutContent();
                    break;

                case "Contact":
                    // ContactContent();
                    content.ContactContent();
                    break;

                default:
                    throw ("no page exists");
                    break;
            }
        }
        catch{
            console.warn("Page title is unspecified")
        }
        return title;
    }

    // window.onload = Start;
    window.addEventListener("load", Start)

    // return {
    //     myFavouriteNumber: 5
    // };

    // these are all app properties
    app.Title = document.title;
    app.BrandImage = document.querySelector(".navbar-brand").innerHTML;

})(app || (app = {}));

// https://www.w3schools.com/js/js_htmldom_elements.asp