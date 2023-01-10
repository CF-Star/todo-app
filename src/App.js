import Header from './components/Header/Header'
import Help from './components/Help/Help';
import MainMenu from './components/MainMenu/MainMenu';
import Tasks from './components/Tasks/Tasks'
import { Routes, Route } from "react-router-dom";
//import Form from './components/Tasks/Form/Form';

function App() {
    return (
        <>
            <Header />
            <MainMenu />
            <Routes>
                <Route path="/" element={<Tasks />} />
                <Route path="/help" element={<Help />} />
            </Routes>
            {/* <Tasks /> */}
            {/* <Help/> */}
            {/*<Form />*/} 
            {/*being imported through Tasks*/ }
        </>
    );

}

export default App;
