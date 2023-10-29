const usedCars = [
    {
      year: 2018,
      make: "Toyota",
      model: "Camry",
      mileage: 30000,
      price: 18000,
      color: "Silver",
      gasMileage: "25 mpg city, 35 mpg highway",
      img: "./img/images/Camry,toyota.webp",
    },
    {
      year: 2016,
      make: "Honda",
      model: "Civic",
      mileage: 45000,
      price: 14000,
      color: "White",
      gasMileage: "30 mpg city, 40 mpg highway",
      img: "./img/images/civic,honda.webp",
    },
    {
      year: 2017,
      make: "Ford",
      model: "Fusion",
      mileage: 35000,
      price: 16000,
      color: "Black",
      gasMileage: "28 mpg city, 38 mpg highway",
      img: "./img/images/fusion,ford.webp",
    },
    {
      year: 2019,
      make: "Nissan",
      model: "Altima",
      mileage: 25000,
      price: 17000,
      color: "Blue",
      gasMileage: "27 mpg city, 36 mpg highway",
      img: "./img/images/altima,nissan.jpg",
    },
    {
      year: 2015,
      make: "Chevrolet",
      model: "Malibu",
      mileage: 50000,
      price: 12000,
      color: "Red",
      gasMileage: "25 mpg city, 37 mpg highway",
      img: "./img/images/malibu,chevrolet.jpg",
    },
    // Additional entries:
    {
      year: 2016,
      make: "Volkswagen",
      model: "Passat",
      mileage: 40000,
      price: 15000,
      color: "Gray",
      gasMileage: "29 mpg city, 40 mpg highway",
      img: "./img/images/passat,volkswagon.webp",
    },
    {
      year: 2020,
      make: "Hyundai",
      model: "Elantra",
      mileage: 22000,
      price: 16000,
      color: "Silver",
      gasMileage: "30 mpg city, 41 mpg highway",
      img: "./img/images/elantra, hyundai.webp",
    },
    {
      year: 2014,
      make: "Subaru",
      model: "Outback",
      mileage: 60000,
      price: 14000,
      color: "Green",
      gasMileage: "22 mpg city, 30 mpg highway",
      img: "./img/images/outback,subaru.webp",
    },
    {
      year: 2017,
      make: "Mazda",
      model: "CX-5",
      mileage: 32000,
      price: 19000,
      color: "Blue",
      gasMileage: "24 mpg city, 31 mpg highway",
      img: "./img/images/cx5, mazda.webp",
    },
    {
      year: 2018,
      make: "Kia",
      model: "Sorento",
      mileage: 28000,
      price: 17000,
      color: "White",
      gasMileage: "22 mpg city, 29 mpg highway",
      img: "./img/images/sorrento,kia.webp",
    },
    // Five more entries:
    {
      year: 2015,
      make: "Dodge",
      model: "Challenger",
      mileage: 30000,
      price: 24000,
      color: "Black",
      gasMileage: "19 mpg city, 30 mpg highway",
      img: "./img/images/challenger,dodge.webp",
    },
    {
      year: 2017,
      make: "Cadillac",
      model: "XT5",
      mileage: 28000,
      price: 32000,
      color: "Red",
      gasMileage: "19 mpg city, 27 mpg highway",
      img: "./img/images/XT5, cadillac.jpg",
    },
    {
      year: 2018,
      make: "Jaguar",
      model: "F-PACE",
      mileage: 26000,
      price: 38000,
      color: "Blue",
      gasMileage: "18 mpg city, 23 mpg highway",
      img: "./img/images/F-pace,jaguar.webp",
    },
    {
      year: 2019,
      make: "Tesla",
      model: "Model S",
      mileage: 18000,
      price: 55000,
      color: "Black",
      gasMileage: "Electric (370 miles per charge)",
      img: "./img/images/modelS,tesla.webp",
    },
    {
      year: 2020,
      make: "Porsche",
      model: "Cayenne",
      mileage: 22000,
      price: 68000,
      color: "White",
      gasMileage: "20 mpg city, 26 mpg highway",
      img: "./img/images/cayenne,porsche.webp",
    },
    {
      year: 2017,
      make: "Lexus",
      model: "ES",
      mileage: 29000,
      price: 26000,
      color: "White",
      gasMileage: "21 mpg city, 30 mpg highway",
      img: "./img/images/ES, lexus.jpg",
    },
    {
      year: 2016,
      make: "BMW",
      model: "5 Series",
      mileage: 32000,
      price: 27000,
      color: "Black",
      gasMileage: "23 mpg city, 34 mpg highway",
      img: "./img/images/5,BMW.webp",
    },
  ];
 //creates array for filtered cars
let filteredCars = usedCars;
  

//main function that gathers all infor and puts into html elements displaying each car
function displayAllCars(cars){
    const allCars = document.querySelector('.allCars')
    allCars.innerHTML = '';


    //makes it so if there are no filtered cars then it displays a message saying to try again
    if(filteredCars.length === 0){
        const noneAvailable = document.createElement('p');
        noneAvailable.textContent = 'None Meet Criteria, try again';
        allCars.appendChild(noneAvailable);
    } else{
        //if there are filtered cars or inital page load it gathers all info and displays it
        cars.forEach(car => {
            const carListing = document.createElement('div');
            carListing.classList.add('carListing');
    
            const carImg = document.createElement('img');
            carImg.src = car.img;
            carImg.alt = `${car.make} ${car.model}`;
            carListing.appendChild(carImg);
    
            const carInfo = document.createElement('div');
            carInfo.classList.add('carInfo');
    
            const mainCar = document.createElement('h2');
            mainCar.textContent = `${car.year} ${car.make} ${car.model}`;
            carInfo.appendChild(mainCar);
    
            const mile = document.createElement('p');
            mile.textContent = `Mileage: ${car.mileage} miles`;
            carInfo.appendChild(mile);
    
            const price = document.createElement('p');
            price.textContent = `Price:  $${car.price} `;
            carInfo.appendChild(price);
    
            const color = document.createElement('p');
            color.textContent = `Color:  ${car.color} `;
            carInfo.appendChild(color);
    
            const gasMile = document.createElement('p');
            gasMile.textContent = `Gas Mileage:  ${car.gasMileage} `;
            carInfo.appendChild(gasMile);
    
    
            carListing.appendChild(carInfo);
            allCars.appendChild(carListing);
        });

    }
}

//inital display
function pageLoadCars(){
    displayAllCars(usedCars);
}



function carFilter(){
    //grabs filters from html
    const yearFilter = document.getElementById('year').value;
    const makerFilter = document.getElementById('maker').value;
    const mileInitial = document.getElementById('mileage').value;
    const priceInitial = document.getElementById('price').value;

    //need this to make it so there doesn't need to be set criteria for mileage and price. was having issue before where you had to type something in in order for the filter to work
    const mileFilter = mileInitial ? parseInt(document.getElementById('mileage').value) : undefined;
    const priceFilter = priceInitial ? parseInt(document.getElementById('price').value) : undefined;
    
    

    filteredCars = usedCars.filter(car => {
        return(
            //checks each filter to see what is selected
            (!yearFilter || car.year === parseInt(yearFilter)) &&
            (!makerFilter || car.make === makerFilter) &&
            (mileFilter === undefined || car.mileage <= mileFilter) &&
            (priceFilter === undefined || car.price <= priceFilter)
        );      
    });

    displayAllCars(filteredCars);
}

//button click function
function filterButtonClick(){
    carFilter();
}
//button listener
document.getElementById('filterButt').addEventListener('click', filterButtonClick);

//inital load
pageLoadCars();




  



