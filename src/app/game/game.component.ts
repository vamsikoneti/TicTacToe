import { Component, OnInit } from '@angular/core';
import { Gamelogic } from '../gamelogic';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  providers: [Gamelogic]
})
export class GameComponent implements OnInit {

  constructor(public game: Gamelogic) { }

  ngOnInit(): void {
  }

  startGame(): void
  {
    this.game.gameStart();
    const currentPlayer = 'Player ' + this.game.currentTurn + " 's Turn";
    const information = document.querySelector('.current-status');
    information!.innerHTML = currentPlayer;
    
  }

  async clickSubField( subField: any): Promise<void>
  {
      if(this.game.gameStatus === 1)
      {
        const position = subField.currentTarget.getAttribute('position');
        
        this.game.setField(position, this.game.currentTurn!);
        const colour = this.game.getPlayerColourClass();
        subField.currentTarget.classList.add(colour);

        //await this.game.checkGameEndWinner();
        

        await this.game.checkGameEndFull();

        this.game.changePlayer();

        if(this.game.gameStatus ===1)
        {
          const currentPlayer =  'Player ' + this.game.currentTurn + " 's Turn";
          const information = document.querySelector('.current-status');
          information!.innerHTML = currentPlayer;
       }
      }


  }

}
