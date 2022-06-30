import React from "react";
import "./styles.css";

class Pricing extends React.Component {
  state = {
    priceInputValue: "1",
    priceInput: {
      0: "10",
      1: "50",
      2: "100",
      3: "500",
      4: "1M",
    },
    priceOutput: {
      plan1: {
        0: ["$", "8.00", "/month"],
        1: ["$", "12.00", "/month"],
        2: ["$", "16.00", "/month"],
        3: ["$", "24.00", "/month"],
        4: ["$", "36.00", "/month"],
      },
    },
  };

  slider = React.createRef();
  sliderValue = React.createRef();

  componentDidMount() {
    this.slider.current.setAttribute("min", 0);
    this.slider.current.setAttribute(
      "max",
      Object.keys(this.state.priceInput).length - 1
    );
    this.thumbSize = parseInt(
      window
        .getComputedStyle(this.sliderValue.current)
        .getPropertyValue("--thumb-size"),
      10
    );
    this.handleSliderValuePosition(this.slider.current);
  }

  handlePricingSlide = (e) => {
    this.setState({ priceInputValue: e.target.value });
    this.handleSliderValuePosition(e.target);
  };

  handleSliderValuePosition = (input) => {
    const multiplier = input.value / input.max;
    const thumbOffset = this.thumbSize * multiplier;
    const priceInputOffset =
      (this.thumbSize - this.sliderValue.current.clientWidth) / 2;
    this.sliderValue.current.style.left =
      input.clientWidth * multiplier - thumbOffset + priceInputOffset + "px";
  };

  getPricingData = (obj, pos) => {
    return pos !== undefined
      ? obj[this.state.priceInputValue][pos]
      : obj[this.state.priceInputValue];
  };

  render() {
    return (
      <div className="pricing">
        <div className="pricing-items">
          <div className="pricing-paragraph">
            <p>{this.getPricingData(this.state.priceInput)}K PAGEVIEWS</p>
          </div>
          <div className="pricing-item-content">
            <span className="pricing-item-price-currency">
              {this.getPricingData(this.state.priceOutput.plan1, 0)}
            </span>
            <span className="pricing-item-price-amount">
              {this.getPricingData(this.state.priceOutput.plan1, 1)}
            </span>
            {this.getPricingData(this.state.priceOutput.plan1, 2)}
          </div>
        </div>
        <div className="pricing-slider center-content">
          <label className="form-slider">
            <input
              type="range"
              ref={this.slider}
              defaultValue={this.state.priceInputValue}
              onChange={this.handlePricingSlide}
            />
          </label>
          <div ref={this.sliderValue} className="pricing-slider-value">
            {/* {this.getPricingData(this.state.priceInput)} */}
          </div>
        </div>
      </div>
    );
  }
}

export default Pricing;
