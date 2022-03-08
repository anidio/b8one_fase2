const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {

        labels: ['06/10/21', '07/10/21', '08/10/21', '09/10/21', '10/10/21', '11/10/21'],
        datasets: [
        {
            
            data: [50, 100, 200],
            backgroundColor: [
                'rgba(5, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(5, 99, 132, 1)'
            ],
            borderWidth: 1,
            label: 'Estornado'

            
        },
        {
            
            data: [50, 100, 200],
            backgroundColor: [
                'rgba(255, 12, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255, 12, 132, 1)'
            ],
            borderWidth: 1,
            label: 'Cancelado'

            
        },
        {
            
            data: [50, 100, 200],
            backgroundColor: [
                'rgba(255, 99, 400, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 400, 1)'
            ],
            borderWidth: 1,
            label: 'Não pago'

            
        },
        {
            
            data: [50, 100, 200],
            backgroundColor: [
                'rgba(255, 99, 112, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 112, 1)'
            ],
            borderWidth: 1,
            label: 'Pago'

            
        }
        ]


    },
    options: {
        plugins:{
               legend: {
                 display: false
                       },
                    }
               },




});



document.getElementById('blue').style.backgroundColor = myChart.data.datasets[0].backgroundColor;
document.getElementById('red').style.backgroundColor = myChart.data.datasets[1].backgroundColor;
document.getElementById('yellow').style.backgroundColor = myChart.data.datasets[2].backgroundColor;
document.getElementById('green').style.backgroundColor = myChart.data.datasets[3].backgroundColor;

function toggleData(value) {
    const visibilityData = myChart.isDatasetVisible(value);
    if (visibilityData  === true ){
        myChart.hide(value);
    }
    if (visibilityData  === false ){
        myChart.show(value);
    }
}

