var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ["HTML", "CSS", "JS", "Typescript/Angular", "Python", "MongoDB", "Learning new stuff :)"],
        datasets: [{
            label: 'skill power over a hundred',
           
            data: [60, 50, 80, 50, 60, 40, 100],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(0, 0, 164, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(0, 0, 164, 1)'
            ],
            borderWidth: 1,
           
        }]
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero:true,
                    suggestedMin: 0,
                    suggestedMax: 100,
                    barPercentage: 0.9,
                    barThickness : 50,
                    barPercentage: 1.0,
                    categoryPercentage: 1.0,
                }
            }]
        }
        
    }
});