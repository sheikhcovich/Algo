function challengeArr(arr=[1,2,3,4]){
    let sum = arr.reduce((acc,current)=>acc+current,0);

    let i = 0;
    let j = arr.length-1;
    let firstSetSum = 0;
    while(firstSetSum < sum/2){
        
        firstSetSum += arr[i]+arr[j];
        i++;
        j--;
    }
    
    let firstSet = [...arr.slice(0,i),...arr.slice(j+1,arr.length)];
    let secondSet= arr.slice(i,j+1);
    let secondSetSum = secondSet.reduce((acc,current)=>acc+current,0);
    console.log(firstSetSum , "--",secondSetSum);
    
    if(secondSetSum !== firstSetSum || firstSet.length%2 !== 0 || secondSet.length%2 !==0) return -1;
    else return [...firstSet,...secondSet];
}
