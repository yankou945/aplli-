import { useState } from 'react';
import Carnets from './Carnets';

// const AddTitre = ({ handleAddTitre }) => {
// 	const [TitreText, setTitreText] = useState('');
// 	const characterLimit = 20;

// 	const Change = (event) => {
// 		if (characterLimit - event.target.value.length >= 0) {
// 			setTitreText(event.target.value);
// 		}
// 	};
// }
const AddNote = ({ handleAddNote }) => {
	
	const [noteText, setNoteText] = useState('');
	const characterLimit = 1000;
	<Carnets></Carnets>

	const [TitreText, setTitreText] = useState('');
	

	const handleChangeTitre =(event) => {
		if (characterLimit - event.target.value.length >=0){
			setTitreText(event.target.value);
		}
	};


	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};

	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			handleAddNote(noteText);
			setNoteText('');
			<Carnets></Carnets>
		}
	};
	const [ cancel, setCancel ] = useState(false);
	const handleCancelClick = () => {
		if (noteText.trim().length >= 0){
		setCancel(!cancel);
		setNoteText(noteText)
		}
	}
	
	
	return (
		<div className='titre-new'>
			<div className="note new">
				<textarea
				rows='8'
				cols='10'
				placeholder='Ajouter un Carnet...'
				value={noteText}
				onChange={handleChange}
				></textarea>
			</div>
			<div className='note-footer'>
				<small>
					{characterLimit - noteText.length} Remaining
				</small>
				
				<button className='save' onClick={handleSaveClick}>
					enregistrer
				</button>
				
			 </div>
		</div>
	);
}


export default AddNote;
