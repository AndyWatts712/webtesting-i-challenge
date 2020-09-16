module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  let { durability, enhancement} = item
  if (enhancement === 20) {
    enhancement = 20
  } else {
    enhancement++
  }
  return { ...item,
    enhancement, durability };
}

function fail(item) {
  let { durability, enhancement} = item
  if (enhancement < 15) {
    durability = durability - 5
  } else if (enhancement > 14) {
    durability = durability - 10
  
  }
  return { ...item };
}

function repair(item) {
  return { ...item,
    durability: 100 };
}

function get(item) {
  return { ...item };
}
