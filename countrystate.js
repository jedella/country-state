	function initCountries() {
		var eleC = document.getElementById('country');
		eleC.innerHTML = '<option value="">-- Choose Country --</option>';
		for (var i = 0; i < countries.length; i++) {
			eleC.innerHTML = eleC.innerHTML + '<option value="' + countries[i]['countryShortCode'] + '">' + countries[i]['countryName'] + '</option>';
		}
	}
	
	function populateState(e) {
		var eleS = document.getElementById('state');
		eleS.innerHTML = '<option value="">-- Choose State/Province --</option>';
		for (var i = 0; i < countries.length; i++) {
			if(e.value == countries[i]['countryShortCode']) {
				console.log(e.value  + ' matched.');
				for(var j = 0; j < countries[i]['regions'].length; j++) {
					eleS.innerHTML = eleS.innerHTML + '<option value="' + countries[i]['regions'][j]['shortCode'] + '">' + countries[i]['regions'][j]['name']  + '</option>';
				}
				break;
			}
		}
	}