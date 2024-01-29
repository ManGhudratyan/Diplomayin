import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Calendar(props) {
  return (
    <Svg
      width="35px"
      height="35px"
      viewBox="0 0 24 24"
      fill="none"
      opacity={.6}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 1a1 1 0 00-1 1v1H5a3 3 0 00-3 3v14a3 3 0 003 3h8.101a7.018 7.018 0 01-1.427-2H5a1 1 0 01-1-1v-9h16v.29a6.972 6.972 0 012 .965V6a3 3 0 00-3-3h-1V2a1 1 0 10-2 0v1H8V2a1 1 0 00-1-1zm9 5V5H8v1a1 1 0 01-2 0V5H5a1 1 0 00-1 1v3h16V6a1 1 0 00-1-1h-1v1a1 1 0 11-2 0z"
        fill="#0F0F0F"
      />
      <Path
        d="M17 16a1 1 0 112 0v1.703l.88.88a1 1 0 01-1.414 1.414l-1.173-1.173a.998.998 0 01-.291-.765A1.044 1.044 0 0117 18v-2z"
        fill="#0F0F0F"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 18a6 6 0 11-12 0 6 6 0 0112 0zm-10.018 0a4.018 4.018 0 108.036 0 4.018 4.018 0 00-8.036 0z"
        fill="#0F0F0F"
      />
    </Svg>
  )
}

export default Calendar
