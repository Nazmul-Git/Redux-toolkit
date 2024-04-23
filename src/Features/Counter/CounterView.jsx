import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incressByValue, reset } from "./CounterSlice";

function CounterView() {

    const count = useSelector(state => state.counter.count);
    console.log(count)
    const dispatch = useDispatch();
    return (
        <div className="flex  justify-center gap-4 mt-20">
            <button onClick={() => { dispatch(decrement()) }} className="bg-red-500 p-1">DECREMENT</button>
            <h3 className="text-4xl">{count}</h3>
            <button onClick={() => { dispatch(increment()) }} className="bg-green-500 p-1">INCREMENT</button>
            <button onClick={() => { dispatch(reset()) }} className="bg-blue-500 p-1 ">RESET</button>
            <button onClick={() => { dispatch(incressByValue(10)) }} className="bg-yellow-500 p-1 ">IncressBy10</button>
        </div>

    )
}

export default CounterView;