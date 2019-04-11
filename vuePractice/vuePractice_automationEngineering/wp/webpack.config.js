module.exports = {
    //入口文件
    entry:'./src/main.js',
    //出口文件
    //output:'./dist/bundle.js'
    output:{
        //public:'./dist/bundle.js',
        filename:'./bundle.js'
    },
    module:{
        rules:[//規則
            {test:/\.css$/,use:['style-loader','css-loader']}, //loader的配置
            {
                test:/\.js$/,
                exclude:/node_modules/,//排除
                use:[
                    {
                        loader:'babel-loader',
                        options:{
                            presets:['env']
                        }
                    }
                ]
            }
        ]
    },
    devtool: "eval-cheap-module-source-map", //開啟原代碼調適模式
    devServer:{ //配置webpack瀏覽器
        port:8088,
        open:true
    }
}