import {json} from './data'

export const data1 = getMin(json)

function getMin(data) {
    let temp = {}, Bottom10 = []
    data.forEach(item => {
        temp[item.titleUrl]=temp[item.titleUrl] ? temp[item.titleUrl]+1: 1
    });
    Bottom10 = Object.keys(temp).sort((a,b)=>temp[a]-temp[b]).slice(0,10)

    let data2= data.filter(item=>Bottom10.includes(item.titleUrl))
    return data2.reduce((unique, currVal) => {
        if(!unique.some(item => item.titleUrl === currVal.titleUrl )) {
          unique.push(currVal);
        }
        return unique;
    },[]);
}
