(function () {
	'use strict';

	angular.module('LunchCheck',[])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject =['$scope'];

	function LunchCheckController ($scope){
		$scope.dishes = '';
		$scope.message = '';
		
		$scope.checkDishes = function () {
			if ($scope.dishes !== '') {
				var items = $scope.dishes.split(',');
				var count = 0;
				for(var i = 0; i < items.length; i++) {
					if(items[i].trim() !== '')
						count++;
				}
			}
			if (count === 0) {
                emptyDishes();
            } else if (count <= 3) {
				$scope.message = 'Enjoy!';
			} else if (count > 3) {
				$scope.message = 'Too much!'
			}
		}
		var emptyDishes = function() {
			$scope.message = 'Please enter data first';
		};
	}
})();