```markdown
# Histórias das Guitarras - One Page (modelo)

O que foi alterado:
- O site foi adaptado para exibir histórias dos modelos de guitarra mais icônicos ao invés de oferecer personalização.
- Mantive a estrutura one-page (banner, destaque, modelos, contato).
- Em "Modelos", cada foto agora é um botão: ao clicar abre/fecha a história do modelo logo abaixo da foto (efeito accordion com animação suave).

Como usar:
1. Crie a pasta `img` na raiz do projeto.
2. Coloque as imagens com estes nomes (ou ajuste os caminhos no HTML):
   - img/img1.png (banner)
   - img/pic1.jpg, img/pic2.jpg, img/pic3.jpg (bloco de destaque)
   - img/lespaul.jpg
   - img/stratocaster.jpg
   - img/flyingv.jpg
3. Abra `index.html` no navegador.

Observações:
- O comportamento de abrir/fechar é controlado por `js/main.js`. O script faz animação suave alterando `max-height`.
- Se quiser que apenas um modelo fique aberto por vez (fechando os outros quando abre um), descomente o bloco indicado em `js/main.js`.
- Posso adicionar mais modelos, trocar os textos das histórias para versões mais completas, ou ainda transformar isso numa listagem dinâmica vinda de JSON se você quiser.
```