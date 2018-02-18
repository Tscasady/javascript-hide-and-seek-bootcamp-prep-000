function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementsByClassName('target')[0]
}

function increaseRankBy(n){
  var lis = document.querySelectorALL('ul.ranked-list li')
  for (let i = 0; i < lis.length; i++){
    lis[i].innerHTML = parseInt(lis[i]) + n
    }
}

function deepestChild(){
  
}