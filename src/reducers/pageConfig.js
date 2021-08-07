const defaultState = {
    currentPage : "/login"
}

const pageConfig = (state = defaultState, action) => {
    
    switch (action.type) {
        case "/login":
            return {
                currentPage:"/login"
            }
        case "/sign-up":
            return {
                currentPage:"/sign-up"
            }
        case "/dashboard":
            return {
                currentPage:"/dashboard"
            }
        case "/book-park":
            return {
                currentPage:"/book-park"
            }
        default:
            return state
    }
}

export default pageConfig