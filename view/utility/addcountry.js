const url = "http://localhost";

//storing the country name in database
async function acountry(e) {
  try {
    e.preventDefault();
    let name = {
      country: e.target.country.value
    }
    e.target.country.value = ''
    const respone = await axios.post(`${url}:3000/address/addcountry`, name);
  } 
  catch (error) {
    console.log(error)
  }
}