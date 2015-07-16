
        angular.module('app.controllers', []).
          controller('addChartCtrl', ["$scope","uiGmapGoogleMapApi", "Service1","getchartdata", function ($scope, GoogleMapApi,Service1,getchartdata) {

      $scope.service = Service1;
                            
        $scope.chartlist=[];	
        $scope.maplist=[];	

                getchartdata.getMaps().then(					   
                                             function(data){ 

                for(i=0;i<data.data.length;i++)
                {
                $scope.maplist.push({id:data.data[i].id,mapname:data.data[i].mapname});
                }

                });



                    getchartdata.getCharts().then(					   
                                             function(data){ 

                for(i=0;i<data.data.length;i++)
                {
                $scope.chartlist.push({id:data.data[i].id,name:data.data[i].name,type:data.data[i].type});
                }

                });



                

              $scope.service = Service1;
              $scope.openchart= function (id,type,name) {

                            if(type=="Map")
                            {
                            getchartdata.savechartloaded("Map"+id,'mcajaydip').then(function(data){});
                            }
                            else
                            {
                            getchartdata.savechartloaded(id,'mcajaydip').then(function(data){});
                            }                                               
                                        if(type=="Bar")
                                            {
                                                               
                                          var chart = {"id":id,"chartMeta":{labels:"",type:""},data:"",series:"",options:""};
                                                    chart.chartMeta.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
                                                    chart.chartMeta.type ="Bar";
                                                    chart.series = ['Series A', 'Series B'];
                                                    chart.options={
          tooltip:{textStyle:{fontName:'"Arial"'}},
          title: 'Resolution(Priority Wise)',titleTextStyle:{fontName:'"Arial"'},
          hAxis: {title: 'Priority', titleTextStyle: {color: 'black',fontSize:'15',fontName:'"Arial"'}},
          vAxis: {minValue:0},
          legend:{position: 'bottom'},
          chartArea:{width:'88%'}
        };
                                                    chart.data = [[65, 59, 80, 81, 56, 55, 40],[28, 48, 40, 19, 86, 27, 90]];
                                                    
                                                $scope.service.addNew(chart);
                                         
                                            }
                                            else if(type=="Pie")
                                            {
                                                        
                                                                 
                                                    var chart = {"id":id,"chartMeta":{labels:"",type:type,name:name},data:""};
                                                    chart.chartMeta.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
                                                    chart.data = [300, 500, 100];
                                                     $scope.service.addNew(chart);
                                                    

                                            }
                                                    
                                            else if(type=="Line")
                                            {
                                                
                                                    var chart = {"id":id,"chartMeta":{labels:"",type:type,name:name,serices:""},data:""};
                                                    chart.chartMeta.labels = ["January", "February", "March", "April", "May", "June", "July"];
                                                    chart.chartMeta.series = ['Series A', 'Series B'];
                                                    chart.data = [[65, 59, 80, 81, 56, 55, 40],[28, 48, 40, 19, 86, 27, 90]];
                                                     $scope.service.addNew(chart);

                                            }
                                            else if(type=="Map")
                                            {
                                                                         var chart = {"id":id,"chartMeta":{circles:"",type:"Map",map:""},options:""};                               
                                                          GoogleMapApi.then(function(maps){
                                                    
                                                              
                                                                //maps.visualRefresh=true;
                                                               chart.chartMeta.map = {center: {latitude: 44, longitude: -108 }, zoom: 4 };
                                                               chart.options = {scrollwheel: true};
                                                               chart.chartMeta.circles = [
                                                                    {
                                                                        id: 1,
                                                                        center: {
                                                                            latitude: 44,
                                                                            longitude: -108
                                                                        },
                                                                        radius: 500000,
                                                                        stroke: {
                                                                            color: '#ffB21F',
                                                                            weight: 2,
                                                                            opacity: 1
                                                                        },
                                                                        fill: {
                                                                            color: '#08B21F',
                                                                            opacity: 0.5
                                                                        },
                                                                        geodesic: true, // optional: defaults to false
                                                                        draggable: true, // optional: defaults to false
                                                                        clickable: true, // optional: defaults to true
                                                                        editable: true, // optional: defaults to false
                                                                        visible: true, // optional: defaults to true
                                                                        control: {}
                                                                    },
                                                                     {
                                                                        id: 2,
                                                                        center: {
                                                                            latitude: 55,
                                                                            longitude: -107
                                                                        },
                                                                        radius: 300000,
                                                                        stroke: {
                                                                            color: '#ffF',
                                                                            weight: 2,
                                                                            opacity: 0.5
                                                                        },
                                                                        fill: {
                                                                            color: '#fff1F',
                                                                            opacity: 0.5
                                                                        },
                                                                        geodesic: true, // optional: defaults to false
                                                                        draggable: true, // optional: defaults to false
                                                                        clickable: true, // optional: defaults to true
                                                                        editable: true, // optional: defaults to false
                                                                        visible: true, // optional: defaults to true
                                                                        control: {}
                                                                    }
                                                                    
                                                                    
                                                                    
                                                                ];
                                                            });
                                                                         $scope.service.addNew(chart);

                                            }
                                              


              }
          }])

