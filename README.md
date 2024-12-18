# 🎲 Palavras Aleatórias

Uma CLI simples e rápida para gerar palavras aleatórias em português.

## 📋 Sobre

Este projeto fornece uma ferramenta de linha de comando para gerar palavras aleatórias em português. É útil para:
- Criar senhas memoráveis
- Gerar nomes aleatórios
- Exercícios de criatividade
- Jogos de palavras

## 🚀 Instalação

Certifique-se de ter o [Bun](https://bun.sh) instalado em seu sistema.

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/palavras-aleatorias.git
cd palavras-aleatorias

# Instale as dependências
bun install
```

## 💻 Uso

Você pode usar a CLI de duas formas:

### Desenvolvimento
```bash
bun run index.ts <número>
```

### Versão compilada
```bash
# Primeiro, compile o projeto
bun run build

# Depois execute
./dist/palavras-aleatorias <número>
```

Onde `<número>` é a quantidade de palavras aleatórias que você deseja gerar.

### Exemplo
```bash
bun run index.ts 3
```

Saída:
```
1. palavra
2. aleatória
3. exemplo
```

## 🛠️ Tecnologias

- [Bun](https://bun.sh) - Runtime JavaScript rápido e all-in-one
- [TypeScript](https://www.typescriptlang.org/) - Superset tipado do JavaScript
- [Commander.js](https://github.com/tj/commander.js) - Solução completa para CLIs em Node.js

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
