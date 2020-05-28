
function postTxt(){
    let msg = document.getElementById("form1").children[2].value
    console.log(msg);
    fetch('https://2ubiyjczwh.execute-api.eu-west-2.amazonaws.com/wall', {
      method: 'POST',
      body: JSON.stringify({message: msg})
    }).then(function (response) {
      if (response.status == 200) {
        console.log("Ok!")
      } else {console.log("Oh no!")}
    })
    
    
    }