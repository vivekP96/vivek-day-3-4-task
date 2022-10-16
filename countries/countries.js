
const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all');
request.send(null);
request.onload = function () {
    const countries = JSON.parse(request.responseText);
    console.log(countries);
    //to display flag
    for (var x of countries) {
        const { flag } = x;
        
            console.log(flag);
    }
    //to display name,region,subregion amd population
    for (var x of countries) {
        const { name: { common }, region, subregion, population } = x;
        console.log(common, region, subregion, population)
    }
}