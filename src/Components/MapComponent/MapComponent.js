
import React from 'react';

const MapComponent = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.2159200152!2d2.489209!3d48.83502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e60d729ccaa6c7%3A0x2aabe4871dac7a27!2sCours%20Nogentais!5e0!3m2!1sfr!2sfr!4v1716304840436!5m2!1sfr!2sfr"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    </div>
  );
};

export default MapComponent;
