document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
  
    const firstName = document.getElementById('firstName').value;
    const date = document.getElementById('date').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const password = document.getElementById('password').value;
  
    
    const formData = {
      firstName: firstName,
      date: date,
      email: email,
      number:number,
      password: password
    };
  
    
    const jsonData = JSON.stringify(formData);
  
    
    sessionStorage.setItem('formData', jsonData);
  
   
    window.location.href = 'next-page.html';
  });
  