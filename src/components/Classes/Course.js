import React from 'react';
import './Course.css';

const Course = (props) => {
    const { name, level, instructor, Duration, image_path, certificate, cost } = props.courses;

    return (
        <div className="col">
            <div className="card h-100 crd-img">
                <img src={image_path} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <br />
                    <p className="card-text text-start">Level: {level}</p>
                    <p className="card-text text-start">Instructor: {instructor}</p>
                    <p className="card-text text-start">Duration: {Duration}</p>
                    <p className="card-text text-start">Certification: {certificate}</p>
                    <p className="card-text text-start">Cost: {cost}</p>
                </div>
            </div>
        </div>
    );
};

export default Course;