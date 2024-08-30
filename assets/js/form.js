function readLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  }
  
  
  function storeLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const formElement = document.querySelector('form');
    const errorElement = document.getElementById('error');
  
    if (!formElement || !errorElement) {
      console.error('Form element or error element not found');
      return;
    }
  
    function handleFormSubmission(event) {
      event.preventDefault();
  
  
      const username = formElement.querySelector('#username').value.trim();
      const title = formElement.querySelector('#title').value.trim();
      const content = formElement.querySelector('#content').value.trim();
  
  
      if (!username || !title || !content) {
        errorElement.textContent = 'Please complete the form.';
        return;
      }
  
  
      const blogPost = { username, title, content };
  
  
      let blogPosts = readLocalStorage('blogPosts');
  
  
      blogPosts.push(blogPost);
  
  
      storeLocalStorage('blogPosts', blogPosts);
  
  
      formElement.reset();
  
  
      redirectPage('blog.html');
    }
  
  
    formElement.addEventListener('submit', handleFormSubmission);
  });