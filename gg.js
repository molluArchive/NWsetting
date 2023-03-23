let akmong_level = [
    0,5,5,5,5,5,7,7,7,7,7,9,9,9,9,9
]

let Urangdan3 = {
    basic:11600,
    gol:[],
    Udoo:[],
    Hoibok:[]
}

const cajum = document.getElementById('cajum')
cajum.textContent = Number(Urangdan3.basic)

const akmong_point_p = document.getElementById('akmong_point')
let akmong_point = 0
akmong_point_p.textContent = 'level:0, point:0/5'

const setting = function(array,start,end,akmong_point,cajum){
    for (let i=start;i<end+1;i++){
        let obj = {
            akmong_point:akmong_point,
            cajum:cajum
        }
        array.push(obj)
    }
}
setting(Urangdan3.Udoo,1,4,2,348)
setting(Urangdan3.Udoo,5,6,2,580)
setting(Urangdan3.Udoo,7,10,2,1044)
setting(Urangdan3.Udoo,11,16,5,1044)
setting(Urangdan3.Udoo,17,20,10,1044)

const gol_select = document.getElementById('gol_select')
const udoo_select = document.getElementById('udoo_select')
for(let i=0;i<Urangdan3.Udoo.length+1;i++){
    let option = document.createElement('option')
    option.value = i
    option.textContent = i
    udoo_select.appendChild(option)
}

const change_udoo = (option) => {
    let udoo = Number(option.value)
    let akmong_point = 0
    let aa = Urangdan3.Udoo.slice(0,udoo).reduce((sum,obj)=>{
        akmong_point += obj.akmong_point
        return sum + obj.cajum
    },0)

    cajum.textContent = Number(Urangdan3.basic) + aa
    akmong_level_change(akmong_point)
}

const akmong_level_change = (akmong_point) => {
    level = 0
    point = akmong_point
    while(akmong_level[level+1]<=point){
        level++
        point -= akmong_level[level]
    }
    akmong_point_p.textContent = `level:${level}, point:${point}/${akmong_level[level+1]}`
}

console.log(Urangdan3)