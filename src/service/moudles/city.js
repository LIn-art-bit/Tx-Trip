import MyRequest from "../request/index"
export default  function getCityAll() {
    return MyRequest.get({
        url: "/city/all"
    })
}
