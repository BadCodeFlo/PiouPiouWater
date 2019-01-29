function calculTarif(form) {
    var pAdultes = form.adu.value;
    var pEnfants = form.enf.value;
    var pMoyen = form.moyen.value;
    var pAdos = form.ados.value;

    window.document.getElementById('nbPersonnes').innerHTML = (pAdultes*1 + pEnfants*1 + pMoyen*1 + pAdos*1);

    window.document.getElementById('prixAdultes').innerHTML = pAdultes*50 + "€";
    window.document.getElementById('prixEnfants').innerHTML = pEnfants*(50*0.7) + "€";
    window.document.getElementById('prixMoyen').innerHTML = pMoyen*(50*0.8) + "€";
    window.document.getElementById('prixAdos').innerHTML = pAdos*(50*0.9) + "€";
    window.document.getElementById('total').innerHTML = (pAdultes*50) + (pEnfants*(50*0.7)) + (pMoyen*(50*0.8)) + (pAdos*(50*0.9)) + "€";
}