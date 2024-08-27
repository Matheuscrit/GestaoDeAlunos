from . import db

class Aluno(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(80), nullable=False)
    notas = db.Column(db.PickleType, nullable=False)  # Usando Pickle para armazenar listas de notas
    frequencia = db.Column(db.Float, nullable=False)

    def __repr__(self):
        return f'<Aluno {self.nome}>'

    def media_notas(self):
        return sum(self.notas) / len(self.notas)