import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Link(props) {
  return (
    <Svg
      width="25px"
      height="25px"
      viewBox="-1 -2 22 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M15.197 3.355c1.673-1.68 4.25-1.816 5.757-.305 1.506 1.512 1.37 4.1-.303 5.78l-2.424 2.433M10.047 14c-1.507-1.512-1.37-4.1.302-5.779L12.5 6.062"
        stroke="#1C274C"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        d="M13.954 10c1.506 1.512 1.37 4.1-.303 5.779l-2.424 2.433-2.424 2.433c-1.673 1.68-4.25 1.816-5.757.305-1.506-1.512-1.37-4.1.303-5.78l2.424-2.433"
        stroke="#1C274C"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default Link;
