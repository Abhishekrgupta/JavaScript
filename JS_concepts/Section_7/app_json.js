document.getElementById('button1').addEventListener('click', onLoadCustomer);

document.getElementById('button2').addEventListener('click', onLoadCustomers);

function onLoadCustomer(e){

  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'cust.json', true);
  xhr.onload = function(){
    if(this.status === 200){
      const customer = JSON.parse(this.responseText);

      const output = `
      <ul>
        <li>ID: ${customer.id}</li>
        <li>Name: ${customer.name}</li>
        <li>Company: ${customer.company}</li>
        <li>Phone: ${customer.phone}</li>
      </ul>
      `;

      document.getElementById('customer').innerHTML = output;
    }
  }
  xhr.send();
}


function onLoadCustomers(e){

  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'custs.json', true);
  xhr.onload = function(){
    if(this.status === 200){
      const customers = JSON.parse(this.responseText);
      let output = '';
      customers.forEach(customer => {
      output += `
      <ul>
        <li>ID: ${customer.id}</li>
        <li>Name: ${customer.name}</li>
        <li>Company: ${customer.company}</li>
        <li>Phone: ${customer.phone}</li>
      </ul>
      `;
      });
      document.getElementById('customers').innerHTML = output;
    }
  }
  xhr.send();
}