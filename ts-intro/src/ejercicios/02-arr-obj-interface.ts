/*
    ===== Código de TypeScript =====
*/


let habildades: string[] = ["Bash", "Counter", "Healing"]; 

interface Personaje {
    nombre: string,
    hp: number,
    habilidades: string[],
    puebloNatal?: string,
}

const personaje: Personaje = {
    nombre: "juan",
    hp: 100,
    habilidades: ["Bash", "Counter", "Healing"]
}

personaje.puebloNatal = "Pueblo Paleta";

console.table ( personaje );
