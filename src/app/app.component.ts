import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RockGame';
  playerScore = 0;
  computerScore = 0;
  result = '';
  winnerMessage = '';
  optionsVisible = true;

  getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];

    const randomIndex = Math.floor(Math.random() * options.length);

    return options[randomIndex];
  }

  hasPlayerWonTheRound(player: string, computer: string) {
    return (
      (player === "Rock" && computer === "Scissors") ||
      (player === "Scissors" && computer === "Paper") ||
      (player === "Paper" && computer === "Rock")
    );
  }

  playRound(userOption: string): void {
    const computerOption = this.getRandomComputerResult();
    if (this.hasPlayerWonTheRound(userOption, computerOption)) {
      this.playerScore++;
      this.result = `Player wins! ${userOption} beats ${computerOption}`;
    } else if (computerOption === userOption) {
      this.result = `It's a tie! Both chose ${userOption}`;
    } else {
      this.computerScore++;
      this.result = `Computer wins! ${computerOption} beats ${userOption}`;
    }

    // Check if game is over
    if (this.playerScore === 3 || this.computerScore === 3) {
      this.winnerMessage = `${this.playerScore === 3 ? 'Player' : 'Computer'} has won the game!`;
      this.optionsVisible = false;  // Hide options
    }
  }

  resetGame(): void {
    this.playerScore = 0;
    this.computerScore = 0;
    this.result = '';
    this.winnerMessage = '';
    this.optionsVisible = true;  
  }
}
