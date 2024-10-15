import './App.css';
import Main from './Component/Main/Main';
import Sidebar from './Component/Sidebar/Sidebar';
import ContextProvider from '../src/Context/Context';
function App() {
  return (
    <>
      <ContextProvider>
        <Sidebar />
        <Main />
      </ContextProvider>
    </>
  );
}

export default App;
