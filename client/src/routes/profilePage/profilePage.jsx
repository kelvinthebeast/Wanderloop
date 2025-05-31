
import { useState } from 'react';
import './profilePage.css'
import Collections from '../../components/collections/collections';
import Gallery from '../../components/Gallery/Gallery'

const ProfilePage = () => {
  const [type, setType] = useState("saved")
  return (
    <div className="profilePage">
      <img className='profileImg' src="/general/noAvatar.png" alt="" width={100} height={100} />
      <h1 className="profileName">John Doe</h1>
      <span className="profileUsername">@johndoe</span>
      <div className="followCounts">10 followers · 20 followings</div>
      <div className="profileInteractions">
        <img src="/general/share.svg" alt="" />
        <div className="profileButtons">
          <button>Message</button>
          <button>Follow</button>
        </div>
        <img src="/general/more.svg" alt="" />

      </div>
      <div className="profileOptions">
        <span onClick={()=> setType("created")} className={type==="created" ? "active" : ""}>Created</span>
        <span onClick={()=> setType("saved")} className={type==="saved" ? "active" : ""}>Saved</span>

      </div>
      {type === "created" ? <Gallery/> : <Collections/>}
    </div>
  );
};

export default ProfilePage;