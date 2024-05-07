function calculator(startvalue, endvalue, stepf) {
    let res;
    if (isNaN(startvalue) || isNaN(endvalue) || isNaN(stepf) || (startvalue > endvalue)) {
       document.write("Помилка" + "<br>"); 
    }
    for (let x = startvalue; x <= endvalue; x += stepf) 
    {
        if (x <= -3) {
            res = Math.sin(x) + Math.tan(x);
        }
        else if (x > -3 && x <= 4)
        {
            res = 2;
        }
        else if (x > 4) {
            res = Math.sqrt(Math.pow(x, 3)) - Math.cos(x); 
        }
        document.write("Результат : " + res + "<br>"); 
    }
}
let startX = parseFloat(prompt("Введіть початкове значення x:"));
let endX = parseFloat(prompt("Введіть кінцеве значення x:"));
let step = parseFloat(prompt("Введіть крок зміни значень x:"));

document.write("Початкове значення : " + startX + "<br>");
document.write("Кінцеве значення : " + endX + "<br>");
document.write("Крок : " + step + "<br>");

calculator(startX, endX, step);

   