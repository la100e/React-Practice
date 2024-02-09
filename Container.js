import React from 'react'
import StyleContainer from '../styledComponents/StyledContainer'

export default function Container() {
  return (
    <StyleContainer>
        <div className="icons">
            <img src="wallpapers/icon1.png" alt=""/>
            <div className="info">
                <h3>free delivery</h3>
                <span>on all orders</span>
            </div>
        </div>
        <div className="icons">
            <img src="wallpapers/icon2.png" alt=""/>
            <div className="info">
                <h3>3 days returns</h3>
                <span>money back garantee </span>
            </div>
        </div>
        <div className="icons">
            <img src="wallpapers/icon3.png" alt=""/>
            <div className="info">
                <h3>offers & gifts</h3>
                <span>on all orders</span>
            </div>
        </div>
        <div className="icons">
            <img src="wallpapers/icon4.png" alt=""/>
            <div className="info">
                <h3>secure payments</h3>
                <span>protected by paypal</span>
            </div>
        </div>
    </StyleContainer>
  )
}
