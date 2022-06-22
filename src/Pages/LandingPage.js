import React from 'react'
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="landing__page py-5 container-fluid d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row justify-content-center">
          <Link to="/mint" className="col-md-6">
            <img src="/images/blackBox.png" className="hero_img w-100" alt="" />
          </Link>
        </div>
      </div>
    </div>
  )
}
