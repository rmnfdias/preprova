class ControllerApi{
    Somar(req, res){
        try{
            const num1 = req.body.num1
            const num2 = req.body.num2

            const result = num1 + num2;
        }
        catch(error){
            console.log(error)
            res.status(400).send({msg: error.mensagem})
        }
    }

    Subtrair(req, res){
        try{
            const num1 = req.body.num1
            const num2 = req.body.num2

            const result = num1 - num2;

        }
        catch(error){
            console.log(error)
            res.status(400).send({msg: error.mensagem})

        }
    }
}