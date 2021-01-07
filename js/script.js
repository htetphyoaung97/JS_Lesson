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
let companyName = document.querySelector("#cm_name");
let companyPhone = document.querySelector("#cm_phone");
let companyAddress = document.querySelector("#cm_address");

function allValue(event){
    let vcValue = document.querySelector("#name");
    let cmPhone = document.querySelector("#phone");
    let cmAdderss = document.querySelector("#address");

    vcValue.innerHTML = companyName.value;
    cmPhone.innerHTML = companyPhone.value;
    cmAdderss.innerHTML = companyAddress.value;
    
      
}



