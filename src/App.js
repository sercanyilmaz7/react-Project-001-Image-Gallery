import Homepage from "./pages/Homepage";
import data from "./helper/data"
import "./style/style.css"


function App() {
  // console.log(data);
  return (
    <div className="app">
      <Homepage data={data}/>
    </div>
  );
}

export default App;
