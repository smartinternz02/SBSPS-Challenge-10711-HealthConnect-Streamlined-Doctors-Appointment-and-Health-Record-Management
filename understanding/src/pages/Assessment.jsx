import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/Assessment.css'; // Import your custom CSS

const AssessmentCarousel = () => {
  const [responses, setResponses] = useState({});
  const questions = [
    'How often do you feel stressed?',
    'Do you experience trouble sleeping?',
    'What is your daily routine?',
    'What are the thoughts, feelings or behaviours that have been troubling you?',
    'Do you feel depressed or sad about your work? '
  ]; 
  const totalQuestions = questions.length;

  const handleResponse = (question, answer) => {
    setResponses({ ...responses, [question]: answer });
  };

  const handleSubmit = () => {
    // Submit the collected responses to the server
    console.log(responses);
  };

  return (
    <div className="assessment-container">
      <h2 className="assessment-heading">Mental Health Assessment</h2>
      <Carousel showThumbs={false} showArrows={true}>
        {questions.map((question, index) => (
          <div key={index} className="carousel-slide">
            <h3>{question}</h3>
            <input
              type="text"
              className="response-input"
              onChange={(e) => handleResponse(question, e.target.value)}
            />
            {index === totalQuestions - 1 && (
              <button className="submit-button" onClick={handleSubmit}>
                Submit
              </button>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default AssessmentCarousel;
