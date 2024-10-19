/**
 * <div id="parent">
 *      <div id="child1">
 *          <h1>I'm h1 tag (siblings of child)</h1> // siblings will be give in an array
 *          <h2>I'm h2 tag (sibling of child)</h2>
 *      <div>
 *      <div id="child2">
 *          <h1>I'm h1 tag (siblings of child)</h1> // siblings will be give in an array
 *          <h2>I'm h2 tag (sibling of child)</h2>
 *      <div>
 * </div>
 * ReactElement(Object) => HTML (Browser Understands)
 * createElement we generally call as CreateElementAPI
 */

// createElement(htmlElementTag, attributes, child(what we have to put inside in this))
const parent = React.createElement(
    "div", {id: "parent"},
    [
        React.createElement(
            "div", {id: "child1"},
            [
                React.createElement(
                    "h1",
                    {id:"heading1"},
                    "I'm h1 tag"
                ),
                React.createElement(
                    "h2",
                    {id: "heading2"},
                    "I'm h2 tag"
                )
            ]
        ),
        React.createElement(
            "div", {id: "child2"},
            [
                React.createElement(
                    "h1",
                    {id:"heading1"},
                    "I'm h1 tag"
                ),
                React.createElement(
                    "h2",
                    {id: "heading2"},
                    "I'm h2 tag"
                )
            ]
        )

    ]
    
);

// Instead of this complex nested structures, JSX will make our life easy for creating Elements

/**
 * const heading = React.createElement(
    "h1", 
    {id: "heading", xyz:"abc"}, // attributes of an elements can be defined in here
    "Namaster React! From App.js!"
)
console.log(heading)
 */

console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root")) 
console.log(root)
root.render(parent) // render objective: take this object convert into h1 tag and put it on the DOM