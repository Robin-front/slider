/* eslint-disable react/prop-types */

import 'rc-slider/assets/index.less';
import 'rc-tooltip/assets/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const wrapperStyle = { width: 400, margin: 50 };

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

class Precision extends React.Component {
  state = {
    precision: 2,
  }

  changeprecision = (e) => {
    this.setState({
      precision: Number(e.target.value),
    });
  }

  render() {
    const precision = this.state.precision;
    return (
      <div>
        <div style={wrapperStyle}>
          precision:
          <input
            type="number"
            onChange={this.changeprecision}
            value={precision}
          />
        </div>
        <div style={wrapperStyle}>
          <p>Slider with custom handle</p>
          <Slider
            min={0}
            max={20}
            defaultValue={3}
            step={0.01}
            handle={handle}
            precision={precision}
          />
        </div>
        <div style={wrapperStyle}>
          <p>Range with custom handle</p>
          <Range
            min={0}
            max={20}
            defaultValue={[3, 10]}
            tipFormatter={value => `${value}%`}
            precision={precision}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Precision />, document.getElementById('__react-content')
);
