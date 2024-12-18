import { program } from 'commander';

// Embed the words file
const words = await Bun.file('7776palavras.txt')
  .text()
  .then(text => text.split('\n')
  .filter(word => word.length > 0));

program
  .name('palavras-aleatorias')
  .description('CLI para gerar palavras aleatórias em português')
  .argument('<number>', 'número de palavras para gerar')
  .action((number: string) => {
    const n = parseInt(number);
    
    if (isNaN(n) || n <= 0) {
      console.error('Por favor, forneça um número válido maior que 0');
      process.exit(1);
    }

    const selectedWords = [];
    for (let i = 0; i < n; i++) {
      const randomIndex = Math.floor(Math.random() * words.length);
      selectedWords.push(words[randomIndex]);
    }

    selectedWords.forEach((word, index) => {
      console.log(`${index + 1}. ${word}`);
    });
  });

program.parse();
