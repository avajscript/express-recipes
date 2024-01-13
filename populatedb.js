console.log(
    "This script is used to populate the database. Run it as node populatedb 'your MongoDB url' ",
);
require("dotenv").config();

const userArgs = process.argv.slice(2);

const Category = require("./models/Category");
const Recipe = require("./models/Recipe");
const User = require("./models/User");

const categories = [];
const users = [];

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
    console.log("Debug: About to connect");
    await mongoose.connect(mongoDB);
    console.log("Debug: Should be connected");
    await createCategories();
    await createUsers();
    await createRecipes();
    console.log("Debug: Closing mongoose");
    mongoose.connection.close();
}

async function createCategories() {
    console.log("Creating categories");
    await Promise.all([
        categoryCreate(0, "Desserts", "Delicious treats", "/desserts.jpg"),
        categoryCreate(1, "Italian", "Italian cuisine", "/italian.jpg"),
        categoryCreate(2, "Mexican", "Spicy and flavorful", "/mexican.jpg"),
        categoryCreate(3, "Asian", "Diverse Asian dishes", "/asian.jpg"),
        categoryCreate(
            4,
            "Vegetarian",
            "Plant-based options",
            "/vegetarian.jpg",
        ),
        categoryCreate(5, "Seafood", "Fresh from the ocean", "/seafood.jpg"),
        categoryCreate(
            6,
            "Breakfast",
            "Start your day right",
            "/breakfast.jpg",
        ),
        categoryCreate(7, "BBQ", "Grilled perfection", "/bbq.jpg"),
        categoryCreate(
            8,
            "Mediterranean",
            "Healthy and delicious",
            "/mediterranean.jpg",
        ),
        categoryCreate(9, "Snacks", "Quick bites", "/snacks.jpg"),
    ]);
    console.log("Finished create categories");
}

async function categoryCreate(index, name, description, imageUrl) {
    try {
        const category = new Category({ name, description, imageUrl });
        await category.save();
        categories[index] = category;
        console.log(`Added category ${index + 1}: ${name}`);
    } catch (e) {
        console.log(`Error creating category ${index}, ${name}`);
        console.log(e.message);
    }
}

async function createUsers() {
    console.log("Creating users");
    await Promise.all([
        userCreate(0, "john_doe", "john.doe@example.com", "password123"),
        userCreate(
            1,
            "alice_smith",
            "alice.smith@example.com",
            "securepass456",
        ),
        userCreate(2, "bob_jones", "bob.jones@example.com", "p@ssword789"),
        userCreate(3, "emma_white", "emma.white@example.com", "passw0rd"),
        userCreate(4, "alex_miller", "alex.miller@example.com", "qwerty123"),
        userCreate(5, "lisa_jackson", "lisa.jackson@example.com", "letmein567"),
        userCreate(6, "david_lee", "david.lee@example.com", "changeme890"),
        userCreate(7, "olivia_brown", "olivia.brown@example.com", "secret456"),
        userCreate(8, "james_taylor", "james.taylor@example.com", "myp@ss123"),
        userCreate(9, "emily_clark", "emily.clark@example.com", "password987"),
        userCreate(
            10,
            "michael_wilson",
            "michael.wilson@example.com",
            "abcdef123",
        ),
        userCreate(
            11,
            "sophia_evans",
            "sophia.evans@example.com",
            "helloworld456",
        ),
        userCreate(
            12,
            "william_baker",
            "william.baker@example.com",
            "p@ssword789",
        ),
        userCreate(
            13,
            "natalie_hill",
            "natalie.hill@example.com",
            "changeme890",
        ),
        userCreate(
            14,
            "ryan_campbell",
            "ryan.campbell@example.com",
            "letmein567",
        ),
        userCreate(15, "grace_young", "grace.young@example.com", "passw0rd"),
        userCreate(
            16,
            "daniel_roberts",
            "daniel.roberts@example.com",
            "qwerty123",
        ),
        userCreate(
            17,
            "samantha_king",
            "samantha.king@example.com",
            "securepass456",
        ),
        userCreate(18, "eric_perez", "eric.perez@example.com", "password123"),
        userCreate(
            19,
            "jessica_morris",
            "jessica.morris@example.com",
            "myp@ss123",
        ),
    ]);
    console.log("Finished creating users");
}

