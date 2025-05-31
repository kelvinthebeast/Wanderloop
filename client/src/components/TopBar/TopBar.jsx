import './topBar.css'
import UserButton from '../UserButton/userButton'
export default function TopBar() {
  return (
    <div className='topBar'>
      {/* SEARCH */}
      <div className="search">
        <img src="/general/search.svg" alt="" />
        <input type="text" placeholder='search' />
      </div>
      <UserButton/>
    </div>
  )
}
