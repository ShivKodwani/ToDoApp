app.service('todoService',function(){
var taskArr = ['asd','ffefe','fdv','fdv'];
this.getList = function(){
	return taskArr;
}
this.storeList = function(data){
	taskArr.push(data);
}
})