import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div>
            <p>Document 1: <Link to='/documentPage'>Sample Document</Link></p>
            {/* <p>Document 2: <Link to='/'></Link></p>
            <p>Document 3: <Link to='/'></Link></p> */}
        </div>
    );
};

export default LandingPage;