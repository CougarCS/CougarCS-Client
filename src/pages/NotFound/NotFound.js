import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => (
    <div >
        <div className="fourOfour">
            <h1>4<i className="fa fa-cog fa-spin" />4</h1>
        </div>
        <div className="return">
            <p>Page Not Found</p>
            <button>
                <Link to="/" >Return Home</Link>
            </button>
        </div>
    </div>
)

export default NotFound;
