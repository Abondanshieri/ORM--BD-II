document.addEventListener('DOMContentLoaded', async () => {
  // Manejar el registro
  const registerForm = document.getElementById('register-form');
  registerForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const formData = new FormData(registerForm);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      password: formData.get('password'),
      role: formData.get('role')
    };
    
    const response = await fetch('/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    
    if (response.ok) {
      alert('Usuario registrado exitosamente');
      registerForm.reset();
    } else {
      alert('Error al registrar usuario');
    }
  });
  
  // Manejar el inicio de sesión
  const loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const formData = new FormData(loginForm);
    const data = {
      email: formData.get('email'),
      password: formData.get('password')
    };
    
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    
    if (response.ok) {
      const result = await response.json();
      alert(`Inicio de sesión exitoso. Bienvenido, ${result.user.firstName}`);
      loginForm.reset();
      // Puedes redirigir al usuario a otra página o mostrar más contenido aquí
    } else {
      alert('Error al iniciar sesión');
    }
  });
  
  // Obtener y mostrar productos
  const response = await fetch('/products');
  const products = await response.json();
  
  const productsDiv = document.getElementById('products');
  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('col-md-4');
    
    const card = document.createElement('div');
    card.classList.add('card', 'mb-4', 'shadow-sm');
    
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    
    const productName = document.createElement('h5');
    productName.classList.add('card-title');
    productName.textContent = product.name;
    
    const productPrice = document.createElement('p');
    productPrice.classList.add('card-text');
    productPrice.textContent = `$${product.price}`;
    
    cardBody.appendChild(productName);
    cardBody.appendChild(productPrice);
    card.appendChild(cardBody);
    productDiv.appendChild(card);
    productsDiv.appendChild(productDiv);
  });
});
