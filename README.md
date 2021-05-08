<div 
  align="center"
  style="
    background: #29292e;
    border-radius: 1.5rem;
    display: flex;
    alight-itens:center;
    justify-content: center;
    flex-direction: column;
    padding: 10px 60px;
    margin: 10px 20px;
    border: 2px solid #444444;
  ">

  <h1 align="center">
      <img alt="ignews" title="ignews" src="github/logo.svg" width="352px" />
  </h1>

[![Licence](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)](LICENSE.md) <img alt="TypeScript" src="https://img.shields.io/badge/typescript-%23007ACC.svg?&style=for-the-badge&logo=typescript&logoColor=white"/> <img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/> <img alt="Next JS" src="https://img.shields.io/badge/nextjs-%23000000.svg?&style=for-the-badge&logo=next.js&logoColor=white"/>

  <!-- ![GitHub][repository_license_badge] ![React_Badge][web_react_badge] ![Types][typescript_shields] ![Next][next_shields] -->

</div>

<div align="center">

<br>

<p align="center">
  <strong>
      <a href="#-projeto">Projeto</a> &nbsp;|&nbsp; 
  </strong>
  <strong>
      <a href="#-layout">Layout</a> &nbsp;|&nbsp; 
  </strong>
  <strong>
      <a href="#-tecnologias">Tecnologias</a> &nbsp;|&nbsp; 
  </strong>
  <strong>
      <a href="#-como-executar-o-projeto">Executando</a> &nbsp;|&nbsp; 
  </strong>
  <strong>
      <a href="#-referências">Referências</a> &nbsp;|&nbsp; 
  </strong>
  <strong>
      <a href="#-autor">Autor</a> 
  </strong>
</p>

  <h4 align="center"> 
   Ig.news 🚀  
  </h4>

<p align="center">
  <img alt="ignews" src="github/ignews.png" width="100%">
</p>
</div>

---

## **💻 Projeto**

Ignews é um blog de tecnologia voltado a programação, com serviço pago mensal, com intenção de manter as pessoas antenadas nas atualidades e recursos que temos atualmente para deselvolvimento de softwares mais eficientes.

#### Features:

- [x] Login com Github mais cadastro do usuário no banco.
- [x] Acesso aos artigos completos para membros assinantes.
- [x] Acesso a uma prévia dos artigos aos membros não assinantes.
- [x] Ativação de assinatura com plano mensal (integração com [FaunaDB][faunadb] e [Stripe][stripe]).
- [ ] Desativação de assinatura com plano mensal
- [ ] Tela de Perfil.

---

## **🔖 Layout**

