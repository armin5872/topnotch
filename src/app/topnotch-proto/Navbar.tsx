/** @jsxImportSource @emotion/react */
"use client";

import { css } from "@emotion/react";

const navbarBtn = css`
    transition-duration : 0.4s;
    &:hover {
        background-color: orange !important;
    }
`
const navbarBrand = css`
    transition-duration : 0.4s;
    &:hover {
        transform : scale(1.1);
        backgroundcolor: skyblue !important;
    }
`
export default function Navbar () {
    return(
    <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-light">
        <div className="container-fluid my-2 limelight-regular">
            <ul className="navbar-nav"> 
                <li css = {navbarBtn} className="nav-item px-1 fs-5 rounded-2 mx-2 bg-info"><a className="nav-link" href="#">Home</a></li>
                <li css = {navbarBtn} className="nav-item px-1 fs-5 rounded-2 mx-2 bg-info"><a className="nav-link" href="#">Log In</a></li>
                <li css = {navbarBtn} className="nav-item px-1 fs-5 rounded-2 mx-2 bg-info"><a className="nav-link" href="#">Sign up</a></li>
                <li css = {navbarBtn} className="nav-item px-1 fs-5 rounded-2 mx-2 bg-info"><a className="nav-link" href="#">Contact Us</a></li>
                <li css = {navbarBtn} className="nav-item px-1 fs-5 rounded-2 mx-2 bg-info"><a className="nav-link" href="#">About Us</a></li>
                <li css = {navbarBtn} className="nav-item px-1 fs-5 rounded-2 mx-2 bg-info"><a className="nav-link" href="#">FAQ</a></li>
                <li css = {navbarBtn} className="nav-item px-1 fs-5 rounded-2 mx-2 bg-info"><a className="nav-link" href="#">Our programmers</a></li>
                <li css = {navbarBtn} className="nav-item px-1 fs-5 rounded-2 mx-2 bg-info"><a className="nav-link" href="#">Our Services</a></li>
            </ul>
            <a css = {navbarBrand} className="navbar-brand michroma-regular p-2 fw-bold bg-info ms-auto rounded-4" href="#">
                Topnotch
            </a>
        </div>
    </nav>
    )
}