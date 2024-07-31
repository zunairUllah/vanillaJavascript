export default function NotFound() {
    return `
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <a href="/" onclick="event.preventDefault(); window.navigateTo('/')">Go to Home Page</a>
    `;
  }
  