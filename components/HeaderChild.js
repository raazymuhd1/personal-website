import {memo} from "react";

const HeaderChild = ({showed}) => {
    console.log(showed())

  return (
    <div>
        <h2> Click Me too </h2>
    </div>
  )
}

export default memo(HeaderChild);