const express = require ('express');
const app = express();
const data = require('./cohorts.js') 

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
app.listen(3000);
function getCohort(id, dataArr){

    for (let i =0 ; i < dataArr.length ; i++){
                
        if(dataArr[i].id == id){
            return dataArr[i]
        }
    }
    return null
}