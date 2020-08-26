import React from 'react'
import Nav from './Nav'

const Dashboard = () => {
    return(
    
    <div className="Parent">
        <Nav />
        <div className="New">
            <h2>New Interview</h2>
        </div>

        <div className="Inter">
            <h2> Interview Directory</h2>
            <table>
                <tr>
                    <td>Architecture</td>
                    <td>Art</td>
                </tr>
                <tr>
                    <td>Fashion</td>
                    <td>Film</td>
                </tr>
                <tr>
                    <td>Food</td>
                    <td>Literature</td>
                </tr>
                <tr>
                    <td>Music</td>
                    <td>Sports</td>
                </tr>
            </table>
        </div>

        <div className="Para1">
            <h5>December 11, 2019</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
             maecenas pharetra convallis posuere morbi leo. Sem fringilla 
             ut morbi tincidunt. Nibh sit amet commodo nulla facilisi nullam 
             vehicula ipsum. Scelerisque mauris pellentesque pulvinar pellentesque 
             habitant morbi. Est sit amet facilisis magna 
            etiam tempor orci eu. At volutpat diam ut venenatis. 
            Eu volutpat odio facilisis mauris sit amet massa. 
            Ultrices gravida dictum fusce ut placerat orci nulla 
            pellentesque dignissim. Risus in hendrerit gravida rutrum 
            quisque. Amet venenatis urna cursus eget nunc scelerisque. 
            Dui vivamus arcu felis bibendum ut tristique et egestas. 
            Nunc sed augue lacus viverra vitae congue eu. Ut morbi 
            tincidunt augue interdum velit euismod in pellentesque. 
            Auctor neque vitae tempus quam pellentesque nec. 
            Turpis egestas sed tempus urna et.</p>
        </div>

        <div className="Life">
            <h5>Life</h5>
        </div>

        <div className="Most">
            <h2>Most Read Interviews</h2>
            <div className="Mostread1">

            </div>
            <div className="Mostread2">

            </div>
            <div className="Mostread3">

            </div>
        </div>

        <div className="World">
            <h2>World Guide</h2>
        </div>

        <div  className="New2">
            <h2>Last Weeks Interview</h2>
        </div>

        <div className="Editor">
            <h2>Editors Picks</h2>
        </div>

        <div className="Para2">
            <h5>Decemeber 4th, 2019</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
             maecenas pharetra convallis posuere morbi leo. Sem fringilla 
             ut morbi tincidunt. Nibh sit amet commodo nulla facilisi nullam 
             vehicula ipsum. Scelerisque mauris pellentesque pulvinar pellentesque 
             habitant morbi. Est sit amet facilisis magna 
            etiam tempor orci eu. At volutpat diam ut venenatis. 
            Eu volutpat odio facilisis mauris sit amet massa. 
            Ultrices gravida dictum fusce ut placerat orci nulla 
            pellentesque dignissim. Risus in hendrerit gravida rutrum 
            quisque. Amet venenatis urna cursus eget nunc scelerisque. 
            Dui vivamus arcu felis bibendum ut tristique et egestas. 
            Nunc sed augue lacus viverra vitae congue eu. Ut morbi 
            tincidunt augue interdum velit euismod in pellentesque. 
            Auctor neque vitae tempus quam pellentesque nec. 
            Turpis egestas sed tempus urna et.</p>
        </div>

        <div className="Latest">
            <h2>Fashion Photgraphers</h2>
        </div>

    </div>

    )
}


export default Dashboard