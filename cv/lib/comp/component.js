const list1=document.getElementsByClassName("skill-component")
Object.keys(list1).forEach((k)=>{
  let filename=list1[k].innerHTML
  console.log(filename)
  list1[k].innerHTML=`<object data="./lib/comp/skills_svg/${filename}" type="image/svg+xml"></object>`
})
const list2=document.getElementsByClassName("project-component")
Object.keys(list2).forEach((k)=>{
  let filename=list2[k].innerHTML
  console.log(filename)
  list2[k].innerHTML=`<object data="./lib/comp/proj_svg/${filename}" type="image/svg+xml"></object>`
})