const vehiclePrototype = {
    init: function(carModel) {
        this.model = carModel
    },
    getModel: function(){
        console.log("The model of this Vehicle is: " + this.model)
    }
}

function vehicle( model ){
    
    function F (){}

    /* inseri no prototype da funcao F o objeto vehiclePrototype que serve como prototipo para a criacao do objeto*/
    F.prototype = vehiclePrototype
    const f = new F()

    f.init( model )
    return f
}


const car = vehicle( "Chevrolet Prisma" )
car.getModel()
console.log(car.__proto__)