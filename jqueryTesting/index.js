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
            $('#data').remove();
            $('body').append(` <div id="data" <h1> Name:${response.name}</h1>
            <h2>Height:${response.height}cm</h2> </div> `)
        })
    })
});
$('#bringback').hide();

