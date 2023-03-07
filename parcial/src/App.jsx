import { useState } from "react";
import "./App.css";
import { Card } from "./Card/Card";

function App() {
  const [data, setData] = useState({
    nombre: "",
    apellido: "",
  });

  const handleSubmit = (e) => {
    e.prevent.default();
  };

  return (
    <div>
      <h1>Carga de estudiantes</h1>

      <form onSubmit={handleSubmit}>
        <label>Nombre: </label>
        <br />
        <input
          type="text"
          name="nombre"
          value={data.nombre}
          placeholder="Nombre"
          onChange={(e) => setData({ ...data, nombre: e.target.value })}
        />
        <br />
        <label>Apellido: </label>
        <br />
        <input
          type="text"
          name="apellido"
          value={data.apellido}
          placeholder="Apellido"
          onChange={(e) => setData({ ...data, apellido: e.target.value })}
        />

        <br />
        <br />
        <button>Enviar</button>
      </form>

      <Card nombre={data.nombre} apellido={data.apellido} />
    </div>
  );
}

export default App;
