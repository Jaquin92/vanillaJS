$(document).ready(function () {

    $("#hello").click(function () {
        $(this).hide();
        $('#bringback').show();
    });
    $('#bringback').click(function () {
        $('#hello').show();
        $('#bringback').hide();
    });
    $('#starwars').click(() => {
        $.get('https://swapi.co/api/people/1/', (response) => {
            $('body').append(`<h1> Name:${response.name}</h1>
            <h2>Height:${response.height}cm</h2> `)
        })
    })
});
$('#bringback').hide();

