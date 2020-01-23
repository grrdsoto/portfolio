var num = 0;
var element = document.getElementById('gera');
var thingsIAm = ["software developer", "beatmaker", "human being", "creator", "big brother", "chess fanatic", "food guy", "traveler", "tech fanatic"];
element.innerText = "My name is Gerardo."
function whatIAm() {
    if (num >= thingsIAm.length){
        num = 0
    }
    element.classList.remove("title");
    void element.offsetWidth;
    element.classList.add("title");
    element.innerText = "I am a " + thingsIAm[num] + "."
    num += 1;
}
var ofCourse = setInterval(whatIAm, 4000);