import React from "react";
import '../Assets/CSS/Websites.css';
import {MyWebsites} from '../Components/Data'

function Websites () {

    const handleexporeWebsite = (e) => {
        var selectedredirect = e.target.getAttribute('data-redirect')
        window.open(selectedredirect, '_blank');
    }

    return (
        <div>
            <div className="main-heading-website-section container">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <h1 className="heading">Websites</h1>
                    <div className="underline"></div>
                </div>
                <div className="website-grid-container">
                    {
                        MyWebsites.map((eachwebsite) => {
                            return (
                                <div className="website-grid-items">
                                    <img src={eachwebsite.image} alt={eachwebsite.title} className="website-image" />
                                    <h3 className="website-name mb-3">{eachwebsite.title}</h3>
                                    <p className="website-description mb-4">{eachwebsite.description}</p>
                                    <div className="technologies-container d-flex mb-4">
                                        {
                                            eachwebsite.technologies.map((eachtech) => {
                                                return (
                                                    <div className="eachtech">{eachtech}</div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="explore-website" onClick={handleexporeWebsite} data-redirect={eachwebsite.redirect}>Explore <i class="bi bi-box-arrow-up-right"></i></div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Websites;