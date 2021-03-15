let i = 0
let city = [ ]
let doneWithCities = false
while (doneWithCities == false){
    city[i] = prompt("Enter in a city")
    i++
    doneWithCities = confirm("Are you done entering cities in?")
}
j = 0
let userOutput = 1
while ( j < userOutput){
alert(city.join(" <br> "));
j++
}
//if they say yes the variable will be true and the loop will end
//initialize, conditional, and implement. 



//let str = city.join(" : ");
//document.write(str);