const url = "http://localhost";

//geting country name on drop down box
window.addEventListener("DOMContentLoaded", async () => {
  try {
    const rescountry = await axios.get(`${url}:3000/address/getcountry`);
    console.log(rescountry.data[0].country);
    for (i = 0; i < rescountry.data.length; i++) {
      document.getElementById("country").innerHTML +=
        '<option id="' + i + '">' + rescountry.data[i].country + "</option>";
    }
    let e = document.getElementById("country");

    //geting state name on drop down box
    e.onchange = async (ev) => {
      try {
        var v = e.value;
        const resstate = await axios.get(`${url}:3000/address/getstate/${v}`);
        console.log(resstate);
        document.getElementById("state").innerHTML =''+'<option>Choose</option>';
        for (i = 0; i < resstate.data.length; i++) {
            document.getElementById("state").innerHTML +=
              '<option id="' + i + '">' + resstate.data[i].state + "</option>";
          }
      } catch (error) {
        console.log(error)
      }
    };
  } catch (error) {
    console.log(error);
  }
});

//storing the city name in the database
async function acity(e) {
    try {
      e.preventDefault();
      let name = {
          country: e.target.country.value,
          state: e.target.state.value,
          city: e.target.city.value
      };
      console.log(name);
      e.target.city.value = "";
      const respone = await axios.post(`${url}:3000/address/addcity`, name);
    } catch (error) {
      console.log(error);
    }
  }