const $ = document
const headerElm = $.querySelector('.header')

let oldScrollY = 0

// $.addEventListener('scroll', () =>{
//     if(oldScrollY < $.documentElement.scrollTop){
//         console.log('move to down');
//         headerElm.style.top = '-80px'
//     }else{
//         console.log('move to top');
//         headerElm.style.top = '0px'
//     }
//     oldScrollY = $.documentElement.scrollTop
// })

window.addEventListener('scroll', () =>{
    if(oldScrollY < window.scrollY){
        // console.log('move to down');
        headerElm.style.top = '-80px'
    }else{
        // console.log('move to top');
        headerElm.style.top = '0px'
    }
    oldScrollY = window.scrollY
})