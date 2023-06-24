import MYRequest from "../request/index.js"
export function getHotSuggest() {
   return MYRequest.get({
        url: "/home/hotSuggests"
    })
}
export function getHomeCategories() {
    return MYRequest.get({
        url: "/home/categories"
    })
}
export function getHomeList(currentPage) {
    return MYRequest.get({
        url: "home/houselist",
        params: {
            page: currentPage
        }
    })
}