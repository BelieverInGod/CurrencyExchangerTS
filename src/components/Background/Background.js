import './Background.css';

function Background() {

// Init Context
    const c = document.createElement('canvas').getContext('2d');
    const postctx = document.body.appendChild(document.createElement('canvas')).getContext('2d');
    const canvas = c.canvas;
    const vertices = [];

// Effect Properties
    const vertexCount = 7000; // 7000
    const vertexSize = 3;
    const oceanWidth = 100; // 204
    const oceanHeight = -80;
    const gridSize = 14; // 32
    const waveSize = 14;
    const perspective = 150;

// Common variables
    const depth = (vertexCount / oceanWidth * gridSize);
    let frame = 0;
    const {sin, cos} = Math;

// Render loop
    const loop = () => {
        frame++;
        if (postctx.canvas.width !== postctx.canvas.offsetWidth || postctx.canvas.height !== postctx.canvas.offsetHeight) {
            postctx.canvas.width = canvas.width = postctx.canvas.offsetWidth;
            postctx.canvas.height = canvas.height = postctx.canvas.offsetHeight;
        }


        c.fillStyle = `hsl(200deg, 100%, 2%)`;
        c.fillRect(0, 0, canvas.width, canvas.height);
        c.save();
        c.translate(canvas.width / 2, canvas.height / 2);

        c.beginPath();
        vertices.forEach((vertex, i) => {
            let x = vertex[0] - frame % (gridSize * 2);
            const z = vertex[2] - frame * 0.5 % gridSize + (i % 2 === 0 ? gridSize / 2 : 0);
            const wave = (cos(frame / 45 + x / 50) - sin(frame / 20 + z / 50) + sin(frame / 30 + z*x / 10000));
            let y = vertex[1] + wave * waveSize;
            const a = Math.max(0, 1 - (Math.sqrt(x ** 2 + z ** 2)) / depth);

            y -= oceanHeight;

            x /= z / perspective;
            y /= z / perspective;


            if (a < 0.01) return;
            if (z < 0) return;


            c.globalAlpha = a;
            c.fillStyle = `hsl(${260 + wave * 4}deg, 85%, 46%)`;
            c.fillRect(x - a * vertexSize / 2, y - a * vertexSize / 2, a * vertexSize, a * vertexSize);
            c.globalAlpha = 1;
        });
        c.restore();

// Post-processing
        postctx.drawImage(canvas, 0, 0);

        postctx.globalCompositeOperation = 'screen';
        postctx.drawImage(canvas, 0, 0);
        postctx.globalCompositeOperation = 'source-over';

        requestAnimationFrame(loop);
    };

// Generating dots
    for (let i = 0; i < vertexCount; i++) {
        const x = i % oceanWidth;
        const y = 0;
        const z = i / oceanWidth >> 0;
        const offset = oceanWidth / 2;
        vertices.push([(-offset + x) * gridSize, y * gridSize, z * gridSize]);
    }

    loop();



    return (
        <>
        </>
    );
}

export default Background;
