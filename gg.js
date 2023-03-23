let akmong_level = [
    0,5,5,5,5,5,7,7,7,7,7,9,9,9,9,9
]

let Urangdan3 = {
    name:'유랑단 3',
    basic:11600,
    Gol:[],
    Udoo:[],
    Hoibok:[]
}

const name_p = document.getElementById('name')
name_p.textContent = Urangdan3.name

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
setting(Urangdan3.Hoibok,1,2,1,116)
setting(Urangdan3.Hoibok,3,3,2,116)
setting(Urangdan3.Hoibok,4,4,4,231)

// select 세팅하기
const gol_select = document.getElementById('gol_select')
const udoo_select = document.getElementById('udoo_select')
const hoibok_select = document.getElementById('hoibok_select')

const setting_select = (select,array) => {
    for(let i=0;i<array.length+1;i++){
        let option = document.createElement('option')
        option.value = i
        option.textContent = i
        select.appendChild(option)
    }
}
setting_select(gol_select,Urangdan3.Gol)
setting_select(udoo_select,Urangdan3.Udoo)
setting_select(hoibok_select,Urangdan3.Hoibok)


//
const change_select = (option,array) => {
    let level = Number(option.value)
    let point = 0
    let aa = array.slice(0,level).reduce((sum,obj)=>{
        point += obj.akmong_point
        return sum + obj.cajum
    },0)

    akmong_point += point
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