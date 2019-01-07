/*login form*/

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
//Изчистване на всички снимки
	function clear(){
		//innerHtml = стрингова репрезентация на HTML-a в някой елемент.
		document.getElementById("picture-prdct").innerHTML = "";
	}

	//Добавяне на снимка
	function add(imageToAdd,aTextOne, aTextTwo, addClass){
		// += добавяме към стринга innerHTML - канкатениране
		if (addClass) {
			//Прави неща тък ако addClass==true
			document.getElementById("picture-prdct").innerHTML += '<div class="picture apps-one" id="picture"><div class="col-lg-3 col-md-6"><div class="middle"><p class="text-middle">'+aTextOne+'</p><p class="text-menu-middle">'+aTextTwo+'</p></div><img src="'+imageToAdd+'"></div></div>';

		} else {
			//addClass == false
			document.getElementById("picture-prdct").innerHTML += '<div class="picture" id="picture"><div class="col-lg-3 col-md-6"><div class="middle"><p class="text-middle">'+aTextOne+'</p><p class="text-menu-middle">'+aTextTwo+'</p></div><img src="'+imageToAdd+'"></div></div>';
		}
		

	}


function all() {
	clear();
	add("assets/img/products/design.jpg", "Awesome Work","/Design");
	add("assets/img/products/code.jpg", "Awesome Work","/Code");
	add("assets/img/products/photography.jpg", "Awesome Work","/Photography");
	add("assets/img/products/apps.jpg", "Awesome Work","/Apps",true);
	add("assets/img/products/design-two.jpg", "Awesome Work","/Design");
	add("assets/img/products/code-two.jpg", "Awesome Work","/Code");
	add("assets/img/products/photography-two.jpg", "Awesome Work","/Photography");
	add("assets/img/products/apps-two.jpg", "Awesome Work","/Apps", true);
		
}

function design() {
	clear();
	add("assets/img/products/design.jpg", "Awesome Work","/Design");	
	add("assets/img/products/design-two.jpg", "Awesome Work","/Design");
}

function code() {
	clear();
	add("assets/img/products/code.jpg","Awesome Work","/Code");
	add("assets/img/products/code-two.jpg", "Awesome Work","/Code");
}


function photography() {
	clear();
	add("assets/img/products/photography.jpg",  "Awesome Work","/Photography");
	add("assets/img/products/photography-two.jpg",  "Awesome Work","/Photography");	
}

function apps() {
	clear();
	add("assets/img/products/apps.jpg", "Awesome Work","/Apps");
	add("assets/img/products/apps-two.jpg", "Awesome Work","/Apps");
		
}
	
	

	window.onload = function(){
		//Прикачане на евенти

		
		document.getElementById("all").onclick = function(){
			all();
		}


		document.getElementById("design").onclick = function(){
			design()
		}

		document.getElementById("code").onclick = function(){
			code()
		}

		document.getElementById("photography").onclick = function(){
			photography()
		}

		document.getElementById("apps").onclick = function(){
			apps()
		}
		

		document.getElementById("open").onclick = function(){
			openForm();
		}

		

	
	}
		


/*Mobile Query */
$( document ).ready( function() {

 	var $canvasBtn = $( '#canvas-trigger' );
 	var $canvasMenu = $( '#canvas-menu' );

 	$canvasBtn.on( 'click', function() {

 		if ( $canvasMenu.hasClass( 'open' ) ) {
 			$canvasMenu.removeClass( 'open' );
 			$canvasBtn.removeClass( 'active' );
 			return;

 		}

 		$canvasMenu.addClass( 'open' );
 		$canvasBtn.addClass( 'active' );
 		return;
 	});

/* Picture - Menu */

	var $allBtn = $( '#all-btn' );
	
	$allBtn.on('click', function(){

		if ( $allBtn.hasClass ('active')) {

			 $allBtn.removeClass ('active');
			 return;
		}

		$allBtn.addClass ('active');
		
		return;
	})

	var $designBtn = $( '#design-btn' );
	
	$designBtn.on('click', function(){

		if ( $designBtn.hasClass ('active')) {

			 $designBtn.removeClass ('active');
			 return;
		}

		$designBtn.addClass ('active');
		return;
	})

	var $codeBtn = $( '#code-btn' );
	
	$codeBtn.on('click', function(){

		if ( $codeBtn.hasClass ('active')) {

			 $codeBtn.removeClass ('active');
			 return;
		}

		$codeBtn.addClass ('active');
		return;
	})

	var $photographyBtn = $( '#photography-btn' );
	
	$photographyBtn.on('click', function(){

		if ( $photographyBtn.hasClass ('active')) {

			 $photographyBtn.removeClass ('active');
			 return;
		}

		$photographyBtn.addClass ('active');
		return;
	})

	var $appsBtn = $( '#apps-btn' );
	
	$appsBtn.on('click', function(){

		if ( $appsBtn.hasClass ('active')) {

			 $appsBtn.removeClass ('active');
			 return;
		}

		$appsBtn.addClass ('active');
		return;
	})
})


