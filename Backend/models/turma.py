from .aluno import Aluno
from . import db

class Turma:
    def __init__(self):
        pass

    def adicionar_aluno(self, aluno):
        db.session.add(aluno)
        db.session.commit()

    def media_turma_por_disciplina(self):
        alunos = Aluno.query.all()
        if not alunos:
            return []

        total_disciplinas = len(alunos[0].notas)
        media_disciplinas = [0] * total_disciplinas
        
        for aluno in alunos:
            for i in range(total_disciplinas):
                media_disciplinas[i] += aluno.notas[i]

        return [round(media / len(alunos), 2) for media in media_disciplinas]

    def media_geral_turma(self):
        alunos = Aluno.query.all()
        if not alunos:
            return 0
        
        medias = [aluno.media_notas() for aluno in alunos]
        return round(sum(medias) / len(medias), 2)

    def alunos_com_atencao_especial(self):
        alunos = Aluno.query.all()
        if not alunos:
            return [], []

        media_geral = self.media_geral_turma()
        alunos_abaixo_75_frequencia = [aluno for aluno in alunos if aluno.frequencia < 75]
        alunos_acima_media_turma = [aluno for aluno in alunos if aluno.media_notas() > media_geral]
        return alunos_abaixo_75_frequencia, alunos_acima_media_turma
