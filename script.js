const picsumContainer = document.getElementById('picsumContainer');
const dummyImageContainer = document.getElementById('dummyImageContainer');
const generateButton = document.getElementById('generateButton');


function clearContainers() {
    picsumContainer.innerHTML = '';
    dummyImageContainer.innerHTML = '';
}

function fetchPicsumImage(width = 300, height = 300) {
    const imageBox = document.createElement('div');
    imageBox.classList.add('image-box');

    const img = document.createElement('img');
    img.src = `https://picsum.photos/${width}/${height}?random=${Math.random()}`;
    img.alt = 'Random Image from Picsum';

    imageBox.appendChild(img);
    picsumContainer.appendChild(imageBox);
}


function fetchDummyImage(width = 300, height = 300) {
    const imageBox = document.createElement('div');
    imageBox.classList.add('image-box');

    const img = document.createElement('img');
    img.src = `https://dummyimage.com/${width}x${height}/000/fff&text=Dummy+Image`;
    img.alt = 'Random Image from DummyImage';

    imageBox.appendChild(img);
    dummyImageContainer.appendChild(imageBox);
}


function fetchplacebearImage(width =300,height =300){
	const imageBox = document.createElement('div');
	imageBox.classList.add('image-box');
 	
  const img = document.createElement('img');
	img.src =  `https://placebear.com/g/200/300`
  img.alt = 'Random image from bears';
  
  imageBox.appendChild(img);
    placebearImageContainer.appendChild(imageBox);

}

function generateImages() {
    clearContainers(); // Clear existing images
    for (let i = 0; i < 1; i++) {
        const randomSize = Math.floor(Math.random() * 200) + 200; //
        fetchPicsumImage(randomSize, randomSize);
        fetchDummyImage(randomSize, randomSize);
     		fetchplacebearImage(randomSize,randomSize);
    }
}

// Event listener for the button
generateButton.addEventListener('click', generateImages);
