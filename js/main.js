//listeners
document.getElementById('btn').addEventListener('click',getUsers);

function getUsers() {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'users.php', true); 
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    
    xhr.onload = function (){
        if(this.status == 200){
            var users = JSON.parse(this.responseText);
  
            var htmlString = '';
            for(var i in users){
            htmlString += 
            '<ul>'+
                '<li>ID:'+ users[i].id +
                '<li>Name:'+ users[i].name +
            '</ul>';
            }
 
            document.getElementById('users').innerHTML = htmlString;
        }
    }

    xhr.send();
}
