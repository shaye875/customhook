import { useEffect } from "react"
import useCounter from "./hooks/useCounter"
import useCounterWithStep from "./hooks/useCounterWithStep"
import useInput from "./hooks/useInput"
import useLocalStorageState from "./hooks/useLocalStorageState"
import useTextarea from "./hooks/useTextarea"
import useToggle from "./hooks/useToggle"
import useSessionStorageState from "./hooks/useSessionStorageState"
import usePrevious from "./hooks/usePrevious"
import useDebouncedVa from "./hooks/useDebouncedValue"
import useThrottleValue from "./hooks/useThrottleValue"
import useInterval from "./hooks/useInterval"
import useTimeout from "./hooks/useTimeout"
import useDocumentTitle from "./hooks/useDocumentTitle"
import useBodyClass from "./hooks/useBodyClass"
import useWindowSize from "./hooks/useWindowSize"
import useOnlineStatus from "./hooks/useOnlineStatus"
import useKeyPress from "./hooks/useKeyPress"
import useOutsideClick from "./hooks/useOutsideClick"
import useFetchJson from "./hooks/useFetchJson"
import useClipboard from "./hooks/useClipboard"

function App() {
  const { toglle, setTrue, setFalse } = useToggle(true)
  const { value, inc, dec, reset } = useCounter(5)
  const { value1, inc1, dec1, reset1 } = useCounterWithStep(5, 3)
  const { value2, onChange, setValue, reset2 } = useInput(10)
  const { value3, onChange2, setValue2, reset3 } = useTextarea("shaye")
  const { value5, setValue3, remove } = useLocalStorageState("key", "popo")
  const { value4, setValue4, remove1 } = useSessionStorageState("e", "kobi")
  const { value6, previousValue } = usePrevious("2")
  const { value7, debounce } = useDebouncedVa("avi1", "avi2")
  const { value8, throttledValue } = useThrottleValue("ff", "kk")
  const { value9, start, stop } = useInterval(1, 1 * 1000)
  const { value10, start2, stop2 } = useTimeout(1, 1 * 1000)
  const {title} = useDocumentTitle("כותרת")
  const  {classs} =  useBodyClass("class")
  const {width,heigth} = useWindowSize()
  const {isOnline} = useOnlineStatus()
  const {isPressed} = useKeyPress("shift")
  const {clic1k,outt} = useOutsideClick("before","click")
  const {data} = useFetchJson("./data/db.json")
  const {value12} = useClipboard("popop")
  return (
    <>
      <h1>{String(toglle)}</h1>
      <button onClick={() => {
        setTrue(true)
      }}>setTrue</button>
      <button onClick={() => {
        setFalse(false)
      }}>setFalse</button>
      <h1>{value}</h1>
      <button onClick={inc}>inc</button>
      <button onClick={
        dec}>dec</button>
      <button onClick={
        reset
      }>reset</button>
      <h1>{value1}</h1>
      <button onClick={inc1}>inc</button>
      <button onClick={
        dec1}>dec</button>
      <button onClick={
        reset1
      }>reset</button>
      <h1>{value2}</h1>
      <input onChange={onChange} />
      <button onClick={() => setValue(20)}>setValue</button>
      <button onClick={
        reset2
      }>reset</button>
      <h1>{value3}</h1>
      <textarea rows={5} cols={10} onChange={onChange2} />
      <button onClick={() => setValue2(20)}>setValue</button>
      <button onClick={
        reset3
      }>reset</button>
      <h1>{value5}</h1>
      <input type="text" onChange={setValue3} />
      <button onClick={remove}>remove</button>
      <h1>{value4}</h1>
      <input type="text" onChange={setValue4} />
      <button onClick={remove1}>remove</button>
      <h1>{value6}</h1>
      <input type="text" onChange={previousValue} />
      <h1>{value7}</h1>
      <button onClick={debounce}>details</button>
      <h1>{value8}</h1>
      <button onClick={throttledValue}>Ms</button>
      <h1>{value9}</h1>
      <button onClick={start}>stert</button>
      <button onClick={stop}>stop</button>
      <h1>{value10}</h1>
      <button onClick={start2}>stert</button>
      <button onClick={stop2}>stop</button>
      <h1>{title}</h1>
      <div className={classs}></div>
      <h1>{width}</h1>
      <h1>{heigth}</h1>
      <h1>is online: {String(isOnline)}</h1>
      <h1>is: {String(isPressed)}</h1>
      <h1>{clic1k}</h1>
      <button onClick={()=>outt()}>click</button>
      <h1>{data[0].db}</h1>
      <h1>{value12}</h1>
    </>
  )
}

export default App
