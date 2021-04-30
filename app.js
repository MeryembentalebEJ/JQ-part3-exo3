
  $(document).ready(function(){
    $("#afficher").click(function(){
        $("#texte").show(); //show 
    });
    $("#cacher").click(function(){
        $("#texte").hide(); //hide
    });
    $("#color").click(function(){
        $("#texte").css('color','green'); //hide
    });
  });