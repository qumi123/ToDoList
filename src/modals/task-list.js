function TaskList() {
    this.arr = [];

    this.addTask = function (task) {
        this.arr.push(task)
    };
    
    this.timViTriNV = function (id) {
        var index = -1;
        this.arr.forEach(function (task, i) {
          if (task.id == id) {
            index = i;
          }
        });
    
        return index;
      };
    
      this.xoaTask = function (id) {
        var index = this.timViTriNV(id);
    
        if (index != -1) {
          this.arr.splice(index, 1);
        }
      };
}