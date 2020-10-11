class Dado {
    lanzarDado(){
        return Number(Math.round(Math.random() * (100 - 1) + 1))
    }
}
class Corredor {
    constructor(nombre){
        this.nombre = nombre
        this.posicion = 0
    }
}
class Tortuga extends Corredor{
    constructor(nombre, posicion){
        super({nombre, posicion})
        this.nombre = nombre
    }
    avanzar(){
        let dado = new Dado
        let num = dado.lanzarDado()
        if (num <= 20){
            this.posicion -= 6
        } else if (num <= 50) {
            this.posicion += 1
        } else{
            this.posicion += 3
        }
    }
}
class Liebre extends Corredor{
    constructor(nombre, posicion){
        super({nombre, posicion})
        this.nombre = nombre
    }
    avanzar(){
        let dado = new Dado
        let num = dado.lanzarDado()
        if (num <= 20){
        } else if (num <= 40){
            this.posicion += 9
        } else if (num <= 50) {
            this.posicion -= 12
        } else if (num <= 85){
            this.posicion++
        } else {
            this.posicion -= 2
        }
    }
}
let tortuga = new Tortuga('Tortu')
let liebre = new Liebre('Liebre')
while (tortuga.posicion < 90 && liebre.posicion < 90){
    tortuga.avanzar()
    liebre.avanzar()
    console.log(tortuga.nombre + ': ' + tortuga.posicion + ' ' + liebre.nombre + ': ' + liebre.posicion)
}
if (tortuga.posicion >= 90){
    console.log('Ganó la ' + tortuga.nombre)
} else if (liebre.posicion >= 90){
    console.log('Ganó la ' + liebre.nombre)
} else {
    console.log('Empate')
}