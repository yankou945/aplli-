import { MdDeleteForever } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';


const Note = ({ id, text, date, handleDeleteNote }) => {
	const navigate = useNavigate();
	
	return (
		<div className='note'>
			<button className='note' onClick={() => navigate("/notes-app")}>
					VOIR
				</button>
			<span>{text}</span>
			<div className='note-footer'>
				<small>{date}</small>
				<MdDeleteForever
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				/>
			</div>
		</div>
	);
};

export default Note;
