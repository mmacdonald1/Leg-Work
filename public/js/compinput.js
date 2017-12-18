$(document).ready(function() {
  var compForm = $("form.compInput");
  var compNameInput = $("input#comp-name-input");
  var compWebsiteInput = $("input#comp-website-input");
  var compCultureInput = $("input#comp-culture-input");
  var compBenefitsInput = $("input#comp-benefits-input");
  var compNotesInput = $("textarea#comp-notes-input");

  compForm.on("submit", function(event) {
    event.preventDefault();
    var compData = {
      companyName: compNameInput.val().trim(),
      website: compWebsiteInput.val().trim(),
      culture: compCultureInput.val().trim(),
      benefits: compBenefitsInput.val().trim(),
      notes: compNotesInput.val().trim()
    };

    if (!compData.companyName) {
      return;
    }

    logComp(compData.companyName, compData.website, compData.culture, compData.benefits, compData.notes);
    compNameInput.val("");
    compWebsiteInput.val("");
    compCultureInput.val("");
    compBenefitsInput.val("");
    compNotesInput.val("");
  });

  function logComp(companyName, website, culture, benefits, notes) {
    $.post("/api/compinput", {
      companyName: companyName,
      website: website,
      culture: culture,
      benefits: benefits,
      notes: notes,
    }).then(function(data) {
      window.location.replace(data);
    }).catch(function(err) {
      console.log(err);
    });
  }

});