Você pode visualizar o layout do projeto no formato através [desse link](https://www.figma.com/file/PwkMoMxksroWkOkEXCn7OU/ig.news). Lembrando que você irá precisar ter uma conta no [Figma](http://figma.com/).

#### **Web**

  <div style="
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;"
  >
    <img style="border-radius: 0.5rem;" alt="telasWeb" src="github/screen01.png" width="100%">
    <br/>
    <br/>
    <img style="border-radius: 0.5rem;" alt="telasWeb" src="github/screen04.png" width="100%">
    <br/>
    <br/>
    <img style="border-radius: 0.5rem;" alt="telasWeb" src="github/screen05.png" width="100%">
    <br/>
    <br/>
    <img style="border-radius: 0.5rem;" alt="telasWeb" src="github/screen03.png" width="100%">
    <br/>
    <br/>
    <img  style="border-radius: 0.5rem;" alt="telasWeb" src="github/screen06.png" width="100%">
  <div>
---


## **💻 Tecnologias**

#### **Website** ([React][react])

- **[Typescript][typescript]**
- **[Next.js][next]**
- **[Next Auth][next_auth]**
- **[GitHub OAuth][github_oauth]**
- **[FaunaDB][faunadb]**
- **[Stripe][stripe]**
- **[Prismic CMS][prismic]**
- **[Axios][]**

> \* Veja o arquivo <kbd>[package.json](./package.json)</kbd>

#### **Utilitários**

- Editor: **[Visual Studio Code][vscode]**
- Markdown: **[StackEdit][stackedit]**, **<kbd>[Markdown Emoji][markdown_emoji]</kbd>**

---

## **🚀 Como executar o projeto**

### Configurações Iniciais

Primeiro, você precisa ter o <kbd>[NodeJS](https://nodejs.org/en/download/)</kbd> instalado na sua máquina.

Se você estiver utilizando o **Linux**, você pode optar por instalar o **Node** através do gerênciador de versões <kbd>[asdf]</kbd> para facilitar o processo de mudança da versão do **Node**, quando for necessário.

Você pode optar também por utilizar o **yarn** no lugar do **npm**. Você pode instalar clicando nesse <kbd>[link][yarn]</kbd>, ou através do <kbd>[asdf]</kbd>.

Após ter o **Node** instalado, instale as dependências do **React** de forma global, utilizando os comandos:

Instale as dependências contidas nos arquivos `package.json` que se encontram na raíz do repositório. Para instalar as dependências, basta abrir o terminal no diretório e digitar o comando:

```sh
$ npm install
# ou
$ yarn
```

> Veja a parte de **scripts {}** do arquivo <kbd>[package.json](./package.json)</kbd> para saber quais scripts estão disponíveis.

### Executando o WebSite

```sh
# Executando o website no modo de desenvolvimento:
$ npm run dev
    OU
# Executando o website no modo de desenvolvimento:
$ yarn dev
```

> Se o browser não abrir automaticamente, acesse: http://localhost:3000.

### Configuraçoes de Ambiente

Você deve procurar 3 chaves na sua conta do Stripe para as variaveis de ambiente, 2 chaves do github oauth, 1 chave na sua conta do FaunaDB para e 2 chaves na sua conta do PrismicCMS.

> Veja o exemplo de arquivo de configurações de ambiente <kbd>[.env.local.example.txt](./.env.local.example.txt)</kbd> para se orientar melhor sobre quais chaves devem ser configuradas para o ambiente.

---

## **📚 Referências**

- [Blog Rocketseat][rocketseat_blog]
- [Rocketseat][rocketseat_plataforma]
- [ReactJS][react_doc] | [ReactJS pt-BR][react_doc_ptbr]
- [Next.js][next]
- [Node.js][node]

## **👨‍🚀 Autor**

<a href="https://github.com/NatanSiiçva">
 <img style="border-radius: 50%;" src="https://github.com/NatanSiilva.png" width="100px;" alt="Natanael Silva"/>
  <br />
  <sub>
    <b>Natanael Silva</b>
  </sub>
</a>
<br />

👋 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=for-the-badge&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/natanael-silva-33b374188/)](https://www.linkedin.com/in/natanael-silva-33b374188/)
[![Gmail Badge](https://img.shields.io/badge/-Gmail-c14438?style=for-the-badge&logo=Gmail&logoColor=white&link=mailto:natanaelsilva.progjs@gmail.com)](mailto:natanaelsilva.progjs@gmail.com)

## **📝 Licença**

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

<!-- Referencias -->

[rocketseat_blog]: https://blog.rocketseat.com.br/
[rocketseat_plataforma]: https://app.rocketseat.com.br/
[rocketseat_site]: https://rocketseat.com.br/

<!-- Badges -->


[web_react_badge]: https://img.shields.io/badge/web-react-blue
[typescript_shields]: https://img.shields.io/badge/types-Typescript-blue
[next_shields]: https://img.shields.io/badge/vercel-Next.js-lightgrey

<!-- Techs -->

[react]: https://reactjs.org/
[react_doc]: https://reactjs.org/docs/getting-started.html
[react_doc_ptbr]: https://pt-br.reactjs.org/docs/getting-started.html
[node]: https://nodejs.org/en/
[vscode]: https://code.visualstudio.com/
[next_auth]: https://next-auth.js.org
[stripe]: https://stripe.com/docs
[faunadb]: https://fauna.com
[prismic]: https://prismic.io
[github_oauth]: https://docs.github.com/pt/developers/apps/authorizing-oauth-apps
[next]: https://nextjs.org/
[typescript]: https://www.typescriptlang.org/
[axios]: https://github.com/axios/axios
[asdf]: https://github.com/asdf-vm/asdf
[yarn]: https://classic.yarnpkg.com/en/docs/install/#debian-stable
[stackedit]: https://stackedit.io
[markdown_emoji]: https://gist.github.com/rxaviers/7360908
