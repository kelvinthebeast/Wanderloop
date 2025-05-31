import { useState } from 'react';
import './comments.css'
import EmojiPicker from 'emoji-picker-react';
export default function Comments() {
  const [open, setOpen] = useState(false)
  return (
    <div className='comments'>
      <div className="commentList">
        <span className='commentCount'>5 comments</span>
        <div className="comment">
          <img src="/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className='commentUsername'>John Dang</span>
            <p className='commentText'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            </p>
            <span className='commentTime'>1h</span>
          </div>
        </div>

        <div className="comment">
          <img src="/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className='commentUsername'>John Dang</span>
            <p className='commentText'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            </p>
            <span className='commentTime'>1h</span>
          </div>
        </div>

        <div className="comment">
          <img src="/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className='commentUsername'>John Dang</span>
            <p className='commentText'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            </p>
            <span className='commentTime'>1h</span>
          </div>
        </div>

        <div className="comment">
          <img src="/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className='commentUsername'>John Dang</span>
            <p className='commentText'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            </p>
            <span className='commentTime'>1h</span>
          </div>
        </div>

        <div className="comment">
          <img src="/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className='commentUsername'>John Dang</span>
            <p className='commentText'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            </p>
            <span className='commentTime'>1h</span>
          </div>
        </div>


        <div className="comment">
          <img src="/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className='commentUsername'>John Dang</span>
            <p className='commentText'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            </p>
            <span className='commentTime'>1h</span>
          </div>
        </div>

        <div className="comment">
          <img src="/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className='commentUsername'>John Dang</span>
            <p className='commentText'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            </p>
            <span className='commentTime'>1h</span>
          </div>
        </div>
      </div>
      <form action="" className='commentForm'>
        <input type="text" placeholder='Add comment'   />
        <div className="emoji">
          <div onClick={()=> setOpen(prev =>!prev)}>🐷</div>
          {open && <div className='emojiPicker'>
            <EmojiPicker/>
          </div>}
        </div>
      </form>
    </div>
  )
}
