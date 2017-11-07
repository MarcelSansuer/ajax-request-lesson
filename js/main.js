  //listeners
  document.getElementById('btn').addEventListener('click',callUsers);

  //helper functions
  function log(msg) {
      console.log('READYSTATE',msg);
  }

  function innerHTMLbyID(id, msg) {
      document.getElementById(id).innerHTML = msg;
  }

  function callUsers() {
    //create XHR Object
    var xhr = new XMLHttpRequest(); 

    //OPEN - type, url/file, async
    xhr.open('GET', 'https://api.github.com/users?', true);
    
    xhr.onload = function () {
      if(this.status == 200){
          var users = JSON.parse(this.responseText);

          var htmlString = '';
          for(var i in users){
            htmlString += '<div class="user">'+
            '<img src="'+users[i].avatar_url+'" width="70" height="70">' +
            '<ul>'+
            '<li>ID: '+users[i].id+'</li>'+
            '<li>ID: '+users[i].login+'</li>'+
            '</ul>'+
            '</div>';
          }

          innerHTMLbyID('users', htmlString);
      }
    }

    xhr.onerror = function () {
        console.log('Request Error ...');
    }
    //sends request
    xhr.send();
}

  
  /*ONLOAD -> HTTP statuses - 200: OK; 403: forbidden; 404 not found */
  /*ONLOAD -> read states values - 0: request not initialized; 1: server connection established; 2: request received; 3: processing request; 4: request finished and response is ready */
