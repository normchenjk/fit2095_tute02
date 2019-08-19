let app;

app.get("/FIT2095/about(.html)?", function (req, res) {
    // Matches /FIT2095/about
    // Matches /FIT2095/about.html
});

app.get("/gotham/(na)+-batman", function (req, res) {
    // Matches /gotham/nabatman
    // Matches /gotham/nanabatman
    // Matches /gotham/nananabatman etc.
});

app.get(/b[aeiou]t/, function (req, res) {
    // Matches bat, bet, bit, bot, but
});