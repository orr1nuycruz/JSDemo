// IIFE immediatly Invoked Function Expression

let app = (function () {
    //(function () {
    // prevent auto-declaring variables
    "use strict"

    //function scope variable

    // about button click event handler
    function AboutButtonClick() {
        console.log("About Button was clicked");
    }
    function AboutButtonOver(event) {
        event.currentTarget.style.opacity = 0.3;
    }
    function AboutButtonOut(event) {
        event.currentTarget.style.opacity = 1;
    }

    function HomeContent() {
        let AboutButton = document.getElementById("AboutButton");

        AboutButton.textContent = "About";

        // about button event listener
        AboutButton.addEventListener("click", AboutButtonClick);
        AboutButton.addEventListener("mouseover", AboutButtonOver);
        AboutButton.addEventListener("mouseout", AboutButtonOut);
    }

    function ReturnPI() {
        return Math.PI;
    }

    function AboutContent() {
        let myNum = ReturnPI();
        console.log("my funky number: " + myNum);
        let aboutParagraph = document.getElementById("paragraph");
        let mySentence = "Hello nig";
        aboutParagraph.textContent = mySentence;

        // let myArray = new Array(); equivalent to let myArray = []
        // let myArray = [
        //     "first",
        //     "second",
        //     "third"
        // ]
        let myArray = [
            { name: "Tom", age: 25 },
            { name: "Orrin", age: 21 },
            { name: "Jason", age: 22 }
        ]
        myArray.push({ name: "Caroline", age: 20 });
        myArray.unshift({ name: "Pete", age: 80 });
        //myArray.shift();

        // myArray.push(5);
        // myArray[20] = "okay this is weird";

        /* loop type 1*/
        // for(let i = 0; i < myArray.length; i++){
        //     console.log(myArray[i].age + " " + myArray[i].name)
        // }

        /* loop type #2 modern type*/
        // myArray.forEach(person =>{
        //     console.log(person.name)
        // });

        /*loop type #3 - callback function (classic type) */
        // myArray.forEach(function(person){
        //     console.log(person.name);
        // });

        /*loop type #4 - for in (modern) */
        // for (const i in myArray) {
        //   console.lof(myArray[i].name)
        // }

        /*loop type #4 - for of (modern) */
        // for (const i of myArray) {
        //     console.log(i.name);
        // }

        /* loop type #6 - while (classic)*/
        // let index = 0;
        // while(index < myArray.length){
        //     console.log(index);
        //     console.log(myArray[index].name);
        //     index++
        // }

        // ternary operator - alter
        let arrayEmpty;
        arrayEmpty = (myArray.length > 0) ? false : true;

        //window.alert("First element: " + myArray[0].age); 
        // do not window.alert; slows down app and bad UX

        let dicision = confirm("Are you sure?")
        console.log(dicision)

        // === checks both value and type where == only checks value
        if (myArray[0].age === 25) {
            console.log("firstElement is pete")
        }
        else{
            console.log("wrong element")
        }

        for (const i in myArray) {
            console.log(myArray[i].name)
        }

        // associative arrays create this key / value pair assiocation but there is no iterator
        // which means you can't loop through them
        let myAssociateArray = [];
        myAssociateArray["Name"] = "Tom";
        myAssociateArray["Age"] = 30;
        myAssociateArray["StudentNum"] = "323716985";

        console.log(myAssociateArray);
        for (const element of myAssociateArray) {
            console.log(element);
        }


        // let content = document.getElementsByClassName("content");
        // console.log(myArray);
        // console.log(myArray.length);

        let myFavouriteThings = [
            "video games",
            "cars",
            "Beans",
            "valorant"
        ];

        let myFavouriteList = document.getElementById("myFavouriteThings");
        myFavouriteThings.forEach(thing => {
            let newItem = document.createElement("li");
            newItem.textContent = thing;
            myFavouriteList.appendChild(newItem);
        })
        console.log(myFavouriteList);
    }

    function Start() {
        let title = document.title;

        console.log("App Started");
        console.log("-------------")
        console.log("Title: " + title);


        switch (title) {
            case "Home":
                HomeContent();
                break;

            case "About":
                AboutContent();
                break;

            case "default":
                break;
        }
        return title;
    }

    // window.onload = Start;
    window.addEventListener("load", Start)

    return {
        myFavouriteNumber: 5
    };
})();