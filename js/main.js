// screen postavke

squareDim = screen.width / 5;


// div objekt
var myDiv = {
    div : '<div class="colorDiv"></div>',
    visina: squareDim+'px',
    sirina: squareDim+'px'
}

// funkcija za random boju
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
      for (var i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * 16)];
      }
    return color;
}

// funkcija za random string
function generate_random_string(string_length){
    let random_string = '';
    let random_ascii;
    let ascii_low = 65;
    let ascii_high = 90
    for(let i = 0; i < string_length; i++) {
        random_ascii = Math.floor((Math.random() * (ascii_high - ascii_low)) + ascii_low);
        random_string += String.fromCharCode(random_ascii)
    }
    return random_string
}

// petlja stvaranja divova
for (var x = 0; x < 25; x++){
    $('.myFix').append(myDiv.div);
}

// postavi dimenzije divovima
$('.colorDiv').css({ "width": "20%",
            "min-width": myDiv.sirina,
            "height": myDiv.visina
});

// svakom daj random boju
$(".colorDiv").each(function() {
    $(this).css({"background-color" : getRandomColor()
    });
  });

  $(".colorDiv").each(function() {
    $(this).append('<p>'+generate_random_string(1)+'<p>');
    $(this).css({
        "color" : getRandomColor(),
        "text-align": "center",
        "vertical-align": "middle",
        "line-height": myDiv.visina,
        "font-size" : "10vw"
    })
  });

// ogranici body na visinu 25 kvadrata
$('body').css('max-height',25 * myDiv.visina);

