  document.getElementById('btn').addEventListener('click',loadText);

  function log(msg) {
      console.log('READYSTATE',msg);
  }

  function loadText() {
      //create XHR Object
      var xhr = new XMLHttpRequest(); 
      //console.log(xhr);
      //OPEN - type, url/file, async
      xhr.open('GET', 'assets/sample.txt', true);
      
      xhr.onprogress = function () {
          log(this.readyState);
      }

      xhr.onload = function () {
        log(this.readyState);
        if(this.status == 200){
            //console.log(this.responseText);
        }
      }

      xhr.onreadystatechange = function () {
        log(this.readyState);
        if(this.readyState == 4 && this.status == 200){
            //console.log(this.responseText);
          }
      }
      //sends request
      xhr.send();
  }

  
  /*ONLOAD -> HTTP statuses - 200: OK; 403: forbidden; 404 not found */
  /*ONLOAD -> read states values - 0: request not initialized; 1: server connection established; 2: request received; 3: processing request; 4: request finished and response is ready */
