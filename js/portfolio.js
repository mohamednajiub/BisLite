var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    masonry: {
        columnWidth: 200
    }
});

$('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
        var filterValue = $( this ).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
});