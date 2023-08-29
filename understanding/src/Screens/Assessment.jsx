
import React, { useState } from 'react';
import axios from 'axios';
import img1 from "../Assets/Psychology1.jpg";
import '../styles/Assessment.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../Component/Footer';


const AssessmentCarousel = () => {
  const navigate =useNavigate();
  const [userInput, setUserInput] = useState('');

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      // await axios.post('http://127.0.0.1:5000/chat', {
      //   user_input: userInput
      // });
      navigate("/psychologist-finder")
      
      
    } catch (error) {
      console.error('Error submitting assessment:', error);
    }
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
        <h2 className="assessment-heading">Mental Health Talk</h2>
        <form onSubmit={handleForm}>
          <h3>Write what you are feeling currently/your query</h3>
          <textarea
            className="response-input"
            onChange={handleUserInput}
            value={userInput}
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>

      </div>

    </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default AssessmentCarousel;
