const csvFilePath='./narrator_movies.csv'
const csv=require('csvtojson')
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    const names = jsonObj.map((obj=>obj.name))
    names.forEach(console.log)
    
})