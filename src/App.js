import { toast, ToastContainer } from 'react-toastify';
import './App.css';
import Meditationbody from './components/Meditationbody/Meditationbody';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const notify = () => {
    toast.success('🧘 Meditation Completed!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  return (
    <div className="App">
      <ToastContainer />
      <Meditationbody notify={notify}></Meditationbody>
    </div>

  );
}

export default App;
