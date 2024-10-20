import React from "react";
import ReactDOM from "react-dom/client";


/**
 * Header
 *  - Logo
 *  - Nav Items (Home, About)
 * Body
 *  - Search 
 *  - RestaurentContainer
 *      - RestairentCard
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 * 
 * 
 * 
 * 
 */

// React Element
const elem = <span>This is a span element</span>


// React Functional Component
const HeadingComponent = () => (
    <div id="container">  
        {Title()}    
        <h1 id="heading1" className="heading">
            Namaste React Functional Component
        </h1>
    </div>
);

// React Functional
const Title = () => (
    <h1 id="heading1" className="head">
        {elem}
        <br/>
        Namaste React using JSX
    </h1>);

// React Element
const headElement = (
    <h5>
        {elem}
        This is JSx Element
        {HeadingComponent}
    </h5>
);






const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
//root.render(title)
