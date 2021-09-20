/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

const { volumen, segundo, cancion, detalles: det } = reproductor;
const { autor } = det;

// console.log('El volumen actual es de: ', vol );
// console.log('El segundo actual es de: ', segundo);
// console.log('La cancion actual es de: ', cancion);
// console.log('El autor es: ', autor);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

const [ goku, vegeta, trunks ] = dbz;

console.log('El personaje 1: ', goku);
console.log('El personaje 2: ', vegeta);
console.log('El personaje 3: ', trunks);