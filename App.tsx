import * as React from 'react';
import './style.css';
import Login from './login';
import { Card } from './card';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Containers/App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './Containers/Auth';
import Home from './Containers/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />

        {/* <Route path="/" element={<Auth />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// export default function App() {
//   return (
//     <div>
//       <Login />
//       <Card
//         name="La Digue"
//         country="Seychelles"
//         image="https://source.unsplash.com/jPmurJKSL_0/600x800"
//         rating={5}
//       />

//       <h1>Hello StackBlitz!</h1>
//     </div>
//   );
// }
