const defaultState = {
    currentPage : "/login"
}

const pageConfig = (state = defaultState, action) => {
    
    switch (action.type) {
        case "/form":
            return {
                currentPage:"/form"
            }
        case "/penerimaan":
            return {
                currentPage:"/penerimaan"
            }
        case "/login":
            return {
                currentPage:"/login"
            }
        case "/signup":
            return {
                currentPage:"/signup"
            }
       case "/list-sks":
            return {
                currentPage:"/list-sks"
            }
        case "/list-mahasiswa":
            return {
                currentPage:"/list-mahasiswa"
            }
        case "/list-dosen":
            return {
                currentPage:"/list-dosen"
            }
        case "/list-jurusan":
            return {
                currentPage:"/list-jurusan"
            }
        case "/detail-krs-mahasiswa":
            return {
                currentPage:"/detail-krs-mahasiswa"
            }
        case "/detail-profile-mahasiswa":
            return {
                currentPage:"/detail-profile-mahasiswa"
            }
        case "/submit-nilai-mahasiswa":
            return {
                currentPage:"/submit-nilai-mahasiswa"
            }
        default:
            return state
    }
}

export default pageConfig