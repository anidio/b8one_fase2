//GRÁFICO Vendas

const vendas = document.getElementById('myChart__vendas').getContext('2d');
const myChart__vendas = new Chart(vendas, {
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


document.getElementById('blue').style.backgroundColor = myChart__vendas.data.datasets[0].backgroundColor;
document.getElementById('red').style.backgroundColor = myChart__vendas.data.datasets[1].backgroundColor;
document.getElementById('yellow').style.backgroundColor = myChart__vendas.data.datasets[2].backgroundColor;
document.getElementById('green').style.backgroundColor = myChart__vendas.data.datasets[3].backgroundColor;

function toggleData(value) {
    const visibilityData = myChart__vendas.isDatasetVisible(value);
    if (visibilityData  === true ){
        myChart__vendas.hide(value);
    }
    if (visibilityData  === false ){
        myChart__vendas.show(value);
    }
}


/*GRÁFICO 2 */

const pedidos = document.getElementById('myChart__pedidos').getContext('2d');
const myChart__pedidos = new Chart(pedidos, {
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


document.getElementById('blue2').style.backgroundColor = myChart__pedidos.data.datasets[0].backgroundColor;

function toggleData2(value) {
    const visibilityData = myChart__pedidos.isDatasetVisible(value);
    if (visibilityData  === true ){
        myChart__pedidos.hide(value);
    }
    if (visibilityData  === false ){
        myChart__pedidos.show(value);
    }
}

/*GRÁFICO 3 */

const revendedores = document.getElementById('myChart__revendedores').getContext('2d');
const myChart__revendedores = new Chart(revendedores, {
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


//BOTOÕES DO GRÁFICO 3


document.getElementById('blue3').style.backgroundColor = myChart__revendedores.data.datasets[0].backgroundColor;
document.getElementById('red3').style.backgroundColor = myChart__revendedores.data.datasets[1].backgroundColor;
document.getElementById('yellow3').style.backgroundColor = myChart__revendedores.data.datasets[2].backgroundColor;

function toggleData3(value) {
    const visibilityData = myChart__revendedores.isDatasetVisible(value);
    if (visibilityData  === true ){
        myChart__revendedores.hide(value);
    }
    if (visibilityData  === false ){
        myChart__revendedores.show(value);
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
 drop1.className = "";
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

    

    const tableHtml = productsTable.join('')
    tableGroupList.insertAdjacentHTML('beforeend',tableHtml)
    

}

populateProdutos();

/*POPULAR LISTA DE REVENDEDORES */

async function fetchRevendedores(){
	const responseRevender = await fetch("https://test-final.b8one.academy/resellers/ranking");
	
	const responseJsonRevender = await responseRevender.json();
    console.log(responseJsonRevender)
	return responseJsonRevender
    
}

async function populateRevendedores(){

    const revenderData = await fetchRevendedores();
    const arrayRevenderData = revenderData.resellers;
    
    const tableRevenderList = document.querySelector('.revendedores__list');
    const revenderTable = arrayRevenderData.map((item, index) =>{
        return `
        <li class="revendedores__list--item">
                                <span>${index + 1}º</span>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20" cy="20" r="20" fill="#F1F2F9"/>
                                    <path d="M10.6847 26V14.3636H12.4403V19.4205H18.2415V14.3636H20.0028V26H18.2415V20.9261H12.4403V26H10.6847ZM22.5597 26V14.3636H26.7074C27.6089 14.3636 28.357 14.5189 28.9517 14.8295C29.5502 15.1402 29.9972 15.5701 30.2926 16.1193C30.5881 16.6648 30.7358 17.2955 30.7358 18.0114C30.7358 18.7235 30.5862 19.3504 30.2869 19.892C29.9915 20.4299 29.5445 20.8485 28.946 21.1477C28.3513 21.447 27.6032 21.5966 26.7017 21.5966H23.5597V20.0852H26.5426C27.1108 20.0852 27.5729 20.0038 27.929 19.8409C28.2888 19.678 28.5521 19.4413 28.7188 19.1307C28.8854 18.8201 28.9688 18.447 28.9688 18.0114C28.9688 17.572 28.8835 17.1913 28.7131 16.8693C28.5464 16.5473 28.2831 16.3011 27.9233 16.1307C27.5672 15.9564 27.0994 15.8693 26.5199 15.8693H24.3153V26H22.5597ZM28.304 20.75L31.179 26H29.179L26.3608 20.75H28.304Z" fill="#425DC7"/>
                                </svg>

                                <div class="name__sales__revendedor">
                                    <span class="revender__name">${item.name}</span>
                                    <span class="sales__number">${item.ordersCount} pedidos</span> 
                                </div>

                                <div class="sales__percent">
                                    <span>${item.percentage}</span>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.9998 9.5L7.99976 6.5L4.99976 9.5" stroke="#158F2E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                        
                                </div>
                                    
        </li>

        `
    } )

    

    const tableHtmlRevender = revenderTable.join('')
    tableRevenderList.insertAdjacentHTML('beforeend',tableHtmlRevender)
    

}

populateRevendedores();

/*TAB FUNCTION*/

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }


/*DROPDOWN LATERAL*/

//var drop = document.getElementById('drop1');

//drop1.onclick = function(){
//drop.className = "mostrar";
//}

function show(){
    var drop = document.getElementById('drop1')

    if(drop.classList.contains('mostrar')){

        drop.classList.remove('mostrar')
    }else{
        drop.classList.add('mostrar')
    }
}

function show1(){
    var drop1 = document.getElementById('drop2')

    if(drop1.classList.contains('mostrar')){

        drop1.classList.remove('mostrar')
    }else{
        drop1.classList.add('mostrar')
    }
}

function show2(){
    var drop2 = document.getElementById('drop3')

    if(drop2.classList.contains('mostrar')){

        drop2.classList.remove('mostrar')
    }else{
        drop2.classList.add('mostrar')
    }
}

function show3(){
    var drop3 = document.getElementById('drop4')

    if(drop3.classList.contains('mostrar')){

        drop3.classList.remove('mostrar')
    }else{
        drop3.classList.add('mostrar')
        
    }
}



/*cor nos itens 2n */

