import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import banner1 from '../../../assets/img/benner/1.jpg'
import banner2 from '../../../assets/img/benner/2.jpg'
import banner3 from '../../../assets/img/benner/3.jpg'
import banner4 from '../../../assets/img/benner/4.jpg'
import banner5 from '../../../assets/img/benner/5.jpg'
import banner6 from '../../../assets/img/benner/6.jpg'

const Banner = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    return (
        <div>
             <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={6000}
  >
    <div data-src={banner1}  />
    <div data-src={banner2} />
    <div data-src={banner3} />
    <div data-src={banner4} />
    <div data-src={banner5} />
    <div data-src={banner6} />
  </AutoplaySlider>

        </div>
    );
};

export default Banner;