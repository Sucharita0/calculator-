
import { useState } from 'react';
import './cal.css';
export function Cal(){

        const[data, setData] = useState('');
        function handleClick(e){
            setData( data + e.target.value) ;
        }
        function handleCutClick()
        {
            setData(data.slice(0,-1));
        }
        function handleErageClick(){
            setData('');
        }
        function handleResultClick(){
            setData(eval(data));
        }
    return(
        <div className="container">
            <div className="calculator">

                <div>
                    <input type="text" className='display' value={data}/>
                </div>
                <div className='inner'>
                    <input type="button" value="AC" onClick={handleErageClick}/>
                    <input type="button" value="DE" onClick={handleCutClick}/>
                    <input type="button" value="." onClick={handleClick}/>
                    <input type="button" value="/" onClick={handleClick}/>
                </div>
                <div className='inner'>
                    <input type="button" value="7" onClick={handleClick}/>
                    <input type="button" value="8" onClick={handleClick} />
                    <input type="button" value="9" onClick={handleClick}/>
                    <input type="button" value="*" onClick={handleClick}/>
                </div>
                <div className='inner'>
                    <input type="button" value="4" onClick={handleClick}/>
                    <input type="button" value="5" onClick={handleClick}/>
                    <input type="button" value="6" onClick={handleClick}/>
                    <input type="button" value="+" onClick={handleClick}/>
                </div>
                <div className='inner'>
                    <input type="button" value="1" onClick={handleClick}/>
                    <input type="button" value="2" onClick={handleClick}/>
                    <input type="button" value="3" onClick={handleClick}/>
                    <input type="button" value="-" onClick={handleClick}/>
                </div>
                <div className='inner'>
                    <input type="button" value="00" onClick={handleClick}/>
                    <input type="button" value="0" onClick={handleClick}/>
                    <input type="button" className='laster' value="=" onClick={handleResultClick}/>
                    
                </div>
            </div>

        </div>
    )
}