import Carousel  from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import { Container, Row, Col } from "react-bootstrap";
import meter1 from "../Assets/Images/meter1.svg"
import meter2 from "../Assets/Images/meter2.svg"
import meter3 from "../Assets/Images/meter3.svg"
import colorSharp from "../Assets/Images/color-sharp.png"

 
export const Skills=()=>{

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 
        }
      };

      return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p>
                            blah blah blah blah blah
                        </p>
                        <Carousel responsive={responsive} infinite = {true} className="skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image"/>
                                <h5>
                                    front end development
                                </h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image"/>
                                <h5>
                                    java development
                                </h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image"/>
                                <h5>
                                    backend development
                                </h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image"/>
                                <h5>
                                    AIML
                                </h5>
                            </div>
                            
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>

            <img src={colorSharp} className="background-image-left"/>
        </section>
      )
}