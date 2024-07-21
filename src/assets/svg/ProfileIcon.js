import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ProfileIcon(props) {
  return (
    <Svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M3.5 20c2.336-2.477 5.507-4 9-4 3.493 0 6.664 1.523 9 4M17 7.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
        stroke={props?.color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default ProfileIcon