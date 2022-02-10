const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];



let currentIndex = 0;

for (i = 0; i < items.length; i++) {
    const divElement = document.createElement('div');
    console.log(divElement);
    const divInfo = document.createElement('div');
    console.log(divInfo);
    const imgElement = document.createElement('img');
    imgElement.src = `${items[i]}`;
    console.log(imgElement);
    const divTitle = `<h1>${title[i]}</h1>`;
    console.log(divTitle)
    const divText = `<p>${text[i]}</p>`;
    console.log(divText);
    const sliderWrapper = document.getElementsByClassName('slider-wrapper');
    console.log(sliderWrapper);

    if (i == 0) {
        divElement.classList.add("active");
        currentIndex = 0;
    }
    
    sliderWrapper[0].append(divElement);
    divInfo.append(divTitle, divText);
    divElement.append(imgElement, divInfo);
    

    divElement.classList.add("item");
    divInfo.classList.add("item-info");

    // console.log(divInfo, divElement)
    
};

// `<img src="${items[i]}">;`