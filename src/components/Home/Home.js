import React from 'react';
import './Home.css';
// import img1 from '../../images/1.jpg';
// import img2 from '../../images/2.jpg';
// import img3 from '../../images/3.jpg';
import useData from '../../hooks/useData';
import Course from '../Classes/Course';
import { Carousel } from 'react-bootstrap';

const Home = () => {
    const [data] = useData();
    data.splice(4);
    return (
        <div>

            <h1>Upcoming Events: </h1>

            {/* home bonus/extra part................ */}

            <div className="slides my-5 container">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="slideshow d-block w-100"
                            src="https://now100fm.com/wp-content/uploads/sites/5/2018/01/GettyImages-833288036-e1521581817334.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <div className="bg-dark w-50 container">
                                <h3 className="text-warning">Charlie Puth Concert</h3>
                                <p>It is going to be held on december. He is one of our popular vocal instructor.</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="slideshow d-block w-100"
                            src="https://images.squarespace-cdn.com/content/v1/5804d617414fb5f8c4214140/1575031482406-VH6PZ3R3SX13P38IPZ18/Daniel+Korea+Recital%28Deagu%29-5.jpg?format=1000w"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <div className="bg-dark w-50 container">
                                <h3 className="text-warning">Claude Debussy Concert</h3>
                                <p>It is going to be held on January. He is one of our popular piano instructor.</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="slideshow d-block w-100"
                            src="https://guitar.com/wp-content/uploads/2020/03/GettyImages-1209823690-ben-gibbard-credit-john-medina-getty-images@1400x1050.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <div className="bg-dark w-50 container">
                                <h3 className="text-warning">Tom Morello Concert</h3>
                                <p>It is going to be held on January. He is one of our popular lead guitar instructor.</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>


            </div>



            {/* 4 services showing in home */}

            <h1>Music Classes: </h1>
            <div className="container cardss ps-5 me-0 pe-0">
                <div className="row row-cols-1 row-cols-md-2 g-4 mt-5">
                    {


                        data.map(data =>
                            <Course
                                key={data.id}
                                courses={data}
                            ></Course>)
                    }


                </div>
            </div>


        </div>


    );
};

export default Home;