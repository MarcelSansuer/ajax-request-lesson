//listeners
document.getElementById('getForm').addEventListener('submit',getName);
document.getElementById('postForm').addEventListener('submit',postName);

function postName(e) {
    e.preventDefault();

    var xhr = new XMLHttpRequest();

    var name = document.getElementById('name_Post').value;
    var params = "name="+ name;

    xhr.open('POST', 'process.php', true); 
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    
    xhr.onload = function (){
        document.getElementById('user').innerHTML = xhr.responseText;
    }

    xhr.send(params);
}

function getName(e) {
    e.preventDefault();
    var xhr = new XMLHttpRequest();

    var name = document.getElementById('name_GET').value;

    xhr.open('GET', 'process.php?name='+name, true); 
    
    xhr.onload = function (){
        document.getElementById('user').innerHTML = xhr.responseText;
    }

    xhr.send();
}
