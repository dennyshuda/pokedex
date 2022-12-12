import "./index.css";
import { Navbar } from "./components/navbar";
import { Search } from "./components/search";

function App() {
  return (
    <div className="App">
      <div className="bg-slate-200 py-10">
        <div className="container mx-auto">
          <Navbar />
          <Search />
        </div>
      </div>
    </div>
  );
}

export default App;
