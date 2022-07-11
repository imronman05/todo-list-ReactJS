import './App.css';
import React, {useState} from 'react';
import NavigationBar from "./components/Navigation";
import InputList from "./components/Input";


function App() {

	if (typeof(Storage) !== undefined) {
		// console.log('browser mendukung')
	}else{
		// console.log('browser tidak mendukung')
	}
	const [count, setCount] = useState('light');

	const stylesContainer = count === 'light'? 'lightContainer': 'darkContainer';


  return (
    <div className={stylesContainer}>
     <NavigationBar count={count} setCount={setCount}/>
     <InputList count={count} setCount={setCount}/>
    </div>
  );
};

export default App;
