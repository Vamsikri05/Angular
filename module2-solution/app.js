(function () {
'use strict';

angular.module('shoppingList',[])
.controller('BuyController', BuyController)
.controller('BoughtController', BoughtController)
.service('ShoppingListService', ShoppingListService);


	BuyController.$inject =['ShoppingListService'];
	function BuyController (ShoppingListService) {
		var buy = this;
		
		buy.items = ShoppingListService.buyItems();
		
		buy.removeItem = function(index){
			ShoppingListService.bought(index);
		};

	}

	BoughtController.$inject =['ShoppingListService'];
	function BoughtController (ShoppingListService) {
		var bought = this;
		
		bought.items = ShoppingListService.boughtItems();
	}

	function ShoppingListService() {
		var service = this;

		var listItems = [
		{name: "cookies",
		 quantity: 100
		},
		{name: "chips",
		 quantity: 10
		},
		{name: "choclates",
		 quantity: 50
		},
		{name: "coke",
		 quantity: 1
		},
		{name: "cinnamon sticks",
		 quantity: 20
		}];

		var boughtItems = [];

		service.bought = function(index) {
			boughtItems.push(listItems[index]);
			listItems.splice(index, 1);
		};  

		service.boughtItems = function() {
			return boughtItems;
		};

		service.buyItems = function() {
			return listItems;
		};
	}	

})();