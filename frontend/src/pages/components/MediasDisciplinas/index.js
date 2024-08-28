import React, { useEffect, useState } from 'react';
import styles from './MediaDisciplinas.module.css';

function MediaDisciplinas() {
  const [mediaDisciplinas, setMediaDisciplinas] = useState([]);

  useEffect(() => {
    const fetchMediaDisciplinas = async () => {
      try {
        const response = await fetch('http://localhost:5000/medias/disciplinas');
        if (!response.ok) {
          throw new Error('Erro ao obter médias das disciplinas');
        }
        const data = await response.json();
        setMediaDisciplinas(data.media_disciplinas);
      } catch (error) {
        console.error('Erro ao obter médias das disciplinas:', error);
      }
    };

    fetchMediaDisciplinas();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Médias por Disciplina</h2>
      <ul className={styles.list}>
        {mediaDisciplinas.length > 0 ? (
          mediaDisciplinas.map((media, index) => (
            <li key={index} className={styles.item}>
              Disciplina {index + 1}: {media}
            </li>
          ))
        ) : (
          <li className={styles.item}>Carregando...</li>
        )}
      </ul>
    </div>
  );
}

export default MediaDisciplinas;
