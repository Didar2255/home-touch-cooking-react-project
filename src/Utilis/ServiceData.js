const allRecipis = [
    { id: 201, foodName: 'Tradinal Pizza', description: 'This Homemade Traditional  Pizza Dough Recipe, is the only Pizza Recipe you will ever need. Make it by hand or in your stand up mixer. No need for take out, it will make your pizza night even more special. Any topping goes!', price: 59, foodImage: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2021%2F06%2F15%2Fmozzarella-pizza-margherita-FT-RECIPE0621.jpg&q=85' },
    { id: 202, foodName: 'Traditional Cuisine', description: 'Traditional foods are foods and dishes that are passed on through generations or which have been consumed for many generations. ', price: 40, foodImage: 'https://www.saga.co.uk/magazine/travel/tours/contentlibrary/7214fbde72b44434a794920526ded854.ashx?h=auto' },
    { id: 203, foodName: 'Indian Pasta Making', description: 'Simple, classic pasta recipes are always a crowd pleaser and naturally budget friendly. Plus, with so many specialty-diet-friendly pastas on the market today, pasta is even more versatile than ever. Use these easy pasta recipes for quick weeknight dinners and meal prepping!', price: 65, foodImage: 'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/exps189817_SD153323A06_05_3B-v2-Napkin.jpg' },
    { id: 204, foodName: 'Bread Baking', description: 'There are so many things to love about this bread recipe, but if I had to highlight the best parts, it’s that it only requires shelf stable ingredients (no milk, eggs or butter needed!) and it’s EASY and fool-proof to make! Whether you’re a newbie or experienced bread maker, you can’t mess this up, and I know you’re going to love it', price: 60, foodImage: 'https://assets.bonappetit.com/photos/5f84743360f032defe1f5376/3:2/w_1857,h_1238,c_limit/Pullman-Loaf-Lede-new.jpg' },
    { id: 205, foodName: 'Original Ice Cream', description: 'This homemade ice cream recipe can also be called the easiest (and best!) ice cream you will ever make or taste. I’ve been making this ice cream at least once a month for over 5 years now.', price: 80, foodImage: 'https://barefeetinthekitchen.com/wp-content/uploads/2018/05/Easiest-Ice-Cream-1-1-of-1-1024x731.jpg' },
    { id: 206, foodName: 'Grilled Salmon ', description: 'Juicy ripe peaches and beautiful pink salmon scream summer. A little curry paste and herbs keep this sweet- spicy curry squarely in the savory realm, and a drizzle of reduced coconut cream cools things off.', price: 96, foodImage: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/12/20/0/FNK_Baked-Salmon_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1576855635102.jpeg' },
    { id: 207, foodName: 'Shrimp With Chochoyotes in Smoky', description: 'This brothy soup feels like coastal Oaxaca in a bowl. It has tons of herbs, buttery shrimp, a light spicy-smoky broth—and chochoyotes, dumplings made from fresh masa or masa harina.', price: 90, foodImage: 'https://d2qpatdq99d39w.cloudfront.net/wp-content/uploads/2019/08/20165831/original-flava-spicy-pepper-prawns-recipe.jpg' },
    { id: 208, foodName: 'Grilled Zucchini and Bulgur Salad', description: 'Charred zucchini pairs particularly well with sharp flavors; here it’s matched by the deep savory notes of preserved-lemon paste and the tang of creamy feta.', price: 60, foodImage: 'https://www.afarmgirlsdabbles.com/wp-content/uploads/2017/09/AFarmgirlsDabbles_AFD-2-600x900.jpg' },
    { id: 209, foodName: 'Marinated Tomatoes', description: 'This Homemade Traditional low-effort, high-flavor tomato demonstrates how the Thai concept of balancing flavors can be achieved in different combinations.', price: 40, foodImage: 'https://rasamalaysia.com/wp-content/uploads/2016/06/marinated-tomatoes-thumb-480x360.jpg' },
    { id: 2010, foodName: 'Basic Mashed Potatoes', description: 'In a small saucepan heat butter and milk over low heat until butter is melted. Using a potato masher or electric beater, slowly blend milk mixture into potatoes until smooth and creamy. Season with salt and pepper to taste.', price: 60, foodImage: 'https://images-gmi-pmc.edge-generalmills.com/1156f4ec-29c8-4cd9-80db-7d4ee330b1d0.jpg' },
    { id: 211, foodName: 'Hot Cocoa Cake', description: 'Hot Cocoa Cake is a favorite for many, and it is definitely a Bakehouse standard. It’s a versatile cake that can be eaten in the morning or as an afternoon snack, and also makes a great dessert after dinner. We enjoy it warm, served with lots of chocolate sauce and whipped cream.', price: 55, foodImage: 'https://assets.epicurious.com/photos/5a786825ed7fcc4ea707f79d/master/w_1280,c_limit/Zingermans-Cookbook-Cake-31012018.jpg' },
    { id: 212, foodName: 'Beef and Ginger Stir-Fry', description: 'This Homemade Traditional  Pizza Dough Recipe, is the only Pizza Recipe you will ever need. Make it by hand or in your stand up mixer. No need for take out, it will make your pizza night even more special. Any topping goes!', price: 120, foodImage: 'https://assets.epicurious.com/photos/5d780cc482c96c0008522130/1:1/w_1600,c_limit/beef-ginger-stir-fry-recipe-BA-091019.jpg' },
]