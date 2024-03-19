import React from 'react';
import "./index.css";

 const quizData = [
        {
            question: 'What is your name?',
            answer: 'Ahad Ali',
            feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate!"
        },
        {
            question: 'What is your father name?',
            answer: 'Talhah Yunus',
            feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate!"

        },
        {
            question: 'Where do you live?',
            answer: 'Karachi',
            feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate!"

        },
        {
            question: 'What is your qualifications?',
            answer: 'Intermediate',
            feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Cupiditate!"

        },
        {
            question: 'Tell us about yourself?',
            answer: 'I am a frontend web developer with 2 years of experience.',
            feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate!"

        },
        {
            question: 'Where did you learn this course?',
            answer: 'From Saylani Welfare IT Institute.',
            feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Cupiditate!"

        },
    ];
import Rating from '@mui/material/Rating';


const SuccessScreen = () => {
   

    
    const grade = () => {
       
        if (grade >= 7) {
            return 'A';
        } else if (grade >= 4) {
            return 'B';
        } else if (grade >= 1) {
            return 'C';
        }
    }

   
    return (
        <div className="success-scr-container">
            <div className="success-box">
                <p className="success-heading">Thank You</p>
                <div className="question-answer-list">
                    {quizData.map((data, index) => (
                        <div key={index} className="question-answer">
                            <p className="question">Question :{data.question}</p>
                            <p className="answer">Answer :{data.answer}</p>
                            <p className="feedback">Feedback :{data.feedback}</p>
                            {grade === 'A' ? (
                                <Rating name="half-rating-read" defaultValue={1.5} precision={0.5} readOnly  style={{ fontSize: 20,  marginLeft: "510px" }}/>
                            ) : grade === 'B' ? (
                                <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly  style={{ fontSize: 20,  marginLeft: "510px" }} />
                            ) : (
                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly   style={{ fontSize: 20,  marginLeft: "510px" }} />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SuccessScreen;
