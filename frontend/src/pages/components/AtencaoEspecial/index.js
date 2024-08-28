import React, { useState, useEffect } from 'react';
import styles from './AtencaoEspecial.module.css';

function AtencaoEspecial() {
  const [alunosAbaixoFrequencia, setAlunosAbaixoFrequencia] = useState([]);
  const [alunosAcimaMedia, setAlunosAcimaMedia] = useState([]);

  useEffect(() => {
    const fetchAtencaoEspecial = async () => {
      try {
        const response = await fetch('http://localhost:5000/alunos/atencao_especial');
        const result = await response.json();
        setAlunosAbaixoFrequencia(result.alunos_abaixo_75_frequencia);
        setAlunosAcimaMedia(result.alunos_acima_media_turma);
      } catch (error) {
        console.error('Erro ao buscar alunos com atenção especial:', error);
      }
    };

    fetchAtencaoEspecial();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Alunos com Atenção Especial</h2>
      <h3 className={styles.sectionTitle}>Abaixo de 75% de Frequência</h3>
      <ul className={styles.list}>
        {alunosAbaixoFrequencia.map((aluno, index) => (
          <li key={index} className={styles.item}>
            {aluno.nome} - Frequência: {aluno.frequencia}%
          </li>
        ))}
      </ul>
      <h3 className={styles.sectionTitle}>Acima da Média da Turma</h3>
      <ul className={styles.list}>
        {alunosAcimaMedia.map((aluno, index) => (
          <li key={index} className={styles.item}>
            {aluno.nome} - Média de Notas: {aluno.media_notas}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AtencaoEspecial;
