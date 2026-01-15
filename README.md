# 🎉 Site de Aniversário de 13 Anos

Bem-vindo ao seu site de aniversário! Este é um site completo e interativo para celebrar os 13 anos com tema azul, azul metálico e prata.

---

## 📋 O que está incluído?

- ✨ **index.html** - Página principal do site
- 🎨 **style.css** - Estilos e design (tema azul, azul metálico e prata)
- 🔧 **script.js** - Funcionalidades interativas
- 🖼️ **aniversario_menina.png** - Imagem da aniversariante (gerada por IA, pode ser trocada)
- 🎵 **musica_fundo.wav** - Música instrumental de fundo
- 📍 **qrcode_localizacao.png** - QR Code para a localização
- 📄 **README.md** - Este arquivo com instruções

---

## 🚀 Como Usar

### Passo 1: Editar as Informações do Evento

Abra o arquivo **script.js** com um editor de texto (Bloco de Notas, VS Code, etc.) e procure por esta seção:

```javascript
let eventoInfo = {
    data: 'DD/MM/YYYY',        // Editar com a data do evento
    hora: 'HH:MM',             // Editar com a hora do evento
    local: 'Endereço do Local', // Editar com o endereço
    aniversariante: 'Aniversariante' // Nome da aniversariante
};
```

**Exemplo:**
```javascript
let eventoInfo = {
    data: '15/02/2025',
    hora: '14:00',
    local: 'Rua das Flores, 123 - Brasília, DF',
    aniversariante: 'Maria'
};
```

**Salve o arquivo após fazer as alterações.**

---

### Passo 2: Configurar o Google Form para Confirmação de Presença

#### 2.1 Criar um Google Form

1. Acesse **https://forms.google.com**
2. Clique em **"Criar"** (ícone de +)
3. Escolha **"Formulário em branco"**
4. Dê um título ao formulário (ex: "Confirmação de Presença - Aniversário de 13 Anos")

#### 2.2 Adicionar Perguntas ao Formulário

Adicione as seguintes perguntas:

**Pergunta 1:**
- Tipo: Texto curto
- Pergunta: "Qual é o seu nome?"
- Obrigatória: Sim

**Pergunta 2:**
- Tipo: Texto curto
- Pergunta: "Quantas pessoas virão com você? (incluindo você)"
- Obrigatória: Sim

**Pergunta 3:**
- Tipo: Múltipla escolha
- Pergunta: "Você confirma sua presença?"
- Opções: "Sim, confirmo" e "Não, não posso ir"
- Obrigatória: Sim

#### 2.3 Obter o Link do Formulário

