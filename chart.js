const ctx = document.getElementById("myChart").getContext("2d");

if (window.innerWidth > 768) {
  const skillsChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "Kommunikationsfähigkeit",
        "Kundenorientierung",
        "Organisationstalent",
        "Flexibilität",
        "Verkaufstalent",
        "Teamfähigkeit",
        "Problemlösungsfähigkeit",
      ],
      datasets: [
        {
          label: "Meine Soft Skills",
          data: [9, 9.9, 8, 10, 9, 7, 8],
          backgroundColor: [
            "rgba(255, 0, 0, 1)",
            "rgba(0, 255, 0, 1)",
            "rgba(0, 0, 255, 1)",
            "rgba(255, 255, 0, 1)",
            "rgba(255, 165, 0, 1)",
            "rgba(128, 0, 128, 1)",
            "rgba(0, 255, 255, 1)",
          ],
          borderColor: "rgba(255, 255, 255, 1)",
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          ticks: {
            color: "white",
            font: {
              size: 14,
            },
          },
        },
        y: {
          beginAtZero: true,
        },
      },
      animations: {
        scale: {
          duration: 1000,
          easing: "easeInOutExpo",
          from: { x: 0, y: 0 },
          to: { x: 1, y: 1 },
        },
      },
    },
  });
} else {
  const skillsChart = new Chart(ctx, {
    type: "polarArea",
    data: {
      labels: [
        "Kommunikationsfähigkeit",
        "Kundenorientierung",
        "Organisationstalent",
        "Flexibilität",
        "Verkaufstalent",
        "Teamfähigkeit",
        "Problemlösungsfähigkeit",
      ],
      datasets: [
        {
          label: "Meine Soft Skills",
          data: [9, 9.9, 8, 10, 9, 7, 8],
          backgroundColor: [
            "rgba(255, 0, 0, 1)",
            "rgba(0, 255, 0, 1)",
            "rgba(0, 0, 255, 1)",
            "rgba(255, 255, 0, 1)",
            "rgba(255, 165, 0, 1)",
            "rgba(128, 0, 128, 1)",
            "rgba(0, 255, 255, 1)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 255, 255, 1)",
          ],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
      },
      animations: {
        rotation: {
          duration: 800,
          easing: "easeInOutQuad",
          from: 0,
          to: Math.PI * 2, // 360 degrees
        },
      },
    },
  });
}
