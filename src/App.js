import React from 'react';
import './App.css'; // Import global styles
import Profile from './components/profileCard';


function App() {
return (
<div>

<Profile name={"Waqas"} title={"Software Engineer"}  age={21} location={"Karachi"} />


</div>
);
}
export default App;