const students = {
    "5a": [
        {
            id: 1,
            vardas: "Jonas",
            pavarde: "Jonaitis",
            dalykai: {
                matematika: 7,
                fizika: 5,
                chemija: 9,
                informatika: 8,
                "anglu kalba": 9,
            },
        },
        {
            id: 2,
            vardas: "Petras",
            pavarde: "Petraitis",
            dalykai: {
                matematika: 6,
                fizika: 8,
                chemija: 7,
                informatika: 9,
                "anglu kalba": 6,
            },
        },
    ],
    "6b": [
        {
            id: 3,
            vardas: "Ona",
            pavarde: "Onaitė",
            dalykai: {
                matematika: 8,
                fizika: 6,
                chemija: 9,
                informatika: 8,
                "anglu kalba": 10,
            },
        },
        {
            id: 4,
            vardas: "Asta",
            pavarde: "Astaitė",
            dalykai: {
                matematika: 7,
                fizika: 5,
                chemija: 8,
                informatika: 9,
                "anglu kalba": 7,
            },
        },
        {
            id: 5,
            vardas: "Rokas",
            pavarde: "Rokaitis",
            dalykai: {
                matematika: 6,
                fizika: 8,
                chemija: 7,
                informatika: 6,
                "anglu kalba": 8,
            },
        },
    ],
    "7c": [
        {
            id: 6,
            vardas: "Tomas",
            pavarde: "Tomaitis",
            dalykai: {
                matematika: 9,
                fizika: 7,
                chemija: 8,
                informatika: 10,
                "anglu kalba": 8,
            },
        },
        {
            id: 7,
            vardas: "Gabija",
            pavarde: "Gabaitė",
            dalykai: {
                matematika: 8,
                fizika: 6,
                chemija: 9,
                informatika: 7,
                "anglu kalba": 9,
            },
        },
        {
            id: 8,
            vardas: "Lukas",
            pavarde: "Lukaitis",
            dalykai: {
                matematika: 7,
                fizika: 7,
                chemija: 6,
                informatika: 8,
                "anglu kalba": 8,
            },
        },
        {
            id: 9,
            vardas: "Ema",
            pavarde: "Emaitė",
            dalykai: {
                matematika: 6,
                fizika: 8,
                chemija: 7,
                informatika: 9,
                "anglu kalba": 7,
            },
        },
        {
            id: 10,
            vardas: "Viktorija",
            pavarde: "Viktoraitė",
            dalykai: {
                matematika: 8,
                fizika: 9,
                chemija: 8,
                informatika: 8,
                "anglu kalba": 9,
            },
        },
    ],
};

for (const klase in students) {
    const klasesInfo = students[klase];

    for (const mokinioInfo of klasesInfo) {
        const mokinys = `${mokinioInfo.id}. Mokinys:"${mokinioInfo.vardas} ${mokinioInfo.pavarde}"`;
        console.log(mokinys);
        console.log("Klasė:", klase);
        console.log("----------------------------------------------------");

        const dalykai = mokinioInfo.dalykai;
        let vidurkis = 0;
        console.log("Dalykų sąrašas:");
        for (const dalykas in dalykai) {
            console.log(`${dalykas}: ${dalykai[dalykas]}`);
            vidurkis += dalykai[dalykas];
        }

        const dalykuKiekis = Object.keys(dalykai).length;
        vidurkis = (vidurkis / dalykuKiekis).toFixed(1);
        console.log("----------------------------------------------------");
        console.log("Vidurkis:", vidurkis);
        console.log("\n");
    }
}
