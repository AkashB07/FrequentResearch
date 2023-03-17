//extracting the  data from local storage
const fname = localStorage.getItem('fname')
const lname = localStorage.getItem('lname')
const email = localStorage.getItem('email')
const country = localStorage.getItem('country')
const state = localStorage.getItem('state')
const city = localStorage.getItem('city')
const gender = localStorage.getItem('gender')
const dob = localStorage.getItem('dob')
const age = localStorage.getItem('age')

//displaying the data
document.getElementById("fname").innerHTML = fname;
document.getElementById("lname").innerHTML = lname;
document.getElementById("email").innerHTML = email;
document.getElementById("country").innerHTML = country;
document.getElementById("state").innerHTML = state;
document.getElementById("city").innerHTML = city;
document.getElementById("gender").innerHTML = gender;
document.getElementById("dob").innerHTML = dob;
document.getElementById("age").innerHTML = age;