const regencies = [{
        "id": "3171",
        "province_id": "31",
        "name": "KOTA JAKARTA SELATAN",
        "alt_name": "KOTA JAKARTA SELATAN",
        "latitude": -6.266,
        "longitude": 106.8135
    },
    {
        "id": "3172",
        "province_id": "31",
        "name": "KOTA JAKARTA TIMUR",
        "alt_name": "KOTA JAKARTA TIMUR",
        "latitude": -6.2521,
        "longitude": 106.884
    },
    {
        "id": "3173",
        "province_id": "31",
        "name": "KOTA JAKARTA PUSAT",
        "alt_name": "KOTA JAKARTA PUSAT",
        "latitude": -6.1777,
        "longitude": 106.8403
    },
    {
        "id": "3174",
        "province_id": "31",
        "name": "KOTA JAKARTA BARAT",
        "alt_name": "KOTA JAKARTA BARAT",
        "latitude": -6.1676,
        "longitude": 106.7673
    },
    {
        "id": "3175",
        "province_id": "31",
        "name": "KOTA JAKARTA UTARA",
        "alt_name": "KOTA JAKARTA UTARA",
        "latitude": -6.1339,
        "longitude": 106.8823
    },
];

const provinces = [
    {
        "id": "11",
        "name": "ACEH",
        "alt_name": "ACEH",
        "latitude": 4.36855,
        "longitude": 97.0253
    },
    {
        "id": "12",
        "name": "SUMATERA UTARA",
        "alt_name": "SUMATERA UTARA",
        "latitude": 2.19235,
        "longitude": 99.38122
    },
    {
        "id": "13",
        "name": "SUMATERA BARAT",
        "alt_name": "SUMATERA BARAT",
        "latitude": -1.34225,
        "longitude": 100.0761
    },
    {
        "id": "14",
        "name": "RIAU",
        "alt_name": "RIAU",
        "latitude": 0.50041,
        "longitude": 101.54758
    },
    {
    "id": "31",
    "name": "DKI JAKARTA",
    "alt_name": "DKI JAKARTA",
    "latitude": 6.1745,
    "longitude": 106.8227
    }
];

let text = "jakarta selatan"

//let itemProvince = provinces.filter()

let getProvinceId = provinces.map(item => {return item.id}).toString()

let getCity = regencies.filter(item => item.name.toLowerCase().includes(text.toLowerCase()))

// let collectData = getCity.concat(provinces).filter(
//     item => item.province_id = getProvinceId
// )

let getRegencyId = getCity.map(item => {return item.province_id})

let collectData = provinces.filter(item => item.id.match(getRegencyId))

/*
function loopRegency(thisRegency) {
    for (let regency of regencies) {
        let provinceName = regency.name.toLowerCase().split(" ")
        if (provinceName.includes(splitText)) {
            thisRegency = regency.id
        } else {
            console.log("Tidak jalan")
        }
    }
    return thisRegency
}
*/

//console.log(itemProvince)
//console.log(getCity)
console.log(collectData)