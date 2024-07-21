import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PackageIcon(props) {
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
        d="M21 7.278L12.5 12m0 0L4 7.278M12.5 12v9.5m9-5.442V7.941c0-.342 0-.514-.05-.666a1 1 0 00-.215-.364c-.109-.119-.258-.202-.558-.368l-7.4-4.111c-.284-.158-.425-.237-.575-.268a1 1 0 00-.403 0c-.15.031-.292.11-.576.268l-7.4 4.11c-.3.167-.45.25-.558.369a1 1 0 00-.215.364c-.05.152-.05.324-.05.666v8.117c0 .343 0 .515.05.667a1 1 0 00.215.364c.109.119.258.202.558.368l7.4 4.111c.284.158.425.237.576.267.133.028.27.028.402 0 .15-.03.292-.11.576-.267l7.4-4.11c.3-.167.45-.25.558-.369a1 1 0 00.215-.364c.05-.152.05-.324.05-.667zM17 9.5l-9-5"
        stroke={props?.color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default PackageIcon
