# frontend-react

! Why my React app is fast it's because of Bundlers 
# Parcel (Giving Muscle to our Skeleton code)

    - creates a dev build
    - Local server
    - Automatically refreshing the page called HMR
    - HMR = Hot Module Replacement
    - HMR uses File Watching Algorithm - which is written in c++
    - Caching - Faster Builds (every time we run it will be very fast)
    - Basically caching everything we do
    - Will do Images optimizations
    - If I do productino build it will do 
        - Minification
        - Bundling (like a .zip)
        - Compressing 
        - uses Consistent Hashing
        - Code splitting
        - Differential Bundling = to support older browsers
        - Diagnostic (showing errors on the front-end screen)
        - Error handling
        - we can use HTTPS
        - Tree Shaking - will remove unused code (let say we only using 4 func out of 10 it will remove unused 6 func)
        - Different build for dev and prod bundles

when you run npx parcel index.html (dev build) or npx parcel build index.html (prod build)
    - it will create dist folder
    - from there it will pick all the code and it will run on the server

    - [https://parceljs.org/docs/]

Browsers List:
- [https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z]

# Babel

    - Babel converts the jsx code into react code which is understandble for JS Engine


# Food Ordering App

/**
 * Header
 *  - Logo
 *  - Nav Items (Home, About)
 * Body
 *  - Search 
 *  - RestaurentContainer
 *      - RestairentCard
 *      - Img
 *      - Name of the restaurent
 *      - Star Rating, cuisine, delivery time
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


 Two types of Export/Import

 - Default Export/Import

 export default Component;
 import Component from "path";

 - Named Export/Import

 export const Component;
 import {Component} from "path";


 # React Hooks
  (Normal JS utility functions)
  whenever my state variable changes react will re-render the component
  - useState() - Superpowerful state variables in react
  - useEffect()


- React is good at DOM Operations
