import * as React from 'react';
import './style.css';
import Login from './login';
import { Card } from './card';
export default function App() {
  return (
    <div>
      <Login />
      <Card
        name="La Digue"
        country="Seychelles"
        image="https://source.unsplash.com/jPmurJKSL_0/600x800"
        rating={5}
      />

      <h1>Hello StackBlitz!</h1>
    </div>
  );
}
