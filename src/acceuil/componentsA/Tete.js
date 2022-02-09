import React from 'react';

const Header = ({ handleToggleDarkMode }) => {
	return (
		<div className='header'>
			

<link href='https://fonts.googleapis.com/css?family=Josefin+Sans' rel='stylesheet' type='text/css'></link>
<h1>
  <em>A</em>
  <em Class="planet left">C</em>
  <em>C</em>
  <em>E</em>
  <em class="planet right">U</em>
  <em>I</em>
  <em>L</em>
</h1>


			<button
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className='save'
			>
				DARK MODE
			</button>
		</div>
	);
};

export default Header;
