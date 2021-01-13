export function exemploTipos(){
    const numero = 8;
    const nome = 'Matheus';
    const humano:boolean = true;
    console.log('O numero eh: ' + numero);
    console.log('O nome eh: ' + nome);
    console.log('O bool eh: ' + humano);
}

export function exemploIfLoop(){
    let contador = 0;
    while (contador <= 5) {
        if (contador === 2) {
            console.log('chegou a ' + contador);    
        } else {
            console.log('nao chegou a 2');
        }
        console.log('contador ' + contador);
        contador++;
    }
    
}