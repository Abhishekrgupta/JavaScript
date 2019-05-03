document.getElementById('button').addEventListener('click', onLoadData);

function onLoadData(){
  const xhr = new XMLHttpRequest();
  xhr.open('GEt', 'data.txt', true);

  // console.log('Ready State', xhr.readyState);
  xhr.onload= function(){
    console.log('Ready State', xhr.readyState);
    
    if(xhr.status ===200){
      //console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h5>${this.responseText}</h5>`
    }
  }

  xhr.onprogress = function(){
    console.log('Ready State', xhr.readyState);
  }
  // xhr.onreadystatechange = function(){
    // console.log('Ready State', xhr.readyState);
  //   if(xhr.status ===200 && xhr.readyState === 4){
  //     console.log(this.responseText);
  //   }
  // }

  xhr.onerror = function(){
    console.log('Error');
  }
  xhr.send();
}