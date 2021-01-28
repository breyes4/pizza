
$(document).ready(
    function () {
        $("PizzaPrice").click(calculatePizza);

        function calculatePizza()
        {
            var numPizzas = $("#numPizzas").val();
            numPizzas = parseFloat(numPizzas);

            var numToppings =$("numToppings").val();
            numToppings = parseFloat(numToppings);

            var numFriends = $("numFriends").val();
            numFriends = parseFloat(numFriends);



            var pizzaCost = 15;
            var toppings = 1.25;


            var pizzaQuantity = pizzaCost * numPizzas;
            var toppingQuantity = pizzaQuantity * (toppings * numToppings);
            var friendQuantity = (pizzaQuantity + toppingQuantity) / numFriends;

            $("#PizzaResults").text(friendQuantity.toFixed(2));
            $(".result").show();



        }
    }
);
