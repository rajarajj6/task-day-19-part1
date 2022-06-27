function cleardis() {
  let dis = document.getElementById('result')
  dis.innerHTML = ''
}

function clearback() {
  let backbtn = document.getElementById('result')
  let btnans = backbtn.innerHTML
  let array = btnans.split("")
  console.log(array)
  array.pop()
  backbtn.innerHTML = array.join("")
  console.log(array.join(""))
}

function dotfun() {
  let dotbtn = document.getElementById('result')
  let values = dotbtn.innerHTML
  let ans = values + '.'
  dotbtn.innerHTML = ans
}

function multiply() {
  let multbtn = document.getElementById('result')
  let values = multbtn.innerHTML
  let ans = values + " * "
  multbtn.innerHTML = ans
}

function seven() {
  let sevenbtn = document.getElementById('result')
  let values = sevenbtn.innerHTML
  let ans = values + "7"
  sevenbtn.innerHTML = ans
}

function eight() {
  let eightbtn = document.getElementById('result')
  let values = eightbtn.innerHTML
  let ans = values + "8"
  eightbtn.innerHTML = ans
}

function nine() {
  let ninebtn = document.getElementById('result')
  let values = ninebtn.innerHTML
  let ans = values + "9"
  ninebtn.innerHTML = ans
}

function division() {
  let divbtn = document.getElementById('result')
  let values = divbtn.innerHTML
  let ans = values + " / "
  divbtn.innerHTML = ans
}

function four() {
  let fourbtn = document.getElementById('result')
  let values = fourbtn.innerHTML
  let ans = values + "4"
  fourbtn.innerHTML = ans
}

function five() {
  let fivebtn = document.getElementById('result')
  let values = fivebtn.innerHTML
  let ans = values + "5"
  fivebtn.innerHTML = ans
}

function six() {
  let sixbtn = document.getElementById('result')
  let values = sixbtn.innerHTML
  let ans = values + "6"
  sixbtn.innerHTML = ans
}

function subtraction() {
  let subbtn = document.getElementById('result')
  let values = subbtn.innerHTML
  let ans = values + " - "
  subbtn.innerHTML = ans
}
function one() {
  let onebtn = document.getElementById('result')
  let values = onebtn.innerHTML
  let ans = values + "1"
  onebtn.innerHTML = ans
}
function two() {
  let twobtn = document.getElementById('result')
  let values = twobtn.innerHTML
  let ans = values + "2"
  twobtn.innerHTML = ans
}

function three() {
  let threebtn = document.getElementById('result')
  let values = threebtn.innerHTML
  let ans = values + "3"
  threebtn.innerHTML = ans
}

function add() {
  let addbtn = document.getElementById('result')
  let values = addbtn.innerHTML
  let ans = values + " + "
  addbtn.innerHTML = ans
}

function zero() {
  let zerobtn = document.getElementById('result')
  let values = zerobtn.innerHTML
  let ans = values + "0"
  zerobtn.innerHTML = ans
}

function doublezero() {
  let dblbtn = document.getElementById('result')
  let values = dblbtn.innerHTML
  let ans = values + "00"
  dblbtn.innerHTML = ans
}

let storagedata = []
function equals() {
  let ans
  let eqlbtn = document.getElementById('result')
  let values = eqlbtn.innerHTML
  let calculations = values.split(" ")
  let l = calculations.length
  if (calculations[0] == '' || calculations[0] == '.') {
    ans = 'invalid input'
    eqlbtn.textContent = ans
  }
  else {
    let res = eval(calculations.join(''))
    eqlbtn.textContent = res
    storagedata.push(calculations.join(""))
  }
}

function datastorage() {
  return storagedata
}
function storage() {
  let data = datastorage()
  console.log(data)
  let storagedispaly = document.getElementById("result")
  storagedispaly.innerHTML = data.join(" ,")

}



