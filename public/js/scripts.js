


function changeText() {
    var textsArray = ['blue', 'red', 'purple', 'green', 'yellow']
    var number = getRandomNumberBetween(0, textsArray.length - 1)
    console.log("Index: ", number)
    document.getElementById("heading").style.color = textsArray[number];
}

function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const submitForm = () => {
    let formData = {};
    formData.first_name = $('#first_name').val();
    formData.last_name = $('#last_name').val();
    formData.password = $('#password').val();
    formData.email = $('#email').val();

    console.log("Form Data Submitted: ", formData);
}

$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('#formSubmit').onclick(() => {
        submitForm();
    })
    addCards(cardList);
    $('.modal').modal();
});

function toggleModal() {
    var instance = M.Modal.getInstance($('#modal2'))
    instance.open();
}



