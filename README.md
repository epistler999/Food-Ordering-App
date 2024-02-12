# React Project

* to use react in our project, we can use the cdn link or using npm
* using **npm install -D parcel** install parcel. It helps in bundling and building our app. Install it in dev-depnedencies.
* no need to push the node_modules file as we have their configuration in our package.json file. So,  just keep the node_modules in gitignore file.
* node_modules install all the dependencies required to execute a particular package. 
    So, its size is   very big and should not to be pushed in github. In production,
    using package and package-lock.json file, server can again install all the dependencies 
    required to execute the package.
* **npx parcel index.html** - build the app . bundled it.
* **npx parcel build index.html** - build the production ready app.
* npx executes the npm package.

## when adding react and react dom using npm , we need to remember few things:-
 1. <script type="module" src="app.js"></script>
    here type="module" inform the browser that this app.js file is not some ordinary js file but it contains the import as well.
 2. import React and ReactDOM in js file.
 3. Delete the cdn link from html file.

 #### Parcel advantages 
 * very fast
 * build the app very quickly
 * bundles in very concise manner. - minimise, compress
 * maintain the cache.
 * HMR = hot Module replacement - update the modules in the browser at runtime without needing a whole page refresh.
 * file watching algo - written in c++
 * differntial building
 * Tree shaking
 * Different dev and prod builds - prod builds are more concise.
 * for prod build - npx parcel build index.html

###### browserslist -> for compatible for version you want to support your app -> "last 2 versions"

##### scripts in package.json file is to execute the package like the following commands:-
* "start" : "parcel index.html" = npx parcel index.html -> it will dev build the app

### JSX and React Component
* JSX is html like syntax used to create react element in react. In JSX we can write JS code as well inside "{ console.log("hello") }".
* React Component is JS function which returns JSX code or react Element. It is of two type - Functional Component and Class based component.
* JSX (React Element) -> JS Obj -> HTML Template (while rendering).
* Parcel is the manager of Babel. It contaims the Babel that helps to convert the JSX into react element and then into JS object.
* Babel transpile the JSX into JS object. Babel is compiler. The JSX is not understood by JS engine. So, Babel converts the JSX first into JS code and then feed it to the browser after build.

## Project (Practise)
* header , Body, Footer
* header -> Logo, home,cart, profile
* body - filter(on some rating>4), restaurant cards
* foter - license,contact, support

#### props
* it is variable passed as argument to functional component (just like normal function in js).

#### Imp Points to be Noted
* For loop use map,filter and reduce .
* Unique key should be provide to child component to identify the child. Help in optimisation. If not given no error will come ony warning will come but performance will be effeceted. If not given, parent will render the whole child component on any modification thus affecting the performance.
* **not using key <<< index as key <<< using unique value for key**.

#### Import and Export
* export default and export named 

## Hooks
* It is utility function provided by React to interact with data and UI layer.
* Main two types - 
* useState
* useEffect

### useState
* To sync the data with UI , we use state variable.
* It uses Reconciliation algo(React Fiber). Diff algo.
* Virtual DOM - the representation of actual DOM. In react , we represent it using object(react element).
* Diff algo use the Virtual DOM to compare the diffrence. Its more faster than comparing the actual DOM thus making rendering the page more faster when data is changed. 
* When there is some change in the useState variable, diff algo calculates the difference and rerenders the component fastly.

### useEffect
* It is React hook that get called when the component renderes itself.
* It take one callback function and one dependencies parameter.
* Three things to remember :-
1. When called with no dependencies parameter -> called evertime when component renders.
2. When called with [] dependencies (empty) -> called only in starting rendering.
3. When called with [searchText] -> called when there is some change in searchText variable and component re-renders.

###### CORS POLICY (Cross-Origin Resource Sharing)
* it is a standard that allows a sever to relax the same-origin policy.
* It allow some cross-origin request while rejecting others.
* Use corsproxy or some extensions to resolve this error.

### Routing
* createBrowserRouter -> helps to create the route
* RouterProvider -> helps to use the route created in our component.
* route.render(<RouteProvider router={appRouter}/>)
* errorElement - Use to create errorElement component in route if route path is not defined in the route configuration.
* useRouteError - it is used to get the error message given by the React. (hook)
* Children Routes - used to give children route. 
* <Outlet/> - used to give children route to component.
* Link - Used as anchor tag to route to specific path but it does not refresh the page only change the route path and load the specific component which is present at that particular route.
* Two type of Client-Side and Server-side
* React implement Client-side routing as it does not refresh the page and just load the specific component. Thats why is is **Single-Page Application**.
* Dynamic Route - path: "/restaurant/:id" -> here using id specific page is load. and id is passed as parameter to route.
* useParams() - Used to get the params passed in the dynamic route.

