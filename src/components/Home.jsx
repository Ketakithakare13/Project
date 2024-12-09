import React from "react";
import { Container, Button, Carousel, CarouselCaption } from "react-bootstrap";
import "../App.css";

function Home() {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src="/images/nav1.avif"
                    />
                    <Carousel.Caption>
                        <div className="d-flex justify-content-center my-3">
                            <div className="container1">
                                <div className="form-item">
                                    <p>I'm looking for</p>
                                    <select className="form-select mx-2" style={{ maxWidth: "150px" }}>
                                        <option value="male">Men</option>
                                        <option value="male">Men</option>
                                        <option value="female">Woman</option>
                                    </select>
                                </div>
                                <div style={{ marginLeft: "25px" }}>
                                    <p>aged</p>
                                    <select className="form-select mx-3" style={{ maxWidth: "150px" }}>
                                    {[...Array(30)].map((_, index) => (
                                            <option key={index} value={index + 21}>
                                                {index + 21}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div style={{ marginLeft: "43px",marginTop: "22px"}}>to</div>
                                <div style={{ marginTop: "40px", marginLeft: "10px" }}> 
                                <select className="form-select mx-3" style={{ maxWidth: "150px" }}>
                                        {[...Array(30)].map((_, index) => (
                                            <option key={index} value={index + 21}>
                                                {index + 21}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div style={{ marginLeft: "25px" }}>
                                    <p>of religion</p>
                                    <select className="form-select mx-3" style={{ maxWidth: "150px" }}>
                                        <option value="religion">Religion</option>
                                        <option value="hindu">Hindu</option>
                                        
                                        <option value="muslim">Muslim</option>
                                        <option value="Sikh">Sikh</option>
                                        <option value="Jain">Jain</option>
                                        <option value="Christian">Christian</option>
                                    </select>
                                </div>
                                <Button variant="success" className="mx-5" style={{ marginTop: "40px" }}>
                                    Let's Begin
                                </Button>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/nav1.webp"
                    />
                   <Carousel.Caption>
                        <div className="d-flex justify-content-center my-3">
                            <div className="container1">
                                <div>
                                    <p>I'm looking for</p>
                                    <select className="form-select mx-2" style={{ maxWidth: "150px" }}>
                                        <option value="male">Men</option>
                                        <option value="male">Men</option>
                                        <option value="female">Woman</option>
                                    </select>
                                </div>
                                <div style={{ marginLeft: "25px" }}>
                                    <p>aged</p>
                                    <select className="form-select mx-3" style={{ maxWidth: "150px" }}>
                                    {[...Array(30)].map((_, index) => (
                                            <option key={index} value={index + 21}>
                                                {index + 21}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div style={{ marginLeft: "43px",marginTop: "22px" }}>to</div>
                                <div style={{ marginTop: "40px", marginLeft: "10px" }}> 
                                <select className="form-select mx-3" style={{ maxWidth: "150px" }}>
                                        {[...Array(30)].map((_, index) => (
                                            <option key={index} value={index + 21}>
                                                {index + 21}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div style={{ marginLeft: "25px" }}>
                                    <p>of religion</p>
                                    <select className="form-select mx-3" style={{ maxWidth: "150px" }}>
                                        <option value="religion">Religion</option>
                                        <option value="hindu">Hindu</option>
                                        <option value="muslim">Muslim</option>
                                       
                                        <option value="Sikh">Sikh</option>
                                        <option value="Jain">Jain</option>
                                        <option value="Christian">Christian</option>
                                    </select>
                                </div>
                                <Button variant="success" className="mx-5" style={{ marginTop: "40px" }}>
                                    Let's Begin
                                </Button>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/nav3.avif"
                    />
                    <Carousel.Caption>
                        <div className="d-flex justify-content-center my-3">
                            <div className="container1">
                                <div>
                                    <p>I'm looking for</p>
                                    <select className="form-select mx-2" style={{ maxWidth: "150px" }}>
                                        <option value="male">Men</option>
                                        <option value="male">Men</option>
                                        <option value="female">Woman</option>
                                    </select>
                                </div>
                                <div style={{ marginLeft: "25px" }}>
                                    <p>aged</p>
                                    <select className="form-select mx-3" style={{ maxWidth: "150px" }}>
                                    {[...Array(30)].map((_, index) => (
                                            <option key={index} value={index + 21}>
                                                {index + 21}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div style={{ marginLeft: "43px",marginTop: "22px" }}>to</div>
                                <div style={{ marginTop: "40px", marginLeft: "10px" }}> 
                                <select className="form-select mx-3" style={{ maxWidth: "150px" }}>
                                        {[...Array(30)].map((_, index) => (
                                            <option key={index} value={index + 21}>
                                                {index + 21}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div style={{ marginLeft: "25px" }}>
                                    <p>of religion</p>
                                    <select className="form-select mx-3" style={{ maxWidth: "150px" }}>
                                        <option value="religion">Religion</option>
                                        <option value="hindu">Hindu</option>
                                        <option value="muslim">Muslim</option>
                                        <option value="Sikh">Sikh</option>
                                        <option value="Jain">Jain</option>
                                        <option value="Christian">Christian</option>
                                    </select>
                                </div>
                                <Button variant="success" className="mx-5" style={{ marginTop: "40px" }}>
                                    Let's Begin
                                </Button>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="images/nav4.avif"
                    />
                    <Carousel.Caption>
                        <div className="d-flex justify-content-center my-3">
                            <div className="container1">
                                <div>
                                    <p>I'm looking for</p>
                                    <select className="form-select mx-2" style={{ maxWidth: "150px" }}>
                                        <option value="male">Men</option>
                                        <option value="male">Men</option>
                                        <option value="female">Woman</option>
                                    </select>
                                </div>
                                <div style={{ marginLeft: "25px" }}>
                                    <p>aged</p>
                                    <select className="form-select mx-3" style={{ maxWidth: "150px" }}>
                                    {[...Array(30)].map((_, index) => (
                                            <option key={index} value={index + 21}>
                                                {index + 21}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div style={{ marginLeft: "43px",marginTop: "22px" }}>to</div>
                                <div style={{ marginTop: "40px", marginLeft: "10px" }}> 
                                <select className="form-select mx-3" style={{ maxWidth: "150px" }}>
                                        {[...Array(30)].map((_, index) => (
                                            <option key={index} value={index + 21}>
                                                {index + 21}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div style={{ marginLeft: "25px" }}>
                                    <p>of religion</p>
                                    <select className="form-select mx-3" style={{ maxWidth: "150px" }}>
                                        <option value="religion">Religion</option>
                                        <option value="hindu">Hindu</option>
                                        <option value="muslim">Muslim</option>
                                        <option value="Sikh">Sikh</option>
                                        <option value="Jain">Jain</option>
                                        <option value="Christian">Christian</option>
                                    </select>
                                </div>
                                <Button variant="success" className="mx-5" style={{ marginTop: "40px" }}>
                                    Let's Begin
                                </Button>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Home;
