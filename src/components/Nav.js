import React from 'react' 
const Nav = () => {
    return (
        <div className='container' >
            <ul class="nav nav-tabs">
            <li class="nav-item" style={{}}>
                    <div>
                        <img src={ "https://cdn.svgporn.com/logos/helpscout-icon.svg"} className='rounded float-end' style={{ width: '30px', heigth: '30px'}} alt="logo" />
                    </div>
                </li>
                <li class="nav-item ">
                    <a class="nav-link " data-bs-toggle="dropdown" href={{}} role="button" aria-expanded="false">Cryptomonedas</a>
                     
                </li>
                 
            </ul>
        </div>
    )
}

export default Nav