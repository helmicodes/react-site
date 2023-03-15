import React from "react"
import ReactDOM from "react-dom/client"
import Nav from "./components/Nav"
import Main from "./components//Main"
import "./style.css"

function App() {
    return (
        <div className="container">
            <Nav />
            <Main />
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)