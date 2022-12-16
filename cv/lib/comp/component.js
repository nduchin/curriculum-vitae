const list=document.getElementsByClassName("skill-component")
console.log(list)
Object.keys(list).forEach((k)=>{
  let filename=list[k].innerHTML
  console.log(filename)
  list[k].innerHTML=`<object data="./lib/comp/skills_svg/${filename}" type="image/svg+xml"></object>`
})