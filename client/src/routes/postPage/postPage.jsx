import './postPage.css'
import PostInteraction from '../../components/PostInteraction/PostInteraction'
import { Link } from 'react-router'
import Comments from '../../components/comments/comments'
export default function PostPage() {
  return (
    <div className='postPage'>
      <svg height="20" viewBox="0 0 24 24" width="20" style={{ cursor: "pointer" }}>
        <path d="M8.41 4.59a2 0 1 1 2.83L8.66 10H21a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H8.66l2.58 5.41a2 0 1 1-2.83 2L2.7 12 8.41 4.59z" />
      </svg>
      <div className="postContainer">
        <div className="postImg">
          <img src="/pins/pin1.jpeg" alt="" width={763} />
        </div>
        <div className="postDetails">
          <PostInteraction></PostInteraction>
          <Link to="/John" className='postUser'>
            <img src="/general/noAvatar.png" alt="" />
            <span>John Thanh</span>
          </Link>
          <Comments/>
          
        </div>
      </div>
    </div>
  )
}
