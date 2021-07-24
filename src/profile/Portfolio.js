import React from "react";
import prototypes from "prop-types";
import image from "./FSD.jpg";
const Portfolio = ({fullName, bio , profession , children}) => {
   const styleObject = { color:"red"}
    const handleName = () => {
        alert (`My name is ${fullName}`)
    }
    return (
        <div className="page">
            <h1 style={styleObject}>{fullName}</h1>
            <button className="btn" onClick={handleName}>press here</button>
            <div>
                <h2 className="portfolio">Portfolio</h2>
                <img className="img" src={image} alt="FSD"/>{children}
                <h3 className="bio">{bio}</h3>
                <h3 className="profession">{profession}</h3>
            </div>
        </div>
    )
}
Portfolio.defaultProps = {
    fullName :"KADHI Seifeddine",
    bio : "Fullstack JS developer",
    profession : "Electrical & Embedded software Engineer"
};
Portfolio.prototype={
    fullName : prototypes.string,
    bio : prototypes.string,
    profession : prototypes.string,
};

export default Portfolio;



