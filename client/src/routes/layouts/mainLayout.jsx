import './mainLayout.css'
// import Gallery from '../../components/Gallery/Gallery'
import LeftBar from '../../components/LeftBar/LeftBar'
import TopBar from '../../components/TopBar/TopBar'
import { Outlet } from 'react-router-dom';
export default function MainLayout() {
  return (
    <div className='app'>
          <LeftBar/>
            <div className="content">
              <TopBar/>
              <Outlet/>
              
            </div>
          
    </div>
  )
}
