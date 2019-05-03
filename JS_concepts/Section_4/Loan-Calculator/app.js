document.getElementById('loan-form').addEventListener('submit', function(e){
  //Hide results
  document.getElementById('results').style.display = 'none';

  //Show loader
  document.getElementById('loader').style.display = 'block';

  setTimeout(calculateResult, 2000);

  e.preventDefault();
});


function calculateResult(){
  const amount  = document.getElementById('amount');
  const interest  = document.getElementById('interest');
  const years  = document.getElementById('years');

  const monthlyPayment  = document.getElementById('monthly-payment');
  const totalPayment  = document.getElementById('total-payment');
  const totalInterest  = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value)/100/12;
  const calculatedPayments = parseFloat(years.value)*12;

  //Monthly Payment

  const x = Math.pow(1+calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest)/(x-1);

  if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

    //Show results
  document.getElementById('results').style.display = 'block';

  //Hide loader
  document.getElementById('loader').style.display = 'none';
  } else {
    showError("Something went wrong");
  }

}

//Show error

function showError(error){

  //HIde results
  document.getElementById('results').style.display = 'none';

  //Hide loader
  document.getElementById('loader').style.display = 'none';
  const errorDiv = document.createElement('div');
  errorDiv.className = 'alert alert-danger';
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');
  errorDiv.appendChild(document.createTextNode(error));

  card.insertBefore(errorDiv, heading); 

  setTimeout(() => {
    document.querySelector('.alert').remove();
  }, 3000);

}
