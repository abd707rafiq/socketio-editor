import React, { useState } from 'react'
import "../App.css"
import {v4 as uuidv4} from 'uuid'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate=useNavigate();
    const [roomId,setRoomId]=useState('');
    const [username,setuserName]=useState('')
    const createNewRoom=(e)=>{
        e.preventDefault();
        const id=uuidv4();
        setRoomId(id);
        toast.success('Room id is generated')

    }
    const joinRoom=()=>{
        if(!roomId || !username){
            toast.error("RoomId and Name is required")
            return
        }
        navigate(`/editorpage/${roomId}`,{
            state:{
                username,
            },
        })
    }
    const handleEnter=(e)=>{
        if(e.code==='Enter'){
            joinRoom();
        }

    }



    return (
        <div className='homePageWrapper'>
            <div className='formwrapper'>
                <h1 className='logo'>Code-Editor</h1>
                <h2 className='mainLabel'> Paste your invitaion link</h2>
                <div className='inputGroup'>
                    <input
                        type="text"
                        placeholder='Room ID'
                        onChange={(e)=>setRoomId(e.target.value)}
                        value={roomId}

                        className='inputBox'
                        onKeyUp={handleEnter}

                    />
                    <input
                        type='text'
                        placeholder='Name'
                        className='inputBox'
                        onChange={(e)=>setuserName(e.target.value)}
                        value={username}
                        onKeyUp={handleEnter}




                    />
                    <button className='btn ' onClick={joinRoom}>Join</button>
                    <span className='createInfo'>
                        If you don't have an invite then create &nbsp;
                        <a
                        onClick={createNewRoom}

                            href=""
                            className="createNewBtn"
                        >
                            new room
                        </a>

                    </span>


                </div>




            </div>
            <footer>
                <h4>
                    Built with 💛 &nbsp; by &nbsp;
                    <a href="https://github.com/abd707rafiq">abd707rafiq</a>
                </h4>
            </footer>

        </div>
    )
}

export default Home
