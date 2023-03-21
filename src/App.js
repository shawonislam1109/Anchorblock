import { RouterProvider } from 'react-router-dom';
import './App.css';
import route from './Layout/Layout';
import {
 
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

function App() {
  const queryClient = new QueryClient()
  return (
    <div >
      <QueryClientProvider client={queryClient}>
      <RouterProvider router={route}/>
    </QueryClientProvider>
      
    </div>
  );
}

export default App;
