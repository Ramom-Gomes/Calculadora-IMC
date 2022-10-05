export type level = {
    title: string;
    color: string;
    icon: 'down' | 'up';
    imc: number[];
    seuImc?: number;
}

export const Levels: level[] = [
    {title: 'magreza', color: '#96A3AB', icon: 'down', imc:[0, 18.5]},
    {title: 'normal', color: '#0EAD69', icon: 'up', imc:[18.6, 24.9]},
    {title: 'soprepeso', color: '#E2B039', icon: 'down', imc:[25, 30]},
    {title: 'obesidade', color: '#C3423F', icon: 'down', imc:[30.1, 99]},
];

export const ContadorImc = (height: number, weight: number) => {
    const imc = weight / (height * height);

    for(let i in Levels) {
        if(imc >= Levels[i].imc[0] && imc < Levels[i].imc[1]) {
            let LevelsCopy: level = {...Levels[i]};
            LevelsCopy.seuImc = parseFloat(imc.toFixed(2));
            return LevelsCopy;
        }
    }

    return null;
};