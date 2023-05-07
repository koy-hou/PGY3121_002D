$("#modoOscuro").click(function(){
    console.log("hola");
    if ($("input.form-check-input").is(":checked")) {
        $(".headerPag").css({"background-color":"#151515"})
        $(".navbar").css({"background-color":"#151515"})
        $("body").css({"background-color":"#331847"})
        $("body").css({"color":"antiquewhite"})
    }else{
        $(".headerPag").css({"background-color":"#F98404"})
        $(".navbar").css({"background-color":"#F98404"})
        $("body").css({"background-color":"#F9B208"})
        $("body").css({"color":"black"})
    }
});