import React from 'react';

function Breadcrumbs(){
    return(
        <>
        <nav className="breadcrumbs">
        <div className="container">
            <ol>
            <li><a href="index.html">Home</a></li>
            <li className="current">Starter Page</li>
            </ol>
        </div>
        </nav>
        </>
    );
}
export default Breadcrumbs;