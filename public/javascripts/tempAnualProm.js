var xhr = new XMLHttpRequest();
start();
async function start() {

    //peticion en Ajax al servidor backend
    xhr.open('GET', "http://localhost:3000/api/allTemps");
    xhr.onreadystatechange = function () {
        var DONE = 4; // readyState 4 means the request is done.
        var OK = 200; // status 200 is a successful return.
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
                let apiData = JSON.parse(xhr.responseText)
                let dataformarChart = formatchartData(apiData);
                drawChart(dataformarChart);
            } else {
                console.log('Error: ' + xhr.status); // An error occurred during the request.
            }
        }
    };
    xhr.send(null);
}
function drawChart(dataSet) {
    /*//Chart data esperada
        data: {
            labels: [label 1, label 2, label 3, label 4],
            datasets: [
                {label: 1,data: [1, 2, 3, 4, 5],fill: false,borderColor:color'},
                {label: 1,data: [1, 2, 3, 4, 5],fill: false,borderColor:color'}
            ]

        },
    */
    var labels = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
    let ctx = document.getElementById('tempAnual').getContext('2d');

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: dataSet
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}


//formatData(array)=>[]
//genera el formato necesario para la libreria chart.js
function formatchartData(data) {
    let dataSets = []
    console.table(data[0]);
    data.forEach(data => {

        dataSets.push({
            label: data[0].anno,
            data: data.map(element => element.temp_max_media),
            fill: false,
            borderColor: colorRandom()
        }
        )

    })
    return dataSets
}

//colorRandom(void)=> string =>"rgba(123,234,45,1)"
//genera un color aleatoriamente
function colorRandom() {
    var colorR = Math.floor(Math.random() * Math.floor(254))
    var colorG = Math.floor(Math.random() * Math.floor(254))
    var colorB = Math.floor(Math.random() * Math.floor(254))
    var alpha = 1
    return `rgba(${colorR}, ${colorG}, ${colorB},${alpha})`
}