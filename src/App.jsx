import './App.css'

function App() {
  function handleBackgroundColor() {
    document.body.classList.toggle('dark-bg');
  };
    return (
    <>
    <div>
      <h1 onClick={handleBackgroundColor}>Mathias Rendón</h1>
      <p>Técnico <span>|</span> Software Engineer</p> 
    </div>
    </>
  )
}

export default App;