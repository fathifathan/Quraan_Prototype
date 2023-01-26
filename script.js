$(document).ready(function () {

    // Hide button ulangi
    $('.ulangi').hide()

    // Salah
    $('.salah').click(function () {
        const minus = $(this).data('minus')
        const badge = $(this).find('span').text()

        const hasil = parseInt($('#total').text()) - minus
        hasil <= 0
            ? $('#total').text(0)
            : $('#total').text(hasil);

        $(this).find('span').text(parseInt(badge) + 1)

        // Show button ulangi
        if (parseInt(badge) + 1 > 0) {
            $(this).siblings().show()
        }

        if(parseInt(badge) +1 >=3) {
            $(this).removeClass('tombol') 
             $(this).addClass('btn-danger')
         }
    });

    // Ulangi
    $('.ulangi').click(function () {
        const plus = $(this).data('plus')
        const badge = $(this).siblings().find('span').text()

        const hasil = parseInt($('#total').text()) + plus
        hasil >= 100
            ? $('#total').text(100)
            : $('#total').text(hasil);

        $(this).siblings().find('span').text(parseInt(badge) - 1)

        // Hide button ulangi
        if (parseInt(badge) - 1 <= 0) {
            $(this).hide()
        }

        if(parseInt(badge) -1 <3) {
            $(this).siblings().removeClass('btn-danger') 
             $(this).siblings().addClass('tombol')
         }
    });

    // Tampilkan Gambar
    const page = localStorage.getItem('page')
    if (page) {
        $('#gambar').attr('src', 'images/' + page + '.png')
    }




    $('.buttonHide').click(function(){

     $('#gambar').toggle()
     console.log($('#gambar1'));
     const tombol = $(this).text() 
     
     if (tombol == 'Hide') {
         $(this).text('Show')
     }
 
     if (tombol == 'Show'){
         $(this).text('Hide')
     }
 })

});