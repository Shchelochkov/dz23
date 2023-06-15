
//Написано на ванильном js

let pic = document.getElementById('kartinka')
let but = document.getElementById('but2')

let k=1

function f1(){
    if (k==1){
    pic.setAttribute("src","img/2.jpg")
    pic.setAttribute("width","300px")
    k=2
    }

    else if (k==2){
    pic.setAttribute("src","img/1.jpg")
    pic.setAttribute("width","500px")
    k=1
    }

}

but.onclick = f1



// то же на jquery

// let k=1

// function f1(){
//     if (k==1){
//         $('#kartinka').attr('src','k2.jpg')
//         k=2
//     }
//     else if (k==2){
//         $('#kartinka').attr('src','k1.jpg')
//         k=1
//     }
// }

// $('#but2').click(f1)