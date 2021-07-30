const file = '../../countries.txt';

const country = document.getElementById('country');


let fileTotal = fetch(file)
.then(r => r.text())
.then(data => {
    let f = data.split('\n')
    f.forEach(element => {
        let countryOptions = document.createElement('option')
        countryOptions.text = element;
        country.append(countryOptions)
        console.log(element)
    })
    console.log(f)
})
 
 
 
