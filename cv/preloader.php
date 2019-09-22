<!doctype html>
<html lang="en">
<head>
 
 
   <style type="text/css">
   	
   	/*-------------- 2. Preloader css starts ---------------*/

   	/*preloder start*/
/*#loader {
 	position: fixed;
  	width: 100%;
 	height: 100vh;
 	z-index: 1;
 	overflow: visible;
  background:#000 url('../img/preloader.gif') no-repeat center center; 
 }
*/
.loader_bg {
    position: fixed;
    z-index: 9999999;
    background: #fff;
    width: 100%;
    height: 100%;
}

.loader {
    border: 0 solid transparent;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    position: absolute;
    top: calc(50vh - 75px);
    left: calc(50vw - 75px);
}

.loader:before, .loader:after {
    content: '';
    border: 1em solid #1E90FF;
    border-radius: 50%;
    width: inherit;
    height: inherit;
    position: absolute;
    top: 0;
    left: 0;
    animation: loader 2s linear infinite;
    opacity: 0;
}

.loader:before {
    animation-delay: .5s;
}

@keyframes loader {
    0% {
        transform: scale(0);
        opacity: 0; }
    50% {
        opacity: 1; }
    100% {
        transform: scale(1);
        opacity: 0; }
}


/*-------------- Preloader css ends ---------------*/
   </style>


</head>
<body >

<div class="loader_bg"><div class="loader" id="loader" ></div></div>


<h1>This Pre Loader</h1>


<h1>This is Preloader</h1>

<script type="text/javascript">
	var loader;
	function load(opacity){
		if (opacity <= 0) {
			displayContent();
		}
		else{
			loader.style.opacity=opacity;
			window.setTimeout(function(){
				load(opacity - 0.05)
			},100);
		}
	} 
	function displayContent(){
		loader.style.display='none';
		document.getElementById('content').style.display='block';
	}
	document.addEventListener("DOMContentLoaded",function(){
		loader=document.getElementById('loader');
		load(1);
	})
</script>
</body>
</html>