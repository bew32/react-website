import './about.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'

const About = () => {
    return (
        <>
            <Header title="About Us" image={HeaderImage}>
            It is a long established fact that a reader will be distracted by the readable 
            content of a page when looking at its layout. The point of using Lorem Ipsum is 
            that it has a more-or-less normal distribution of letters
            </Header>

            <section className="about__story">
                <div className="container about__story-container">
                    <div className="about__section-image">
                        <img src={StoryImage} alt="Our Story Image" />
                    </div>
                    <div className="about__section-content">
                        <h1>Our Story</h1>
                        <p>
                            It is a long established fact that a reader will be distracted by 
                            the readable content of a page
                        </p>
                        <p>
                            It is a long established fact that a reader will be distracted by 
                            the readable content of a page
                        </p>
                        <p>
                            It is a long established fact that a reader will be distracted by 
                            the readable content of a page
                        </p>
                    </div>
                </div>
            </section>

            <section className="about__Vision">
                <div className="container about__Vision-container">
                    <div className="about__section-content">
                        <h1>Our Vision</h1>
                        <p>
                            It is a long established fact that a reader will be distracted by 
                            the readable content of a page
                        </p>
                        <p>
                            It is a long established fact that a reader will be distracted by 
                            the readable content of a page
                        </p>
                    </div>
                    <div className="about__section-image">
                        <img src={VisionImage} alt="Our Vision Image" />
                    </div>
                </div>
            </section>

            <section className="about__mission">
                <div className="container about__mission-container">
                    <div className="about__section-image">
                        <img src={MissionImage} alt="Our Mission Image" />
                    </div>
                    <div className="about__section-content">
                        <h1>Our Mission</h1>
                        <p>
                            It is a long established fact that a reader will be distracted by 
                            the readable content of a page
                        </p>
                        <p>
                            It is a long established fact that a reader will be distracted by 
                            the readable content of a page
                        </p>
                        <p>
                            It is a long established fact that a reader will be distracted by 
                            the readable content of a page
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About