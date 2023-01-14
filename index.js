let mylead=[];
let ul=document.getElementById("list");
let input=document.getElementById("inputelem");
let savebtn=document.getElementById("inputbtn");
let delbtn=document.getElementById("delbtn");
let  myleads=localStorage.getItem("mylead");
let savetab=document.getElementById("savetab");
myleads=JSON.parse(myleads);
if(myleads){
    mylead=myleads;
    render();
}
let tab=[
    {
        url:"https://www.linkedin.com/in/arun-sp-undefined-90bb28261/",
    }
];
savebtn.addEventListener("click",function (){
    mylead.push(input.value);

    input.value="";
    localStorage.setItem("mylead",JSON.stringify(mylead));
    render();
    console.log(localStorage.getItem("mylead"));
    });
delbtn.addEventListener("click",function(){
    localStorage.clear;
    mylead=[];
    console.log("del");
    render();
})
savetab.addEventListener("click",function(){
    var URL = window.location.href;
    mylead.push(URL);
    localStorage.setItem("mylead",JSON.stringify(mylead));
    render();
});
function render(){
let str="";
for(let i=0;i<mylead.length;i++){
    str += `<li class=listitem>
    <a target=_blank href='${mylead[i]}'>
    ${mylead[i]}
    </a>
    </li>`
}
ul.innerHTML=str;
}
// console.log(localStorage)

// let ul = document.getElementById("list");
// let input = document.getElementById("inputelem");
// let savebtn = document.getElementById("inputbtn");

// let leads = JSON.parse(localStorage.getItem('leads'))
// if (!leads) {
//     localStorage.setItem('leads', JSON.stringify([]))
// } else {
//     refreshLeads();
// }

// leads = JSON.parse(localStorage.getItem('leads'))


// savebtn.addEventListener('click', function() {
//     const val = input.value;
//     if (val) {
//         leads.push(val);
//         localStorage.setItem('leads', JSON.stringify(leads));
//         refreshLeads();
//     }
//     input.value = "";
// })

// function refreshLeads() {
//     let leadz = JSON.parse(localStorage.getItem('leads'))
//     ul.innerHTML = "";
//     for (let lead of leadz) {
//         let li = document.createElement('li');
//         li.textContent = lead;
//         ul.append(li);
//     }
// }
