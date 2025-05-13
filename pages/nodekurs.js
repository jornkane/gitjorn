/* er dette en js kommentar og css kommentar? */
/* kilde: https://www.youtube.com/watch?v=gyQyk80_upM&t=1512s */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});     

rl.question('Tast inn ditt enkle regnestykke: ', (input) => {
    if (input === 'exit') {
        console.log('Avslutter programmet...');
        rl.close();
    } else {
        try {
            const result = eval(input);
            console.log(`Resultatet av ${input} er: ${result}`);
        } catch (error) {
            console.error('Ugyldig regnestykke. Vennligst prøv igjen.');
        }
        rl.close(); // Lukk readline-grensesnittet etter å ha behandlet input
    }
});

