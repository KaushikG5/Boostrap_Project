showAll = function(btn, div){
    if($(btn).html() == 'Show more'){
        $(btn).html('Show less');
        $(div).removeClass('d-md-none d-none');
        $(div).addClass('d-flex');
    }
    else{
        $(btn).html('Show more');
        $(div).removeClass('d-flex');
        $(div).addClass('d-md-none d-none')
    }
}

$('button.show1').click(function(){
    showAll('button.show1', 'div.show-more1');
});
$('button.show2').click(function(){
    showAll('button.show2', 'div.show-more2');
});
$('button.show3').click(function(){
    showAll('button.show3', 'div.show-more3');
});
$('button.show4').click(function(){
    showAll('button.show4', 'div.show-more4');
});