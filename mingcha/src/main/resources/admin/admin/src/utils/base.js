const base = {
    get() {
        return {
            url : "http://localhost:8080/mingcha/",
            name: "mingcha",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/mingcha/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "汉中茗茶微系统"
        } 
    }
}
export default base
