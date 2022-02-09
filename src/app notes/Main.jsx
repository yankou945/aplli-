import ReactMarkdown from "react-markdown";

const Main = ({ activeNote, onUpdateNote }) => {
  const onEditField = (field, value) => {
    onUpdateNote({
      ...activeNote,
      [field]: value,
      lastModified: Date.now(),
    });
  };

  if (!activeNote) return <div className="no-active-carnet">Aucune Notes</div>;

  return (
    
    <div className="app-main">
      <div className="app-main-carnet-edit">
        <input
          type="text"
          id="title"
          placeholder="Pas de Titre"
          value={activeNote.title}
          onChange={(e) => onEditField("title", e.target.value)}
          autoFocus

          
        />
        
        <textarea
          id="body"
          placeholder="Ecrit ta note juste ici"
          value={activeNote.body}
          onChange={(e) => onEditField("body", e.target.value)}
        />
      </div>
      
    </div>
  );
};

export default Main;
