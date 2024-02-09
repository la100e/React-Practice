import React from 'react'
import StyledAbout from '../styledComponents/StyledAbout'

export default function About() {
  return (
    <StyledAbout id="about">
        
        <div className="row">
            <div className="video-container">
                <video src="wallpapers/vid2.mp4" loop autoPlay muted></video>
                <h3>best flower sellers</h3>
            </div>
            <div className="content">
                <h3>why choose us?</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium accusamus esse consequuntur ipsa, perspiciatis sapiente quos ipsum dolores ipsam itaque dignissimos dolorum saepe ut doloremque repudiandae! Aut reiciendis eveniet officiis.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt reprehenderit minus debitis excepturi eveniet laborum veritatis inventore ipsa, dolores dolore.</p>
                <a href="#" className="btn">learn more</a>
            </div>
        </div>
    </StyledAbout>
  )
}
