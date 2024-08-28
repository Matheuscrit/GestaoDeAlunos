from flask import Flask, request, jsonify
from models import db 
from models.aluno import Aluno
from models.turma import Turma
from flask_cors import CORS


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response
    
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:1234@localhost:3306/escola'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

with app.app_context():
    db.create_all()

turma = Turma()

@app.route('/aluno', methods=['POST'])
def adicionar_aluno():
    data = request.json
    nome = data['nome']
    notas = data['notas']
    frequencia = data['frequencia']
    
    novo_aluno = Aluno(nome=nome, notas=notas, frequencia=frequencia)
    db.session.add(novo_aluno)
    db.session.commit()
    
    turma.adicionar_aluno(novo_aluno)
    
    return jsonify({"message": f"Aluno {nome} adicionado com sucesso!"}), 201

@app.route('/medias/disciplinas', methods=['GET'])
def media_disciplinas():
    medias = turma.media_turma_por_disciplina()
    return jsonify({"media_disciplinas": medias}), 200

@app.route('/medias/geral', methods=['GET'])
def media_geral():
    media = turma.media_geral_turma()
    return jsonify({"media_geral_turma": media}), 200

@app.route('/alunos/atencao_especial', methods=['GET'])
def atencao_especial():
    alunos_abaixo_75_frequencia, alunos_acima_media_turma = turma.alunos_com_atencao_especial()

    abaixo_frequencia = [{"nome": aluno.nome, "frequencia": aluno.frequencia} for aluno in alunos_abaixo_75_frequencia]
    acima_media = [{"nome": aluno.nome, "media_notas": aluno.media_notas()} for aluno in alunos_acima_media_turma]

    return jsonify({
        "alunos_abaixo_75_frequencia": abaixo_frequencia,
        "alunos_acima_media_turma": acima_media
    }), 200

if __name__ == '__main__':
    app.run(debug=True)
