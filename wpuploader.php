<?php

$wp_root = dirname(dirname(dirname(dirname($_SERVER['SCRIPT_FILENAME']))));
require_once $wp_root . '/wp-admin/admin.php';

/* Check rights */
if (!current_user_can( 'edit_posts' ))
{
	exit(0);
}
if (!current_user_can( 'upload_files' ))
{
	exit(0);
}

wp_enqueue_script('jquery');
wp_enqueue_style('colors');
wp_enqueue_script('utils');
wp_enqueue_script('svg-painter');
wp_enqueue_script('media');
wp_enqueue_script('media-editor');
wp_enqueue_script('media-grid');
wp_enqueue_media();

?>
<html>
<head>
<title>Wordpress Upload Media</title>

<?php

global $hook_suffix;

do_action( "admin_print_styles-{$hook_suffix}" );
do_action( "admin_print_styles" );
do_action( "admin_print_scripts-{$hook_suffix}" );
do_action( "admin_print_scripts" );
do_action( "admin_enqueue_scripts", $hook_suffix );
do_action( "admin_head-{$hook_suffix}" );
do_action( "admin_head" );

add_filter( 'user_has_cap', function( array $user_caps, array $required_caps, array $args, WP_User $user ) {
	$user_caps['view_query_monitor'] = false;
	return $user_caps;
}, 10, 4 );
?>

<script>
jQuery().ready(function(){
	var url = new URL(window.location);
	var funcNum = url.searchParams.get("CKEditorFuncNum");
	var uploader = wp.media
	({
		title: "Фотографии",
		button: {
			text: "Выбрать фото"
		},
		multiple: false
	})
	.on('select', function() {
		var attachments = uploader.state().get('selection').toJSON();
		var photo = attachments[0];
		var photo_time = photo.date;
		if (photo_time.getTime != undefined) photo_time = photo_time.getTime();
		var photo_url = photo.url + "?_=" + photo_time;
		window.opener.CKEDITOR.tools.callFunction(funcNum, photo_url);
		window.close();
	})
	.open();
});
</script>

<?php
do_action( "admin_footer", "" );
do_action( "admin_print_footer_scripts-{$hook_suffix}" );
do_action( "admin_print_footer_scripts" );
do_action( "admin_footer-{$hook_suffix}" );
?>

</head>
<body>
</body>
</html>