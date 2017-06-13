<!DOCTYPE html>
<html>
	<head>
		<title>slippry demo</title>
		<script src="js/full_width_slider/slippry.min.js"></script>
		<meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="css/slippry.css">
	</head>
	<body>
		<section class="demo_wrapper">
			<article class="demo_block">
			<ul id="demo1">
				<li>
					<a href="#slide1">
						<img src="images/IMG_0024.JPG" alt="image1"/>
					</a>
				</li>
				<li>
					<a href="#slide2">
						<img src="images/IMG_0026.gif" alt="image1"/>
					</a>
				</li>
				<li>
					<a href="#slide3">
						<img src="images/IMG_0290.JPG" alt="image1"/>
					</a>
				</li>
			</ul>
			</article>
		</section>

		<script>
			$(function() {
				var demo1 = $("#demo1").slippry({
					 transition: 'fade',
					 useCSS: true,
					 speed: 1000,
					 pause: 5000,
					 auto: true,
					 preload: 'visible',
					 autoHover: false
				});

			});
		</script>
	</body>
</html>
