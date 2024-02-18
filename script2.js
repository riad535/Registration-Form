document.addEventListener('DOMContentLoaded', function() {
    
    const formData = JSON.parse(sessionStorage.getItem('formData'));
  
    
    if (formData) {
     
      displayRegisteredInfo(formData);
    } else {
      
      document.getElementById('registeredInfo').innerText = 'No registered information found.';
    }
  });
  
  function displayRegisteredInfo(data) {
    const infoDiv = document.getElementById('registeredInfo');
  
   
    const firstNamePara = document.createElement('p');
    firstNamePara.innerText = 'Full Name: ' + data.firstName;
  
    const datePara = document.createElement('p');
    datePara.innerText = 'Birth of Date: ' + data.date;
  
    const emailPara = document.createElement('p');
    emailPara.innerText = 'Email: ' + data.email;

    const numberPara = document.createElement('p');
    numberPara.innerText = 'Phone Number: ' + data.number;
  
    
    infoDiv.appendChild(firstNamePara);
    infoDiv.appendChild(datePara);
    infoDiv.appendChild(emailPara);
    infoDiv.appendChild(numberPara);
  }
  