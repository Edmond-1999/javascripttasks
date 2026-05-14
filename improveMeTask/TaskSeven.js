const country = { name: 'Nigeria', capital: 'Abuja', population: '200M' };

for (const word in country) {
    console.log(word + " : " + country[word])
}

