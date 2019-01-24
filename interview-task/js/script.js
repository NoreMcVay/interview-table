// $(document).ready(function(){
    // $(".list_cancel").click(function(){
        // $("#test").hide();
    // });
    
    // $(".popup").hide()
    // $(".submit").click(function(){
        // $(".popup").show();
    // })
// });


var x = document.getElementsByTagName("tr");
console.log($("tr").closest("td"));

$(document).ready(function(){
    $(".no_entries_row").hide();
    $('#popupSuccess').hide();
    $('#submit').click(function(){
        $('#popupSuccess').show();
        $("#popupSuccess").show().delay(1000).fadeOut();
    });
    $("#add_new").click(function(){
        $(".no_entries_row").hide();
        $("#main-table-body").append("<tr>\n" +
        "                   <td><a href=\"#\" class=\"list_cancel\" title=\"Delete Row\"><i class=\"fas fa-times-circle\"></i></a></td>\n" +
        "                   <td><input type=\"text\" class=\"input_field\" id=\"productcode\" name=\"\" value=\"\"></td>\n" +
        "                   <td><input type=\"text\" class=\"input_field\" id=\"productname\" name=\"\" value=\"\"></td>\n" +
        "                   <td><input type=\"text\" class=\"input_field\" id=\"stock\" name=\"\" value=\"\"></td>\n" +
        "                   <td><input type=\"text\" class=\"input_field\" id=\"vendor\" name=\"\" value=\"\"></td>\n" +
        "                   <td>\n" +
        "                       <select name=\"\" id=\"input_field\" class=\"label\">\n" +
        "                            <option value=\"\"></option>\n" +
        "                            <option value=\"green\" style=\"background-color:green;\">Success</option>\n" +
        "                            <option value=\"red\" style=\"background-color:red;\">Wrong</option>\n" +
        "                            <option value=\"orange\" style=\"background-color:orange;\">Error</option>\n" +
        "                       </select>\n" +
        "                   </td>\n" +
        "                   <td><input type=\"text\" class=\"input_field\" id=\"client\" name=\"\" value=\"\"></td>\n"+
        "                   </tr>"
        )
    });
    $("#main-table").on('click', '.list_cancel', function(e){
        $(this).closest('tr').remove();
        var trCount = $("#main-table tbody tr").length;
        if(trCount <= 1) {
            $(".no_entries_row").show();
        } else {
            $(".no_entries_row").hide();
        }
    });
});

//$(e.target).closest("tr").css('background-color','green');