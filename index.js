function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementsByClassName('target')[0]
}

function increaseRankBy(n){
  var lis = document.getElementsByClassName('ul.ranked-list li')
  for (let i = 0; i < lis.length; i++){
    lis[i].innerHTML = parseInt(lis[i]) + 1
    }
}

function deepestChild(){
  
}