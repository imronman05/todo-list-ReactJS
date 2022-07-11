import '../App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {BsFillMoonFill, BsSun} from 'react-icons/bs';



const NavigationBar = (props) => {

	const toggleDark = () => {
		if (props.count === 'light') {
			props.setCount('dark')
		}else{
			props.setCount('light')
		}
	}

	const icon = props.count === 'light' ? <BsSun /> : <BsFillMoonFill />;
	const btnIcon = props.count === 'light' ? 'btn-Light-Nav' : 'btn-Dark-Nav';

	return (
		<Navbar className='shadow rounded' expand="lg" id={props.count}>
	      <Container className=''>
	        <Navbar.Brand >
	        	<h3 className='text-white'>
	        		Aplikasi TaskKu
	        	</h3>
	        </Navbar.Brand>
	        <Navbar.Toggle />
	        <Navbar.Collapse className="justify-content-end">
	        	<button className={btnIcon} onClick={toggleDark}>
	          		{icon}
	          	</button> 
	       
	        </Navbar.Collapse>
	      </Container>
	    </Navbar>
	);

};


export default NavigationBar;
