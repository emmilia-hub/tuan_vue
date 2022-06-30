import Mock from "mockjs";
export default {
    getStatisticalData: () => {
        let content = Mock.mock({
            "data|10": [{
                "id": "@natural",
                "tag": "attack",
                "type": "@string",
                "createTime": "@datetime('yyyy-MM-dd HH:mm:ss')",
                "simg": {
                    "id": "@natural",
                    "url": "@Image('100x40','#c33', '#ffffff','小北鼻')",
                    "imgInfo": {
                        "@string": '@float(0,100)',
                    }
                },
                "rimg": {
                    "id": "@natural",
                    "url": "http://172.17.23.203:9001/profile/pics/b94238f13e60471a901a878c0067bbe4.JPG",
                    "imgInfo|5": {
                        "jay": '@float(0,100)',
                        "bul": '@float(0,100)',
                        "magi": '@float(0,100)',
                        "hel": '@float(0,100)',
                        "eason": '@float(0,100)'
                    }
                }
            }]
        })
        return {
            code: 20000,
            content
        }
    }
}