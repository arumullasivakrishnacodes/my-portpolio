import React, { useState } from "react";
import '../Assets/CSS/Projects.css';
import {MyProjects} from '../Components/Data'

function Projects () {
    const [selectclass, setselectclass] = useState(false);
    const [selectoprtion, Setselectoption] = useState('All');
    // const [projectArray, SetprojectArray] = useState(MyProjects)

    const filteredProjects = MyProjects.filter((eachfilterproject) => {
        if (selectoprtion === "All") {
            return eachfilterproject;
        } else {
            return eachfilterproject.tech === selectoprtion;
        }
    });

    const handleprojectdropdown = () => {
        setselectclass(!selectclass);
    }

    const handleselectoption = (e) => {
        setselectclass(!selectclass);
        const selectedoptionvalue = e.target.getAttribute('data-tech');
        Setselectoption(selectedoptionvalue);
    }

    const handleexporeProject = (e) => {
        var selectedredirect = e.target.getAttribute('data-redirect')
        window.open(selectedredirect, '_blank');
    }

    return (
        <div>
            <div className="main-projection-section container">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <h1 className="heading">Projects</h1>
                    <div className="underline"></div>
                </div>

                <div className="filter-results">Filter By Technology</div>

                <div className="projects-dropdown-container d-flex flex-column justify-content-center align-items-center">
                    <div className={`${selectclass ? `select-active`: ``} project-select`} onClick={handleprojectdropdown}>{selectoprtion} <i class="bi bi-chevron-down"></i></div>
                    <div className={`${selectclass ? `option-active`: ``} options-container-section`}>
                        <div className="project-option" data-tech="All" onClick={handleselectoption}><i class="bi bi-globe"></i> All</div>
                        {
                            MyProjects.map((eachprojecttech, index) => {
                                return (
                                    <div key={index} className="project-option" data-tech={eachprojecttech.tech} onClick={handleselectoption}><img className="option-image" src={eachprojecttech.image} alt={eachprojecttech.tech} />{eachprojecttech.tech}</div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="showing-results">Showing {filteredProjects.length} Projects</div>

                <div className="projects-grid-template">
                    {
                        filteredProjects.map((eachproject,index) => {
                            const {title,technologies,image1} = eachproject;
                            return (
                                <div key={index} className="project-title">
                                    <img src={image1} alt={title} className="project-ind-image"/>
                                    <p className="project-titlee mt-3">{title}</p>
                                    <div className="project-technologies d-flex mb-4">
                                        {
                                            technologies.map((eachtechnology,index) => {
                                                return (
                                                <div key={index} className="individual-tech">{eachtechnology}</div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="explore-project" onClick={handleexporeProject} data-redirect={eachproject.redirect}>Explore <i class="bi bi-box-arrow-up-right"></i></div>
                                </div>
                                
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Projects;