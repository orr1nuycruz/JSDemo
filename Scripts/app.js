// IIFE immediatly Invoked Function Expression

let app
(function (app) {
    //(function () {
    // prevent auto-declaring variables
    "use strict"

    //function scope variable

    //let AboutButton = document.getElementById("AboutButton");



    
    function ContactContent(){
        let layer = 6
        let x;
        let y;
        for (i = 0; i <= layer; i++){
            for(x = 1; x <= (layer - i); x++){
               console.log(" ");
            }
            for(y = 1; y <= i; y++){
                console.log("*");
            }
            for(y = (i-1); y >= 1; y--){
                console.log("*")
            }
            console.log("\n")
        }
    }

    function Start() {
        let title = document.title;

        console.log("App Started");
        console.log("-------------")
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
                    ContactContent();
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