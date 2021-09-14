import './App.scss';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, decrementByAmount, reset, setMax, setMin} from './counter/counterSlice'
import { useEffect, useRef } from 'react';

function App() {
  const countRef = useRef();
  const count = useSelector(state => state.counter.value)
  const countMin = useSelector(state => state.counter.min)
  const countMax = useSelector(state => state.counter.max)
  const dispatch = useDispatch()

  useEffect(()=>{
    count < 0 ? countRef.current.className = 'count negative' : countRef.current.className = 'count'
    count < countMin && dispatch(setMin())
    count > countMax && dispatch(setMax())
  }, [count, countMin, countMax, dispatch])

  return (
    <>
      <header>
        <h1 className="title">Redux quick demo</h1>
        <h2 className="count">All-time score: {countMin} / {countMax}</h2>
      </header>
      <main>
        <div className="actions">
        <button onClick={() => dispatch(decrementByAmount(10))} className="subtle">-10</button>
        <button onClick={() => dispatch(decrementByAmount(5))} className="regular">-5</button>
        <button onClick={() => dispatch(decrement())} className="obvious">-1</button>


          <h2 className="count" ref={countRef}>{count}</h2>

        <button onClick={() => dispatch(increment())} className="obvious">+1</button>
        <button onClick={() => dispatch(incrementByAmount(5))} className="regular">+5</button>
        <button onClick={() => dispatch(incrementByAmount(10))} className="subtle">+10</button>
        </div>
        <div className="actions reset">
          <button onClick={() => dispatch(reset())}>RESET</button>
        </div>
      </main>
    </>
  );
}

export default App;
