const doTask = () =>{
    return new Promise((resolve, reject) => {
        const number = 1 + Math.floor(Math.random() * 6);
        if(number !== 6){
            reject(number);
        }

        resolve(number);
    });
}

doTask().then((number) => console.log('Numero encontrando: ', number))
        .catch( (number) => console.log('Numero no encontrado: ',number))