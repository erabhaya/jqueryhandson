$("#create").click(()=> {
    $("#chesstable").empty();
    console.log("clicked");
    var trow = `<tr class="chesstr">
    <td class="chesstd"></td>
    <td class="chesstd"></td>
    <td class="chesstd"></td>
    <td class="chesstd"></td>
    <td class="chesstd"></td>
    <td class="chesstd"></td>
    <td class="chesstd"></td>
    <td class="chesstd"></td>
  </tr>`

  $("#chesstable").css({"border":"1px solid black"})
    for(let i = 0; i<8; i++){
        $("#chesstable").append(trow);
    }
});

$("#remove").click(()=>{
    $("#chesstable").empty();
});

$("#btn").click(()=>{
   var x = $("#btn");
   if(x.html() == "Click Me"){
       x.empty();
       x.append("You clicked me")
   }else{
    x.empty();
    x.append("Click Me")
   }
});
$("#para").mouseover(()=>{ 
    $('#para').css({"background-color":"yellow", "color": "black", "font-size":"30px","padding":"10px"})
});
$("#para").mouseout(()=>{
    $('#para').css({"background-color":"#bbbbb", "color": "black", "font-size":"10px"})
});

$("#remove").click(()=>{
    $(".test").remove();
    $(".demo").remove();
})
$("#getclass").click(()=>{
    var classList = $("#test").attr("class");
    var classArr = classList.split(/\s+/);
        
    $.each(classArr, function(index, value){
        $("#right").append( index + ": " + value +" ,");
});
});

$("#chkbox").click(()=>{
    console.log("working")
    $("#val_chk").empty();
    $("#id_chk").empty();
    $('input[name="demo"]:checked').each(function() {
       console.log(this.value);
       console.log()
       var x = $(this).attr("class")
       
       $("#val_chk").append("value "+this.value+" ,")
       $("#val_chk").append("class "+x+" ,")
    });
})
$('#button1').click(function(){ 
    $(".table").find("tr:gt(1)").remove();
  });
  $('#button2').click(function(){ 
    $(".table").find("tr:eq(2)").remove();
  });
  $("#addlist").click(()=>{
      var value = $("#int_li").val()
      $("#list").append("<li>"+value+"</li>");
  });

  $("#new_p").click(()=>{
      console.log("clicked");
    $('#new_p').toggleClass("important");
  });
