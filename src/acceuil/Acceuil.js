import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { nanoid } from 'nanoid';
import NotesList from './componentsA/ListesNotes';
import Search from './componentsA/cherche';
import Header from './componentsA/Tete';
import './Accueil.css';


const Accueil = () => {
	useEffect(() => {
		document.title = ""
	 }, []);
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			titre:'premiere note',
			text: '!',
			date: '09/02/2022',
		},
	]);

	const [searchText, setSearchText] = useState('');

	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('acceuil')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'acceuil',
			JSON.stringify(notes)
		);
	}, [notes]);

	// const addTitre = (text) =>{
	// 	const date =new date();
	// 	const newTitre={
	// 		id:nanoids(),
	// 		text:text,
	// 		date: date.toLocaleDateString(),
	// 	};
	// 	// const newTitre =[...titres,newTitre];
	// 	// setTitres(newTitre);
	// }

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className='container'>
				<Header handleToggleDarkMode={setDarkMode} />
				<Search handleSearchNote={setSearchText} />
				<NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
			</div>
		</div>
	);
};

export default Accueil;
