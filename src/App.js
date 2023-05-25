import StudentList from "./StudentList";
import AddData from "./AddData";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
function App(){
  return(
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<StudentList/>}/>
          <Route path="/add_newdata" element={<AddData/>}/>
        </Routes>
      </Router>

    </div>
  )
}

export default App;