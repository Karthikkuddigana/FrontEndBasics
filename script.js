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