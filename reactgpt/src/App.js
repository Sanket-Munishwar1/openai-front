import './App.css';
import axios from 'axios'
import { useState } from 'react'


function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://localhost/chat/", { prompt })
      .then((res) =>{
        setResponse(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }
  return (
    <>
    <div className='one'>
      <div className='w-full justify-center items-center px-8'>
        <form className='form1' onSubmit={handleSubmit}>
          <div className='md-6'>
            <label className='block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4' htmlFor='inline-full-name'>
              Just say/ask something :
            </label>
          </div>
          <div className='py-4'>
            <input className='input1' type='text' value={prompt} onChange={(e) => setPrompt(e.target.value)}/>
          </div>
          <div className='sub'>
            <button className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px4 rounded' type='submit'>
              Submit
            </button>
          </div>
        </form>
        <div className='w-full items-center mt-4'>
          <p>{response}</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default App;
