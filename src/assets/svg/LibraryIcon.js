import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function LibraryIcon(props) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect
        y={3.47369}
        width={18}
        height={14.5263}
        rx={0.947368}
        fill={props?.color}
      />
      <Path
        d="M16.105 1.579c.505 0 .632.526.632.79H.947c0-.632.421-.79.632-.79h14.526zM15.246 0c.435 0 .543.421.543.632H2.21c0-.506.363-.632.544-.632h12.492z"
        fill={props?.color}
      />
    </Svg>
  )
}

export default LibraryIcon
