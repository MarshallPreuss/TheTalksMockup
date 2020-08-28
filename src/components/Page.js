import React from 'react'
import Nav from './Nav'

const Dashboard = () => {
    return(
    
    <div className="Parent">
        <Nav />
    <div className="Content">        
        <div className="Section">
            <h2 className="InterTitle">New Interview</h2>
            <div className="New">
            </div>
        </div>
            
        <div className="Section">
            {/* <h2 className="InterTitle">&nbsp;</h2> */}
            <h2 className="InterTitle">Interview Directory</h2>
        <div className="Inter">
            
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
        </div>



        <div className="Section">
            
            <h5 className="InterTitle">December 11, 2019</h5>
            <div className="Para1">
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
        </div>

        <div className="Section">
            <h5 className="InterTitle">Life</h5>
            <div className="Life">
                <div>
                    <h3>"I cant make people happy if I am not happy myself. That
                        applies to anyone who tries to achieve something in their life:
                        if you are not happy, you cant transfer any happiness to anyone else.""
                    </h3>
                </div>
            </div>
        </div>

        <div className="Section">
            <h2 className="InterTitle">Most Read Interviews</h2>
            <div className="Most">
            <div className="Mostread1">

            </div>
            {/* <h4 className="Names">Alicia Keys</h4> */}
            <div className="Mostread2">

            </div>
            {/* <h4 className="Names">Chilly Gonzalwa</h4> */}
            <div className="Mostread3">

            </div>
            {/* <h4 className="Names">Kevin Kline</h4> */}
            </div>
        </div>

        <div className="Section">
            <h2 className="InterTitle">World Guide</h2>
            <div className="World">
                
            </div>
        </div>

        <div className="Section">
            <h2 className="InterTitle">Last Weeks Interview</h2>
            <div className="New2">
                
            </div>
        </div>

        <div className="Section">
            <h2 className="InterTitle">Editors Picks</h2>
            <div className="Editor">

            <div className="EditorsPick1">
                
            </div>
            <h4 className="Names">Ang Lee</h4>
            <div className="EditorsPick2">
              
            </div>
            <h4 className="Names">Bjork</h4>
            <div className="EditorsPick3">
                
            </div>
            <h4 className="Names">Flying Lotus</h4>
            </div>
        </div>

        <div className="Section">
            <h5 className="InterTitle">Decemeber 4th, 2019</h5>
            <div className="Para2">
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
        </div>

        <div className="Section">
            <h2 className="InterTitle">Fashion Photgraphers</h2>
            <div className="Latest">

            </div>
        </div>
    </div>
    </div>

    )
}


export default Dashboard