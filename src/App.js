import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import sliderIcon from '../src/images/icon-slider.svg';

const PricingDeets = {
  1: {
    pageviews: "10K",
    monthly: 8,
    yearly: 72,
  },
  2: {
    pageviews: "50k",
    monthly: 12,
    yearly: 108,
  },
  3: {
    pageviews: "100K",
    monthly: 16,
    yearly: 144,
  },
  4: {
    pageviews: "500k",
    monthly: 24,
    yearly: 216,
  },
  5: {
    pageviews: "1M",
    monthly: 36,
    yearly: 324,
  },
};

function App() {

  const [pageviews, setPageviews] = useState(3);
  const [isMonthly, setIsMonthly] = useState(true);

  function updateRangePosition(pageviews) {
    if (pageviews == 1) {
      return "0%";
    }
    if (pageviews == 5) {
      return "100%";
    }
    return `${(pageviews - 1) * 20}%`;
  }
  
  const handleConfirmClick = () => {
    
  };

  return (
    <div className="app">
     <div className="wrapper">
       <div className="header">
         <h2>Simple, traffic-based pricing</h2>
          <p>Sign-up for our 30 day trial. No credit card required.</p>
        </div>
        <div className="container">
          <div class="slide">
            <h2> &{pageViews}k PAGEVIEWS</h2>
            <div class="icon">
              <input className='slider' type="range"
               min={}
               max={}
               step={}
               value={pageViews}
               onChange={handleSliderChange}
              />
              <img
                src={sliderIcon}
                alt=""
                class="slider-icon"
                draggable="true"
              />
            </div>
              
            <span>${calculatePrice()}<p>/ month</p></span>
          </div>
          <div className="pricing">
            {/* <p>Monthly Billing</p> */}
            <label class="toggle-container">
            <span class="toggle-label">Monthly Billing</span>
              <input type="checkbox" className='toggle-checkbox'/>
              <div className='toggle-slider'>
                <div class="toggle-thumb"></div>
              </div>
          
            </label>
            <p>Yearly Billing  <span>25% discount</span></p>
            <hr/>
            <p>Unlimited Websites</p>
            <p>100% data ownership</p>
            <p>Email reports</p>
            <div className='but'>
              <button className="btn">Start my trial</button>
            </div>
       
          </div>
        </div>
       
     </div>
    </div>
  );
}

export default App;
