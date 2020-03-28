import React from "react";
import "./style.css";
import { CheckCircle } from "@material-ui/icons";
class CircularProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // Size of the enclosing square
    const sqSize = this.props.sqSize;
    // SVG centers the stroke width on the radius, subtract out so circle fits in square
    const radius = (this.props.sqSize - this.props.strokeWidth) / 2;
    // Enclose cicle in a circumscribing square
    const viewBox = `0 0 ${sqSize} ${sqSize}`;
    // Arc length at 100% coverage is the circle circumference
    const dashArray = radius * Math.PI * 2;
    // Scale 100% coverage overlay with the actual percent
    const dashOffset = dashArray - (dashArray * this.props.percentage) / 100;

    return (
      <svg
        width={this.props.sqSize}
        height={this.props.sqSize}
        viewBox={viewBox}
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "rgba(9,9,121)", stopOpacity: 1 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: "rgba(4,127,199)", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <circle
          className="circle-background"
          cx={this.props.sqSize / 2}
          cy={this.props.sqSize / 2}
          r={radius}
          strokeWidth={`${this.props.strokeWidth}px`}
        />
        <circle
          className="circle-progress"
          cx={this.props.sqSize / 2}
          cy={this.props.sqSize / 2}
          r={radius}
          stroke={this.props.percentage == 100 ? "#00C851" : "url(#grad1)"}
          strokeWidth={`${this.props.strokeWidth}px`}
          // Start progress marker at 12 O'Clock
          transform={`rotate(-90 ${this.props.sqSize / 2} ${this.props.sqSize /
            2})`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset
          }}
        />
        <text
          className="circle-text"
          x="50%"
          y="50%"
          dy=".3em"
          textAnchor="middle"
        >
          {`${this.props.percentage}%`}
        </text>
        <text
          className="circle-text-2"
          x="50%"
          y="65%"
          dy=".01em"
          textAnchor="middle"
          style={
            this.props.percentage === 100 ? { opacity: 1 } : { opacity: 0 }
          }
        >
          {`Target Achieved!`}
        </text>
      </svg>
    );
  }
}

CircularProgressBar.defaultProps = {
  sqSize: 200,
  percentage: 25,
  strokeWidth: 10
};

export default CircularProgressBar;
