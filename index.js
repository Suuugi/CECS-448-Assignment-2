// https://www.w3schools.com/jsref/met_doc_write.asp
// document.write("<p>This statement writes into the document a paragraph.</p>");
// document.write("<h1>Note that this stuff is written before the body since it's in the head.</h1>")

// console.log("This will be seen in your browsers console (right click > inspect element > console)")
$(document).ready( function() { 
		$('#finances').mouseover(function(){
			$('#finances h5').css("font-size", "22px")
			
			$('#financesContent').show();
			$('#parkingContent').hide();
			$('#academicsContent').hide();
			$('#calendarContent').hide();
			$('#housingContent').hide();
			$('#resourcesContent').hide();
				
			/*fade rest of options*/
			$('#parking h5').fadeTo( "fast", 0.33 );
			$('#academics h5').fadeTo( "fast", 0.33 );
			$('#calendars h5').fadeTo( "fast", 0.33 );
			$('#housing h5').fadeTo( "fast", 0.33 );
			$('#resources h5').fadeTo( "fast", 0.33 );
		});
		$('#menu').mouseleave(function(){
			$('#financesContent').hide();	
				
			$('#parking h5').fadeTo( "fast", 1.0 );
			$('#academics h5').fadeTo( "fast", 1.0 );
			$('#calendars h5').fadeTo( "fast", 1.0 );
			$('#housing h5').fadeTo( "fast", 1.0 );
			$('#resources h5').fadeTo( "fast", 1.0 );
		});
		$('#financesContent').mouseleave(function(){
			$('#finances h5').css("font-size", "18px")
			
			$('#parking h5').fadeTo( "fast", 1.0 );
			$('#academics h5').fadeTo( "fast", 1.0 );
			$('#calendars h5').fadeTo( "fast", 1.0 );
			$('#housing h5').fadeTo( "fast", 1.0 );
			$('#resources h5').fadeTo( "fast", 1.0 );
			
		});
		$('#finances').mouseleave(function(){
			$('#finances h5').css("font-size", "18px")
			
			$('#parking h5').fadeTo( "fast", 1.0 );
			$('#academics h5').fadeTo( "fast", 1.0 );
			$('#calendars h5').fadeTo( "fast", 1.0 );
			$('#housing h5').fadeTo( "fast", 1.0 );
			$('#resources h5').fadeTo( "fast", 1.0 );
			
		});
		$('#financesContent').mouseover(function(){
			$('#finances h5').css("font-size", "22px")
			
			$('#parking h5').fadeTo( "fast", 0.33 );
			$('#academics h5').fadeTo( "fast", 0.33 );
			$('#calendars h5').fadeTo( "fast", 0.33 );
			$('#housing h5').fadeTo( "fast", 0.33 );
			$('#resources h5').fadeTo( "fast", 0.33 );
		});
			
			
		$("#parking").mouseover(function(){
			$('#parking h5').css("font-size", "22px")
			
			$('#parkingContent').show();
			$('#financesContent').hide();
			$('#academicsContent').hide();
			$('#calendarContent').hide();
			$('#housingContent').hide();
			$('#resourcesContent').hide();
				
			/*fade rest of options*/
			$('#finances h5').fadeTo( "fast", 0.33 );
			$('#academics h5').fadeTo( "fast", 0.33 );
			$('#calendars h5').fadeTo( "fast", 0.33 );
			$('#housing h5').fadeTo( "fast", 0.33 );
			$('#resources h5').fadeTo( "fast", 0.33 );
		});
		$('#menu').mouseleave(function(){
			$('#parkingContent').hide();
				
			$('#finances h5').fadeTo( "fast", 1.0 );
			$('#academics h5').fadeTo( "fast", 1.0 );
			$('#calendars h5').fadeTo( "fast", 1.0 );
			$('#housing h5').fadeTo( "fast", 1.0 );
			$('#resources h5').fadeTo( "fast", 1.0 );
		});
		$('#parkingContent').mouseleave(function(){
			$('#parking h5').css("font-size", "18px")
				
			$('#finances h5').fadeTo( "fast", 1.0 );
			$('#academics h5').fadeTo( "fast", 1.0 );
			$('#calendars h5').fadeTo( "fast", 1.0 );
			$('#housing h5').fadeTo( "fast", 1.0 );
			$('#resources h5').fadeTo( "fast", 1.0 );
		});
		$('#parking').mouseleave(function(){
			$('#parking h5').css("font-size", "18px")
			
			$('#finances h5').fadeTo( "fast", 1.0 );
			$('#academics h5').fadeTo( "fast", 1.0 );
			$('#calendars h5').fadeTo( "fast", 1.0 );
			$('#housing h5').fadeTo( "fast", 1.0 );
			$('#resources h5').fadeTo( "fast", 1.0 );
		});
		$('#parkingContent').mouseover(function(){
			$('#parking h5').css("font-size", "22px")
			
			$('#finances h5').fadeTo( "fast", 0.33 );
			$('#academics h5').fadeTo( "fast", 0.33 );
			$('#calendars h5').fadeTo( "fast", 0.33 );
			$('#housing h5').fadeTo( "fast", 0.33 );
			$('#resources h5').fadeTo( "fast", 0.33 );
		});
			
			
		$("#academics").mouseover(function(){
			$('#academics h5').css("font-size", "22px")
			
			$('#academicsContent').show();
			$('#parkingContent').hide();
			$('#financesContent').hide();
			$('#calendarContent').hide();
			$('#housingContent').hide();
			$('#resourcesContent').hide();
				
			/*fade rest of options*/
			$('#parking h5').fadeTo( "fast", 0.33 );
			$('#finances h5').fadeTo( "fast", 0.33 );
			$('#calendars h5').fadeTo( "fast", 0.33 );
			$('#housing h5').fadeTo( "fast", 0.33 );
			$('#resources h5').fadeTo( "fast", 0.33 );
		});
		$('#menu').mouseleave(function(){
			$('#academicsContent').hide();
				
			$('#parking h5').fadeTo( "fast", 1.0 );
			$('#finances h5').fadeTo( "fast", 1.0 );
			$('#calendars h5').fadeTo( "fast", 1.0 );
			$('#housing h5').fadeTo( "fast", 1.0 );
			$('#resources h5').fadeTo( "fast", 1.0 );
		});
		$('#academicsContent').mouseleave(function(){
			$('#academics h5').css("font-size", "18px")
			
			$('#parking h5').fadeTo( "fast", 1.0 );
			$('#finances h5').fadeTo( "fast", 1.0 );
			$('#calendars h5').fadeTo( "fast", 1.0 );
			$('#housing h5').fadeTo( "fast", 1.0 );
			$('#resources h5').fadeTo( "fast", 1.0 );
		});
		$('#academics').mouseleave(function(){
			$('#academics h5').css("font-size", "18px")
			
			$('#parking h5').fadeTo( "fast", 1.0 );
			$('#finances h5').fadeTo( "fast", 1.0 );
			$('#calendars h5').fadeTo( "fast", 1.0 );
			$('#housing h5').fadeTo( "fast", 1.0 );
			$('#resources h5').fadeTo( "fast", 1.0 );
		});
		$('#academicsContent').mouseover(function(){
			$('#academics h5').css("font-size", "22px")
			
			$('#parking h5').fadeTo( "fast", 0.33 );
			$('#finances h5').fadeTo( "fast", 0.33 );
			$('#calendars h5').fadeTo( "fast", 0.33 );
			$('#housing h5').fadeTo( "fast", 0.33 );
			$('#resources h5').fadeTo( "fast", 0.33 );
		});

			
		$("#calendars").mouseover(function(){
			$('#calendars h5').css("font-size", "22px")
			
			$('#calendarContent').show();
			$('#financesContent').hide();
			$('#parkingContent').hide();
			$('#academicsContent').hide();
			$('#housingContent').hide();
			$('#resourcesContent').hide();
				
			/*fade rest of options*/
			$('#parking h5').fadeTo( "fast", 0.33 );
			$('#academics h5').fadeTo( "fast", 0.33 );
			$('#finances h5').fadeTo( "fast", 0.33 );
			$('#housing h5').fadeTo( "fast", 0.33 );
			$('#resources h5').fadeTo( "fast", 0.33 );
		});
		$('#menu').mouseleave(function(){
			$('#calendarContent').hide();
			
			$('#parking h5').fadeTo( "fast", 1.0 );
			$('#academics h5').fadeTo( "fast", 1.0 );
			$('#finances h5').fadeTo( "fast", 1.0 );
			$('#housing h5').fadeTo( "fast", 1.0 );
			$('#resources h5').fadeTo( "fast", 1.0 );
				
		});
		$('#calendarContent').mouseleave(function(){
			$('#calendars h5').css("font-size", "18px")
			
				
			$('#parking h5').fadeTo( "fast", 1.0 );
			$('#academics h5').fadeTo( "fast", 1.0 );
			$('#finances h5').fadeTo( "fast", 1.0 );
			$('#housing h5').fadeTo( "fast", 1.0 );
			$('#resources h5').fadeTo( "fast", 1.0 );
		});
		$('#calendars').mouseleave(function(){
			$('#calendars h5').css("font-size", "18px")
				
			$('#parking h5').fadeTo( "fast", 1.0 );
			$('#academics h5').fadeTo( "fast", 1.0 );
			$('#finances h5').fadeTo( "fast", 1.0 );
			$('#housing h5').fadeTo( "fast", 1.0 );
			$('#resources h5').fadeTo( "fast", 1.0 );
		});
		$('#calendarContent').mouseover(function(){
			$('#calendars h5').css("font-size", "22px")
				
			$('#parking h5').fadeTo( "fast", 0.33 );
			$('#academics h5').fadeTo( "fast", 0.33 );
			$('#finances h5').fadeTo( "fast", 0.33 );
			$('#housing h5').fadeTo( "fast", 0.33 );
			$('#resources h5').fadeTo( "fast", 0.33 );
		});
			
			
		$("#housing").mouseover(function(){
			$('#housing h5').css("font-size", "21px")
			
			$('#housingContent').show();
			$('#financesContent').hide();
			$('#parkingContent').hide();
			$('#academicsContent').hide();
			$('#calendarContent').hide();
			$('#resourcesContent').hide();
				
			/*fade rest of options*/
			$('#parking h5').fadeTo( "fast", 0.33 );
			$('#academics h5').fadeTo( "fast", 0.33 );
			$('#calendars h5').fadeTo( "fast", 0.33 );
			$('#finances h5').fadeTo( "fast", 0.33 );
				$('#resources h5').fadeTo( "fast", 0.33 );
		});
		$('#menu').mouseleave(function(){
			$('#housingContent').hide();
				
			$('#parking h5').fadeTo( "fast", 1.0 );
			$('#academics h5').fadeTo( "fast", 1.0 );
			$('#calendars h5').fadeTo( "fast", 1.0 );
			$('#finances h5').fadeTo( "fast", 1.0 );
			$('#resources h5').fadeTo( "fast", 1.0 );
		});
		$('#housingContent').mouseleave(function(){
			$('#housing h5').css("font-size", "18px")
				
			$('#parking h5').fadeTo( "fast", 1.0 );
			$('#academics h5').fadeTo( "fast", 1.0 );
			$('#calendars h5').fadeTo( "fast", 1.0 );
			$('#finances h5').fadeTo( "fast", 1.0 );
			$('#resources h5').fadeTo( "fast", 1.0 );
		});
		$('#housing').mouseleave(function(){
			$('#housing h5').css("font-size", "18px")
				
			$('#parking h5').fadeTo( "fast", 1.0 );
			$('#academics h5').fadeTo( "fast", 1.0 );
			$('#calendars h5').fadeTo( "fast", 1.0 );
			$('#finances h5').fadeTo( "fast", 1.0 );
			$('#resources h5').fadeTo( "fast", 1.0 );
		});
		$('#housingContent').mouseover(function(){
			$('#housing h5').css("font-size", "21px")
				
			$('#parking h5').fadeTo( "fast", 0.33 );
			$('#academics h5').fadeTo( "fast", 0.33 );
			$('#calendars h5').fadeTo( "fast", 0.33 );
			$('#finances h5').fadeTo( "fast", 0.33 );
			$('#resources h5').fadeTo( "fast", 0.33 );
		});
			
			
		$("#resources").mouseover(function(){
			$('#resources h5').css("font-size", "22px")
			
			$('#resourcesContent').show();
			$('#financesContent').hide();
			$('#parkingContent').hide();
			$('#academicsContent').hide();
			$('#calendarContent').hide();
			$('#housingContent').hide();
				
			/*fade rest of options*/
			$('#parking h5').fadeTo( "fast", 0.33 );
			$('#academics h5').fadeTo( "fast", 0.33 );
			$('#calendars h5').fadeTo( "fast", 0.33 );
			$('#housing h5').fadeTo( "fast", 0.33 );
			$('#finances h5').fadeTo( "fast", 0.33 );
		});
		$('#menu').mouseleave(function(){
			$('#resourcesContent').hide();
				
			$('#parking h5').fadeTo( "fast", 1.0 );
			$('#academics h5').fadeTo( "fast", 1.0 );
			$('#calendars h5').fadeTo( "fast", 1.0 );
			$('#housing h5').fadeTo( "fast", 1.0 );
			$('#finances h5').fadeTo( "fast", 1.0 );
		});
		$('#resourcesContent').mouseleave(function(){
			$('#resources h5').css("font-size", "18px")
				
			$('#parking h5').fadeTo( "fast", 1.0 );
			$('#academics h5').fadeTo( "fast", 1.0 );
			$('#calendars h5').fadeTo( "fast", 1.0 );
			$('#housing h5').fadeTo( "fast", 1.0 );
			$('#finances h5').fadeTo( "fast", 1.0 );
		});
		$('#resources').mouseleave(function(){
			$('#resources h5').css("font-size", "18px")
				
			$('#parking h5').fadeTo( "fast", 1.0 );
			$('#academics h5').fadeTo( "fast", 1.0 );
			$('#calendars h5').fadeTo( "fast", 1.0 );
			$('#housing h5').fadeTo( "fast", 1.0 );
			$('#finances h5').fadeTo( "fast", 1.0 );
		});
		$('#resourcesContent').mouseover(function(){
			$('#resources h5').css("font-size", "22px")
				
			$('#parking h5').fadeTo( "fast", 0.33 );
			$('#academics h5').fadeTo( "fast", 0.33 );
			$('#calendars h5').fadeTo( "fast", 0.33 );
			$('#housing h5').fadeTo( "fast", 0.33 );
			$('#finances h5').fadeTo( "fast", 0.33 );
		});		
 });
