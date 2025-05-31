import './leftBar.css'

export default function LeftBar() {
  return (
    <div className='leftBar'>
      <div className="menuIcons">
        <a href="/" className='menuIcon'>
          <img src="/general/logo.png" alt="Logo" className='logo' />
        </a>
        <a href="/" className='menuIcon'>
          <img src="/general/home.svg" alt="Logo" />
        </a>
        <a href="/" className='menuIcon'>
          <img src="/general/create.svg" alt="Logo" />
        </a>
        <a href="/" className='menuIcon'>
          <img src="/general/updates.svg" alt="Logo" />
        </a>
        <a href="/" className='menuIcon'>
          <img src="/general/messages.svg" alt="Logo" />
        </a>
        
      </div>
      <a href="/" className='menuIcon'>
          <img src="/general/settings.svg" alt="Logo" />
      </a>
    </div>
  )
}
