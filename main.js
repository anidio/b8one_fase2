//GRÁFICO

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {

        labels: ['06/10/21', '07/10/21', '08/10/21', '09/10/21', '10/10/21', '11/10/21'],
        datasets: [
        {
            
            data: [0, 70, 50, 80, 90, 100],
            backgroundColor: [
                'rgba(66, 93, 199, 1)'
            ],
            borderColor: [
                'rgba(66, 93, 199, 1)'
            ],
            borderWidth: 1,
            pointRadius: 0,
            label: 'Estornado'

            
        },
        {
            
            data: [0, 80, 80, 60, 50, 70],
            backgroundColor: [
                'rgba(240, 52, 96, 1)'
            ],
            borderColor: [
                'rgba(240, 52, 96, 1)'
            ],
            borderWidth: 1,
            pointRadius: 0,
            label: 'Cancelado'

            
        },
        {
            
            data: [0, 50, 100, 70, 85, 105],
            backgroundColor: [
                'rgba(255, 190, 0, 1)'
            ],
            borderColor: [
                'rgba(255, 190, 0, 1)'
            ],
            borderWidth: 1,
            pointRadius: 0,
            label: 'Não pago'

            
        },
        {
            
            data: [0, 60, 90, 50, 80, 70],
            backgroundColor: [
                'rgba(46, 176, 66, 1)'
            ],
            borderColor: [
                'rgba(46, 176, 66, 1)'
            ],
            borderWidth: 1,
            pointRadius: 0,
            label: 'Pago' 
        }
        ]


    },
    options: {
        ticks: {
            stepSize: 50
        },
        maintainAspectRatio: false,
        plugins:{
               legend: {
                 display: false
                       },
                    }
               },
               


});


//BOTOÕES DO GRÁFICO


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



//ACTIVE PERMANENTE NOS BOTOES DOS DIAS

var sete = document.getElementById('sete');
var quinze = document.getElementById('quinze');
var mes = document.getElementById('mes');
var ano = document.getElementById('ano');
var pers = document.getElementById('pers');

sete.onclick = function(){
 sete.className = "filter__date__item--active";
 quinze.className = "";
 mes.className = "";
 ano.className = "";
 pers.className = "";
}

quinze.onclick = function(){
    sete.className = "";
    quinze.className = "filter__date__item--active";
    mes.className = "";
    ano.className = "";
    pers.className = "";
}

mes.onclick = function(){
    sete.className = "";
    quinze.className = "";
    mes.className = "filter__date__item--active";
    ano.className = "";
    pers.className = "";
}

ano.onclick = function(){
    sete.className = "";
    quinze.className = "";
    mes.className = "";
    ano.className = "filter__date__item--active";
    pers.className = "";
}

pers.onclick = function(){
    sete.className = "";
    quinze.className = "";
    mes.className = "";
    ano.className = "";
    pers.className = "filter__date__item--active";
}



/* POPULAR LISTA DE PRODUTOS */


async function fetchProdutos(){
	const response = await fetch("https://test-final.b8one.academy/products/more-sold");
	
	const responseJson = await response.json();
    
	return responseJson
    
}



async function populateProdutos(){

    const productData = await fetchProdutos();
    const arrayProductData = productData.products;
    
    const tableGroupList = document.querySelector('.products__list');
    const productsTable = arrayProductData.map((item, index) =>{
        return `
        <li class="product__itens">
        <div class="product__image__text">

            <div class="number--desktop">
                ${index + 1}
            </div>

            <img src="${item.image}" alt="imagem produto" referrerpolicy="no-referrer">
                
            <p class="product__description">
                ${item.name}
            </p>  
        </div>
        <div class="product__price__code">
            <ul class="price__code">
                <li class="number">
                    ${index + 1}
                </li>
                <li class="code">
                    ${item.orderId}
                </li>
                <li class="departament">
                    ${item.department}
                </li>
                <li class="price">
                ${(item.price/100).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                </li>
            </ul>
        </div>
    </li>

        `
    } )

    console.log(productsTable)

    const tableHtml = productsTable.join('')
    tableGroupList.insertAdjacentHTML('beforeend',tableHtml)
    

}

populateProdutos();