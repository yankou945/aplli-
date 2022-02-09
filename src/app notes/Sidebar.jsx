
import { useNavigate } from 'react-router-dom';



const Sidebar = ({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) => {
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);
  const navigate = useNavigate();
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>APPLI NOTE</h1>

        <button onClick={onAddNote}>Rajouter</button>
      </div>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" onClick={() => navigate("/")}>Accueil</a>
    

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Paramétres</a>
        </li></div>
</nav>
      <div className="app-sidebar-carnet">
        {sortedNotes.map(({ id, title, body, lastModified }, i) => (
          <div
            className={`app-sidebar-carnet ${id === activeNote && "active"}`}
            onClick={() => setActiveNote(id)}
            key={id}
          >
          

            <div className="sidebar-carnet-title">
              <strong>{title}</strong>
              <button onClick={(e) => onDeleteNote(id)}>Supprimer</button>
            </div>
            

            <p>{body && body.substr(0, 100) + "..."}</p>
            <small className="carnet-meta">
              Modifier depuis{" "}
              {new Date(lastModified).toLocaleDateString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};



export default Sidebar;
