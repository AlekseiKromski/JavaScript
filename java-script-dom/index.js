// var ps = document.querySelectorAll('p');
// ps.forEach(e => {
//     e.style.cursor = 'pointer'
//     e.addEventListener('click', function (event) {
//         event.target.style.color = 'blue'
//     })
// });

document.getElementById('wrapper').addEventListener('click', function(event){
    if(event.target.tagName === 'P'){
        event.target.style.color = 'blue'
    }
})
