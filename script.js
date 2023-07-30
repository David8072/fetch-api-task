
const taskapi = "https://restcountries.com/v3.1/all";

fetch(taskapi)
.then((res) => {
    if (res.status ===200) {
        return res.json();
    }
})
.then((result) => {
    console.log(result);
    for (var i=0; i< result.length; i++) {
        console.log(result[i].name.common);
        console.log(result[i].flags.png);
        console.log(result[i].capital);
        console.log(result[i].region);
        console.log(result[i].cca3);
        console.log(result[i].latlng);
    }
})
.catch((err) => {
    console.log("Error:",err);
});