### Class-Based Component
* it follows the class instead of function.
* render() -> return the JSX code to render the html part.
* constructor() -> Normal class constructor.
* props -> This is passed same as functional component. But in child component it is accessed using constructor(props) and calling super(props).
* The purpose of using the super constructor with the props argument is to allow a component to inherit the properties of its parent component and also pass in additional properties as argument to the component. Using super(props) enables the child component to acces the standard properties of React component along with custom props passed from parent like name, gmail.
* First Render Phase happens then Commit Phase occur.
* Constructor() -> Render(render the DOM) -> DidMount(first Time called) -> DidUpdate(After any update called) -> WillUnmount(After component destroyed called) {In normal scenario}
* Let suppose we <parent> and <child1> and <child2> class component. Then the cycle will be as follows:- P(const) -> P(render) -> C1(const) -> C1(render) -> C2(const) -> c2(render) -> C1(didMount) -> c2(didMount) -> P(didMount).
* Why react follows this?
    * To make the app fast. But how? React first Render everything and after that call DidMount because that will update the DOM which is expensive operation(Commit phase). Link (https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/).

* componentWillUnmount() -> It is generally called to clear things up like interval when component get destroyed(jsut like ngDestroy in angular).
* How can we use the same functionality of componentWillUnmount in funcitonal component ?
    -> By using return() function inside the useEffect() funciton.

###### We can't use asyn key with useEffect but it can be used with didMount in class component.
* Let's understand the reasons why an asynchronous callback function cannot be called directly from a useEffect() hook. This is because the useEffect hook expects its effect(or callback) function to return either a cleanup function or nothing at all. This is due to the useEffect() hook's callback function's asynchronous execution and lack of blocking. Therefore, we must follow a specific pattern if we want to call an asynchronous function inside the useEffect() hook.

### Custom Hooks
* We can make custom hooks of our own. It is nothing just a normal react function that will return some value which can be used in our component like making some api call in custom hooks is good, making our component code clean. It also helps in Single Responsibility Principle.

### Lazy Loading
* It separated the bundle. Chunks the bundle. 
* It does not create only one index.js for entire app rather chunk it into smaller pieces so that loading of app does not become haeavy. 
* On demand Loading
* We use load() for lazy loading
* <Suspense fallback={<h1>Loading...</h1>}><Grocery/> </Suspense>
* Lazy loading takes some time so Suspense help to show some placeholder using *fallback* and app does not crash.
* If we lazy load Grocery then parcel will create two bundle one index and other for Grocery thus making the loading of app smooth.

#### Using Tailwind CSS to implement css
* very efficient
* push only the class that is being used not reductant.
* make our css light weighted.

### higher Order Component
* It takes a component as input and return a component as output.
* Used to modify the existing component according to some usecase.(conditions)

###### Install the React-dev tool extension for visualising.

### Controlled Component
* when the control of child is controlled by parent then it is called controlled.

#### Can we change the state variable of parent from child component
* Yes but not directly. Passing the function in props. -> 1.05 video time(see).

#### Lifting the state Up (learn about this)
* In this we lift the state of child to parent.

### React Context
* It is used for manage the data. Act just like service.
* To avoid props drilling , we use Context.
* Using Context, we can create data and use it anywhere in our component. It is accessible thorughout the component. We can update it.
* createContext() -> create Context variable
* useContext() -> to use the context variable
* In class-based component, we use <UserContext.Consumer>{data=>{console.log(data)}} </UserContext.Consumer> like this.
* In app-based component, <UserContext.Provider value: {{userName : "kumar badal"}}></UserContext.Provider>
* We can pass the function also, in the above approach.
<UserContext.Provider value: {{userName : "kumar badal", setUserName}}></UserContext.Provider>
Here, the setUserName can be used to update the userName.

### Redux
* use to manage the data just like context. 
* When we click on "add to cart", redux dispatches an action which call the reducer function that updates the slice of the redux store.
* Redux - 1. react-redux 2. redux toolkit(RTK)
* configureStore() - configure the store
* Provider - provide the store to use it
* createSlice - create the slice.
* useSelector - subscribe using it. Subscribe to specidific part of store which you are using.
* useDispatch - to dispatch the reducer function.
* Immer library is used to handle the immutable state in Redux.
* RTK - either mutate the state or return the new state.
* lean about RTK query
