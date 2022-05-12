import { useState, useRef, useCallback } from 'react'
import styles from '../styles/Header.module.scss'
import HeaderChild from './HeaderChild'
import Contact from './Contact'
import ErrorBoundary from './ErrorBoundary';

const ArrOf = [1, 2, 3, 4, 5, 6];
const h2Element = <h2>Hello There</h2>

const Header = () => {
    const [count, setCount] = useState(0)
    const btnRef = useRef(null);

    const showRandom = useCallback(function() {
       return Math.random(Math.floor(10) * 100);
    }, [])

  return (
    <div 
        className={styles.header}>
        <button 
          onClick={() => setCount(prevState => prevState + 1)}> Count Me Now: {count} 
        </button>
         <button 
            ref={btnRef} 
            onClick={() => console.log(btnRef.current)}> Check Ref </button>
         {/* <ErrorBoundary> */}
            <Contact ArrOf={ArrOf} H2={h2Element} />
         {/* </ErrorBoundary> */}
        <HeaderChild showed={showRandom} />
    </div>
  )
}

export default Header