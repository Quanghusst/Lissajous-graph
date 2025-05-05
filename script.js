
const N = 1000;
const t = Array.from({ length: N }, (_, i) => i * 2 * Math.PI / N);

function computeData(a, b, delta, Ax, Ay) {
  const x = t.map(ti => Ax * Math.sin(a * ti));
  const y = t.map(ti => Ay * Math.sin(b * ti + delta));
  return { x, y };
}

function plotAll(a, b, delta, Ax, Ay) {
  const { x, y } = computeData(a, b, delta, Ax, Ay);

  Plotly.newPlot('graph', [{
    x, y, mode: 'lines', line: { color: 'blue' }
  }], {
    xaxis: { range: [-Math.max(Ax, 1.2), Math.max(Ax, 1.2)] },
    yaxis: { range: [-Math.max(Ay, 1.2), Math.max(Ay, 1.2)] },
    margin: { t: 20, b: 20, l: 10, r: 10 },
    showlegend: false
  });

  Plotly.newPlot('x_signal', [{
    x: t, y: x, mode: 'lines', line: { color: 'red' }
  }], {
    xaxis: { title: 't' },
    yaxis: { range: [-Math.max(Ax, 1.2), Math.max(Ax, 1.2)] },
    margin: { t: 0, b:20, l: 20, r:20 }
  });

  Plotly.newPlot('y_signal', [{
    x: t, y: y, mode: 'lines', line: { color: 'green' }
  }], {
    xaxis: { title: 't' },
    yaxis: { range: [-Math.max(Ay, 1.2), Math.max(Ay, 1.2)] },
    margin: { t: 0, b:20, l: 20, r:20 }
  });
}

function updatePlot() {
  const a = parseFloat(document.getElementById('a').value);
  const b = parseFloat(document.getElementById('b').value);
  const Ax = parseFloat(document.getElementById('Ax').value);
  const Ay = parseFloat(document.getElementById('Ay').value);
  const deltaDeg = parseFloat(document.getElementById('delta').value);
  const delta = deltaDeg * Math.PI / 180;

  plotAll(a, b, delta, Ax, Ay);
}

document.querySelectorAll('input').forEach(el => {
  el.addEventListener('input', updatePlot);
});

updatePlot();
