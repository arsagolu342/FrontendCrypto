import React from 'react' 
const Cards = ({ cryptos = [] }) => {
    return (
        <div className='row'  >
            {
                cryptos.map((item, index) => (
                    <div key={index} className='col-sm-2' style={{ padding: '10px', width: '400px'}} >
                        <div className='card' > 
                            <div className='card-body'>
                                <h5 className='card-title' style={{textAlign: 'center'}}> {item.nombre} </h5>   
                                <div style={{textAlign: 'center'}}>
                                <p class="btn btn-info" style={{textAlign: 'center', textDecorationColor: ' #06112'}}> Valor actual: ${item.usd}</p>
                               </div>  
                            </div>
                         </div>
                    </div>
                ))}
        </div>
    )
}

export default Cards