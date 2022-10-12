import './App.css';
import Header from "./components/Header/Header";
import Background from "./components/Background/Background";
import CurrencyExchanger from "./components/CurrencyExchanger/CurrencyExchanger";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Header/>
            </header>
            <CurrencyExchanger/>
            <Background/>
        </div>
    );
}

export default App;
