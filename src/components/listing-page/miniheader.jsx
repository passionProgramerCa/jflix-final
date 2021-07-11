import React from 'react';
import './miniheader.css'


const Miniheader = (props) => {
    // ? props
    return (
        <div className='background '>
            <div className="dropdown custom">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                        data-bs-toggle="dropdown" aria-expanded="false">
                    
                    Filters
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
            <label className="container custom-two">Free movie only
                <input type="checkbox"/>
                <span className="checkmark"/>
            </label>
            <br/>
            <br/>
            <nav className="nav nav-pills nav-justified">
                <a className="nav-link active" aria-current="page" href="#">Most watched</a>
                <a className="nav-link" href="#">Released date</a>
                <a className="nav-link" href="#">Recently added</a>
            </nav>
        
        
        </div>
    );
    
};

export default Miniheader;