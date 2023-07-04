var name="Hearaman"; //String
var age=36; //Integer - Number
var email; //undefined 
var is_indian=true; //boolean
//undefined.
//Null



//BigInt, Symbol

//Above Datatypes are primitives.

//Bellow Datatypes are non-primitives.
//Object data type
//JSON - Javascript object notation
var addressObj={
    village:"Vaddiguem",
    post: "Tanelanka",
    mandal: "Mummidivaram",
    district: "Konasema",
    stage: "Andrapradhesh",
    pincode: 533216
};



//Array datatype - Object datatype
var laungaues_speaks=["telugu", "english", "Kannada"];
laungaues_speaks.push("Hindi");

addressObj.phone="7026366886";

console.log(laungaues_speaks);


//Data type
//Javascript is a dynamically types programming launguage.

//Every programming laungaues have Data types.
// 'Hearaman' is a String - A string is a collection of Characters.


function validate_login(){
    var user_name=document.getElementById("username").value;
    var user_password=document.getElementById("password").value;

    
    /*  
    ============= Style of displaying the error summary to User ==============
    if(user_name.length==0 || user_password.length<6){
        var error_summary_div=document.getElementById("error_summary");
        error_summary_div.style.display='block';
    }
    else{
        var error_summary_div=document.getElementById("error_summary");
        error_summary_div.style.display='none';
    }

    ========================================================================== 
    */

    if(user_name.length==0 ){
        var username=document.getElementById("username");
        username.classList.add("input_error_border");
    }
    else{
        var username=document.getElementById("username");
        username.classList.remove("input_error_border");
    }
    if(user_password.length<6){
        var passworde=document.getElementById("password");
        passworde.classList.add("input_error_border");

    }
    else{
        var passworde=document.getElementById("password");
        passworde.classList.remove("input_error_border");

    }

}


function validate_login_button_enable(){
    var user_name=document.getElementById("username").value;
    var user_password=document.getElementById("password").value;

    if(user_name.length>5 && user_password.length>=6){
        var login_button=document.getElementById("login_button");
        login_button.removeAttribute("disabled");
    }
    else{
        var login_button=document.getElementById("login_button");
        login_button.setAttribute('disabled','');
    }
}
function validate_signup_button_enable(){
    var user_name=document.getElementById("name").value;
    var user_password=document.getElementById("password").value;
    var user_conf_password=document.getElementById("confirm_password").value;
    var user_number=document.getElementById("number").value;

    if(user_name.length>5 && user_password.length>=6  && user_password==user_conf_password && user_number.length==10){
        var signup_button=document.getElementById("signup_button");
        signup_button.removeAttribute("disabled");
    }
    else{
        var signup_button=document.getElementById("signup_button");
        signup_button.setAttribute('disabled','');
    }

}
