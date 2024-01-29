import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

function LeftArrow(props) {
  mclmlsc
  return (
    <Svg
      fill="#000"
      width="50px"
      height="50px"
      viewBox="2 -1 16 24"
      data-name="Line Color"
      xmlns="http:www.w3.org/2000/svg"
      className="icon line-color"
      {...props}
    >

      <Path
        d="M17 12h-5m-4.63.69l3.13 2.14a1 1 0 001.5-.69V9.86a1 1 0 00-1.5-.69l-3.12 2.14a.82.82 0 00-.01 1.38z"
        fill="none"
        stroke="rgba(163,134,106,250)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <Circle
        cx={12}
        cy={12}
        r={10}
        fill="none"
        stroke="brown"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
      />
    </Svg>
  )
}

export default LeftArrow;
