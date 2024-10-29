//  let arr1=[2,4,8,9]; 
//  let arr2=[3,8,8,9]; 
function sort(arr1,arr2)
{
    sortedArray=[]; 
    let indexArr1=arr1.slice(); 
    let indexArr2=arr2.slice(); 
    for(let i=0; i<arr1.length; i++){
        for(let j=0; j<arr2.length; j++){
            if(arr1[i]==arr2[j]){
                if (indexArr1[i]!=null){
                    sortedArray.push(arr1[i]); 
                }
                if(indexArr2[j]!=null){
                    sortedArray.push(arr2[j]); 
                }
                console.log(arr1[i])
                indexArr1[i]=null; 
                indexArr2[j]=null; 
            }
            // else if(!sortedArray.includes(arr1[i]) && !sortedArray.includes(arr2[j])){
            else if(indexArr1[i]!=null && indexArr2[j]!=null){
                if(arr1[i]<arr2[j]){
                    sortedArray.push(arr1[i])
                    indexArr1[i]=null; 
                    // console.log(sortedArray)
                }
                else if(arr1[i]>arr2[j]){
                    sortedArray.push(arr2[j])
                    indexArr2[j]=null; 
                }
            }
        }
    }
    let finalArray=indexArr1.concat(indexArr2)
    // console.log(finalArray)
    for(let i of finalArray){
        if(i!=null){
            sortedArray.push(i)
        }
    }
    console.log(sortedArray,indexArr1,indexArr2,arr1,arr2)
    return sortedArray
}
// sort(arr1,arr2)
 function MergeSort(myArr){
    // console.log(myArr)
    if(myArr.length==1){
        return myArr
    }
    else{
        let n=myArr.length; 
        // console.log(myArr); 
        let arr1; 
        let arr2; 
        if(n%2==0){
            arr1=myArr.slice(0,n/2); 
            arr2=myArr.slice(n/2,n); 
        }
        else{
            arr1=myArr.slice(0,(n+1)/2); 
            arr2=myArr.slice((n+1)/2,n)
        }
        
        console.log(arr1); 
        console.log(arr2); 
        return sort(MergeSort(arr1),MergeSort(arr2))
    }
 }
let array1=[8,8,1,3,3,1,9,4,5,10,11,12,-4,0,0,0,-4,-6,-4]; 
 console.log(MergeSort(array1)); 
 export {MergeSort}; 