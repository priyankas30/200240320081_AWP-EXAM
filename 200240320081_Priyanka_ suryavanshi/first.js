let likeme=function (btnElement){
    let likeStr= btnElement.children[0].innerHTML;
    let likecount=parseInt(likeStr);
    likecount++;
    btnElement.children[0].innerHTML=likecount;
}

let commentHere = function (btnElement){

const commentBox= btnElement.parentElement.parentElement.parentElement.children[2];

let newElement=commentBox.children[0].cloneNode(true);

const inputElement=btnElement.parentElement.parentElement.children[1].children[0];

newElement.children[0].innerHTML=inputElement.value;
//for clear inputbox
inputElement.value="";
commentBox.insertBefore(newElement,commentBox.firstChild);
}

let deleteme= function(btnElement){
    btnElement.parentElement.parentElement.remove();
}