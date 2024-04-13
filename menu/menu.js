// items
const menu = [
    {
        id: 1,
        title: "toast bread",
        category: "breakfast",
        price: "₦ 25.99",
        img:"https://res.cloudinary.com/du2rjnoya/image/upload/v1712265661/OTS-Java-Project/French_mfzx7s.jpg",
        desc:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit dignissimos, magnam repellat natus vero ipsa.`
    },
    
    {
        id: 2,
        title: "honey toast bread",
        category: "breakfast",
        price: "₦ 30.99",
        img:"https://res.cloudinary.com/du2rjnoya/image/upload/c_fill,w_600,h_600,ar_1:1/v1712265802/OTS-Java-Project/images_k6rnlc.jpg",
        desc:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit dignissimos, magnam repellat natus vero ipsa.`
    },

    {
        id: 3,
        title: "fried egg and pancakes",
        category: "breakfast",
        price: "₦ 50.99",
        img:"https://res.cloudinary.com/du2rjnoya/image/upload/c_fill,w_600,h_600,g_auto/v1712464144/OTS-Java-Project/breakfast-with-bacon-eggs-pancakes-and-toast_rgxtxq.jpg",
        desc:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit dignissimos, magnam repellat natus vero ipsa.`
    },

    {
        id: 4,
        title: "rice and chicken stew",
        category: "lunch",
        price: "₦ 25.99",
        img:"https://res.cloudinary.com/du2rjnoya/image/upload/c_fill,w_600,h_600/v1712464412/OTS-Java-Project/Satay-Chicken-Rice-Bowlpreview-22ae367_kmrr2w.jpg",
        desc:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit dignissimos, magnam repellat natus vero ipsa.`
    },

    {
        id: 5,
        title: "avacado and rice",
        category: "lunch",
        price: "₦ 25.99",
        img:"https://res.cloudinary.com/du2rjnoya/image/upload/c_fill,w_600,h_600/v1712464641/OTS-Java-Project/gojuchang-ranch-crispy-chicken-bowl_c7du0k.jpg",
        desc:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit dignissimos, magnam repellat natus vero ipsa.`
    },

    {
        id: 6,
        title: "south indian lunch combo",
        category: "lunch",
        price: "₦ 125.99",
        img:"https://res.cloudinary.com/du2rjnoya/image/upload/c_fill,w_600,h_600/v1712465215/OTS-Java-Project/south-indian-lunch-combo-scaled_bevso8.jpg",
        desc:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit dignissimos, magnam repellat natus vero ipsa.`
    },

    {
        id: 7,
        title: "fufu and egusi soup",
        category: "african-dish",
        price: "₦ 100.99",
        img:"https://res.cloudinary.com/du2rjnoya/image/upload/c_fill,w_600,h_600/v1712465731/OTS-Java-Project/80408174_m4segt.jpg",
        desc:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit dignissimos, magnam repellat natus vero ipsa.`
    },

    {
        id: 8,
        title: "jollof rice and turkey",
        category: "african-dish",
        category: "dinner",
        price: "₦ 110.99",
        img:"https://res.cloudinary.com/du2rjnoya/image/upload/c_fill,w_600,h_600/v1712466105/OTS-Java-Project/gettyimages-1127727388-b715f2be97872769b4c1f01f551026dc_mbremt.jpg",
        desc:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit dignissimos, magnam repellat natus vero ipsa.`
    },

    {
        id: 9,
        title: "okro soup and eba",
        category: "african-dish",
        price: "₦ 125.99",
        img:"https://res.cloudinary.com/du2rjnoya/image/upload/c_fill,w_600,h_600/v1712466381/OTS-Java-Project/okro_soup_recipe_usxp9v.jpg",
        desc:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit dignissimos, magnam repellat natus vero ipsa.`
    },

    {
        id: 10,
        title: "yam porridge",
        category: "african-dish",
        category: "dinner",
        price: "₦ 25.99",
        img:"https://res.cloudinary.com/du2rjnoya/image/upload/c_fill,w_600,h_600,g_auto/v1712467246/OTS-Java-Project/yam-porridge_jiidoe.jpg",
        desc:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit dignissimos, magnam repellat natus vero ipsa.`
    },
    
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", () =>{
    
    displayMenuitems(menu);

    displayMenuButtons();
    
});

const displayMenuitems = (menuItems) => {
    let displayMenu = menuItems.map((item)=>{

    return `<div class="col-lg-6 menu-item">

                <div class="card mb-3 border-0 bg-transparent " >
                    <div class="row g-0">
                    <div class="col-sm-4">
                        <img src=${item.img} class="img-fluid photo h-100" alt=${item.title}>
                    </div>
                    <div class="col-sm-8 card-text-section">
                        <div class="card-body">
                            <div class="menu-item-title-header d-flex justify-content-between border-bottom border-danger border-3 pb-2">
                                <h4 class="card-title menu-item-title">${item.title}</h4>
                                <h4 class="card-title text-danger price">${item.price}</h4>
                            </div>

                        <p class="card-text text-start mt-4 item-text">${item.desc}</p>
                        
                        </div>
                    </div>
                    </div>
                </div>

            </div>`;
    });

    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}


const displayMenuButtons = () => {
    const categories = menu.reduce(
        (values, item)=>{
            if (!values.includes(item.category)){
                values.push(item.category);
            }
            return values;
        },
        ["all"]
    );
    const categoryBtns = categories.map((category)=>{
        return `<button class="filter-btn" type="button" data-category=${category}>${category}</button>`
    }).join("");
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll(".filter-btn");

    // filter items

    filterBtns.forEach((btn)=>{
        btn.addEventListener("click",(e)=>{
            const category = e.currentTarget.dataset.category;
            const menuCategory = menu.filter( (menuItem)=>{

                if (menuItem.category === category){
                    return menuItem;
                }
                
            });
            
            if (category === "all"){
                displayMenuitems(menu);
            }else{
                displayMenuitems(menuCategory);
            }
        });
    });
}