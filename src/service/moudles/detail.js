import MYRequest from "../request/index"
export function getDetail(houseId) {
    return MYRequest.get({
        url: "/detail/infos",
        params: {
            houseId
        }
    })
}