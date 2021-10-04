import React from 'react';
import useData from '../../hooks/useData';
import Course from '../Classes/Course';
import './Services.css';

const Services = () => {
    const [data] = useData();
    return (
        <div className="services">
            <h1>All of our Current Services:</h1>
            <div className="container ps-5 me-0 pe-0">

                <div className="row row-cols-1 row-cols-md-2 g-4 mt-5 ">
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

export default Services;