
$(document).ready(function(){

    $('.quantity').on('change', function(e){
        var radioValue = $(this).val();
        if(radioValue === '3'){
            var totaldonation = "150k VND";
        } else if(radioValue === '5'){
           var totaldonation = "250k VND";
        } else if(radioValue === '10'){
           var totaldonation = "500k VND";
        }
        $('#totalresult').html(totaldonation);
        $('#msq').html(radioValue);
    });


    $('#customquantity').keyup(function(e) {
        var qnt = $("#customquantity").val();
        $("#customquantity").val(qnt);
        var iPrice = "50";
        var total = qnt * iPrice;
        $('#totalresult').html(total+'k VND');
        $('#msq').html(qnt);
    });

});


function ClearFields() {
    document.getElementById("customquantity").value = "";
}
    
$("#customquantity").click(function(){
    $('.bmcinput').each(function () {
        $(this).removeAttr('checked');
        $('input[type="radio"]').prop('checked', false);
    })
});

$("input[name='name']").keyup(function(e) {
    var msn = $("input[name='name']").val();
    if (msn == "") {msn = "Người lạ"};
    $('#msn').html(msn);
});
    