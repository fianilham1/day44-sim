const defaultState = {
    mahasiswas: [
        {
            id: 1,
            nama: "Ridhwan",
            nim: "2107001",
            ttl:"2020-05-13",
            gender:"Male",
            mobile:"119",
            email:"rid@gmail.com",
            alamat:"Sby",
            tahun:"Semester Ganjil 2020/2021",
            jurusan:"IT",
            strata:"S1",
            foto:"foto.jpeg",
            semester: 4,
            ipk: 3.15,
            krs: [
                {
                    mataKuliah: "Basic PHP",
                    nilai: 0,
                    nilaiHuruf: "",
                    jumlahSks: 3,
                    namaDosen: "Abidin"
                },
                {
                    mataKuliah: "Basic Java",
                    nilai: 0,
                    nilaiHuruf: "",
                    jumlahSks: 3,
                    namaDosen: "Abidin"
                },
                {
                    mataKuliah: "Basic Phyton",
                    nilai: 0,
                    nilaiHuruf: "",
                    jumlahSks: 3,
                    namaDosen: "Abidin"
                }
            ]

        },
        {
            id: 2,
            nama: "Alfa",
            nim: "2107002",
            ttl:"2020-05-13",
            gender:"Male",
            mobile:"119",
            email:"alfa@gmail.com",
            alamat:"Sby",
            tahun:"Semester Ganjil 2020/2021",
            jurusan:"Peternakan",
            strata:"S1",
            foto:"foto.jpeg",
            semester: 4,
            ipk: 3.05,
            krs: [
                {
                    mataKuliah: "Ilmu Nutrisi Ternak Dasar",
                    nilai: 0,
                    nilaiHuruf: "",
                    jumlahSks: 4,
                    namaDosen: "Burhan"
                },
                {
                    mataKuliah: "Ilmu Nutrisi Ternak Dasar",
                    nilai: 0,
                    nilaiHuruf: "",
                    jumlahSks: 4,
                    namaDosen: "Burhan"
                },
                {
                    mataKuliah: "Ilmu Nutrisi Ternak Dasar",
                    nilai: 0,
                    nilaiHuruf: "",
                    jumlahSks: 4,
                    namaDosen: "Burhan"
                }
            ]
        },
        {
            id: 3,
            nama: "Shayla",
            nim: "2107003",
            ttl:"2020-05-13",
            gender:"Male",
            mobile:"119",
            email:"shayla@gmail.com",
            alamat:"Sby",
            tahun:"Semester Ganjil 2020/2021",
            jurusan:"Kedokteran",
            strata:"S1",
            foto:"foto.jpeg",
            semester: 4,
            ipk: 3.35,
            krs: [
                {
                    mataKuliah: "Ilmu Bedah",
                    nilai: 0,
                    nilaiHuruf: "",
                    jumlahSks: 3,
                    namaDosen: "Edi"
                },
                {
                    mataKuliah: "Ilmu Bedah",
                    nilai: 0,
                    nilaiHuruf: "",
                    jumlahSks: 3,
                    namaDosen: "Edi"
                },
                {
                    mataKuliah: "Ilmu Bedah",
                    nilai: 0,
                    nilaiHuruf: "",
                    jumlahSks: 3,
                    namaDosen: "Edi"
                }
            ]
        }
    ]
}

const findMhsByNim = nimToSearch => {
    return defaultState.mahasiswas.filter(item => {
        return item.nim === nimToSearch
    })
}

const saveProfileHandler = newMahasiswa => {
    console.log("EDITPROFILECEKKK",newMahasiswa.nim)
        const listMhs = defaultState.mahasiswas
        // const mhsFound = findMhsByNim("2107001")
        const indexMhs = listMhs.map(mhs => mhs.nim).indexOf(newMahasiswa.nim)
        newMahasiswa = {
            ...listMhs[indexMhs],
            ...newMahasiswa
        }
            
        listMhs.splice(indexMhs, 1, newMahasiswa)
     
        // console.log("PROOOFFF",newMahasiswa)
    }

const saveNilaiHandler = newMahasiswa => {

    const listMhs = defaultState.mahasiswas
    const idxUser = listMhs.map(mhs => mhs.nim).indexOf(newMahasiswa.nim)
   
    listMhs.splice(idxUser, 1, newMahasiswa)
}

const addMhsHandler = newMahasiswa => {

        let listMhs = defaultState.mahasiswas
        console.log("ADDNEW : BEFORE ",listMhs)
        let mhsObject =  {
            ...newMahasiswa,
            id: Math.max(...listMhs.map(mhs => mhs.id)) + 1,
            semester: 1,
            ipk: 0.00,
            krs: [
                // {
                //     mataKuliah: "",
                //     nilai: 0,
                //     nilaiHuruf: "",
                //     jumlahSks: 0,
                //     namaDosen: ""
                // }
            ]
        }
        listMhs.push(mhsObject)
        console.log("ADDNEW : AFTER ",listMhs)
}


const mhsListReducer = (state = defaultState, action) => {
    // console.log("state:", state);
    // console.log("action:", action.payload);
    switch (action.type) {
        case "EDIT_PROFILE":
            saveProfileHandler(action.payload.mhsProfileDetail)
            return state
        case "EDIT_NILAI":
            saveNilaiHandler(action.payload.mhsKrsDetail)
            return state
        case "ADD_NEW":
            addMhsHandler(action.payload.newMhs)
            return state
        default:
            return state
    }
}

export default mhsListReducer