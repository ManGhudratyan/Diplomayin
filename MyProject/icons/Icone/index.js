import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Icone(props) {
  return (
    <Svg
      width="25"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M16 2H8C4 2 2 4 2 8v13c0 .55.45 1 1 1h13c4 0 6-2 6-6V8c0-4-2-6-6-6z"
        stroke="#292D32"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.91 7.84l-5.19 5.19c-.2.2-.39.59-.43.87l-.28 1.98c-.1.72.4 1.22 1.12 1.12l1.98-.28c.28-.04.67-.23.87-.43l5.19-5.19c.89-.89 1.32-1.93 0-3.25-1.32-1.33-2.36-.91-3.26-.01zM12.17 8.58a4.688 4.688 0 003.25 3.25"
        stroke="#292D32"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Icone
