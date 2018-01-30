import { Player } from '../team-data/player';
import { MatchType } from './MatchType.enum';

export class PerMatchPlayerStat {
    public id: Number;
    public player: Player;
    public runsScored: Number;
    public ballsPlayed: Number;
    public hasBatted: Boolean;
    public notOut: Boolean;
    public hasBowled: Boolean;
    public oversBowled: Number;
    public runsGiven: Number;
    public wicketsTaken: Number;
    public matchType: MatchType;
    public date: Date;
    public sixes: Number;
    public fours: Number;
    public wides: Number;
    public noBalls: Number;

    constructor() {
        this.player = new Player();
        this.runsScored = 0;
        this.ballsPlayed = 0;
        this.hasBatted = false;
        this.hasBowled = false;
        this.notOut = false;
        this.oversBowled = 0;
        this.runsGiven = 0;
        this.runsScored = 0;
        this.wicketsTaken = 0;
        this.matchType = MatchType.UNKNOWN;
        this.date = new Date();
        this.sixes = 0;
        this.fours = 0;
        this.wides = 0;
        this.noBalls = 0;
    }
}