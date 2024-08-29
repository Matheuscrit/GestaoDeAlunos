# Sistema de Gestão do Alunos

Este projeto é um sistema de gestão de alunos que permite que professores insiram as notas e frequência dos alunos. O backend é desenvolvido em Python usando Flask, enquanto o frontend utiliza React com Next.js.

## Funcionalidades:

- Inserção de notas dos alunos.
- Cálculo automático da média das notas por aluno.
- Cálculo da média das notas da turma.
- Visualização da frequência de cada aluno.
- Indicação de alunos acima ou abaixo da média de frequência.
## Decisões de Projeto

### 1. Organização do Projeto

- **Backend e Frontend Separados:** O projeto foi dividido em dois diretórios principais: `Backend` e `Frontend`. Essa separação permite um desenvolvimento modular e facilita a manutenção do código.
  
- **Estrutura de Pastas:** No backend, organizamos os arquivos em `app.py` e `models/`, onde os modelos do banco de dados são armazenados. No frontend, a estrutura foi organizada em `src/pages/` para as páginas e componentes do React, `styles/` para os arquivos CSS, e outros arquivos de configuração na raiz.

### 2. Escolha das Tecnologias

- **Flask com MySQL no Backend:** Optamos por usar Flask para criar um servidor leve e MySQL como ORM, para facilitar a manipulação do banco de dados relacional. Essa combinação proporciona flexibilidade e eficiência no desenvolvimento de APIs RESTful.
  
- **React com Next.js no Frontend:** Utilizamos React para construir uma interface de usuário interativa e Next.js para o suporte a renderização do lado do servidor (SSR) e uma melhor otimização para SEO. Essa escolha facilita o desenvolvimento de aplicações web modernas e responsivas.

### 3. Estilização e Layout

- **Component-Level CSS Modules:** Para evitar conflitos de estilos globais, adotamos o uso de CSS Modules, que permitem a aplicação de estilos específicos para cada componente, garantindo uma aparência consistente e evitando a sobrescrita acidental de estilos.
  
- **Estilos Responsivos:** A largura dos componentes foi padronizada e estilos responsivos foram aplicados para assegurar que a interface se adapte bem a diferentes tamanhos de tela, oferecendo uma boa experiência ao usuário em dispositivos móveis e desktops.

### 4. Comunicação Backend-Frontend

- **API RESTful:** A comunicação entre o backend (Flask) e o frontend (React/Next.js) foi implementada utilizando endpoints RESTful. Isso garante que os dados possam ser facilmente consumidos pelo frontend através de requisições HTTP.
  
- **CORS Habilitado:** Foi habilitado o Cross-Origin Resource Sharing (CORS) para permitir que o frontend e backend, mesmo estando em domínios diferentes, possam se comunicar sem restrições, essencial para a separação dos dois ambientes.

## Estrutura do Projeto
### O projeto é dividido em duas partes principais:

1. Backend (Flask)

- Recebe as notas e frequência enviadas pelo frontend.
- Calcula e retorna a média das notas por aluno e da turma.
- Calcula se a frequência do aluno está acima ou abaixo da média.

2. Frontend (React + Next.js)

- Interface do usuário onde os professores podem inserir as notas e frequência dos alunos.
- Exibe as médias das notas dos alunos e da turma.
- Exibe a frequência e indica se o aluno está acima ou abaixo da média.

## Tecnologias Utilizadas

### Backend (Python Flask)
- Flask: Framework web leve e poderoso.
- Flask-CORS: Para permitir comunicação entre frontend e backend (Cross-Origin Resource Sharing).
- MySQL (ou outra base de dados à sua escolha): Para armazenar as informações dos alunos.

### Frontend (React + Next.js)

- React: Biblioteca JavaScript para construir interfaces de usuário.
- Next.js: Framework React com funcionalidades para renderização do lado do servidor e rotas.
- Axios (ou Fetch API): Para realizar chamadas ao backend Flask.

## Instalação

### Pré-requisitos
Certifique-se de ter instalado:

- Python 3.x
- Node.js e npm

### Backend
1. Clone o repositório:

```python
git clone https://github.com/seu-usuario/sistema-gestao-alunos.git
cd sistema-gestao-alunos/backend
``` 
2. Crie um ambiente virtual e instale as dependências:

```
python3 -m venv venv
source venv/bin/activate  # No Windows: venv\Scripts\activate
pip install -r requirements.txt
```
3. Execute o servidor Flask:

```
flask run
```

### Frontend
1. Navegue até a pasta do frontend:
```
cd ../frontend
```
2. Instale as dependências do projeto:
```
npm install
```
3. Execute o servidor de desenvolvimento Next.js:
```
npm run dev
```
## Uso
Após iniciar o backend e frontend, você poderá acessar o sistema no navegador, geralmente em http://localhost:3000. A partir daí, os professores poderão inserir as notas e frequência dos alunos e o sistema calculará automaticamente as médias e frequência.
```
Backend/
│
├── pycache/
│   ├── init.cpython-312.pyc
│   └── app.cpython-312.pyc
│
├── models/
│   ├── pycache/
│   │   ├── aluno.cpython-312.pyc
│   │   ├── init.cpython-312.pyc
│   │   └── turma.cpython-312.pyc
│   ├── init.py
│   ├── aluno.py
│   ├── turma.py
│   
├── get-pip.py
├── app.py

Frontend/
│
├── .next/               
├── node_modules/         
├── public/               
│
├── src/
│   ├── pages/
│   │   ├── api/          
│   │   ├── components/    
│   │   │   ├── AdicionarAluno/
│   │   │   │   ├── AdicionarAluno.module.css
│   │   │   │   └── index.js
│   │   │   ├── AtencaoEspecial/
│   │   │   │   ├── AtencaoEspecial.module.css
│   │   │   │   └── index.js
│   │   │   ├── LimparListaAlunos/
│   │   │   │   ├── LimparListaAlunos.module.css
│   │   │   │   └── index.js
│   │   │   ├── ListarAlunos/
│   │   │   │   ├── ListarAlunos.module.css
│   │   │   │   └── index.js
│   │   │   ├── MediaGeral/
│   │   │   │   ├── MediaGeral.module.css
│   │   │   │   └── index.js
│   │   │   └── MediasDisciplinas/
│   │   │       ├── MediaDisciplinas.module.css
│   │   │       └── index.js
│   │   ├── _app.js        
│   │   ├── _document.js   
│   │   └── index.js      
│
├── styles/                
│   ├── globals.css
│   └── Home.module.css
│
├── .gitignore
├── README.md
├── package.json
├── package-lock.json
├── next.config.js
├── jsconfig.json
└── .eslintrc.json        
```