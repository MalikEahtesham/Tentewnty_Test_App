import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SearchIcon(props) {
  return (
    <Svg
      width={19}
      height={20}
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.713 16.359l-4.053-4.053a5.67 5.67 0 10-1.114 1.114l4.053 4.052 1.114-1.113zm-4.485-7.467a4.095 4.095 0 11-8.19 0 4.095 4.095 0 018.19 0z"
        fill="#202C43"
      />
    </Svg>
  )
}

export default SearchIcon
