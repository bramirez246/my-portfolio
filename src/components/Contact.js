import React from "react";
import Stack from "react-bootstrap/Stack";

class Contact extends React.Component {
    render () {
        return (
            <section id="contact-section">
                <div className="contact-container text-center">
                    <h1 className="section-title">Contact Me</h1>
                    <hr className="section-hr border border-primary border-2 opacity-75 mx-auto"></hr>
                    <div className="email-container d-flex align-items-center justify-content-center mt-5">
                        <div className="email-content">
                            <Stack direction={"horizontal"} gap={3}>
                                <div className="gmail-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" viewBox="0 0 256 193">
                                        <path fill="#4285F4" d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455h40.727Z"/>
                                        <path fill="#34A853" d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798v98.91Z"/>
                                        <path fill="#EA4335" d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z"/>
                                        <path fill="#FBBC04" d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945l-16.292 12.218Z"/>
                                        <path fill="#C5221F" d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23v23.273Z"/>
                                    </svg>
                                </div>
                                <p className="email my-auto">bramirez246@gmail.com</p>
                            </Stack>
                        </div>
                    </div>
                    
                    <div className="phone-container d-flex align-items-center justify-content-center text-sm-center">
                    <div className="phone-content">
                        <Stack direction={"horizontal"} gap={3}>
                                <div className="phone-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" viewBox="0 0 16 16">
                                        <g fill="currentColor">
                                            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                                            <path d="M8 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2z"/>
                                        </g>
                                    </svg>
                                </div>
                                <p className="phone-number my-auto">+1(951) 796-1264</p>
                        </Stack>
                    </div>
                        
                    </div>
                    <div className="socials-container d-flex align-items-center justify-content-center pt-3">
                        <Stack direction={"horizontal"} gap={3}>
                            <a href="https://www.github.com/bramirez246" target="_blank" rel="noreferrer noopener" className="github-icon-link">
                                <div className="github-svg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="62" viewBox="0 0 1024 1024">
                                        <path fill="currentColor"
                                        d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5C64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 
                                        726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9c26.4 39.1 77.9 32.5 104 26c5.7-23.5 17.9-44.5 34.7-60.8c-140.6-25.2-199.2-111-199.2-213c0-49.5 
                                        16.3-95 48.3-131.7c-20.4-60.5 1.9-112.3 4.9-120c58.1-5.2 118.5 41.6 123.2 45.3c33-8.9 70.7-13.6 112.9-13.6c42.4 0 80.2 4.9 113.5 13.9c11.3-8.6 67.3-48.8 
                                        121.3-43.9c2.9 7.7 24.7 58.3 5.5 118c32.4 36.8 48.9 82.7 48.9 132.3c0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9c177.1-59.7 
                                        304.6-227 304.6-424.1c0-247.2-200.4-447.3-447.5-447.3z"/>
                                    </svg>
                                </div>
                            </a>

                            <a href="https://www.instagram.com/bramirez246/" target="_blank" rel="noreferrer noopener" className="instagram-icon-link" >
                                <div className="instagram-svg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="68" viewBox="0 0 1024 1024">
                                        <path fill="currentColor" 
                                        d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1S717.1 625.5 717.1 
                                        512S625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7S645.3 438.6 
                                        645.3 512S585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9s47.9-21.3 
                                        47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165c-3.1-64-17.7-120.8-64.5-167.6c-46.9-46.9-103.6-61.4-167.6-64.5c-55.2-3.1-109.9-2.6-165-2.6c-55.2 0-109.9-.5-165 2.6c-64 
                                        3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6c46.9 46.9 103.6 61.4 167.6 64.5c55.2 3.1 109.9 2.6 165 2.6c55.2 0 
                                        109.9.5 165-2.6c64-3.1 120.8-17.7 167.6-64.5c46.9-46.9 61.4-103.6 64.5-167.6c3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8c-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 
                                        840c-58.3 0-183.3 4.7-235.9-16.1c-18.2-7.3-31.8-16.1-45.8-30.2c-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9c7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 
                                        184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2c14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"/>
                                    </svg>
                                </div>
                            </a>
                            
                            <a href="https://www.linkedin.com/in/brian-ramirez-91b504261/" target="_blank" rel="noreferrer noopener" className="linkedin-icon-link">
                                <div className="linkedin-svg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="49" viewBox="0 0 16 16">
                                        <path fill="currentColor"
                                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 
                                        14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248c-.822 
                                        0-1.359.54-1.359 1.248c0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 
                                        0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 
                                        .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                                    </svg>
                                </div>
                            </a>
                        </Stack>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact;