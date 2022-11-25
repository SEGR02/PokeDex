import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUserName } from '../store/slices/name.slice';

const InputName = () => {

  const navigate = useNavigate()
  const [name, setName] = useState('')
  const dispatch = useDispatch()

  const submit = (username) => {
    dispatch(setUserName(username))
    navigate('/PokeDex')
  }

  return (
    <>
      <div className='input-name-container'>
        <div className='pikachu'></div>
        <div className='form'>
          <div className='card-container'>
            <center>
              <h1>Hello trainer!</h1>
              <p className='special-p'>Give me your name to continue</p>
            </center>
            <form action="">
              <input className='input-name' placeholder='Name' type="text" onChange={(e) => setName(e.target.value)} value={name} />
              <button onClick={() => submit(name)}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputName;