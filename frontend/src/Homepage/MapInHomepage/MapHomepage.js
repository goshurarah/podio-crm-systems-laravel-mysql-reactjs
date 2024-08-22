import React from 'react';
import "./../MapInHomepage/MapHomepageStyle.css"
function MapHomepage() {
  return (
    <div className='main_div_map_hoempage'>
    <div className='row'>
      <div className='col-lg-6 col-md-12 col-12 p-0 m-0 '>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.2018527719247!2d74.25805527623903!3d31.40856425265624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901a4df466703%3A0xa9ba717b98084f51!2s360SynergyTech%20(Pvt.)%20Ltd!5e0!3m2!1sen!2s!4v1704355694100!5m2!1sen!2s"
          width="100%"
          height="480"
          className='map_setting_style'
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className='col-lg-6 col-md-12 col-12 p-0 m-0'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.9322694175667!2d174.77831039999998!3d-36.86804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d4876cb032351%3A0x28f87b4e3c895fb7!2s160%2F160%20Broadway%2C%20Newmarket%2C%20Auckland%201023%2C%20New%20Zealand!5e0!3m2!1sen!2s!4v1704355753284!5m2!1sen!2s"
          width="100%"
          height="480"
          className='map_setting_style'
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    </div>
  );
}

export default MapHomepage;
