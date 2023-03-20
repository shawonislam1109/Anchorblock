import { RouterProvider } from 'react-router-dom';
import './App.css';
import route from './Layout/Layout';

function App() {
  return (
    <div >
      <RouterProvider router={route}>
      
      </RouterProvider>
    </div>
  );
}

export default App;
