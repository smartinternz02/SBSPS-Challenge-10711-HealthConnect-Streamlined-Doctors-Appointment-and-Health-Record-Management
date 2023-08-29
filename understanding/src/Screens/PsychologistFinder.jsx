
import React, { useState, useEffect } from 'react';
import img1 from "../Assets/Psychology2.jpg";
import axios from 'axios';

const PsychologistFinder = () => {
  const [psychologists, setPsychologists] = useState([]);

  useEffect(() => {
    // Fetch psychologists based on user's current location
    const fetchPsychologists = async () => {
      try {
        
        const response = await axios.get("http://localhost:8080/api/auth/psychologists"); 
        console.log("YOGITA");
        setPsychologists(response.data);
      } catch (error) {
        console.error('Error fetching psychologists:', error);
      }
    };

    fetchPsychologists();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ flex: 1, padding: '10px' }}>
        <img
          src={img1} 
          alt="Psychologist Finder"
          style={{ width: '60%', height: 'auto' }}
        />
      </div>
      <div style={{ flex: 1, padding: '10px', backgroundColor: 'white', boxShadow: '0 0 10px #e8a5c8' }}>
        <h2 style={{color:'d75585',font : '24px'}}>Psychologists Near You</h2>
        <ul style={styles.psychologistList}>
          {psychologists.map((psychologist) => ( 
            <li key={psychologist.id} style={styles.psychologistItem}>
              <h3>{psychologist.name}</h3>
              <p>Location: {psychologist.location}</p>
              <p>Contact: {psychologist.contact}</p>
            </li>
          ))}
        </ul>
        
      </div>
    </div>
  );
};
const styles = {
  psychologistList: {
     listStyleType: 'none',
    padding: 0,
    margin: 0,
   
  },
  psychologistItem: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    margin: '10px 0',
    backgroundColor: '#f8f8f8',
    boxShadow: '0 0 5px #ccc',
  },
};
export default PsychologistFinder;


