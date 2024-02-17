import './App.css'
import FormInput from "./components/FormInput/FormInput.jsx";

function App() {

  return (
    <>
        <div className="title">
            <h2>Send Whatsapp Message<br/> Without Save to Contact</h2>
        </div>
        <div className="body">
            <FormInput />
        </div>
    </>
  )
}

export default App
