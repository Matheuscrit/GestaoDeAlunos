import React, { useEffect, useState } from 'react';
import styles from './MediaGeral.module.css';

function MediaGeral() {
  const [mediaGeral, setMediaGeral] = useState(null);

  useEffect(() => {
    const fetchMediaGeral = async () => {
      try {
        const response = await fetch('http://localhost:5000/medias/geral');
        if (!response.ok) {
          throw new Error('Erro ao buscar média geral da turma');
        }
        const result = await response.json();
        setMediaGeral(result.media_geral_turma);
      } catch (error) {
        console.error('Erro ao buscar média geral da turma:', error);
      }
    };

    fetchMediaGeral();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Média Geral da Turma</h2>
      <p className={styles.value}>{mediaGeral !== null ? mediaGeral : 'Carregando...'}</p>
    </div>
  );
}

export default MediaGeral;
