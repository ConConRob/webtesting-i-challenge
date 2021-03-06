module.exports = {
  succeed,
  fail,
  repair,
  get,
};

//item
/*
{
  name,
  durability,
  enhancement
}
*/


function succeed(item) {
  let enhancement = item.enhancement
  if(enhancement <20){
    ++enhancement;
  }
  return { ...item, enhancement };
}

function fail(item) {
  let enhancement = item.enhancement;
  let durability = item.durability;
  if(enhancement < 15){
    durability = durability -5;
  }else {
    durability = durability - 10
    if(enhancement >= 17){
      --enhancement;
    }
  } 
  return { ...item, enhancement, durability };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  let name = item.name;
  const enhancement = item.enhancement
  if(enhancement> 0){
    name = `[+${enhancement}] ${name}`
  }
  return { ...item, name };
}
