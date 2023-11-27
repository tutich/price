import logo from './logo.svg';
import './App.css';
import circlePat from '../src/images/pattern-circles.svg';

function App() {
  return (
    <div className="app">
     <div className="wrapper">
       <div className="header">
         <h2>Simple, traffic-based pricing</h2>
          <p>Sign-up for our 30 day trial. No credit card required.</p>
        </div>
        <div className="container">
          <div class="slide">
            <p>100K PAGEVIEWS</p>
            <input className='slider' type="range"/>
            <img
              src="./images/icon-slider.svg"
              alt=""
              class="slider-icon"
              draggable="true"/> 
              
            <span>$16.00<p>/ month</p></span>
          </div>
          <div className="pricing">
            <p>Monthly Billing</p>
            <label class="switch">
              <input type="checkbox"/>
              <span class="slider round"></span>
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
