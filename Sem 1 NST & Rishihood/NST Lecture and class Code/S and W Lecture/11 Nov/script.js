const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const formData = new FormData(form);

  const values = Array.from(formData.values());
  
  console.log(values);

  document.getElementById("filled").innerHTML = "Your Name is: "+values[0]
  document.getElementById("filledmail").innerHTML = "Your Email is: "+values[1]
});
