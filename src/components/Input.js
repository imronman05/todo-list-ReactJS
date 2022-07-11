import '../App.css';
import React, {useState} from "react";
import {Button, Container, Form, InputGroup, ListGroup} from 'react-bootstrap';
import {BsFillTrashFill} from 'react-icons/bs';


const InputList = (props)=>{
	const [tasks, setTasks]= useState([]);
	const [cheked, setCheked] = useState(false);
	const [curentValue, setCurentValue] = useState('');

	const handleChange = (event) => {
		setCurentValue(event.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		const newTask ={
			id: tasks.length + 1,
			isCompleted: cheked,
			list: curentValue
		}
		setTasks([...tasks, newTask]);
		setCurentValue('');
	}

	const toggle = props.count
	const stylesBorder = toggle === 'light' ? 'lightInputContainer' : 'darkInputContainer' ;
	const bgInput = toggle === 'light' ? 'lightInput' : 'darkInput' ;
	const buttonInput = toggle === 'light' ? 'btnLight' : 'btnDark' ;
	
			return(
			<Container className='mt-4 d-flex flex-column d-flex align-items-center'>
				<div className={stylesBorder} >
				 <InputGroup>
				 <form className='d-flex flex-row w-100 flex-grow-2' onSubmit={handleSubmit}>
			        <Form.Control
			        className={bgInput}
			          placeholder="Masukan daftar list"
			          aria-label="Masukan daftar list"
			          aria-describedby="basic-addon2"
			          value={curentValue}
			          onChange={handleChange}
			          
			        />
			        <Button disabled={curentValue === ''} type='submit' variant="outline-primary" id="button-addon2" className={buttonInput}>
			          Kirim!
			        </Button>
			       </form>
			      </InputGroup>
			     </div>
			     <List value={toggle} data={tasks} set={setTasks} setCheckbox={setCheked} checkbox={cheked}/>
		    </Container>
		)
}

const List = ({value, data, set ,setCheckbox, checkbox}) => {

	const darkListCon = value === 'light' ? 'lightList' : 'darkList';
	const h1 = value === 'light' ? 'listH1' : 'darkListH1';
	const bgInput = value === 'light' ? 'inputLight' : 'inputDark' ;

	const handleDelete = (id) => () => {
			const hapus = data.filter(task => task.id !== id);	
			set(hapus)
	}

	const handleCheked = (check) => (e) =>{
			
			setCheckbox(e.target.checked)
			console.log(data)
	}

	return(
		 <Container className={darkListCon}>
				     <div className=''>
				     <h1 className={h1} >TaskKu</h1>
				     	<ListGroup variant="flush">
				     	{
				     		data.map((value,index)=>
						      <ListGroup.Item className={bgInput} key={index}> 
						      <input className="form-check-input mt-1 rounded-circle me-4" type="checkbox" value=""   onChange={handleCheked(value.isCompleted)}/>
						      {value.list}
						      <BsFillTrashFill className='mt-1 ms-auto text-danger' style={{cursor: 'pointer'}} onClick={handleDelete(value.id)} />
						      </ListGroup.Item>

				     		)
				     	}
					    </ListGroup>
				     </div>
			     </Container>
		)
}

export default InputList;