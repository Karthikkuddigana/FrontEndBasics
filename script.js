 const submitButton=document.getElementById("SubmitButton"); 
 const resultContent=document.getElementById("ResultContent"); 
 const inputWord=document.getElementById("InputWord"); 

 //using asyng await implementation 
//  submitButton.addEventListener("click",async function fetchResult(e){
//     e.preventDefault(); 
//     let word=inputWord.value; 
//     let response=await getData(word); 
//     console.log(response)
//     console.log(response[0].phonetics[1].audio); 
//     resultContent.innerHTML = `<div>${response[0].phonetics[0].text}</div>
//     <audio controls>
//     <source src="${response[0].phonetics[1].audio}">
//     Your browser does not support the audio tag.
//     </audio>`; 


//  })
//  async function getData(word){
//     const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`; 
//     try{
//         const response= await fetch(url); 
//         if(!response.ok){
//             throw new Error(`Response status: ${response.status}`); 
//         }
//         const json = await response.json(); 
//         // console.log(json); 
//         return json; 
//     }
//     catch(error){
//         console.error(error.message); 
//     }
//  }

 // promises implementation 
 //also implemented loading functionality
 function getData(word){
    const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`; 
    return new Promise((resolve,reject)=>{
        resultContent.innerHTML="Loading..."
        try{
            console.log("getData called"); 
            const response= fetch(url); 
            // if(!response.ok){
            //     throw new Error(`Response status: ${response.status}`); 
            // }
            response.then((response)=>{
                const json = response.json(); 
                console.log(json); 
                resolve(json);
            }
             )
           
        }
        catch(error){
            reject(error.message); 
        }
    })
 }

 submitButton.addEventListener("click",function fetchResult(e){
    e.preventDefault(); 
    let word=inputWord.value; 
    getData(word).then((response)=>{
        console.log(response)
        console.log(response[0].phonetics[1].audio); 
        resultContent.innerHTML = `<div>${response[0].phonetics[0].text}</div>
        <audio controls>
        <source src="${response[0].phonetics[1].audio}">
        Your browser does not support the audio tag.
        </audio>`;
    }).catch((message)=>{
        resultContent.innerHTML="The word couldn't be found...Oops!"
        console.log("error received aborting"); 
        console.log(message)
    }); 
 })

 const submitWeatherForm=document.querySelector("#SubmitButtonWeatherForm"); 
 const resultWeatherContent=document.querySelector("#WeatherResultContent"); 
 const inputLocation=document.querySelector("#InputLocation"); 

 function getWeatherData(location){
    const url=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=GJGAL6Y4228F2LTC6AYK5UTAJ`; 
    return new Promise((resolve,reject)=>{
        resultWeatherContent.innerHTML="Loading..."
        try{
            console.log("getData called"); 
            const response= fetch(url,{
                headers:{
                    "Content-Type":"application/json", 
                }
            }); 
            // if(!response.ok){
            //     throw new Error(`Response status: ${response.status}`); 
            // }
            response.then((response)=>{
                const json = response.json(); 
                console.log(json); 
                resolve(json);
            }
             )
           
        }
        catch(error){
            reject(error.message); 
        }
    })
 }


 submitWeatherForm.addEventListener("click",function fetchResult(e){
    e.preventDefault(); 
    let word=inputLocation.value; 
    getWeatherData(word).then((response)=>{
        console.log(response)
        resultWeatherContent.innerHTML=response.description; 
        
    }).catch((message)=>{
        resultWeatherContent.innerHTML="The location couldn't be found...Oops!"
        console.log("error received aborting"); 
        console.log(message)
    }); 
 })
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

 class Node{
    constructor(value){
        this.value=value; 
        this.next=null; 
    }
 }
 class LinkedList{
    headNode={
        next: null, 
    }
    insertNode(value){
        // console.log(this.headNode.next)
        let myNewNode=new Node(value)
        if(this.headNode.next==null){
            this.headNode.next=myNewNode; 
            // console.log(this.headNode.next.value)
        }
        else{
            let currNode=this.headNode.next; 
            while(currNode.next){
                // console.log(currNode.value); 
                currNode=currNode.next; 
            }
            currNode.next=myNewNode; 
        }
    }
    printNode(){
        let currNode=this.headNode.next; 
        while(currNode.next){
            console.log(currNode.value); 
            currNode=currNode.next;         
        }
        console.log(currNode.value); 
    }
 }
 let myLinkedList=new LinkedList(); 
 myLinkedList.insertNode(9); 
 myLinkedList.insertNode(15); 
 myLinkedList.insertNode(25); 
 myLinkedList.insertNode(36); 
 myLinkedList.printNode(); 