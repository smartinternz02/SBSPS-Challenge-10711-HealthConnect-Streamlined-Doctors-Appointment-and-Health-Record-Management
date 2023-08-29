
import React, { useState } from 'react';
import axios from 'axios';
import img1 from "../Assets/Psychology1.jpg";
import '../styles/Assessment.css'; 

const AssessmentCarousel = () => {
  const [responses, setResponses] = useState({});
  
  const questions = [
    {
      text: 'How often do you feel stressed?',
      options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always']
    },
    {
      text: 'Do you experience trouble sleeping?',
      options: ['No', 'Yes']
    },
    {
      text: 'Are you satisfied with your daily routine?',
      options: ['Yes', 'No']
    }
  ]; 
  const totalQuestions = questions.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleResponse = (question, answer) => {
    setResponses({ ...responses, [question]: answer });
  };

  const handleNext = () => {
    const currentQuestion = questions[currentIndex];
    const currentResponse = responses[currentQuestion.text];

    if (!currentResponse) {
      alert('Please select an option for the current question.');
      return;
    }

    setCurrentIndex(currentIndex + 1);
  };

  const handleSubmit = () => {
    // Submit the collected responses to the server
    
    console.log(responses);
    
    // Send responses to the server
      
  };

  return (
    <>
    <div className="cont">
    <div className="assessment-container">
      <div className="image-section">
        <img
          src={img1}
          alt="Doctor's Office"
        />
      </div>
       <div className="carousel-section">
      <h2 className="assessment-heading">Mental Health Assessment</h2>
      <Carousel
        showThumbs={false}
        showArrows={true}
        selectedItem={currentIndex}
      >
        {questions.map((question, index) => (
          <div key={index} className="carousel-slide">
            <h3 >{question.text}</h3>
            <select
              className="response-input"
              onChange={(e) => handleResponse(question.text, e.target.value)}
              value={responses[question.text] || ''}
            >
              <option value="">Select an option</option>
              {question.options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {index < totalQuestions - 1 && (
              <button className="next-button" onClick={handleNext}>
                Next
              </button>
            )}
            {index === totalQuestions - 1 && (
              <button className="submit-button" onClick={handleSubmit}>
                Submit
              </button>
            )}
          </div>
        ))}
      </Carousel>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default AssessmentCarousel;
