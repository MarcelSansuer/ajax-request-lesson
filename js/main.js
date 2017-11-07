  //listeners
  document.getElementById('btnUser').addEventListener('click',callUser);
  document.getElementById('btnUsers').addEventListener('click',callUsers);


  //helper functions
  function log(msg) {
      console.log('READYSTATE',msg);
  }

  function innerHTMLbyID(id, msg) {
      document.getElementById(id).innerHTML = msg;
  }

  function callUser() {
      //create XHR Object
      var xhr = new XMLHttpRequest(); 

      //OPEN - type, url/file, async
      xhr.open('GET', 'assets/user.json', true);
      
      xhr.onload = function () {
        log(this.readyState);
        if(this.status == 200){
            var user = JSON.parse(this.responseText);

            var htmlString = '<ul>'+
            '<li>ID:'+ user.id +
            '<li>Name:'+ user.name +
            '<li>Email:'+ user.email +
            '</ul>';

            innerHTMLbyID('user', htmlString);
        }
      }

      xhr.onerror = function () {
          console.log('Request Error ...');
      }
      //sends request
      xhr.send();
  }

  function callUsers() {
    //create XHR Object
    var xhr = new XMLHttpRequest(); 

    //OPEN - type, url/file, async
    xhr.open('GET', 'assets/users.json', true);
    
    xhr.onload = function () {
      log(this.readyState);
      if(this.status == 200){
          var users = JSON.parse(this.responseText);

          var htmlString = '';
          for(var i in users){
            htmlString += '<ul>'+
            '<li>ID:'+ users[i].id +
            '<li>Name:'+ users[i].name +
            '<li>Email:'+ users[i].email +
            '</ul>';
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
