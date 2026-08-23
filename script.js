$(document).ready(function (){

    console.log("jai shreeram");
    //$("p").hide();
    //$(".para").hide();
    //$("#hide-btn").click(()=>{
        //$("#para1").fadeOut();
        //$("#para1").fadeToggle();
        //$("#para1").fadeTo("slow",0.5);
        //$("#para1").slideToggle("slow");
        // $(".box").animate({
        //     fontSize:"+=10px",
        //     height:"+=200px",
        //     width:"200px"
        // },"slow")
    // console.log($(".para").text());
    //     console.log($("#para1").html());
    //     $("#para1").html("<em>Now it's too modified Bro!</em>");;
    // //     $(".para").text("This is modified Bro!");
    // console.log($("#hide-btn").val());
    // $("#hide-btn").val("this is modified value of toggle");
    // $(".para").toggleClass("box");
    // let color=$("div.box").css("background-color");
    // $("#para1").css({"color":color,"background-color":"blue"})

    // })
    // $("body").keydown((event)=>{
    //     if(event.which===72){
    //         $(".para").hide();
    //     }      
    //     else if(event.which===83){
    //         $(".para").show();
    //     }
    // })

    $("input").focus(function(){
        $(this).css("background-color","red");
    });
    $("input").blur(function(){
        $(this).css("background-color","");
    });
    $("input").change(function(){
        console.log($(this).val());
    });
    $("#reg-form").submit(function(event){
        event.preventDefault()
        console.log("form submitted");
    })

})

