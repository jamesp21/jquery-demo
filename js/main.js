/* your code goes here! */

$('#change-content').click(function(){
    var modifySelector = $('#selector').val();
    var content = $('#newContent').val();

    $('' + modifySelector).text('' + content);
})

$('#add-at-end').click(function(){
    var modifySelector = $('#selector').val();
    var content = $('#newContent').val();
    $('' + modifySelector).append('' + content);
})

$('#add-at-start').click(function(){
    var modifySelector = $('#selector').val();
    var content = $('#newContent').val();
    $('' + modifySelector).prepend('' + content);
})

$('#insert-before').click(function(){
    var modifySelector = $('#selector').val();
    var content = $('#newContent').val();
    $('' + modifySelector).before('' + content);
})

$('#move-after').click(function(){
    var modifySelector = $('#selector').val();
    var content = $('#newContent').val();
    $('' + modifySelector).after('' + content);
})
/* Use clever selections and event handlers to assign the described interactivity */

