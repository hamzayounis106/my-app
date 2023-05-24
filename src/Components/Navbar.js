import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

    return (
        <div>
            <nav className={`navbar bg-${props.mode}`} data-bs-theme={`${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">TextForm</Link>
                    <Link className="navbar-brand" to="/about">About</Link>


                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        {/* <input className="form-check-input" onClick={props.tooglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.modetext}</label> */}
                        <div className="container">
                        <button type="button" className="btn btn-success" onClick={props.greenmode}></button>
                        <button type="button" className="btn btn-warning"  onClick={props.yellowmode}></button>
                        <button type="button" className="btn btn-info"  onClick={props.bluemode}></button>
                        <button type="button" className="btn btn-light"  onClick={props.lightmode}></button>
                        <button type="button" className="btn btn-dark" onClick={props.darkmode}></button>

                    </div>
                    </div>
                   

                </div>
            </nav>
        </div>
    )
}
