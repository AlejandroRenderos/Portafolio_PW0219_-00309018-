/*
boton 
input de texto
combo box
checkbox
tbody
*/
let carnet_field = document.querySelector("#carnet_field")
let schedule_list = document.querySelector("#schedule_field")
let late_switch = document.querySelector("#late_switch")

let submit_btn = document.querySelector("#submit_btn")

let tbody = document.querySelector("#table_body")
let carnet_regex = new RegExp("^[0-9]{8}$")
let student_list = [] 
let serial =0

let printArray = ()=>{
    let datetime = new Date()
    tbody.innerHTML="" 
    student_list.forEach((element)=>{
        let new_row = document.createElement("tr")

     new_row.classList.add("table-active")
        new_row.innerHTML = `
        <td >${element.carnet}</td>
        <td>${element.schedule}</td>
        <td>${datetime}</td>
        <td>${element.tarde}</td>
        `
     let new_cell = document.createElement("td")
     let new_btn = document.createElement("button")
     let new_input = document.createElement("input")

        new_btn.className ="btn btn-danger"
        new_btn.innerText ="borrar"
        new_btn.value = element.id

        new_btn.addEventListener("click", (event)=>{
         let id_actual = event.target.value
         student_list.forEach((element, pos)=>{
            if (id_actual == element.id) {
                student_list.splice(pos,1)
                printArray()
             }
            })
        })
        new_cell.appendChild(new_btn)
        new_row.appendChild(new_cell)
        tbody.appendChild(new_row)
    })
    
}
let addStudent = (obj)=>{
    let datetime = new Date()

    student_list.push({
        "id": serial,
        "carnet": obj.carnet,
        "horario": obj.schedule,
        "tarde": obj.late,
        "ingreso": datetime
    })

    serial ++
}
let parseLateBool=(value)=>{
    if (value) {
        return "Si ahuevo"
        
    }
    return "Nel prro :v"
        
}
submit_btn.addEventListener("click", ()=>{
    let carnet = carnet_field.value
    let schedule = schedule_list.options[schedule_list.selectedIndex].text
    let late = parseLateBool(late_switch.checked)

    let result_obj ={
        "carnet": carnet,
        "schedule": schedule,
        "late": late 

    }
    if (carnet_regex.test(carnet)) {
        addStudent(result_obj)
        printArray()
    }else{
        alert("Formato incorrecto")
    }
})

carnet_field,addEventListener("keyup", (event)=>{
    if (event.keyCode==13) {
        submit_btn.click()
    }
})
