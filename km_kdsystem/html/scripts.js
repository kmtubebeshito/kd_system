var kd;

window.addEventListener('message', (event) => {

  if ( $('#kills').val() != 0 && $('#deaths').val() != 0 ) {
    $('#kd').val(0);
  }

  if ( $('#kd').val().lenght == 1 ) {
    $('#kd').val( $('#kd').val() + '.00' )
  }

  if (event.data.type == "sendKill") {

    var killVal = $('#kills').val();
    var killSayi = Number(killVal);
    $('#kills').val( killSayi + 1 )

    console.log(killVal)

    /* if ( killVal >= 50 && killVal < 300) {
      $('#rank').val('Bronze II')
    } else if ( killVal >= 300 && killVal < 500) {
      $('#rank').val('Bronze I')
    } else if ( killVal >= 500 && killVal < 650) {
      $('#rank').val('Experience III')
    } else if ( killVal >= 650 && killVal < 800) {
      $('#rank').val('Experience II')
    } else if ( killVal >= 800 && killVal < 1050) {
      $('#rank').val('Experience I')
    } else if ( killVal >= 1050 && killVal < 1300) {
      $('#rank').val('Aimboter III')
    } else if ( killVal >= 1300 && killVal < 1500) {
      $('#rank').val('Aimboter II')
    } else if ( killVal >= 1500 && killVal < 1850) {
      $('#rank').val('Aimboter I')
    } else if ( killVal >= 1850 && killVal < 2050) {
      $('#rank').val('Mater III')
    } else if ( killVal >= 2050 && killVal < 2400) {
      $('#rank').val('Mater II')
    } else if ( killVal >= 2400 && killVal < 3000) {
      $('#rank').val('Mater I')
    } else if ( killVal >= 3000) {
      $('#rank').val('Grandmaster')
    } else if ( killVal < 100 ) {
      $('#rank').val('Bronze III')
    } */


    if ( $('#kills').val() >= 1 && $('#deaths').val() == 0 ) {
      $('#kd').val(0);
    } else {
      $('#kd').val( Number($('#kills').val() / $('#deaths').val()).toFixed(2));
    }


    //if you want the ranks to be with kd

    kd = $('#kd').val();

    if ( kd >= 2.6 && kd < 3.1 ) {
      $('#rank').val('Bronze II')
    } else if ( kd >= 3.1 && kd < 4 ) {
      $('#rank').val('Bronze I')
    } else if ( kd >= 4 && kd < 4.7 ) {
      $('#rank').val('Experience III')
    } else if ( kd >= 4.7 && kd < 5.4 ) {
      $('#rank').val('Experience II')
    } else if ( kd >= 5.4 && kd < 5.8) {
      $('#rank').val('Experience I')
    } else if ( kd >= 5.8 && kd < 6.4 ) {
      $('#rank').val('Aimboter III')
    } else if ( kd >= 6.4 && kd < 6.9 ) {
      $('#rank').val('Aimboter II')
    } else if ( kd >= 6.9 && kd < 7.8 ) {
      $('#rank').val('Aimboter I')
    } else if ( kd >= 7.8 && kd < 8.5 ) {
      $('#rank').val('Master III')
    } else if ( kd >= 8.5 && kd < 9 ) {
      $('#rank').val('Master II')
    } else if ( kd >= 9 && kd < 9.6 ) {
      $('#rank').val('Master I')
    } else if ( kd >= 10.7 ) {
      $('#rank').val('Grandmaster')
    } else if ( kd < 2.6 ) {
      $('#rank').val('Bronze III')
    }


    $('#para').val( Number($('#para').val()) + 1);

    localStorage.setItem('killDegeri', $('#kills').val());
    localStorage.setItem('rankDegeri', $('#rank').val());
    localStorage.setItem('paraDegeri', $('#para').val());

  } else if (event.data.type == "sendDeath") {

    var deathVal = $('#deaths').val();
    var deathSayi = Number(deathVal);
    $('#deaths').val( deathSayi + 1 )
    $('#kd').val( Number($('#kills').val() / $('#deaths').val()).toFixed(2) );


    kd = $('#kd').val();

    if ( kd >= 2.6 && kd < 3.1 ) {
      $('#rank').val('Bronze II')
    } else if ( kd >= 3.1 && kd < 4 ) {
      $('#rank').val('Bronze I')
    } else if ( kd >= 4 && kd < 4.7 ) {
      $('#rank').val('Experience III')
    } else if ( kd >= 4.7 && kd < 5.4 ) {
      $('#rank').val('Experience II')
    } else if ( kd >= 5.4 && kd < 5.8) {
      $('#rank').val('Experience I')
    } else if ( kd >= 5.8 && kd < 6.4 ) {
      $('#rank').val('Aimboter III')
    } else if ( kd >= 6.4 && kd < 6.9 ) {
      $('#rank').val('Aimboter II')
    } else if ( kd >= 6.9 && kd < 7.8 ) {
      $('#rank').val('Aimboter I')
    } else if ( kd >= 7.8 && kd < 8.5 ) {
      $('#rank').val('Master III')
    } else if ( kd >= 8.5 && kd < 9 ) {
      $('#rank').val('Master II')
    } else if ( kd >= 9 && kd < 9.6 ) {
      $('#rank').val('Master I')
    } else if ( kd >= 10.7 ) {
      $('#rank').val('Grandmaster')
    } else if ( kd < 2.6 ) {
      $('#rank').val('Bronze III')
    }

      
    localStorage.setItem('deathDegeri', $('#deaths').val());

  } else if ( event.data.type == "resetStatus" ) {
  
    $('#kills').val(0);
    $('#deaths').val(0);
    $('#kd').val(0);
    $('#rank').val('Bronze III');
    $('#para').val(0);

    localStorage.setItem('deathDegeri', $('#deaths').val());
    localStorage.setItem('killDegeri', $('#kills').val());
    localStorage.setItem('rankDegeri', $('#rank').val());
    localStorage.setItem('paraDegeri', $('#para').val());

  } else if (event.data.type == "goster") {
    $('body').css('opacity', '1');

    if ( $('#kills').val() >= 1 && $('#deaths').val() == 0 ) {
      $('#kd').val(0);
    } else if ( $('#kills').val() == 0 && $('#deaths').val() == 0 ) {
      $('#kd').val(0);
    } else {
      $('#kd').val( Number($('#kills').val() / $('#deaths').val()).toFixed(2) );
    }

  } else if (event.data.type == "hide") {
    $('body').css('opacity', '0');

    if ( $('#kills').val() >= 1 && $('#deaths').val() == 0 ) {
      $('#kd').val(0);
    } else if ( $('#kills').val() == 0 && $('#deaths').val() == 0 ) {
      $('#kd').val(0);
    } else {
      $('#kd').val( Number($('#kills').val() / $('#deaths').val()).toFixed(2) );
    }
  }

 

});


$(function(){  
  $('#kills').val(localStorage.getItem('killDegeri'));
  $('#deaths').val(localStorage.getItem('deathDegeri'));
  $('#rank').val(localStorage.getItem('rankDegeri'));
  $('#para').val(localStorage.getItem('paraDegeri'));

  if ( $('#kills').val() >= 1 && $('#deaths').val() == 0 ) {
    $('#kd').val(0);
  } else if ( $('#kills').val() == 0 && $('#deaths').val() == 0 ) {
    $('#kd').val(0);
  } else {
    $('#kd').val( Number($('#kills').val() / $('#deaths').val()).toFixed(2) );
  }

  if ( $('#kills').val() == 0 ) {
    $('#kills').val(0);
  }
  if ( $('#deaths').val() == 0 ) {
    $('#deaths').val(0);
  }


});

$(function () {
  function display(bool) {
      if (bool) {
          $("#container").show();
      } else {
          $("#container").hide();
      }
  }

  display(false)

  window.addEventListener('message', function(event) {
      var item = event.data;
      if (item.type === "html") {
          if (item.status == true) {
              display(true)
          } else {
              display(false)
          }
      }
  })
  
})