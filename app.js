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
    const divInfo = document.createElement('div');
    const imgElement = `<img src="${items[i]}"`;
    const divTitle = `<h1>${title[i]}</h1>`;
    const divText = `<p>${text[i]}</p>`;
    const sliderWrapper = document.getElementsByClassName('slider-wrapper');

    if (i == 0) {
        divElement.classList.add("active");
        currentIndex = 0;
    }
    
    divInfo.append(divTitle, divText);
    divElement.append(imgElement, divInfo);
    sliderWrapper.innerHTML += divElement;

    divElement.classList.add("item");
    divInfo.classList.add("item-info");

    console.log(divInfo, divElement)
    
}