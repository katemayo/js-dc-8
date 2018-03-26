var dogs = [
  { name: 'Manny', breed: 'Frenchie', size: 'small', img: 'http://cdn-img.instyle.com/sites/default/files/styles/480xflex/public/images/2015/08/082115-dogs-of-instagram-embed-6.jpg' },
  { name: 'Bodhi', breed: 'Shiba', size: 'medium', img: 'http://cdn-img.instyle.com/sites/default/files/styles/480xflex/public/images/2015/08/082115-dogs-of-instagram-embed-8.jpg' },
  { name: 'Norbert', breed: 'Mixed', size: 'small', img: 'http://cdn-img.instyle.com/sites/default/files/styles/684xflex/public/images/2015/08/082115-dogs-of-instagram-embed-11.jpg' },
  { name: 'Doug', breed: 'Pug', size: 'small', img: 'http://cdn-img.instyle.com/sites/default/files/styles/684xflex/public/images/2015/08/082115-dogs-of-instagram-embed-13.jpg' },
  { name: 'Spot', breed: 'Great Dane', size: 'large', img: 'http://buzzsharer.com/wp-content/uploads/2015/05/Great-Dane-on-sofa-funny.jpg' },
  { name: 'Beethoven', breed: 'St. Bernard', size: 'large', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Hummel_Vedor_vd_Robandahoeve.jpg/1200px-Hummel_Vedor_vd_Robandahoeve.jpg' }
];

function dogTemplate(dog) {
  return (`<tr class='dog-row'><td><img src='${dog.img}'</td><td>${dog.name}</td><<td>${dog.breed}</td>/<td>${dog.size}</td>tr>`)
}

function placeDogs(dogs) {
  $('#dog-list').empty('');
  dogs.forEach(function(dog) {
    var dogHtml = dogTemplate(dog);
    $('#dog-list').append(dogHtml);
  })
}

function filter(dogs, inputs) {
  // This function accepts an array of dogs, and an object that contains the values from the search form (see lines 35-39)

  // It should return a list of dogs, filtered by the provided search inputs
}


$(document).ready(function() {
  placeDogs(dogs);


  // Add an event listener for when the search form is submitted
    // Prevent the form from submitting itself normally
    
    // Collect the inputs from the search form and store them in an object
    // var inputs = {
    //   name: ,
    //   breed: ,
    //   sizes: 
    // }

    // Pass the inputs (name, breed, sizes), along with the list of dogs, to the `filter` function

    // Once you have the filtered list of dogs, place the dogs back in the list



  // **BONUS**: Figure out how to use the checkboxes named `sort` to sort the list of dogs alphabetically forwards or backwards

  // **DOUBLE BONUS**: Figure out how to accept query parameters on page load and use those to filter automatically

  // **TRIPLE BONUS**: Make the search form work "automagically" anytime an input changes, without having to click "Submit".

});
