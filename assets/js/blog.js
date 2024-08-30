document.addEventListener('DOMContentLoaded', () => {
    const mainElement = document.querySelector('main');
    const backButton = document.querySelector('#back');
  
    function buildAndAppendElement(post) {
          if (!post.title || !post.content || !post.username) {
        console.warn('Incomplete post data:', post);
        return;
      }
  
      const newElement = document.createElement('div');
      newElement.className = 'blog-post';
  
      const titleElement = document.createElement('h2');
      titleElement.textContent = post.title;
      newElement.appendChild(titleElement);
  
      const contentElement = document.createElement('p');
      contentElement.textContent = post.content;
      contentElement.style.fontStyle = 'italic';
      newElement.appendChild(contentElement);
  
      const usernameElement = document.createElement('p');
      usernameElement.textContent =`Posted by: ${post.username}`;
      newElement.appendChild(usernameElement);
  
  
      if (mainElement) {
        mainElement.appendChild(newElement);
      } else {
        console.error('Main element not found');
      }
    }
  
  
    function handleNoPosts() {
      const messageElement = document.createElement('p');
      messageElement.textContent = 'No Blog posts yet...';
      messageElement.className = 'no-posts-message';
  
      if (mainElement) {
        mainElement.innerHTML = '';
        mainElement.appendChild(messageElement);
      } else {
        console.error('Main element not found');
      }
    }
  
  
    function renderBlogList() {
  
      const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
  
      if (blogPosts.length === 0) {
        handleNoPosts();
      } else {
  
        if (mainElement) {
          mainElement.innerHTML = '';
  
          blogPosts.forEach(post => buildAndAppendElement(post));
        } else {
          console.error('Main element not found');
        }
      }
    }
  
  
    renderBlogList();
  
  
    if (backButton) {
      backButton.addEventListener('click', () => {
        redirectPage('index.html');
      });
    } else {
      console.error('Back button not found');
    }
  });
  
    function readLocalStorage(key) {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    }
  
    function storeLocalStorage(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    }