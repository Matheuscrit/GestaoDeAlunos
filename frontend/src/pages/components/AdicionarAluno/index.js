import React, { useState } from 'react';
import styles from './AdicionarAluno.module.css';

function AdicionarAluno() {
  const [nome, setNome] = useState('');
  const [notas, setNotas] = useState('');
  const [frequencia, setFrequencia] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      nome,
      notas: notas.split(',').map(Number),
      frequencia: parseFloat(frequencia)
    };

    try {
      const response = await fetch('http://localhost:5000/aluno', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error('Erro ao adicionar aluno:', error);
    }
  };

  return (
    <div className={styles.form}>
      <h2 className={styles.title}>Adicionar Aluno</h2>
      <form onSubmit={handleSubmit}>
        <input 
          className={styles.input} 
          type="text" 
          placeholder="Nome" 
          value={nome} 
          onChange={(e) => setNome(e.target.value)} 
          required 
        />
        <input 
          className={styles.input} 
          type="text" 
          placeholder="Notas (separadas por vírgula)" 
          value={notas} 
          onChange={(e) => setNotas(e.target.value)} 
          required 
        />
        <input 
          className={`${styles.input} ${styles.inputNumber}`} 
          type="number" 
          placeholder="Frequência" 
          value={frequencia} 
          onChange={(e) => setFrequencia(e.target.value)} 
          required 
        />
        <button type="submit" className={styles.button}>Adicionar</button>
      </form>
    </div>
  );
}

export default AdicionarAluno;
