const url = "http://localhost";

window.addEventListener("DOMContentLoaded", async () => {
  try {
    //geting country name on drop down box
    const rescountry = await axios.get(`${url}:3000/address/getcountry`);
    // console.log(rescountry.data[0].country);
    for (i = 0; i < rescountry.data.length; i++) {
      document.getElementById("country").innerHTML +=
        '<option id="' + i + '">' + rescountry.data[i].country + "</option>";
    }
    let e = document.getElementById("country");

    //geting state name on drop down box
    e.onchange = async (v) => {
      try {
        var v = e.value;
        const resstate = await axios.get(
          `${url}:3000/address/getstate/${v}`
        );
        document.getElementById("state").innerHTML = ''+'<option>Choose</option>';
        for (i = 0; i < resstate.data.length; i++) {
          document.getElementById("state").innerHTML +=
            '<option id="' + i + '">' + resstate.data[i].state + "</option>";
        }

        let x = document.getElementById("state");

        //geting city name on drop down box
        x.onchange = async (xy) => {
          try {
            var z = x.value;

            const rescity = await axios.get(
              `${url}:3000/address/getcity/${z}`
            );
            document.getElementById("city").innerHTML = ''+'<option>Choose</option>';;
            for (i = 0; i < rescity.data.length; i++) {
              document.getElementById("city").innerHTML +=
                '<option id="' + i + '">' + rescity.data[i].city + "</option>";
            }
          } catch (error) {
            console.log(error);
          }
        };
      } catch (error) {
        console.log(error);
      }
    };
  } catch (error) {
    console.log(error);
  }
});



function validate(e){
    e.preventDefault();
    
    //collecting the data from user
    let fname = e.target.fname.value;
    let lname = e.target.lname.value;
    let email = e.target.email.value;
    let country = e.target.country.value;
    let state = e.target.state.value;
    let city = e.target.city.value;
    let gender = e.target.gender.value;
    let dob = e.target.dob.value;

    //Validating First Name & Last Name to only contain alphabets
    let letters = /^[A-Za-z]+$/;
    if(!fname.match(letters)){
      alert("Please enter only alphates in First name feild");
      return false;
    }
    if(!lname.match(letters)){
      alert("Please enter only alphates in Last name feild");
      return false;
    }

    //Calculating age by using dob
    let age = Math.round((Date.now() - new Date(dob)) / (31557600000));

    //Validating dob must be older than 14 years
    let real_age = (Date.now() - new Date(dob)) / (31557600000);
    if(real_age<14){
      alert("Must be older than 14 years");
      e.target.dob.value= null;
      return false;
    }

    //validating country
    if(country=='Choose'){
      alert("Please select the valid country");
      return false;
    }
    //validating state
    if(state=='Choose'){
      alert("Please select the valid state");
      return false;
    }
    //validating city
    if(city=='Choose'){
      alert("Please select the valid city");
      return false;
    }

    e.target.fname.value=null;
    e.target.lname.value=null;
    e.target.email.value=null;
    e.target.country.value=null;
    e.target.state.value=null;
    e.target.city.value=null;
    e.target.gender.value=null;
    e.target.dob.value=null;

    //Storing the registration data on local storage
    localStorage.setItem('fname', fname);
    localStorage.setItem('lname', lname);
    localStorage.setItem('email', email);
    localStorage.setItem('country', country);
    localStorage.setItem('state', state);
    localStorage.setItem('city', city);
    localStorage.setItem('gender', gender);
    localStorage.setItem('dob', dob);
    localStorage.setItem('age', age);

    //Moving to next page to display the stored data
    window.location.href ="../resultPage/result.html";
}