const ivCalculator = <any>require('pokemon-go-iv-calculator');

interface IPossibleIV {
    attackIV: number;
    defenseIV: number;
    staminaIV: number;
    level: number;
    perfection: number;
}

export class IVCalculatorController {

    pokemonName: string;
    cp: number;
    hp: number;
    dust: number;

    possibleIVs: IPossibleIV[];

    static $inject = [];

    constructor() {}

    calculate(): void {
        let result = ivCalculator.evaluate(this.pokemonName, this.cp, this.hp, this.dust);
        if (result && result.ivs) {
            result.ivs.forEach((iv) => iv.level /= 2 );
            this.possibleIVs = result.ivs;
        }
    }
}
