console.log('Welcome to the back grill at nandos.')
console.log('I have been kind enough to create a function which will provide a set of instructions to assist you.')
console.log('In the function we have the type of food (Fillet, Beanie etc.), the spice, whether the order is vegetarian or not (boolean) and the type of bread used (Wrap, Burger or Pitta).')



function backGrill (food, spice, veggie, bread,) {
    console.log('Place a ' + food + 'on the grill.');
    if (veggie) {
        console.log('Grill for 4 minutes on each side');
        console.log('Baste with ' + spice + ' sauce.'); 
    } else {
        console.log('Baste with ' + spice + 'sauce.');
    }
    if (bread = "Wrap") {
        console.log('Place Chilli Jam, Lettuce and Yoghurt Mayo into a Chilli Wrap.');
        console.log('Cut the ' + food + ' into strips and place into the Wrap');
        console.log('Wrap up, cut in half, insert ' + spice + ' flag and serve!');
    } else if (bread = "Burger") {
        console.log('Cut the burger bun in half and place mayonnaise, lettuce and a slice of tomato on the bottom side of the bun.');
        console.log('Place the ' + food + ' into the burger bun.');
        console.log('Insert ' + spice + ' flag and serve!');
    } else {
        console.log('Toast the pitta bread and cut open.');
        console.log('Insert Mayonnaise, Semi-Dried Tomatoes, Cucumber and Lettuce into the pitta bread.');
        console.log('Place the ' + food + ' into the pitta bread.');
        console.log('Insert ' + spice + ' flag and serve!')
    }
}