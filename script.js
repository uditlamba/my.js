const requesturl='https://api.github.com/users/hiteshchoudhary'
const xhr=new XMLHttpRequest();
xhr.open("GET",requesturl)
xhr.onreadystatechange=function(){
    console.log(xhr.readyState);
    
    if(xhr.readyState===4){
        const data=JSON.parse(this.responseText)
        console.log(typeof data);
        console.log(data);
        console.log(data.followers);
        console.log(data.photo);
   
    document.addEventListener('click',function(){
        document.querySelector('p').innerHTML=data.followers
    })   

    }
}
// console.log(xhr.readyState);
xhr.send()

