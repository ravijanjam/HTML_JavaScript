var cigarData = $.ajax({
    data: {cigar: sCigar, calc: "cigar"},
type: "POST",
url: "http://www.blah",
dataType:"json",
async: false,
success:function(data) {

//update chart here
updateChartData(data);

 }


}).responseText;    



        //wrap chart refresh code as function

        function  updateChartData(data){

               var cigarData=data;

                  var radarChartData = {
                    labels : ["Caramel","Creamy","Earthy","Floral","Fruity","Spicy","Sweet","Woody"],
                    datasets : [
                        {
                            fillColor : "rgba(228,154,7,0.5)",
                            strokeColor : "rgba(228,154,7,1)",
                            pointColor : "rgba(228,154,7,1)",
                            pointStrokeColor : "#fff",
                            data : [cigarData]  //Where I want the data to be 
                        }

                        ] 


          }
