import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { decrementCounter, incrementCounter, mulCounter, clsCounter} from '../state/actions/counter';

export default function Counter(){
    const counter = useSelector((state)=> state.counter);
    const dispatch = useDispatch()
    const incCounter =()=>{
        dispatch(incrementCounter())
    }
    const decCounter =()=>{
        dispatch(decrementCounter())
    }
    const mulCounter1 =()=>{
        dispatch(mulCounter())
    }
    const clsCounter1 =()=>{
        dispatch(clsCounter())
    }
    return(
        <>
        <h2 className='text-center'>{counter}</h2>
        <div className='conatiner'>
            <button className='text-center btn bg-[red] p-4 m-4' onClick={incCounter}>Inc</button>
            <button className='text-center btn bg-[red] p-4 m-4' onClick={decCounter}>Dec</button>     
        </div>
        <div className='conatiner'>
            <button className='text-center btn bg-[red] p-4 m-4' onClick={mulCounter1}>Mul</button>
            <button className='text-center btn bg-[red] p-4 m-4' onClick={clsCounter1}>Cls</button>
        </div>
        </>
    )
}