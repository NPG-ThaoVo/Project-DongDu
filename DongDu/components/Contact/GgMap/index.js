import Head from "next/head";
const GgMap = (props) => {
  return (
    <div>
      <Head>
        <link
          key="/css/contact-banner.css"
          rel="stylesheet"
          href="/css/contact-banner.css"
        />
      </Head>
      <div className="map-holder embed-responsive-21by9 grayscaled-map">
        <iframe
          className="embed-responsive-item"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.0605547231917!2d-0.33554378354576586!3d51.47540277962994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760cf99dee6c25%3A0xc9d2780dbbcbb933!2sLondon+Rd%2C+Isleworth+TW7%2C+UK!5e0!3m2!1sen!2snp!4v1473394388477"
          height="450"
          style={{ border: 0 }}
        ></iframe>
      </div>
    </div>
  );
};

export default GgMap;
