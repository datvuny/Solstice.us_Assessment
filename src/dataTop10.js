import {json} from './data'

export const data = getMax(json)

function getMax(data) {
    let temp = {}, top10 = []
    data.forEach(item => {
        temp[item.titleUrl]=temp[item.titleUrl] ? temp[item.titleUrl]+1: 1
    });
    top10 = Object.keys(temp).sort((a,b)=>temp[b]-temp[a]).slice(0,10)

    let data2= data.filter(item=>top10.includes(item.titleUrl))
    return data2.reduce((unique, currVal) => {
        if(!unique.some(item => item.titleUrl === currVal.titleUrl )) {
          unique.push(currVal);
        }
        return unique;
    },[]);
}
