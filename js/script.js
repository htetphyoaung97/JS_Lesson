// let chooseFile = document.querySelector("#input_choose");
// let chooseBtn  = document.querySelector("#input_btn");

// chooseBtn.addEventListener("click", function(){
//     chooseFile.click();
// });

// function uploadFile(event){
//     // if(event.target.files.length > 0){
//     //     let images = URL.createObjectURL(event.target.files[0]);
        
//     //     let upload = document.querySelector("#choose_logo").setAttribute("src", event.target.result);
//     //     upload.image = images;
        
//     // };
// };

function allValue(event){
    
    document.querySelector('.' + event.id).innerHTML = event.value;
   
}

function addItems(){

   let itemList = document.querySelector("#items").value;
   let totalItems = document.querySelector("#total").value;
   let itemPrice = document.querySelector("#price").value;
   let discountPrice = document.querySelector("#discount").value; 

    document.querySelector(".items").innerHTML = itemList;
    document.querySelector(".total").innerHTML = totalItems;
    document.querySelector(".price").innerHTML = itemPrice;

    let totalAmount = totalItems * itemPrice;
    document.querySelector(".amount").innerHTML = totalAmount;
    // document.querySelector(".total-price").innerHTML = totalAmount;
    document.querySelector(".total-price").innerHTML = totalAmount - discountPrice;
}



