
const button = document.getElementById('button');
const image = document.getElementById('getImage');
const header = document.getElementById('thisone');

// Array of NBA player images
const images = ["/Users/l/my-react-website/src/images/curry.jpg", "/Users/l/my-react-website/src/images/oubre.jpg", 
"/Users/l/my-react-website/src/images/wiggins.jpeg", "/Users/l/my-react-website/src/images/green.jpg", 
"/Users/l/my-react-website/src/images/wiseman.jpg"];




// Array of individual NBA player images
const curry = "/Users/l/my-react-website/src/images/curry.jpg";
const oubre = "/Users/l/my-react-website/src/images/oubre.jpg";
const wiggins = "/Users/l/my-react-website/src/images/wiggins.jpeg";
const green = "/Users/l/my-react-website/src/images/green.jpg";
const wiseman = "/Users/l/my-react-website/src/images/wiseman.jpg";

const btns = document.querySelectorAll('.dot');

var counter = 0;


    export function WarriorsFunction() {
        var input = ["Stephen Curry", "Kelly Oubre", "Andrew Wiggins", "Draymond Green", "James Wiseman"];
        if(counter == input.length && counter == images.length) {
        header.innerHTML = input[counter];
        image.src = images[counter];
        counter++;
        }
    }





