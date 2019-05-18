$(document).ready(function(){


    var apiBase = 'http://statenweb.mockable.io/conversions/';
    $('#inchTocenti').on('click',function(e){
        e.preventDefault();
        var input =$('#input').val();
        //alert(input);
        if(!input){
            alert('enter a number');
            return; 
        }
        if(isNaN(input)){
            var type = typeof input;
            $('#conversion').html('that is not a number, what you have entered is a ' + type);
            //alert('is not a number, what you have entered is a ' + type);
            return;
        }
            axios.get(apiBase).then(function (response) {

            var conversion = response.data.centimetersInInch;
            var inchTocenti = input * conversion;
            $('#conversion').append('<p>' + input + " inches is equal to " + inchTocenti + "centimeters" + '</p>');
    });
});
    $('#centiToinch').on('click',function(e){
        e.preventDefault();
        var input =$('#input2').val();
        //alert(input);
        if(!input){
        alert('enter a number');
        return; 
    }
        if(isNaN(input)){
        var type = typeof input;
        $('#conversion1').html('that is not a number, what you have entered is a ' + type);
        //alert('is not a number, what you have entered is a ' + type);
        return;
    }
        axios.get(apiBase).then(function (response) {

        var conversion1 = response.data.inchesInCm;
        var centiToinch = input * conversion1;
        $('#conversion1').append('<p>' + input + " centimeters is equal to " + centiToinch + "inches" + '</p>');
    });
});
});