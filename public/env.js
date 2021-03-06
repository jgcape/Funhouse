//Add subscribers to database
const addSubscriber = (subscriber) => {
  $.ajax({
    url: '/api/subscribers',
    contentType: 'application/json',
    data: JSON.stringify(subscriber),
    type: 'POST',
    success: function (result) {
      alert('Successfully added to mailing list!')
      location.reload();
    }
  });
}

const newSubscriber = () => {
  let name = $('#name').val()
  let email = $('#email').val()
  let description = $('#description').val()

  let subscriber = {
    name, email, description
  }
  addSubscriber(subscriber)
}

const requestSubscribers = () => {
  $.get('/api/subscribers', (subscribers) => {
    if (subscribers.length > 0) {
      listSubscribers(subscribers)
    }
  })
}

// Connecting to the socket and updating the headshot images from those being emitted by the server

let socket = io();
socket.on('new_picture', (msg) => {
  var oldImg = document.getElementById('headshot');
  var newImg = new Image();
  newImg.src = msg;
  newImg.className = "clown";
  newImg.id = "headshot";
  oldImg.parentNode.replaceChild(newImg, oldImg);
})

socket.on('new_picture', (msg) => {
  var oldImg = document.getElementById('headshot2');
  var newImg = new Image();
  newImg.src = msg;
  newImg.className = "clown";
  newImg.id = "headshot2";
  oldImg.parentNode.replaceChild(newImg, oldImg);
})


//Retrieving the subscribers list from the database and populating cards with subscriber details
listSubscribers = (subscribers) => {
  subscribers.forEach(subscriber => {
    console.log(subscriber)
    let item = '<div class="card medium col l4">' +
      '<div class="card-content"><div id = "' + subscriber._id + '" class = "details">' +
      '<span class="card-title">' + subscriber.name + '</span>' +
      '<br><br><p>Email: ' + subscriber.email + '</p>' +
      '<br><p>Games: ' + subscriber.description + '</p><br>' +
      '<button id="delete" onclick=deleteSubscriber(this) class="waves-effect button btn-small"><i class="material-icons right"></i>delete</button></div>' +
      '</div></div>'

    $('#listSubscribers').append(item)
  });
}


//Function to delete subscribers
const deleteSubscriber = (obj) => {
  var objID = $(obj).parent().attr("id");
  $.ajax({
    url: `/api/subscribers/${objID}`,
    type: 'DELETE',
    success: (result) => {
      alert('Subscriber deleted.')
      location.reload();     

    },
    error: (err) => {
      alert(err.message);
    }
  });
};

// Start up functions
$(document).ready(function () {
  console.log('Ready')
  $('.collapsible').collapsible();

  /// modal window initialize
  $('.modal').modal();

  //Populate mailing list
  requestSubscribers()
})
