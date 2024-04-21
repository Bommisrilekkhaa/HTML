const sliderMainImage = document.getElementById("product-main-image"); //product container image
const sliderImageList = document.getElementsByClassName("image-list"); // image thumblian group selection
console.log(sliderImageList);

sliderImageList[0].onclick = function(){
    sliderMainImage.src = sliderImageList[0].src;
    console.log(sliderMainImage.src);
};

sliderImageList[1].onclick = function(){
    sliderMainImage.src = sliderImageList[1].src;
    console.log(sliderMainImage.src);
};

sliderImageList[2].onclick = function(){
    sliderMainImage.src = sliderImageList[2].src;
    console.log(sliderMainImage.src);
};

sliderImageList[3].onclick = function(){
    sliderMainImage.src = sliderImageList[3].src;
    console.log(sliderMainImage.src);
};
function p1(){
const b=document.getElementsByClassName("button heart");
b=window.alert("Product is added to your wishlist");
}
function p2(){
    const b=document.getElementsByClassName("button buy-now");
    b=window.confirm("Proceed to buy now?");
    }
function p3(){
        const b=document.getElementsByClassName("button add-cart");
        b=window.alert("Added to Cart");
}