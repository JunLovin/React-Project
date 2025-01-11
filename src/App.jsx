import './App.css'

function App() {
  function handleBackgroundColor() {
    document.body.classList.toggle('dark-bg');
  };
  function secretAlert() {
    alert('This is a secret message!')
  }
    return (
    <>
    <div>
      <h1 onClick={handleBackgroundColor}>Mathias Rendón</h1>
      <p onClick={secretAlert}>Técnico <span>|</span> Software Engineer</p> 
    </div>
    </>
  )
}

export default App;