
# :scroll: Trybers and Dragons

Nste projeto, desenvolvi uma aplicação com os princípios da arquitetura SOLID e os princípios de POO em uma estrutura de jogos de interpretação de papéis, mais conhecidos como jogos RPG (Role Playing Game).

## ⚙️ Funcionalidades

✅ Criar Raças;

✅ Criar Classes;

✅ Criar Monstros;

✅ Sistemática PVP/PVE (Player vs Player / Player vs Enviroment);

## :hammer_and_wrench: Ferramentas 
### 🍮 BackEnd
- TypeScript;
- POO;
- SOLID;
- DOCKER;

# Orientações

- *Clonar o repositório:*

```
$ git clone 
```

- *Acessar o projeto blogsapi:*

```
$ cd trybers-and-dragons
```

<details>
  <summary><strong>🐋 Rodando no Docker vs Localmente</strong></summary><br />
  
  ## Com Docker

  > Rode o serviço `node` com o comando `docker-compose up -d`.
  - Esse serviço irá inicializar um container chamado `trybers_and_dragons`.
  - A partir daqui você pode rodar o container `trybers_and_dragons` via CLI ou abri-lo no VS Code.

  > Use o comando `docker exec -it trybers_and_dragons bash`.

  > Instale as dependências com `npm install`
  
  ⚠ Atenção ⚠ Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 

<img src="images/remote-container.png" width="800px" >  

---
  
  ## Sem Docker
  
  > Instale as dependências com `npm install`
 
  - Para rodar o projeto desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador.

  <br/>
</details>
