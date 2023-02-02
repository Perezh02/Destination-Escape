// When the form with id "destination_details_form" is submitted, 
// the function "handleFormSubmit" is triggered. 
document.querySelector("#destination_details_form").addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  // prevent the default form submit behavior
  event.preventDefault();

  // retrieve the form that was submitted
  const form = event.target;

  // retrieve the values entered in the form
  const destinationName = form.elements["name"].value;
  const destinationLocation = form.elements["location"].value;
  const destinationPhoto = form.elements["photo"].value;
  const destinationDesc = form.elements["description"].value;

  // reset the form values
  resetFormValues(form);

  // create a travel destination card using the values entered in the form
  const destinationCard = createDestinationCard(destinationName, destinationLocation, destinationPhoto, destinationDesc);


  // get the container where the destination cards will be added
  const wishListContainer = document.querySelector("#destinations_container");

  // if the container has no children, update the "title" element's text
  if (wishListContainer.children.length === 0) {
    document.querySelector("#title").innerHTML = "Dream Destination";
  } 
  // add the created card to the container
  wishListContainer.appendChild(destinationCard);
}

// function to reset the values of form elements
function resetFormValues(form) {
  Array.from(form.elements).forEach(function (element) {
    element.value = "";
  });
}

// function to create a travel destination card
function createDestinationCard(name, location, photoUrl, description) {
  // create a div element with class "card"
  const card = document.createElement("div");
  card.className = "card";
  // set the styles for the card
  card.style.width = "15rem";
  card.style.height = "fit-content";
  card.style.margin = "20px";
  
  // create an img element with class "card-img-top"
  const img = document.createElement("img");
  img.className = "card-img-top";
  img.alt = name;
  // set the src of the image to the photoUrl provided, or a default image
  img.src = photoUrl.length === 0 ? "https://cavchronicle.org/wp-content/uploads/2018/03/top-travel-destination-for-visas-900x504.jpg" : photoUrl;
  // add the image to the card
  card.appendChild(img);

  // create a div element with class "card-body"
 const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  // create a h5 element with class "card-title" and set its text content to the destination name
  const cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.textContent = name;
  cardBody.appendChild(cardTitle);

  const cardSubtitle = document.createElement("h6");
  cardSubtitle.className = "card-subtitle mb-2 text-muted";
  cardSubtitle.textContent = location;
  cardBody.appendChild(cardSubtitle);

  if (description.length !== 0) {
    // create a p element with class "card-text" and set its text content to the destination 
    const cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.textContent = description;
    cardBody.appendChild(cardText);

    
  }

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.className = "btn btn-primary";
  editButton.addEventListener("click", function() {
    const newText = prompt("Enter the new text for the card:");
    if (newText) {
      cardBody.textContent = newText;
    }
  });
  cardBody.appendChild(editButton);
  
  // create a remove button element
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.className = "btn btn-danger";
  cardBody.appendChild(removeButton);
  
  card.appendChild(cardBody);
  return card;

}


var Typed1 = new Typed(".typing-1",{
  strings: [
    "Travel", "To", "Your", "Dream", "Destination"
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

var Typed2 = new Typed(".typing-2",{
  strings: [
    "Travel", "To","Your", "Dream", "Destination"
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
  });
  
  
  
  
  