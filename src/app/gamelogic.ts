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

    setField(position: number, value: number): void
    {
        this.gamefield[position] = value;

    }

    getPlayerColourClass():string
    {
        const colourClass = (this.currentTurn ===2)? 'player-2' : 'player-1';
        return colourClass;
    }

    changePlayer(): void
    {
        this.currentTurn = (this.currentTurn ===2)? 1: 2;
    }

    async checkGameEndFull(): Promise<boolean>
    {
        let isFull = true;

        if(this.gamefield.includes(0) )
        {
           isFull = false; 
        }
        if(isFull)
        {
            this.gameEnds();
            return true;
        }
        else
        {
            return false;
        }
    }

    gameEnds(): void
    {
        this.gameStatus = Status.STOP;
    }

}