async function userCreate(index, username, email, password) {
    const user = new User({ username, email, password });
    await user.save();
    users[index] = user;
    console.log(`Added user ${index}: ${username}`);
}
async function createRecipes() {
    console.log("Creating recipes");
    await Promise.all([
        recipeCreate(
            "Chicken Alfredo Pasta",
            categories[1],
            "Creamy pasta with grilled chicken",
            [
                "chicken breast",
                "fettuccine pasta",
                "heavy cream",
                "butter",
                "parmesan cheese",
                "garlic",
            ],
            "Grill chicken breast and cook fettuccine pasta. In a saucepan, melt butter and sauté garlic. Add heavy cream and parmesan cheese. Mix with pasta and grilled chicken.",
        ),
        recipeCreate(
            "Vegetarian Buddha Bowl",
            categories[4],
            "Healthy and colorful veggie bowl",
            [
                "quinoa",
                "roasted sweet potatoes",
                "avocado",
                "cherry tomatoes",
                "chickpeas",
                "spinach",
                "tahini dressing",
            ],
            "Cook quinoa. Roast sweet potatoes and chickpeas. Assemble bowl with quinoa, roasted veggies, avocado, cherry tomatoes, and spinach. Drizzle with tahini dressing.",
        ),
        recipeCreate(
            "Spicy Shrimp Tacos",
            categories[2],
            "Flavorful tacos with spicy shrimp",
            [
                "shrimp",
                "taco shells",
                "cabbage slaw",
                "avocado",
                "lime",
                "cilantro",
                "spices",
            ],
            "Season shrimp with spices and sauté until cooked. Assemble tacos with cabbage slaw, sliced avocado, and a squeeze of lime. Garnish with fresh cilantro.",
        ),
        recipeCreate(
            "Mushroom Risotto",
            categories[1],
            "Creamy and savory Italian rice dish",
            [
                "arborio rice",
                "mushrooms",
                "onion",
                "white wine",
                "vegetable broth",
                "parmesan cheese",
                "butter",
            ],
            "Sauté mushrooms and onions. Add arborio rice and white wine. Gradually add vegetable broth and stir until creamy. Finish with parmesan cheese and butter.",
        ),
        recipeCreate(
            "Salmon Teriyaki",
            categories[5],
            "Grilled salmon with sweet teriyaki glaze",
            [
                "salmon fillets",
                "soy sauce",
                "mirin",
                "brown sugar",
                "garlic",
                "ginger",
                "green onions",
            ],
            "Marinate salmon in soy sauce, mirin, brown sugar, garlic, and ginger. Grill until cooked, basting with the marinade. Garnish with sliced green onions.",
        ),
        recipeCreate(
            "Caprese Salad",
            categories[4],
            "Simple and fresh Italian salad",
            [
                "tomatoes",
                "fresh mozzarella",
                "basil leaves",
                "balsamic glaze",
                "olive oil",
                "salt",
                "pepper",
            ],
            "Slice tomatoes and fresh mozzarella. Arrange on a plate with basil leaves. Drizzle with balsamic glaze and olive oil. Season with salt and pepper.",
        ),
        recipeCreate(
            "Beef Stir-Fry",
            categories[3],
            "Quick and flavorful beef stir-fry",
            [
                "beef sirloin strips",
                "broccoli",
                "bell peppers",
                "soy sauce",
                "hoisin sauce",
                "sesame oil",
                "garlic",
            ],
            "Stir-fry beef in sesame oil until browned. Add broccoli and bell peppers. Mix in soy sauce, hoisin sauce, and garlic. Cook until vegetables are tender.",
        ),
        recipeCreate(
            "Chicken Fajitas",
            2,
            "Flavorful grilled chicken with peppers and onions",
            [
                "chicken thighs",
                "bell peppers",
                "onions",
                "fajita seasoning",
                "tortillas",
                "sour cream",
                "guacamole",
            ],
            "Season chicken with fajita seasoning. Grill with bell peppers and onions. Serve in tortillas with sour cream and guacamole.",
        ),
        recipeCreate(
            "Vegan Chickpea Curry",
            categories[4],
            "Hearty and spicy chickpea stew",
            [
                "chickpeas",
                "coconut milk",
                "tomatoes",
                "onion",
                "garlic",
                "curry powder",
                "spinach",
            ],
            "Sauté onion and garlic. Add chickpeas, tomatoes, coconut milk, and curry powder. Simmer until chickpeas are tender. Stir in spinach.",
        ),
        recipeCreate(
            "Shrimp and Broccoli Stir-Fry",
            categories[3],
            "Quick and healthy shrimp stir-fry",
            [
                "shrimp",
                "broccoli",
                "soy sauce",
                "ginger",
                "garlic",
                "sesame oil",
                "rice",
            ],
            "Stir-fry shrimp in sesame oil. Add broccoli, soy sauce, ginger, and garlic. Cook until shrimp are pink and broccoli is tender. Serve over rice.",
        ),
        recipeCreate(
            "Lemon Herb Grilled Salmon",
            categories[5],
            "Light and flavorful grilled salmon",
            [
                "salmon fillets",
                "lemon",
                "fresh herbs",
                "olive oil",
                "garlic",
                "salt",
                "pepper",
            ],
            "Marinate salmon in olive oil, lemon juice, minced garlic, and fresh herbs. Grill until salmon is cooked through. Season with salt and pepper.",
        ),
        recipeCreate(
            "Vegetable Curry with Basmati Rice",
            categories[4],
            "Spiced vegetable curry served with basmati rice",
            [
                "potatoes",
                "carrots",
                "cauliflower",
                "peas",
                "onion",
                "coconut milk",
                "curry spices",
                "basmati rice",
            ],
            "Sauté vegetables in curry spices. Add coconut milk and simmer until vegetables are tender. Serve over cooked basmati rice.",
        ),
        recipeCreate(
            "Crispy Baked Chicken Wings",
            categories[7],
            "Homemade crispy chicken wings",
            [
                "chicken wings",
                "baking powder",
                "salt",
                "garlic powder",
                "paprika",
                "bbq sauce",
                "ranch dressing",
            ],
            "Coat chicken wings in baking powder and spices. Bake until crispy. Toss in BBQ sauce. Serve with ranch dressing.",
        ),
        recipeCreate(
            "Mango Salsa Chicken",
            categories[2],
            "Grilled chicken topped with refreshing mango salsa",
            [
                "chicken breasts",
                "mango",
                "red onion",
                "jalapeno",
                "lime",
                "cilantro",
                "salt",
            ],
            "Grill chicken until cooked. Combine diced mango, red onion, jalapeno, lime juice, and cilantro for salsa. Serve chicken topped with mango salsa.",
        ),
        recipeCreate(
            "Greek Salad with Lemon Vinaigrette",
            categories[8],
            "Classic Greek salad with a tangy dressing",
            [
                "cucumbers",
                "tomatoes",
                "kalamata olives",
                "feta cheese",
                "red onion",
                "lettuce",
                "lemon vinaigrette",
            ],
            "Chop vegetables and toss with olives and feta. Drizzle with lemon vinaigrette. Serve over lettuce.",
        ),
        recipeCreate(
            "Stuffed Bell Peppers",
            categories[4],
            "Bell peppers filled with a flavorful stuffing",
            [
                "bell peppers",
                "ground beef",
                "rice",
                "tomato sauce",
                "onion",
                "garlic",
                "cheese",
            ],
            "Sauté beef, onion, and garlic. Mix with cooked rice and tomato sauce. Stuff bell peppers and bake until tender. Top with cheese.",
        ),
        recipeCreate(
            "Chicken Fajitas",
            categories[2],
            "Flavorful grilled chicken with peppers and onions",
            [
                "chicken thighs",
                "bell peppers",
                "onions",
                "fajita seasoning",
                "tortillas",
                "sour cream",
                "guacamole",
            ],
            "Season chicken with fajita seasoning. Grill with bell peppers and onions. Serve in tortillas with sour cream and guacamole.",
        ),
        recipeCreate(
            "Vegan Chickpea Curry",
            categories[4],
            "Hearty and spicy chickpea stew",
            [
                "chickpeas",
                "coconut milk",
                "tomatoes",
                "onion",
                "garlic",
                "curry powder",
                "spinach",
            ],
            "Sauté onion and garlic. Add chickpeas, tomatoes, coconut milk, and curry powder. Simmer until chickpeas are tender. Stir in spinach.",
        ),
        recipeCreate(
            "Shrimp and Broccoli Stir-Fry",
            categories[3],
            "Quick and healthy shrimp stir-fry",
            [
                "shrimp",
                "broccoli",
                "soy sauce",
                "ginger",
                "garlic",
                "sesame oil",
                "rice",
            ],
            "Stir-fry shrimp in sesame oil. Add broccoli, soy sauce, ginger, and garlic. Cook until shrimp are pink and broccoli is tender. Serve over rice.",
        ),
        recipeCreate(
            "Lemon Herb Grilled Salmon",
            categories[5],
            "Light and flavorful grilled salmon",
            [
                "salmon fillets",
                "lemon",
                "fresh herbs",
                "olive oil",
                "garlic",
                "salt",
                "pepper",
            ],
            "Marinate salmon in olive oil, lemon juice, minced garlic, and fresh herbs. Grill until salmon is cooked through. Season with salt and pepper.",
        ),
        recipeCreate(
            "Vegetable Curry with Basmati Rice",
            categories[4],
            "Spiced vegetable curry served with basmati rice",
            [
                "potatoes",
                "carrots",
                "cauliflower",
                "peas",
                "onion",
                "coconut milk",
                "curry spices",
                "basmati rice",
            ],
            "Sauté vegetables in curry spices. Add coconut milk and simmer until vegetables are tender. Serve over cooked basmati rice.",
        ),
        recipeCreate(
            "Crispy Baked Chicken Wings",
            categories[7],
            "Homemade crispy chicken wings",
            [
                "chicken wings",
                "baking powder",
                "salt",
                "garlic powder",
                "paprika",
                "bbq sauce",
                "ranch dressing",
            ],
            "Coat chicken wings in baking powder and spices. Bake until crispy. Toss in BBQ sauce. Serve with ranch dressing.",
        ),
        recipeCreate(
            "Mango Salsa Chicken",
            categories[2],
            "Grilled chicken topped with refreshing mango salsa",
            [
                "chicken breasts",
                "mango",
                "red onion",
                "jalapeno",
                "lime",
                "cilantro",
                "salt",
            ],
            "Grill chicken until cooked. Combine diced mango, red onion, jalapeno, lime juice, and cilantro for salsa. Serve chicken topped with mango salsa.",
        ),
        recipeCreate(
            "Greek Salad with Lemon Vinaigrette",
            categories[8],
            "Classic Greek salad with a tangy dressing",
            [
                "cucumbers",
                "tomatoes",
                "kalamata olives",
                "feta cheese",
                "red onion",
                "lettuce",
                "lemon vinaigrette",
            ],
            "Chop vegetables and toss with olives and feta. Drizzle with lemon vinaigrette. Serve over lettuce.",
        ),
        recipeCreate(
            "Stuffed Bell Peppers",
            categories[4],
            "Bell peppers filled with a flavorful stuffing",
            [
                "bell peppers",
                "ground beef",
                "rice",
                "tomato sauce",
                "onion",
                "garlic",
                "cheese",
            ],
            "Sauté beef, onion, and garlic. Mix with cooked rice and tomato sauce. Stuff bell peppers and bake until tender. Top with cheese.",
        ),
    ]);
    console.log("Finished creating recipes");
}

async function recipeCreate(
    title,
    category,
    description,
    ingredients,
    instructions,
    createdBy,
    createdAt,
) {
    const recipe = new Recipe({
        title,
        category,
        description,
        ingredients,
        instructions,
        createdBy,
        createdAt,
    });
    await recipe.save();
    console.log(`Added recipe: ${title}`);
}
