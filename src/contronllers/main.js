
function getEle(id) {
    return document.getElementById(id);
}

var task_list = new TaskList();
var validation = new validation();

function layThongTin() {
    var id = Math.random();
    var taskName = getEle("newTask").value;
    var status = getEle("todo");
    var isValid = true;
    isValid &=
        validation.isEmpty(taskName, "notiInput", "(*)Please input task") &&
        validation.isExist(taskName, "notiInput", "(*)Task is existed", task_list.arr);
    if (!isValid) return null;
    else if (taskName != "") {
        td = new Task(id, taskName, "todo");
        return td;
    }
}

getEle("addItem").addEventListener("click", function () {
    var td = layThongTin();
    task_list.addTask(td);
    renderTask(task_list.arr);
    setLocalStorage();
})

function renderTask(data) {
    var todo = "";
    var complete = "";
    data.forEach(function (td) {
        if (td.status) {
        todo += `
        <li>
            <span>${td.taskName}</span>
            <span>
                <button class="delete" style="border: none" onclick="deleteTask('${td.id}')"><i class="fa-solid fa-trash-can"></i></button>
                <button class="complete" style="border: none" onclick="changeStatus('${td.id}')"><i class="fa-regular fa-circle-check"></i></button>
            </span>
        </li>
        `
        }
        else{
            complete += `
        <li>
            <span>${td.taskName}</span>
            <span>
                <button style="border: none" onclick="deleteTask('${td.id}')"><i class="fa-solid fa-trash-can"></i></button>
                <button style="border: none" onclick="changeStatus('${td.id}')"><i class="fa-regular fa-circle-check"></i></button>
            </span>
        </li>
        `
        }
    })
    getEle("todo").innerHTML = todo;
    getEle("completed").innerHTML = complete;
}
function deleteTask(id) {
    task_list.xoaTask(id);
    renderTask(task_list.arr);
    setLocalStorage();
}
function changeStatus(id) {
    task_list.doiTrangThai(id);
    renderTask(task_list.arr);
    setLocalStorage();
}

function setLocalStorage() {
    var dataString = JSON.stringify(task_list.arr);
    localStorage.setItem("list", dataString);
}
function getLocalStorage() {
    var dataString = localStorage.getItem("list");
    task_list.arr = JSON.parse(dataString);
    renderTask(task_list.arr);
}
getLocalStorage();