class ServiceApi{
    Somar(num1, num2){
        if(isNaN(num1) || isNaN(num2))
        return num1 + num2
    }

    Subtrair(num1, num2){
        if(isNaN(num1) || isNaN(num2))
        return num1 + num2
    }

}

module.exports = new ServiceApi()