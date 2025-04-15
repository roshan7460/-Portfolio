// src/App.jsx
import './index.css';
import About from './components/About';

function App() {
  return (
    <>
      <header>
        <div className="container">
          <h1>Your Name</h1>
          <p className="tagline">BSc Data Science Student | Aspiring Data Analyst</p>
        </div>
      </header>

      <About />
    </>
  );
}

export default App;
