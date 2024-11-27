import React from 'react';
import './App.css'; // Import global styles
import Navbar from '../src/components/landingPage/navbar';
import LandingPage from '../src/components/landingPage/header';
// import Form from './components/from';

function App() {
return (
<div>
<Navbar />
<LandingPage />
{/* <Form/> */}
</div>
);
}
export default App;