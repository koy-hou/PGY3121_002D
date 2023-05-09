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
        $("body").css({"background-color":"white"})
        $("body").css({"color":"black"})
    }
});


$(document).ready(function() {
    var url = "http://worldtimeapi.org/api/timezone/Europe/Madrid";
  
    
    function horaLocal() {
      
      $.getJSON(url, function(data) {
        
        var fecha = new Date(data.datetime);
        var hora = fecha.toLocaleTimeString();
        $("#hora").text("Hora Santiiago Chile: "+hora);
      });
    }
    
    setInterval(horaLocal, 1000);
  });



  const apiKey = 'xrvFhOeI5gldaxPQqfTStJDX6DXLZWMONb8aiwTR';
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
  
  $(document).ready(function() {
    
    $.get(url, function(data) {
      let html = `
        <img src="${data.url}" alt="${data.title}" style="max-width: 100%;">
        <h2>${data.title}</h2>
      `;
      
      $('#apod').html(html);
    })
    .fail(function(error) {
      console.log(error);
    });
  });
  
  /*<p>${data.explanation}</p> Agregar esto solo si se puede cambiar al español */