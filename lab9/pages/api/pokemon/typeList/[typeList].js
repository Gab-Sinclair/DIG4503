import Pokemon from 'json-pokemon';

export default (req, res) => {

   let types = []

    let result = {"error": "Could not find Type."};

    Pokemon.forEach((value) =>{
     if(value.typeList == req.query.typeList){
        types.push(value.name);
          }
        
  })

   res.json(types);
    }

    

