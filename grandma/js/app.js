document.getElementById("cart-info").addEventListener("click", function() {
    const cart = document.getElementById("cart");
    cart.classList.toggle("show-cart");
});
// filter btns
(function() {
    // select all btns
    const filterBtn = document.querySelectorAll('.filter-btn');
    filterBtn.forEach(function(btn) {
        btn.addEventListener('click', function(event) {
            event.preventDefault()
            const value = event.target.dataset.filter
            const items = document.querySelectorAll('.store-item');
            items.forEach(function(item) {
                if (value === 'all') {
                    item.style.display = 'block';
                } else {
                    if (item.classList.contains(value)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            })
        })
    })
})();
// search input
(function() {
    // target search box
    const search = document.getElementById('search-item');
    search.addEventListener('keyup', function() {
        let value = search.value.toLowerCase().trim();
        // console.log(value);
        const items = document.querySelectorAll('.store-item');
        items.forEach(function(item) {
            let type = item.dataset.item;
            // if(type.includes(value)){
            // 	item.style.display='block';
            // } else{
            // 	item.style.display='none';
            // }
            let length = value.length;
            let match = type.slice(0, length);
            if (value === match) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        })
    })

})();
// lightbox
(function() {
    // all images
    let imageList = [];
    let counter = 0;
    const images = document.querySelectorAll('.store-img');
    const container = document.querySelector('.lightbox-container');
    const item = document.querySelector('.lightbox-item');
    const closeIcon = document.querySelector('.lightbox-close');
    const btnLeft = document.querySelector('.btnLeft');
    const btnRight = document.querySelector('.btnRight');
    // add all images to array
    images.forEach(function(img) {
        imageList.push(img.src);
    });

    // open modal
    images.forEach(function(img) {
        img.addEventListener('click', function(event) {
            container.classList.add('show');
            let src = event.target.src;
            counter = imageList.indexOf(src);
            // console.log(src);
            // console.log(item.style.backgroundImage);
            item.style.backgroundImage = `url(${src})`;
        });
    })
    // close modal
    closeIcon.addEventListener('click', function() {
        container.classList.remove('show');
    })
    btnLeft.addEventListener('click', function() {
        counter--;
        if (counter < 0) {
            counter = imageList.length - 1;
        }
        item.style.backgroundImage = `url(${imageList[counter]})`;
    })
    btnRight.addEventListener('click', function() {
        counter++;
        if (counter > imageList.length - 1) {
            counter = 0;
        }
        item.style.backgroundImage = `url(${imageList[counter]})`;
    })
})();
// add items to the cart

(function () {
    const cartBtn = document.querySelectorAll('.store-item-icon');
    cartBtn.forEach(function (btn) {
        btn.addEventListener("click", function (event) {
            if(event.target.parentElement.classList.contains('store-item-icon')){
                let fulPath = event.target.parentElement.previousElementSibling.src
                let pos = fulPath.indexOf('img')+3;
                let partPath = fulPath.slice(pos);
                const item = {};
                item.img = `img-cart${partPath}`
                let name = event.target.parentElement.parentElement.nextElementSibling.
                children[0].children[0].textContent;
                item.name = name;
                let price = event.target.parentElement.parentElement.nextElementSibling.
                children[0].children[1].textContent;
                let finalPrice = price.slice(1).trim();
                item.price = finalPrice;
                const cartItem = document.createElement('div')
                cartItem.classList.add('cart-item','d-flex', 'justify-content-between', 'text-capitalize','my-3')
                cartItem.innerHTML = 
                `<img src="${item.img}" alt="cake" class="img-fluid rounded-circle" id="item-img">
                        <div class="item-text">
                            <p id="cart-item-title" class="font-weight-bold mb-0">
                                ${item.name}
                            </p>
                            <span>$</span>
                            <span id="cart-item-price" class="cart-item-price mb-o">${item.price}</span>
                        </div>
                        <a href="#" id="cart-item-remove" class="cart-item-remove">
                            <i class="fas fa-trash"></i>
                        </a>` ;
                // select cart
                const cart = document.getElementById('cart')
                const total = document.querySelector('.cart-total-container');
                cart.insertBefore(cartItem, total);
                alert('item added to the cart');    
                showTotals();
                handleItem();
                // console.log(cart);
            }
        });
    });
    //  show totals
    function showTotals(argument) {
        const total = [];
        const items = document.querySelectorAll('.cart-item-price');
        items.forEach(function(item) {
            total.push(parseFloat(item.textContent));
        });
        const totalMoney = total.reduce(function (total,item) {
            total += item;
            return total;
        },0)

        const finalMoney = totalMoney.toFixed(1);
        document.getElementById('cart-total').textContent = finalMoney;
        document.querySelector('.item-total').textContent = finalMoney;
        document.getElementById('item-count').textContent = total.length;

        // console.log(finalMoney);
    };
    /*--------remove single card dinamically added from the list----*/
    function handleItem () {
        const card = document.getElementById("cart");
        const cards = card.querySelectorAll('.cart-item');
        
        cards.forEach(function (card) {
            const rmvBtn = card.querySelector('.cart-item-remove');
            rmvBtn.addEventListener('click',function (event) {
                event.preventDefault();
                const cart = document.getElementById("cart");
                cart.removeChild(card);
                showTotals();
            });
        });
    }
        /*-----revove card from the list--*/

        const card = document.getElementById("cart");
        const cards = card.querySelectorAll('.cart-item');
        
        cards.forEach(function (card) {
            const rmvBtn = card.querySelector('.cart-item-remove');
            rmvBtn.addEventListener('click',function (event) {
                event.preventDefault();
                const cart = document.getElementById("cart");
                cart.removeChild(card);
                showTotals();
            });
        });
        /*----------clear button-----------*/

const clearBtn = document.querySelector('#clear-cart')
console.log(clearBtn);
clearBtn.addEventListener('click',function (event) {
    event.preventDefault();
    console.log(cards);
    cards.forEach(function (item) {
        cart.removeChild(item);
        showTotals();
    })
})


})();













// search input