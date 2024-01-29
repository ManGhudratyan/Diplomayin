import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Clock(props) {
  return (
    <Svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      fill="none"
      opacity={.5}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12 8v4l2.5 2.5"
        stroke="#1C274C"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 3.338A9.954 9.954 0 0112 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"
        stroke="#1C274C"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default Clock
