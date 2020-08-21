import React from 'react'
import Nav from './Nav'

const Dashboard = () => {
    return(
    
    <div>
        <Nav />
        <div className="New">
            <h2>New Interview</h2>
        </div>

        <div className="Inter">
            <h2> Interview Directory</h2>
        </div>

        <div className="Para1">
            <h5>December 11, 2019</h5>
        </div>

        <div className="Life">
            <h5>Life</h5>
        </div>

        <div className="Most">
            <h2>Most Read Interviews</h2>
        </div>

        <div className="World">
            <h2>World Guide</h2>
        </div>

        <div  className="New">
            <h2>Last Weeks Interview</h2>
        </div>

        <div className="Editor">
            <h2>Editors Picks</h2>
        </div>

        <div className="Para2">
            <h5>Decemeber 4th, 2019</h5>
        </div>

        <div>
            <h2>Fashion Photgraphers</h2>
        </div>

    </div>

    )
}


export default Dashboard