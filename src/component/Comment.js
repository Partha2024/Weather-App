import React, { useState } from 'react';
import './Comment.css';

export default function Comment() {

    const [count, setCount] = useState(0);

    function commentFn(e)
    {
        e.preventDefault();
        setCount(count + 1);      {/* updating count */}
        var text=document.getElementById("commentArea").value
        console.log(text)
        document.getElementById("cmts").innerHTML +=  `<p><span><i class="fa fa-user" aria-hidden="true"></i></span> ${text}</p>`
        {/*putting icon infront of every comment*/}
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
                    Comments ({count})  {/* showing count of comments */}
                    <div id='cmts'>

                    </div>
                </div>  
            </div>
        </div> 
    )
}

