getAll(urlOrder, Dashboard);
function Dashboard(data) {
    if(data) {
        var table = [];    
        table = data.sort((a,b) => parseInt(a.id) - parseInt(b.id)).map(element => `Table ${element.id}` );
        var prices = [] ;
      data.forEach(element => {
            var total = 0;
             element.items.forEach(a => {
               var food = foods.find(element => element.id == a.idFood);
              
                total +=  parseInt(a.quantity)*parseInt(food.price)
             })
              prices.push(total);
        });
    }
    const ctx = document.createElement("canvas");
    document.querySelector(".bar-chart").appendChild(ctx);

    new Chart(ctx, {
        type: "bar",
        data: {
          labels: table ,
          datasets: [
            {
              label: "REVENUE TOTAL",
              data: prices,
              backgroundColor: "#c5487a",
              borderColor: "#c5487a",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });

      const piece = document.createElement("canvas");
    document.querySelector(".pie-chart").appendChild(piece);

    new Chart(piece, {
      type: "pie", // Use 'pie' for creating a pie chart
      data: {
        labels: table,
        datasets: [
          {
            label: "TOTAL REVENUE",
            data: prices,
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 0, 0, 0.6)",
              "rgba(0, 255, 0, 0.6)",
              "rgba(0, 0, 255, 0.6)",
              "rgba(128, 0, 128, 0.6)",
              "rgba(0, 128, 128, 0.6)",
              "rgba(128, 128, 0, 0.6)",
              "rgba(255, 165, 0, 0.6)",
              "rgba(0, 255, 255, 0.6)",
              "rgba(255, 0, 255, 0.6)",
              "rgba(128, 0, 0, 0.6)",
              "rgba(0, 128, 0, 0.6)",
              "rgba(0, 0, 128, 0.6)",
              // You can add more colors here if needed
            ],
            borderColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 0, 0, 0.6)',
              'rgba(0, 255, 0, 0.6)',
              'rgba(0, 0, 255, 0.6)',
              'rgba(128, 0, 128, 0.6)',
              'rgba(0, 128, 128, 0.6)',
              'rgba(128, 128, 0, 0.6)',
              'rgba(255, 165, 0, 0.6)',
              'rgba(0, 255, 255, 0.6)',
              'rgba(255, 0, 255, 0.6)',
              'rgba(128, 0, 0, 0.6)',
              'rgba(0, 128, 0, 0.6)',
              'rgba(0, 0, 128, 0.6)',
              // You can add more colors here if needed
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
}