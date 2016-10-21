app.controller('homeCtrl',function($scope,$log,todoService){
//alert("home");
$scope.data = [];
$scope.msg = true;
$scope.data1 = todoService.getList();
console.log($scope.data);
$scope.todoSubmit = function(){
	//alert("submit");
	$scope.msg = false;
	$scope.data.push($scope.todo.task);
	console.log($scope.data);
}
$scope.addList = function(x){
	var abc = $scope.data;
	console.log(x);
	todoService.storeList(x);
	abc.splice(abc.indexOf(x),1);
	$scope.msg = true;
	//$scope.message = "you have no task to add";
	$scope.data1 = todoService.getList();
}
});