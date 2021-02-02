import React from 'react'




const Buttom = ({Aleatory,color}) =>{


    return (
        <div>
            <button style={{background:''+color+'' }}  className="bottomInternal" title="New quote" onClick={Aleatory}>Next Quote</button>
        </div>

    );

}

export default Buttom
