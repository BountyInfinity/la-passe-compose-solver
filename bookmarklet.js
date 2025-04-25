function loop() {

let pronoun = document.getElementById('pronoun-input').innerHTML;
let verb = document.getElementById('verb-input').innerHTML;
let verb_converted = verb.split(" ").pop();
verb_converted = verb_converted.substring(0, verb_converted.length - 2) + "é";

let result;
let is_male = true;
let is_plural = false;

switch (pronoun) {
    case "je":
        result = "me suis ";
        break;
    case "tu":
        result = "t'es ";
        break;
    case "il":
        result = "s'est ";
        break;
    case "elle":
        result = "s'est ";
        is_male = false;
        break;
    case "on":
        result = "s'est ";
        break;
    case "nous":
        result = "nous sommes ";
        is_plural = true;
        break;
    case "vous":
        result = "vous êtes ";
        is_plural = true;
        break;
    case "ils":
        result = "se sont ";
        is_plural = true;
        break;
    case "elles":
        result = "se sont ";
        is_male = false;
        is_plural = true;
        break;
    default:
        if (pronoun.includes("moi")) {
            result = "nous sommes ";
            is_plural = true;
            break;
        } else {
            is_male =
                pronoun.split(" ")[0] == "Asterix" ||
                pronoun.split(" ")[0] == "Henri" ||
                pronoun.split(" ")[0] == "Jean-Luc" ||
                pronoun.split(" ")[0] == "Nicolas" ||
                pronoun.split(" ")[0] == "Gaston" ||
                pronoun.split(" ")[0] == "Claude" ||
                pronoun.split(" ")[0] == "Marcel" ||
                pronoun.split(" ")[0] == "Gustave" ||
                pronoun.split(" ")[0] == "Vincent" ||
                pronoun.split(" ")[0] == "Samuel";
            if (pronoun.includes(" et ")) {
                result = "se sont ";
                is_plural = true;
                break;
            } else {
                result = "s'est ";
                break;
            }
            break;
        }
}
if (!is_male) {
    verb_converted += "e";
}
if (is_plural) {
    verb_converted += "s";
}

document.getElementById("answer-input").value = result + verb_converted;

}

setInterval(loop, 50);
