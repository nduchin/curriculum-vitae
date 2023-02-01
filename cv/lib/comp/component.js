async function insertComp(){
  let skills = [];
  skills = await (async (val)=>{
    return await fetch('./lib/comp/skills_svg/skills.json')
    .then((response)=>{return response.json()})
  })();
  const node = document.getElementsByClassName('wrapper-flex-grid')[0]
  node.innerHTML='';
  skills.forEach(el => {
    node.innerHTML+=(
      `<li><object type=\"image/svg+xml\" data=\"./lib/comp/skills_svg/skillbar.svg?${Object.keys(el).map((k)=>{return `${k}=${el[k]}`}).join(';')}\"></object></li>`
    )
  });
}

insertComp()