var mynewcalc = function (n1, n2, s) {
    if (s == "+") {
        console.log(n1 + n2);
    }
    else if (s == "-") {
        console.log(n1 - n2);
    }
    else if (s == "*") {
        console.log(n1 * n2);
    }
    else if (s == "/") {
        console.log(n1 / n2);
    }
    else {
        console.log("Incorrect sign");
    }
};
mynewcalc(10, 20, "=");