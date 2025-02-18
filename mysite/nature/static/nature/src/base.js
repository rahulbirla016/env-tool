(() => {
  'use strict'

    $(document).ready(function(){
  

      function showEnvData(data) {
          console.log(data)
          var events_array = data.data;
          var all_events = [];
          var title; 
          var events_text;

          for (var i = 0; i <= (events_array.length - 1); i++) {
            console.log(events_array[i]);
            title = events_array[i].fields.name;
            all_events.push(title)
          }

          console.log(all_events)

          events_text =  all_events[0] 
                        + ", " + all_events[1] 
                        + ", " + all_events[2] 
                        + ", " + all_events[3]
                        + ", " + all_events[4]

          $("#disaster_events_1").text(all_events[0]);
          $("#disaster_events_2").text(all_events[1]);
          $("#disaster_events_3").text(all_events[2]);
          $("#disaster_events_4").text(all_events[3]);
          $("#disaster_events_5").text(all_events[4]);

          // API for later: https://api.reliefweb.int/v1/disasters/?appname=apidoc&limit=5
          // 'https://api.reliefweb.int/v1/reports?appname=apidoc&limit=5'
      }

      // Date
      const date = new Date();
      const year = date.getFullYear();
 
      $("#current_year").text(year.toString());
      var x = 7;
      var y = 10;

      // if (window.location.host() == 'localhost:8000'){
      //   $("#nav-home").addClass("active");
      // }else if (window.location.host() == 'localhost:8000')


      // Climate API
      fetch('https://api.reliefweb.int/v1/disasters/?appname=apidoc&limit=5&preset=latest')
      .then((response) => response.json())
      .then((data) => showEnvData(data));

      

    });   

})()