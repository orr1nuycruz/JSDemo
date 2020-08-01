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


    function ContactContent(){
        console.log("Contact Page being accessed")
        console.log(navigator);
        console.log(history);
        console.log(document);
        console.log(screen);
        console.log(location);

        document.getElementsByClassName("card-title")[0].textContent = "This you?";

        // create a new HTML element
        let cancelButton = document.createElement("button");
        // configure the html element
        cancelButton.setAttribute("class", "btn btn-warning");
        cancelButton.classList.add("btn-lg");
        // cancelButton.setAttribute("type", "reset");
        cancelButton.textContent = "Cancel Pls";
        cancelButton.addEventListener("click", function(event){
            event.preventDefault();
            window.open("index.html", "_parent");
        })

        // add the Html element to the page somewhere
        document.forms[0].appendChild(cancelButton);
        innerHeight = 500;


    }


     //properties
     content.ContactContent = ContactContent;

})(content || (content = {}));
