import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'; // Import the Home component
import Chat from './Chat'; // Import the Chat component
import Account from './Account'; // Import the Account component
import Menu from './Menu'; // Import the Menu component

function App() {
  return (
    <Router>
      <div className="flex justify-center my-4">
        <Menu /> {/* Use the Menu component */}
      </div>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  );
}

export default App;