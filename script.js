async function api() {
    var new_api = fetch('https://holidays.abstractapi.com/v1/?api_key=7ee4c9e8841a440ab40979e749d5c0f3&country=US&year=2023&month=01&day=26')
    console.log(new_api)
    var promise= await new_api
    var response= promise.json()
    var result = await response
    console.log(result)
    
    for (let i of result){
        var parent = document.querySelector('.user_data')
        var child=document.createElement('div')
        child.classList.add('style')
        child.innerHTML=`
        <p>Name:${i.name}</p>
        <p>Country:${i.country}</p>
        <p>Date:${i.date}</p>
        <p>Date_day:${i.date_day}</p>
        <p>Date_month:${i.date_month}</p>
        <p>Location:${i.location}</p>
        <p>Type:${i.type}</p>
        <p>Week_day:${i.week_day}</p>
        `
        parent.append(child)
        // console.log(i)
    }
   
    
   
}
api()




