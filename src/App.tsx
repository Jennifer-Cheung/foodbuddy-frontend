import styles from './App.module.scss';
import Header from "./components/Header/Header";
import Chatbot from "./components/Chatbot/Chatbot";

function App() {
    return (
        <div className={styles.layoutContainer}>
            <Header />
            <Chatbot />
        </div>
    );
}

export default App;
