import Image from 'next/image';

const MapBox = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.3193267728525!2d145.71638831470554!3d-17.00799978830695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x69786263f3f4fc91%3A0x96002fb594e342c5!2s133%20Timberlea%20Dr%2C%20Bentley%20Park%20QLD%204869%2C%20Australia!5e0!3m2!1sen!2sno!4v1647164327358!5m2!1sen!2sno"
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      className="absolute top-0 left-0 w-full h-full"
    ></iframe>
  );
};

export default MapBox;
