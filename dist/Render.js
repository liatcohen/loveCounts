
const Render = function () {

    const renderTransactionPage = function (expenses, currentDate) {
        $("#container").empty()
        const source = $('#transaction-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template({ expenses, currentDate });
        $('#container').append(newHTML);
    }

    const renderNavbar = function (activeTab) {
        $(".navbar").empty()
        const source = $('#navbar-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template({ activeTab });
        $('.navbar').append(newHTML);
    }
    const renderProfilePage = function (userName, favGoals) {
        $("#container").empty()
        const source = $('#profile-page-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template({ userName, favGoals });
        $('#container').append(newHTML);
    }

    const renderRecPage = function (favGoals, savings) {
        $("#container").empty()
        const source = $('#rec-page-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template({ favGoals, savings });
        $('#container').append(newHTML);
    }

    const renderFlights = function (flights) {
        $(".goal-suggestions-div").empty()
        $("#loading-gif").empty()

        const source = $('#flights-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template({ flights });
        // $('.goal-suggestions-div').append(newHTML);
        $('#container').append(newHTML);

        
    }
    const renderLoading= function(){
        $('#container').append(`<div id="loading-gif"><img src="../pics/tenor.gif"></div>`)
    }
    const renderRecTravelForm = function (favGoals, savings) {
        // $("#container").empty()
        // $('.rec-selector-box').append(
            // `
            // <div id="flight-search-form">
            //     <span id="box1">
            //     <div class="row">

            //              <div class="input ">
            //                  <input id="destination" type="text" class="validate">
            //                  <label for="Destination">Destination</label>
            //              </div>
            //          </div>
            //     </span>
            //     <span id="box2">sdflksaa</span>
            //     <span id="box3">sssa</span>

            // </div>
            // `);
           
            $('#container').append(

            `
            
            <div id="flight-search-form">
                <div class="travel-form-item row">
                    <div class="input ">
                        <input id="destination" type="text" class="validate">
                        <label for="Destination">Destination</label>
                    </div>
                </div>
                <div class="travel-form-item row">
                    <div class="input ">
                    <input id="departure-date" type="date" class="validate" value={{currentDate}}>
                    <label for="Date">Date</label>
                    </div>
                </div>
                <div id="searchFlightBtn">
                    <a id="searchFlight" class="waves-effect waves-light btn">Search</a>
                </div>
            </div>
            `);


        // const source = $('#rec-page-template').html();
        // const template = Handlebars.compile(source);
        // let newHTML = template({ favGoals ,savings});
        // $('#container').append(newHTML);
    }

    const renderGoalRecommendations = function () {
        //not implemented yet
    }

    const renderReportPage = function (categories, amount, savings) {
        $("#container").empty()
        $('#container').append(`<canvas id="myChart"></canvas>`);
        renderChart(categories, amount)
        $('#container').append(`<div class="box3 sb14">You saved <span id="savings"> ${savings}$ </span> this month!<br>
                                    check Recommendations page to see what you can spent them on
                                </div>`)
    }

    function renderChart(labels, data) {
        var ctx = document.getElementById("myChart").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                    label: "Exspenses",
                    backgroundColor: ["#f1c40f", "#9b59b6", "#fd79a8", "#27ae60", "#2980b9", "#778beb", "#16a085", "#7ed6df"],
                    data: data
                }]
            },
            options: {
                title: {
                    display: true,
                    fontSize: 20,
                    text: 'what did you spend on this month?'
                }, animation: {
                    duration: 1500,
                    easing: "linear"
                },
                legend: {
                    display: true,
                    // position:"left",
                    padding: 20
                }
            }

        });
    }
    return {
        renderTransactionPage,
        renderNavbar,
        renderProfilePage,
        renderRecPage,
        renderGoalRecommendations,
        renderReportPage,
        renderRecTravelForm,
        renderFlights,
        renderLoading
    }
}

