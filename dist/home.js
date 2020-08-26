"use strict";

var content = void 0;
(function (content) {

    function AboutButtonClick() {
        console.log("About Button was clicked");
    }
    function AboutButtonOver(event) {
        // AboutButton.style.opacity = 0.3;
        event.currentTarget.style.opacity = 0.3;
    }
    function AboutButtonOut(event) {
        // AboutButton.style.opacity = 1;
        event.currentTarget.style.opacity = 1;
    }
    function HomeContent() {
        console.log("%cHome Page being accessed", "font-weight:bold; font-size: 20px");
        var AboutButton = document.getElementById("AboutButton");

        AboutButton.textContent = "About";

        // about button event listener
        AboutButton.addEventListener("click", AboutButtonClick);
        AboutButton.addEventListener("mouseover", AboutButtonOver);
        AboutButton.addEventListener("mouseout", AboutButtonOut);
    }

    //  attach HomeContent Function to the content namespace
    content.HomeContent = HomeContent;
})(content || (content = {}));