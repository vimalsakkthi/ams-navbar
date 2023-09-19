import { useState } from 'react';
import NavBar from './NavBar';
import Dummy from './Dummy';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} children={<Dummy />}>
      </NavBar>
    </>
  );
}

export default App;
