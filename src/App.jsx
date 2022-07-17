import Header from "./components/Header/Header";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Feedback from "./pages/Feedback";
import Cart from "./pages/Cart";
import Book from "./pages/Book";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/feedback" element={<Feedback/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/book/:id" element={<Book />}/>
            </Routes>
        </div>
    );
}

export default App;
