// https://www.w3schools.com/jsref/met_doc_write.asp
// document.write("<p>This statement writes into the document a paragraph.</p>");
// document.write("<h1>Note that this stuff is written before the body since it's in the head.</h1>")

// console.log("This will be seen in your browsers console (right click > inspect element > console)")
$(document).ready( function() { 
       $('#finances').mouseover(function(){
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
				
				$('#parking h5').fadeTo( "fast", 1.0 );
				$('#academics h5').fadeTo( "fast", 1.0 );
				$('#calendars h5').fadeTo( "fast", 1.0 );
				$('#housing h5').fadeTo( "fast", 1.0 );
				$('#resources h5').fadeTo( "fast", 1.0 );
			});
			
			
			$("#parking").mouseover(function(){
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
				
				$('#finances h5').fadeTo( "fast", 1.0 );
				$('#academics h5').fadeTo( "fast", 1.0 );
				$('#calendars h5').fadeTo( "fast", 1.0 );
				$('#housing h5').fadeTo( "fast", 1.0 );
				$('#resources h5').fadeTo( "fast", 1.0 );
			});
			
			
			$("#academics").mouseover(function(){
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
				
				$('#parking h5').fadeTo( "fast", 1.0 );
				$('#finances h5').fadeTo( "fast", 1.0 );
				$('#calendars h5').fadeTo( "fast", 1.0 );
				$('#housing h5').fadeTo( "fast", 1.0 );
				$('#resources h5').fadeTo( "fast", 1.0 );
			});

			
			$("#calendars").mouseover(function(){
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
				
				$('#parking h5').fadeTo( "fast", 1.0 );
				$('#academics h5').fadeTo( "fast", 1.0 );
				$('#finances h5').fadeTo( "fast", 1.0 );
				$('#housing h5').fadeTo( "fast", 1.0 );
				$('#resources h5').fadeTo( "fast", 1.0 );
			});
			
			$("#housing").mouseover(function(){
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
				
				$('#parking h5').fadeTo( "fast", 1.0 );
				$('#academics h5').fadeTo( "fast", 1.0 );
				$('#calendars h5').fadeTo( "fast", 1.0 );
				$('#finances h5').fadeTo( "fast", 1.0 );
				$('#resources h5').fadeTo( "fast", 1.0 );
			});
			
			
			$("#resources").mouseover(function(){
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
				
				$('#parking h5').fadeTo( "fast", 1.0 );
				$('#academics h5').fadeTo( "fast", 1.0 );
				$('#calendars h5').fadeTo( "fast", 1.0 );
				$('#housing h5').fadeTo( "fast", 1.0 );
				$('#finances h5').fadeTo( "fast", 1.0 );
			}); 
 });
