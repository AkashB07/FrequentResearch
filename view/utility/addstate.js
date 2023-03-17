const url = "http://localhost";

//geting country name on drop down box
window.addEventListener("DOMContentLoaded", async () => {
  try {
    const respone = await axios.get(`${url}:3000/address/getcountry`);
    console.log(respone.data[0].country);
    for (i = 0; i < respone.data.length; i++) {
        document.getElementById("country").innerHTML += '<option id="' + i + '">' + respone.data[i].country + '</option>';
      }
  } catch (error) {
    console.log(error);
  }
});

//storing the state name in the database
async function astate(e) {
  try {
    e.preventDefault();
    let name = {
        country: e.target.country.value,
        state: e.target.state.value,
    };
    console.log(name);
    e.target.state.value = "";
    const respone = await axios.post(`${url}:3000/address/addstate`, name);
  } catch (error) {
    console.log(error);
  }
}