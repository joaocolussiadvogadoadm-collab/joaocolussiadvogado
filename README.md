# Joao Colussi Advocacia

Landing page institucional estatica para escritorio de advocacia, com foco em design premium, responsividade e animacoes suaves.

## Estrutura do projeto

- `index.html`: pagina principal da landing page
- `quem-sou.html`: pagina complementar com perfil profissional
- `assets/css/style.css`: estilos globais e layout responsivo
- `assets/js/main.js`: menu mobile, animacoes de entrada e parallax
- `assets/img/`: imagens utilizadas no site
- `vercel.json`: configuracao para deploy estatico na Vercel

## Como rodar localmente

Por ser um projeto estatico, voce pode abrir `index.html` direto no navegador.

Opcional (recomendado): usar servidor local para melhor comportamento de assets.

Exemplo com VS Code:
1. Instale a extensao Live Server.
2. Clique com o botao direito em `index.html`.
3. Selecione `Open with Live Server`.

## Como editar conteudo

### Textos
1. Edite os textos em `index.html` e `quem-sou.html`.
2. Salve e atualize o navegador.

### Imagens
1. Substitua arquivos dentro de `assets/img/`.
2. Mantenha os mesmos nomes para evitar editar HTML.
3. Se trocar nomes, atualize os caminhos `src` nas paginas HTML.

### Cores e estilo
1. Abra `assets/css/style.css`.
2. Ajuste as variaveis no bloco `:root` (cores e sombras).
3. Para o footer com degrade animado, ajuste a regra `.site-footer`.

### Animacoes
1. O efeito parallax e configurado em `assets/js/main.js`.
2. Velocidades por elemento usam atributos no HTML: `data-parallax-speed`.
3. Para suavizar ou intensificar, altere os valores no HTML e os limites no JS.

## Como publicar no GitHub

```bash
git add .
git commit -m "chore: atualiza conteudo do site"
git push origin main
```

## Como fazer deploy na Vercel

1. Acesse https://vercel.com/new
2. Importe o repositorio
3. Root Directory: `.`
4. Build Command: vazio
5. Output Directory: vazio
6. Clique em Deploy

## Observacoes

- Projeto sem dependencias de build.
- Recomendado otimizar imagens para melhor desempenho em producao.
