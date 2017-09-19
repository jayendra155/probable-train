import { BattingStats } from './batting-stats';
import { BowlingStats } from './bowling-stats';

export class Player {

    public id: Number;
    public playerName: String;
    public playerAttribute: String;
    public battingStats: BattingStats;
    public bowlingStats: BowlingStats;

    constructor(){
        this.battingStats = new BattingStats();
        this.bowlingStats = new BowlingStats();
    }
}
