$("#calculate").click(function () {
    var assignment = $("#assignment").val() * .55;
    var group = $("#group").val() * .05;
    var quiz = $("#quiz").val() * .1;
    var exam = $("#exam").val() * .2;
    var intex = $("#intex").val() * .1;
    var percentage = assignment + group + quiz + exam + intex;

    if (percentage >= 94) {
        var letter = "A";
    } else if (percentage < 94 && percentage >= 90) {
        var letter = "A-";
    } else if (percentage < 90 && percentage >= 87) {
        var letter = "B+";
    } else if (percentage < 87 && percentage >= 84) {
        var letter = "B";
    } else if (percentage < 84 && percentage >= 80) {
        var letter = "B-";
    } else if (percentage < 80 && percentage >= 77) {
        var letter = "C+";
    } else if (percentage < 77 && percentage >= 74) {
        var letter = "C";
    } else if (percentage < 74 && percentage >= 70) {
        var letter = "C-";
    } else if (percentage < 70 && percentage >= 67) {
        var letter = "D+";
    } else if (percentage < 67 && percentage >= 64) {
        var letter = "D";
    } else if (percentage < 64 && percentage >= 60) {
        var letter = "D-";
    } else {
        var letter = "E";
    };

    alert("Your final grade is a " + percentage + "% (" + letter + ").");
})