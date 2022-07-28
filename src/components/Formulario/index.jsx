import React from "react";
import styles from "./styles.module.scss";

const Formulario = ({ onSubmit, onChange, tarea }) => {
  const { titulo, descripcion } = tarea;

  return (
    <div className="principal">
      <h2>Post It Simulator!</h2>
      <form className="" onSubmit={(e) => onSubmit(e)}>
        <div className="">
          <input
            autoComplete="off"
            className="titulo"
            onChange={(e) => onChange(e)}
            name="titulo"
            value={titulo}
            placeholder="Título..."
          />
          <input
            autoComplete="off"
            className="descr"
            onChange={(e) => onChange(e)}
            name="descripcion"
            value={descripcion}
            placeholder="Descripción..."
          />

          <button className="">Agregar</button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
