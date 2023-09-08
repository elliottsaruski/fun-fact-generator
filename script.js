const generateButton = document.getElementById('generateButton');
let factSpan = document.getElementById('randomFact');

const factList = [
        "Rubber bands will last much longer when they are refrigerated.",
        "There are 293 ways to make change for a dollar.",
        "The Grand Theft Auto franchise has lawsuits that total over $1 billion.",
        "All clocks in Pulp Fiction are set to 4:20.",
        "The eye of an ostrich is bigger than its brain.",
        "A dime has 118 ridges on its edge.",
        "On average, a secretary will use its left hand for 56% of what they type on a keyboard.",
        "The largest pair of eyes in the world belongs to the giant squid.",
        "The Pokemon Rhydon was the first to ever be created.",
        "Super Mario Land was the most popular game on the Game Boy during its release.",
        "The dot over the small letter 'i' is called a tittle.",
        "Japan has 23 vending machines per person.",
        "Soccer balls were once used for playing basketball.",
        "A candle’s flame is hot and blue in zero gravity.",
        "Putting sugar on a cut will make it heal faster.",
        "X-rays can’t detect real diamonds.",
        "There are 7 different types of twins.",
        "The national flag of Libya was formerly just the color green.",
        "The plastic tips of shoelaces are called aglets.",
        "Sign language has tongue twisters.",
        "Penguins fly underwater.",
        "Minnie the Mouse’s first name is not Minnie.",
        "Rudolph the Reindeer is female.",
        "A jiffy is a proper unit of time.",
        "April 11, 1954, was recorded as the most boring day in the world.",
        "Tiramisu translates to ‘take me to heaven’ in Italian.",
        "Buttermilk does not contain any butter.",
        "Brunch was invented as a way of curing hangovers.",
        "Hitler’s nephew betrayed him.",
        "The continental plates move at the same rate that fingernails grow.",
        "Sailors working for the Royal Navy need special permission to grow their beards.",
        "There are fewer stars than there are trees on Earth.",
        "Mary and James are the most popular names around the world.",
        "Children are born less frequently on Saturdays.",
        "Danish mothers are known to be the most hardworking moms in the world.",
        "75 burgers are sold in McDonald’s every second.",
        "1,700 people become millionaires every day in the U.S.",
        "You can’t hum while holding your nose.",
        "You are more likely to have a weird or scary dream when sleeping on your stomach.",
        "Your eyeballs do not grow or change their size as you age.",
        "Blue-eyed people have higher alcohol tolerance.",
        "Pubic hair lives for about 3 weeks long.",
        "Male bees can only mate once.",
        "Smelling green apples help with weight loss.",
        "A snail has 2,500 teeth."
];

generateButton.addEventListener("click", changeRandomFact);

function changeRandomFact () {
    factSpan.innerHTML = factList[randomInteger()];
};

function randomInteger() {
    const arrayLength = factList.length;
    let randomInt = Math.floor((Math.random() * arrayLength));
    return randomInt;
};


