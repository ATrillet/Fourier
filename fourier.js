function dft(vals) {
    let X = [];
    let N = vals.length
    for (let k = 0; k < N; k++) {
        let re = 0;
        let im = 0;
        for (let n = 0; n < N; n++) {
            let cuz = (2 * PI * k * n) / N;
            re += vals[n] * cos(cuz);
            im -= vals[n] * sin(cuz);
        }
        re = re / N;
        im = im / N;
        let freq = k;
        let amp = sqrt(re * re + im * im);
        let phase = atan2(im, re);
        X[k] = {
            re,
            im,
            freq,
            amp,
            phase,
        };
    }
    return X;
}