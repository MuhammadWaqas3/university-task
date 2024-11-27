import React from 'react';
import './App.css'; // Import global styles
import Navbar from '../src/components/landingPage/navbar';
import LandingPage from '../src/components/landingPage/header';
import Form from './components/from';
import Footer from './components/landingPage/footer';

function App() {
return (
<div>
<Navbar />
<LandingPage />
<h1 className='form-heading'>Get Expert Help for Your Laptop Today!</h1>
<Form/>
<Footer/>
</div>
);
}
export default App;