import React, { useState } from 'react';
import { IoPersonSharp } from 'react-icons/io5';
import './Comment.css';

export default function Comment() {

    const [count, setCount] = useState(0);

    function commentFn(e)
    {
        e.preventDefault();
        setCount(count + 1)

        var text=document.getElementById("commentArea").value
        console.log(text)
        // document.getElementById("cmts").innerHTML += `<FaBeer/> ${text}<br/>`
        document.getElementById("cmts").innerHTML += `<p> <IoPersonSharp/> ${text}</p>`
        document.getElementById("commentArea").value = "";
    }

    return (
        <div className='commentDiv'>
            <div className='commentInputArea'>
                <form onSubmit={commentFn}>
                    <textarea id='commentArea' placeholder='Enter your comment here...' required></textarea>
                    <button id='commentBtn' >Comment</button>
                </form>
                <div className='allComments'>
                    Comments({count})
                    <div id='cmts'>

                    </div>
                </div>
            </div>
        </div> 
    )
}

