export interface IDamage {
    damaged: boolean;
    severity: string;
    damageType: string;
}

export interface CarProps {
    damages: { [part: string]: IDamage };
}