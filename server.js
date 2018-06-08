const express = require ('express');
const cors = require('cors')
const app = express();
const data = require('./cohorts.js') 
const port = process.env.PORT || 3000;

app.get('/', function(request, response){
    response.json({data: data })
})

app.get('/:id', function(request, response){
    var cohort = getCohort(request.params.id, data)
    console.log(cohort)
    if(!cohort){
        response.status(404).json({error:{
            message: 'Try again'
        }})
    }
    else{
        response.json({data:cohort})
    }
})
app.listen(port);
function getCohort(id, dataArr){

    for (let i =0 ; i < dataArr.length ; i++){
                
        if(dataArr[i].id == id){
            return dataArr[i]
        }
    }
    return null
}

