import './App.css'
import logo from './assets/fin.png'
import discord from './assets/whiteDisc.png'
import instagram from './assets/whiteIG.png'
import tiktok from './assets/whiteTikTok.png'

function App() {
// import { useState } from 'react'
// const [count, setCount] = useState(0)
{/* <div className="card">
<button onClick={() => setCount((count) => count + 1)}>
  count is {count}
</button>
<div> */}

  return (
    <>

      <img src={logo} alt="" className="logo"/>
      <br/>

      <div className="socials"> 
          <a href="https://discord.gg/gxZVca9uZU" target="_blank" rel="noreferrer">
              <img src={discord} alt="" className="discord"/>
          </a>
          <a href="https://www.tiktok.com/@sacsnowclub" target="_blank" rel="noreferrer">
              <img src={tiktok} alt="" className="tiktok"/>
          </a>
          <a href="https://www.instagram.com/sacsnowclub/" target="_blank" rel="noreferrer">
              <img src={instagram} alt="" className="instagram"/>
          </a>
      </div>

      <div className="links">
          <a href="https://discord.gg/gxZVca9uZU" target="_blank" className="linkBox" rel="noreferrer">
              <br/>
              JOIN OUR DISCORD
          </a>
          <a href="https://facebook.us15.list-manage.com/subscribe?u=63cf1cc6814ebaf9cda955576&id=f83b629815" target="_blank" className="linkBox" rel="noreferrer">
            \n SUBSCRIBE TO OUR EMAILS
          </a>
          <a href="https://csus.presence.io/form/2022-2023-recreation-club-membership-application" target="_blank" className="linkBox" rel="noreferrer">
              <br/>
              Become an Official Member of the club! (CSUS Students)
          </a>
          <a href="https://forms.gle/2V6MTsz2aS6AaCqw5" target="_blank" className="linkBox" rel="noreferrer">
              <br/>
              23/24 Ikon Pass Discount Application!
          </a>
          <a href="https://us15.campaign-archive.com/home/?u=63cf1cc6814ebaf9cda955576&id=f83b629815" target="_blank" className="linkBox" rel="noreferrer">
              <br/>
              Read previous Emails
          </a>
          <a href="https://csus.presence.io/form/2022-2023-recreation-club-community-member-application" target="_blank" className="linkBox" rel="noreferrer">
              <br/>
              Become a Community Member (non-CSUS Students)
          </a>
      </div>
    </>
  )
}

export default App
