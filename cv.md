# Nikita Dukhin

## About

Hi! I'm Nikita, student of Front-End/JavaScript development at Rolling-Scopes School. I worked in higher education institution and have expirience of teaching, organization work, project control, business correspondence, team work. After Envenronment design graduation i made a decision to learn something else, and start learning JavaScript.

## Contacts

- nduchin@mail.ru
- https://t.me/nduchin
- https://github.com/nduchin
- https://discordapp.com/users/nduchin
- https://www.codewars.com/users/nduchin

## Skills
### Hardskills

| Skill | Rank |
|:------|-----:|
|JavaScript|85|
|Html5|70|
|Css3|75|
|Corel|100|
|Figma|60|
|Adobe|95|
|Git|75|
|Svg|80|

### Languages

| Languages | Level |
|:------|-----:|
|Russian|Native|
|English|Fluent|
|Serbian|Beginning|

## Education

### Non-profit organization of high education «Moskow Art-Industrial Institute»
Degree: Bachelor of environment design
2018-2021

## Courses
### RSSchool JavaScript/Front-End Stage#0(Pre-school)
Elementary class of JS/FE
2022 - 2023

### RSSchool JavaScript/Front-End Stage#1
Main JS/FE class
2023 - Curent

## Employment
### Non-profit organization of high education «Moskow Art-Industrial Institute»
College lecturer: Lecturer of computer technology in design.
2018 - 2022

## Code
### Codewars task Is a number prime?
<code>
  <pre>function isPrime(num){
  if (num<=0||num==1||num%1!=0){return false}
  for (let i=2;i<=Math.sqrt(num);){
    if (num%i==0) return false;
    i==2 ? i+=1 : i+=2
  };
  return true;
};</pre>
</code>

### Codewars task Gap in primes
<code>
  <pre>function gap(g, m, n) {
  function isPrime(n){
    if (n%1!=0){return false}
    for (let i=2;i&lt;Math.sqrt(n)+1;){
      if (n%i==0) return false;
      i==2 ? i+=1 : i+=2
    };
    return true;
  };
  function nextPrime(n){
    let i=n+1;
    while(!isPrime(i)){i++}
    return i
  }
  let pr = [nextPrime(m-1),nextPrime(nextPrime(m-1))]
  for(;pr[1]&lt;=n;pr[0]=pr[1]){
    pr[1]=nextPrime(pr[0])
    if (pr[1]-pr[0]==g){return [pr[0],pr[1]]}
  }
  return null
};</pre>
</code>

## Projects
*work in progress*