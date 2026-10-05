import "./App.css";

function App() {
  return (
    <div className="app">
      <nav>
        <h2>My React App</h2>
        <span>DevOps Deployment</span>
      </nav>

      <main>
        <p className="tag">AWS • React • Nginx • GitHub Actions</p>

        <h1>
          React App
          <br />
          <span>Deployed Automatically</span>
        </h1>

        <p className="description">
          This application is deployed on AWS EC2 using Nginx and
          automatically updated through GitHub Actions CI/CD.
        </p>

        <div className="buttons">
          <a
            href="https://github.com/prithvi19ait-dev/my-react-app"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub
          </a>
          <button>CI/CD Active ✓</button>
        </div>
      </main>

      <footer>
        <p>Built with React • Deployed on AWS EC2</p>
      </footer>
    </div>
  );
}

export default App;