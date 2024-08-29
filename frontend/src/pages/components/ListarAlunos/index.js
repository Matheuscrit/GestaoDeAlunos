import React, { useEffect, useState } from 'react';
import styles from './ListarAlunos.module.css';

function ListarAlunos() {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    const fetchAlunos = async () => {
      try {
        const response = await fetch('http://localhost:5000/alunos');

        if (!response.ok) {
          throw new Error('Erro ao obter a lista de alunos');
        }

        const data = await response.json();
        setAlunos(data); // Atribui a lista de alunos ao estado
      } catch (error) {
        console.error('Erro ao obter a lista de alunos:', error);
      }
    };

    fetchAlunos();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Lista de dados dos alunos</h2>
      <ul className={styles.list}>
        {alunos.map((aluno, index) => (
          <li key={index} className={styles.item}>
            {aluno.nome} {aluno.notas.join(', ')} {aluno.frequencia}%
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListarAlunos;
