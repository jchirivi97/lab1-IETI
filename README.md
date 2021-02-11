### Integrante:

Jimmy Armando Chirivi Nivia  

### Part 1: Create a basic React application and understand React basics

1. Create a React App and test that it works:
  npx create-react-app todo-app
  cd todo-app
  npm start
  
2. Open the index.html file and replace the title tag from React App to TODO App.

3. Open the src/App.js file and change the content of the paragraph tag (<p>) to &lt;h1&gt;TODO React App&lt;/h1&gt; (verify that the changes are reflected inmediately on your browser after you save without re-running your server).
  
  ![image](https://user-images.githubusercontent.com/48265107/107611866-f45ed980-6c12-11eb-9d33-331e7a0d2b05.png)

  

4. Go to Codecademy, register and do the first two modules (JSX and React Components) of the following course: https://www.codecademy.com/learn/react-101

![image](https://user-images.githubusercontent.com/48265107/107611907-0b9dc700-6c13-11eb-9d31-d2febfeef630.png)


### Part 2: Create React Components for the TODO App

1. Create a new JavaScript file called Todo.js under the src folder and add the following code:

![image](https://user-images.githubusercontent.com/48265107/107611981-2f610d00-6c13-11eb-9b8b-e89fff900b96.png)

2. Read about React Components & Props: https://reactjs.org/docs/components-and-props.html

3. Once your understand these concepts, add the JSX code to display the TODO information. You will access the TODO data by using the react props text, priority and dueDate as in the following example (notice the curly braces inside the HTML are used to evaluate a JavaScript expression).
  
  ![image](https://user-images.githubusercontent.com/48265107/107612041-56b7da00-6c13-11eb-820e-bd60ff843851.png)

4. Create another React Component called TodoList. This Component should render a list of Todo components. You can access the todo list by using the props: this.props.todoList. Start by importing the Todo component and the React module:
    
    ![image](https://user-images.githubusercontent.com/48265107/107612121-89fa6900-6c13-11eb-9b80-fa89eadbc512.png)
  
5. hint: You should use the map function to dynamically create your list inside the render method as in the following example: https://codepen.io/gaearon/pen/jrXYRR?editors=0011

![image](https://user-images.githubusercontent.com/48265107/107612189-b1e9cc80-6c13-11eb-92ea-9eb8e4ff9650.png)

6. Run your application and verify that it works as expected:

![image](https://user-images.githubusercontent.com/48265107/107612243-caf27d80-6c13-11eb-9aec-392bcf9a111a.png)


### Part 3: Interacting with React Components


1. Go back the Codecademy website and do the last module (Components Interacting) of the Learn ReactJS: Part I course.

![image](https://user-images.githubusercontent.com/48265107/107612308-f6756800-6c13-11eb-88c2-dd4621b2c47e.png)

2. Use the following code (taken from the React website) as a reference to create a form that captures the data of a Todo activity (text, priority and date), and adds the new object to the list.

![image](https://user-images.githubusercontent.com/48265107/107612921-502a6200-6c15-11eb-8963-79a9dc945eb8.png)


![image](https://user-images.githubusercontent.com/48265107/107612872-35f08400-6c15-11eb-8a18-bc70196eea16.png)


