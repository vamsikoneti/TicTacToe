import { Status } from './gamestatus';

export class Gamelogic {

    gamefield: Array<number> = [ ];

    /*
        The structure of the board is as follows: 
        
        [0,1,2]
        [3,4,5]
        [6,7,8]

    */

    currentTurn?: number;
    gameStatus?: Status;


    public constructor()
    {
        this.gameStatus = Status.STOP;
        this.gamefield = [0,0,0,0,0,0,0,0,0];

    }

    gameStart():void
    {
        this.gamefield = [0,0,0,0,0,0,0,0,0];
        this.currentTurn= this.randomPlayerStart();
        console.log(this.currentTurn);
        this.gameStatus = Status.START;
    }
    randomPlayerStart(): number
    {
        const start = Math.floor(Math.random()*2)+1;
        return start;
    }

}
