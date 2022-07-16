var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.wazirx.com/api/v2/tickers', true)

request.onload = function () {
  // Begin accessing JSON data here
    if(this.status === 200){
        let obj = JSON.parse(this.responseText);
        let content = document.querySelector("#content");
        let unit = document.querySelector(".unit");
        // To get object length
        // let ln = Object.keys(obj).length
        str = ""
        str2 = ""
        let count = 0;
        for (key_1 in obj){
            let name = obj[key_1].name;
            let last = obj[key_1].last;
            let buy = obj[key_1].buy;
            let sell = obj[key_1].sell;
            let volume = obj[key_1].volume;
            let base_unit = obj[key_1].base_unit;
            count+=1
            str+=`
            <tr class="values">
            <td class="index">${count}</td>
            <td class="name">${name}</td>
            <td class="last">&#8377; ${last}</td>
            <td class="bs">&#8377; ${buy} / &#8377; ${sell}</td>
            <td class="volume">${volume}</td>
            <td class="base_unit">${base_unit}</td>
            </tr>
            `
            str2+=`
            <li><a class="dropdown-item" href="#">${base_unit.toUpperCase()}</a></li>
            `
        }
        content.innerHTML += str
        unit.innerHTML += str2

    }
    else{
        console.log("File Not Found!!!")
    }
}
request.send()


