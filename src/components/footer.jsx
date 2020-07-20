import React from 'react';

const Footer = () => {
    const inlineStyle = { marginTop: "10px", paddingTop: "10px", textAlign: "end" }
    return (
        // <div className="colorlib-footer" style={inlineStyle}>
        <div style={inlineStyle}>
            <p style={{ marginBottom: "0px" }}><small> Special Thanks and <i className="icon-heart" aria-hidden="true"></i> to <a href="https://colorlib.com" target="_blank">Colorlib</a>
            </small></p>
        </div>
    )
}

export default Footer;