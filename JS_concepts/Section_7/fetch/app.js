document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJSON);

document.getElementById('button3').addEventListener('click', getExternelData);

//Get local text data
function getText(e){

    fetch('text.txt')
      .then(function(res){
       return res.text();
      })
      .then(function(data){
        console.log(data);
        document.getElementById('output').innerHTML = data;
      })
      .catch(function(err){
        console.log(err);
        
      })
}

//Get local JSON data
function getJSON(e){

  fetch('sample.json')
    .then(function(res){
     return res.json();
    })
    .then(function(data){
      console.log(data);
      let output= '';
      data.forEach(data => {
        output += `
        <li>${data.name}</li>
        `
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
      console.log(err);
      
    })
}

function getExternelData(e){

  fetch('https://api.github.com/users')
    .then(function(res){
     return res.json();
    })
    .then(function(data){
      console.log(data);
      let output= '';
      data.forEach(data => {
        output += `
        <li>${data.login}</li>
        `
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
      console.log(err);
      
    })
}