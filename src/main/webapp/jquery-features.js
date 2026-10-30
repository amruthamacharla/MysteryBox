
$(document).ready(function () {

    $("#toggleNotebookBtn").on("click", function () {

        const button = $(this);
        const notebook = $("#notebookContent");

        notebook.stop(true, true).slideToggle(300);

        const expanded = button.attr("aria-expanded") === "true";

        button
            .attr("aria-expanded", String(!expanded))
            .text(expanded ? "Show Notebook" : "Hide Notebook");
    });

});
