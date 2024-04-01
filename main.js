let yearinput = prompt('year?')
let monthinput = prompt('month?')
let dayinput = prompt('day?')

//source https://www.epochconverter.com

function CompareDates(year,month,day){
    const CurrentDate = new Date(); 
    if(Number.isInteger(year) && Number.isInteger(year) && Number.isInteger(year) == true){
        const GivenDate = new Date(`${year}-${month}-${day}`);
        if(CurrentDate == GivenDate){
            console.log("its the same date")
        }
        else{
            if(CurrentDate > GivenDate){            
                let Diff = CurrentDate.getFullYear() - year
                if (Diff == 1){
                    console.log(`${GivenDate} was ${Diff} year ago`)
                }else{
                    console.log(`${GivenDate} was ${Diff} years ago`)
                }     
            }
            else{
                let Diffy = year - CurrentDate.getFullYear() 
                if (Diffy == 1){
                    console.log(`${GivenDate} is in ${Diffy} year`)
                }else{
                    console.log(`${GivenDate} is in ${Diffy} years`)
                }
            }
        }
    }else{
        console.log("wrong format of info")
    }

}


CompareDates(Number(yearinput),Number(monthinput),Number(dayinput))

