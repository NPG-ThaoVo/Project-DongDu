import Banner from "../../components/Contact/Banner/index.js";
import TouchForm from "../../components/Contact/TouchForm/index.js";
import GgMap from "../../components/Contact/GgMap/index.js";
import Slider from "../../components/Contact/Slider/index.js";
const Contact = (props) => {
  return (
    <div>
      <Banner />
      <TouchForm />
      <GgMap />
      <Slider />
    </div>
  );
};
export default Contact;
