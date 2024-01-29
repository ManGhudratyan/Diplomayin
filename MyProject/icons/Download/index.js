import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width="800px"
      height="550px"
      viewBox="2 -100 430 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M16 11l-4 4m0 0l-4-4m4 4V3m9 12v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent
