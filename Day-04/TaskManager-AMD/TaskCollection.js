define(['Task','taskStorage'],function(Task, taskStorage){
    
    function TaskCollection(){
    
        var tasks = taskStorage.getAll();

		this.add = function(taskName, isCompleted){
            var newTaskId = new Date().getTime().toString();
			var task = new Task(newTaskId, taskName, isCompleted);
            taskStorage.add(task);
			tasks.push(task);
		};
        
        
        
		this.get = function(taskId){
			for(var i=0;i<tasks.length;i++)
				if (tasks[i].id === taskId)
					return tasks[i];
		};

		this.length = function(){
			return tasks.length;
		};
		this.remove = function(taskId){
			for(var i=tasks.length-1;i>=0;i--)
				if (tasks[i].id === taskId)
					tasks.splice(i,1);
		};
		this.removeCompleted = function(){
			for(var i=tasks.length-1;i>=0;i--)
				if (tasks[i].isCompleted){
                    taskStorage.remove(tasks[i]);
					tasks.splice(i,1);	
                }
		};
        
		this.getAll = function(){
			return tasks.slice();	
		}
	}
    return TaskCollection;
});
