//listeners
document.getElementById('btn').addEventListener('click',getName);

function getName() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'process.php?name=Brad', true); 
    
    xhr.onload = function (){
        console.log(this.responseText);
    }

    xhr.send();
}
