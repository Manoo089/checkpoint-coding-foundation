function filterApiData(apiData, mandatoryKeys) {
    let filtered = apiData.filter(function(item) {
        let objects = Object.keys(item);

        let check = true;
        for (let i = 0; i < mandatoryKeys.length; i++) {
            if (!objects.includes(mandatoryKeys[i])) {
                check = false;
            }
        }
        if (check === true) {
            return check;
        }
    });

    console.log(filtered);
    return filtered;
}