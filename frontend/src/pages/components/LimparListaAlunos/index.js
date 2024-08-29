import React from 'react';
import styles from './LimparListaAlunos.module.css';

const LimparListaAlunos = () => {
    const limparAlunos = async () => {
        try {
            const response = await fetch('http://localhost:5000/limpar_alunos', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();

        } catch (error) {
            alert(`Erro: ${error.message}`);
        }
        window.location.reload();

    };

    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={limparAlunos}>
                Limpar Todos os Alunos
            </button>
        </div>
    );
};

export default LimparListaAlunos;
