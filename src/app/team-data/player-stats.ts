import { BattingStats } from './batting-stats';
import { BowlingStats } from './bowling-stats';

export class PlayerStats {

    public id: Number;
    public playerName: String;
    public playerAttribute: String;
    public battingStats: BattingStats;
    public bowlingStats: BowlingStats;

}
