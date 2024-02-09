import React from 'react'
import StyledHome from '../styledComponents/StyledHome'

export default function Home() {
  
  return (
    <StyledHome className="home" id="home">
      <div className="content">
          <h3>fresh flowers</h3>
          <span>natural & beautiful flowers</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, dolorem corrupti. Eum officiis, fugiat soluta incidunt ducimus hic veniam suscipit.</p>
          <a href="products.php" className="btn">shop now</a>
      </div>
    </StyledHome>
  )
}
