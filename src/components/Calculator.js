import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMathData } from '../services/mathDataService';
import { addMathData } from '../services/mathDataService';
import './Calculator.css'

const Calculator = () => {
    const [firstNumber, setFirstNumber] = useState(0);
    const [lastNumber, setLastNumber] = useState(0);
    const [resultNumber, setResultNumber] = useState(0);
    const [operatorSign, setOperatorSign] = useState('?');
    
    const dispatch = useDispatch();

    const {mathData} = useSelector((state) => state);
    
    const handleFirstNumberChange = (e) => {
        setFirstNumber(e.target.value);
    }

    const handleLastNumberChange = (e) => {
        setLastNumber(e.target.value);
    }

    const getPreviousMath = () => {
        dispatch(getMathData());
    }

    const handleSum = () => {
        setOperatorSign("+")
        const result = +firstNumber + +lastNumber;
        setResultNumber(result);
        const operator = '+'
        const mathData = {
            firstNumber: firstNumber,
            lastNumber: lastNumber,
            operatorSign: operator,
            resultNumber: result,
          };
          try {
            dispatch(addMathData(mathData));
          } catch (error) {
            return error;
          }
    }

    const handleDivide = () => {
        setOperatorSign("÷")
        const result = firstNumber/lastNumber;
        setResultNumber(result);
        const operator = '÷'
        const mathData = {
            firstNumber: firstNumber,
            lastNumber: lastNumber,
            operatorSign: operator,
            resultNumber: result,
          };
          try {
            dispatch(addMathData(mathData));
          } catch (error) {
            return error;
          }
    }

    const handleSubtract = () => {
        setOperatorSign("-")
        const result = firstNumber-lastNumber;
        setResultNumber(result);
        const operator = '-';
        const mathData = {
            firstNumber: firstNumber,
            lastNumber: lastNumber,
            operatorSign: operator,
            resultNumber: result,
          };
          try {
            dispatch(addMathData(mathData));
          } catch (error) {
            return error;
          }
    }

    const handleMultiply = () => {
        setOperatorSign("x")
        const result = firstNumber*lastNumber;
        setResultNumber(result);
        const operator = "x"
        
          const mathData = {
            firstNumber: firstNumber,
            lastNumber: lastNumber,
            operatorSign: operator,
            resultNumber: result,
          };
        
          try {
            dispatch(addMathData(mathData));
          } catch (error) {
            return error;
          }
    }

  return (
    <section className='calculatorContainer'>
        <div className='calculatorSubcontainer'>
            <div className='calcInputsAndButtons'>
                <div className='calcInputs'>
                  <input type="number" value={firstNumber} onChange={handleFirstNumberChange} placeholder='first number' />
                  <div>{operatorSign}</div>
                  <input type="number" value={lastNumber} onChange={handleLastNumberChange} placeholder='0'/>
                  <div>=</div>
                  <div>{resultNumber}</div>
                </div>
                <div className='calcButtons'>
                    <button type='button' onClick={handleSum}>+</button>
                    <button type='button' onClick={handleSubtract}>-</button>
                    <button type='button' onClick={handleMultiply}>x</button>
                    <button type='button' onClick={handleDivide}>÷</button>
                </div>
            </div>
                <div className='prevListMainContainer'>
                    <button onClick={getPreviousMath} className='prevListButton'>See previous math / refresh</button>
                    {mathData.gettingMathData.map((data)=>{
                      return (
                        <ul key={resultNumber} className='prevListContainer'>
                          <li>{data.firstNumber}</li>
                          <li>{data.operatorSign}</li>
                          <li>{data.lastNumber}</li>
                          <li>=</li>
                          <li>{data.resultNumber}</li>
                        </ul>
                      )
                    })}
                </div>
            <div>

            </div>
        </div>
    </section>
  )
}

export default Calculator