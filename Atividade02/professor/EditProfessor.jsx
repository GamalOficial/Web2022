import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { professors } from "./dataprof";

const EditProfessor = () => {
  const [name, setName] = useState("");
  const [university, setUniversity] = useState("");
  const [degree, setDegree] = useState(0);

  const params = useParams();

  useEffect(() => {
    const professor = professors[params.id];
    setName(professor.name);
    setUniversity(professor.university);
    setDegree(professor.degree);
  }, [params.id]);

  const handleSubmit = (event) => {
    //aqui código de comunicação com o backend
    alert(`Nome: ${name} \nUniversity: ${university}\nDegree: ${degree}`);
  };

  return (
    <div>
      <h2>Editar Professor</h2>
      <h2>{name}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome</label>
          <input
            type="text"
            className="form-control"
            value={name == null || name === undefined ? "" : name}
            name="name"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Universidade</label>
          <input
            type="text"
            className="form-control"
            value={university ?? ""}
            name="university"
            onChange={(event) => setUniversity(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Diploma</label>
          <input
            type="text"
            className="form-control"
            value={degree ?? 0}
            name="degree"
            onChange={(event) => setDegree(event.target.value)}
          />
        </div>
        <div className="form-group" style={{ paddingTop: 10 }}>
          <input
            type="submit"
            value="Editar Professor"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default EditProfessor;
