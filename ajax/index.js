var response = document.querySelector('#response');

var button = document.querySelector('#submit');

button.addEventListener('click',(e) => {
    e.preventDefault();

    var userInput = document.querySelector('#name').value;

    userInput = encodeURIComponent(userInput);

    var xhr = new XMLHttpRequest();

    //Get method
    // xhr.open('GET', 'form_handler.php?name=' + userInput);
    // xhr.send();




    //Post method
    xhr.open('POST', 'form_handler.php');
    xhr.setRequestHeader('Content-Type', 
    'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            response.textContent = xhr.responseText;
        }
    }
    
    xhr.send('name=' + userInput);
    

    


});