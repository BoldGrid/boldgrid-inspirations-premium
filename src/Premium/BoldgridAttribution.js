/**
 * This Re-Adds the dashicons-trash to the attribution sections so
 * that with a premium key, users can remove the attribution section
 * from the footer.
 *
 * @since SINCEVERSION
 */
( function( $ ) {
	wp.customize.bind( 'ready', _.defer( function() {
		wp.customize.section('boldgrid_footer_panel').expanded.bind( function( isExpanding ) {
			if(isExpanding){
				$( '.dashicons.attribution' )
					.removeClass( 'attribution' )
					.addClass( 'dashicons-trash' );
			}
		});
	} ) );
} )( jQuery );
