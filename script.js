const tableBody = document.getElementById("table_body");

const fetchData = async (city) => {
  let response = await fetch(
    `https://cors-anywhere.herokuapp.com/https://api.weatherapi.com/v1/current.json?key=6f0153745f7f4db0b1a153336242110&q=${city}&aqi=no`,{
      method: "GET",}
  );

  
  let data= await response.json()
  return data
};

const addRow=(data)=>{
  
  const temperature = data.current.temp_c;
  const location = data.location.name;
  const cloud = data.current.cloud;
  const windDegree = data.current.wind_degree;
  const localTime = data.location.localtime;
  const humidity = data.current.humidity;
  const feelLike = data.current.feelslike_c;
  const country = data.location.country;

  const row = `<tr>
  <td></td>
  <td>${location}</td>
  <td>${temperature} °C</td>
  <td>${country}</td>
  <td>${cloud}%</td>
  <td>${windDegree}°</td>
  <td>${localTime}</td>
  <td>${feelLike}°</td>
  <td>${humidity}%</td>
 </tr>`;
 tableBody.innerHTML += row;
}

const cities=["kathmandu", "bhaktapur","lalitpur", "dhading","toronto","perth"]

cities.map(async(city)=>{
  const data = await fetchData(city)
  addRow(data)
})

const getWeather = (city) => {
  let p = fetch(
    `https://api.weatherapi.com/v1/current.json?key=6f0153745f7f4db0b1a153336242110&q=${city}&aqi=no`,
    {
      method: "GET",
    }
  );

  p.then((response) => {
    console.log("Status:", response.status);
    console.log("Response OK:", response.ok);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  })
    .then((data) => {
      const temperature = data.current.temp_c;
      const location = data.location.name;
      const cloud = data.current.cloud;
      const windDegree = data.current.wind_degree;
      const localTime = data.location.localtime;
      const humidity = data.current.humidity;
      const feelLike = data.current.feelslike_c;
      const country = data.location.country;

      document.getElementById("temperature").textContent = `${temperature} °C`;
      console.log("Temperature:", `${temperature} °C`);
      document.getElementById("temperature2").textContent = `${temperature} °C`;
      console.log("Temperature:", `${temperature} °C`);

      document.getElementById("loc").textContent = location;
      console.log("Location:", location);

      document.getElementById("cloud").textContent = `${cloud}%`;
      console.log("Cloud Coverage:", `${cloud}%`);

      document.getElementById("wind").textContent = `${windDegree}°`;
      console.log("Wind Degree:", `${windDegree}°`);

      document.getElementById("wind2").textContent = `${windDegree}°`;
      console.log("Wind Degree:", `${windDegree}°`);

      document.getElementById("time").textContent = localTime;
      console.log("Local Time:", localTime);

      document.getElementById("hums").textContent = `${humidity}%`;
      console.log("Humidity:", `${humidity}%`);

      document.getElementById("hums2").textContent = `${humidity}%`;
      console.log("Humidity:", `${humidity}%`);

      document.getElementById("cold").textContent = `${feelLike}°`;
      console.log("Feels Like:", `${feelLike}°`);

      document.getElementById("country").textContent = country;
      console.log("Country:", country);

          })

    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("toronto");
