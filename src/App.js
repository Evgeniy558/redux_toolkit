import "./App.css";
import AppBar from "./components/AppBar/AppBar";
import Layout from "./components/Layout/Layout";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";

function App() {
  return (
    <div className="App">
      <Layout>
        <AppBar></AppBar>
        <TaskForm></TaskForm>
        <TaskList></TaskList>
      </Layout>
    </div>
  );
}

export default App;
