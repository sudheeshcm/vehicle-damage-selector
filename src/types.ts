export interface IDamage {
    damaged: boolean;
    severity: string;
    damageType: string;
}

export interface IDamages { [part: string]: IDamage };
export interface IGenericMap { [key: string]: string };