1. Clique no botão **"Enviar"** (ícone de compartilhamento no canto superior direito)
2. Copie o link do formulário (ele começará com **https://forms.gle/**)
3. **Guarde este link**, você precisará dele no próximo passo

#### 2.4 Adicionar o Link ao Site

Abra o arquivo **script.js** novamente e procure por esta linha:

```javascript
const linkFormulario = 'https://forms.gle/LINK_DO_SEU_FORMULARIO_AQUI';
```

Substitua **LINK_DO_SEU_FORMULARIO_AQUI** pelo link que você copiou. Por exemplo:

```javascript
const linkFormulario = 'https://forms.gle/aBcDeFgHiJkLmNoPqRsT';
```

**Salve o arquivo após fazer a alteração.**

---

### Passo 3: Trocar a Imagem da Aniversariante (Opcional)

Se você quiser usar uma foto real da aniversariante:

1. Tire uma foto ou escolha uma foto existente
2. Renomeie a foto para **aniversario_menina.png**
3. Coloque a foto na mesma pasta que os outros arquivos
4. A foto será automaticamente exibida no site

**Dica:** Você pode usar qualquer formato de imagem (JPG, PNG, etc.), mas recomendamos PNG para melhor qualidade.

---

### Passo 4: Testar o Site Localmente

Antes de publicar no GitHub Pages, teste o site no seu computador:

1. Abra o arquivo **index.html** com um navegador (clique duas vezes nele ou arraste para o navegador)
2. Verifique se:
   - A imagem aparece corretamente
   - As informações do evento estão corretas
   - A música está tocando (pode ser necessário clicar em algum lugar da página)
   - O QR Code aparece
   - Os botões funcionam

---

### Passo 5: Publicar no GitHub Pages

#### 5.1 Criar uma Conta no GitHub (se não tiver)

1. Acesse **https://github.com**
2. Clique em **"Sign up"** (Inscrever-se)
3. Preencha os dados solicitados e conclua o cadastro

#### 5.2 Criar um Novo Repositório

1. Clique no ícone **"+"** no canto superior direito
2. Selecione **"New repository"**
3. Preencha os dados:
   - **Repository name:** `aniversario-13-anos` (ou outro nome que desejar)
   - **Description:** "Site de aniversário de 13 anos"
   - **Public:** Selecione esta opção (para que o site seja público)
   - **Add a README file:** Não é necessário (você já tem um)
4. Clique em **"Create repository"**

#### 5.3 Fazer Upload dos Arquivos

1. Na página do repositório, clique em **"Add file"** → **"Upload files"**
2. Selecione todos os arquivos do seu site:
   - index.html
   - style.css
   - script.js
   - aniversario_menina.png
   - musica_fundo.wav
   - qrcode_localizacao.png
   - README.md
3. Clique em **"Commit changes"** (no final da página)

#### 5.4 Ativar o GitHub Pages

1. Na página do repositório, clique em **"Settings"** (Configurações)
2. No menu esquerdo, clique em **"Pages"**
3. Em **"Source"**, selecione **"main"** (ou **"master"**, dependendo do seu repositório)
4. Clique em **"Save"**
5. Aguarde alguns minutos. Você verá uma mensagem como:
   > "Your site is published at https://seu-usuario.github.io/aniversario-13-anos"

Pronto! Seu site está online! 🎉

---

## 🎨 Personalizações Adicionais

### Mudar as Cores

Se quiser mudar as cores do site, abra o arquivo **style.css** e procure pela seção:

```css
:root {
    --azul-escuro: #001a4d;
    --azul-medio: #0033cc;
    --azul-claro: #4d94ff;
    --azul-metalico: #1a7fd9;
    --prata: #e8e8e8;
    --prata-escura: #b0b0b0;
    --branco: #ffffff;
    --roxo-claro: #d4a5ff;
}
```

Você pode mudar os valores das cores (códigos hexadecimais) para as cores que desejar.

### Mudar a Música

Se quiser usar uma música diferente:

1. Encontre uma música em formato WAV ou MP3
2. Renomeie a música para **musica_fundo.wav** (ou **musica_fundo.mp3**)
3. Coloque a música na mesma pasta que os outros arquivos
4. Se usar MP3, abra o arquivo **index.html** e mude a linha:
   ```html
   <source src="musica_fundo.wav" type="audio/wav">
   ```
   Para:
   ```html
   <source src="musica_fundo.mp3" type="audio/mpeg">
   ```

---

## 📝 Editar as Informações Diretamente no Site

Quando você abrir o site no navegador, pode clicar nos campos de data, hora e local para editá-los diretamente. As alterações serão salvas no seu navegador.

---

## 🆘 Dúvidas Frequentes

### P: A música não está tocando. O que fazer?

**R:** Alguns navegadores exigem que o usuário clique em algum lugar da página antes de reproduzir áudio. Tente clicar em qualquer lugar do site. Se ainda não funcionar, verifique se o arquivo **musica_fundo.wav** está na mesma pasta que o **index.html**.

### P: O QR Code não está funcionando.

**R:** O QR Code deve redirecionar para o Google Maps. Se não estiver funcionando, verifique se o arquivo **qrcode_localizacao.png** está presente e se o link do Google Maps está correto no arquivo **script.js**.

### P: Como faço para compartilhar o link do site com os convidados?

**R:** Após publicar no GitHub Pages, você receberá um link como `https://seu-usuario.github.io/aniversario-13-anos`. Compartilhe este link com os convidados por WhatsApp, email, redes sociais, etc.

### P: Posso editar o site após publicar?

**R:** Sim! Você pode fazer alterações nos arquivos no GitHub e elas serão atualizadas automaticamente no site (pode levar alguns minutos).

---

## 📞 Suporte

Se tiver dúvidas ou problemas, consulte a documentação do GitHub Pages: https://pages.github.com

---

## 🎊 Aproveite a Festa!

Esperamos que seu site de aniversário seja um sucesso! Divirta-se celebrando os 13 anos! 🎂💖

---

**Criado com ❤️ para tornar seu aniversário especial!**
