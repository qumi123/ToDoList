var task_list = new TaskList();
getLocalStorage();
function getEle(id) {
    return document.getElementById(id);
}

function layThongTin() {
    var id = Math.random();
    var taskName = getEle("newTask").value;
    var status = getEle("todo");
    if (taskName != "") {
        td = new Task(id, taskName, "todo");
        // task_list.addTask(td);
        return td;

    }

    // getEle("newTask").value = "";

}
getEle("addItem").addEventListener("click", function () {
    var td = layThongTin();
    task_list.addTask(td);
    renderTask(task_list.arr);
    setLocalStorage();
})

function renderTask(data) {
    var contentHTML = "";
    // for (var i =0;i<data.length;i++){
    //     var td = data[i];
    //     contentHTML += "<li>";
    //     contentHTML += "<span>" + td.taskName + "</span>";
    //     contentHTML += `<button><i class="fa-solid fa-trash-can"></i></button>`+`<button><i class="fa-regular fa-circle-check"></i></button>`;

    //     contentHTML += "</li>";
    // }
    data.forEach(function (td) {
        contentHTML += `
        <li>
            <span>${td.taskName}</span>
            <span>
                <button style="border: none" onclick="deleteTask('${td.id}')"><i class="fa-solid fa-trash-can"></i></button>
                <button style="border: none" ><i class="fa-regular fa-circle-check"></i></button>
            </span>
        </li>
        `
    })
    getEle("todo").innerHTML = contentHTML;
}
function deleteTask(id){
    task_list.xoaTask(id);
    renderTask(task_list.arr);
    setLocalStorage();
}


function setLocalStorage() {
    //convert data JSON => String
    var dataString = JSON.stringify(task_list.arr);
    localStorage.setItem("list", dataString);
}
function getLocalStorage() {
    var dataString = localStorage.getItem("list");
    //convert string => JSON
    task_list.arr = JSON.parse(dataString);
    //render tbody
    renderTask(task_list.arr);
}
