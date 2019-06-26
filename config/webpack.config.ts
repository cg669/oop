import * as path from 'path';
import { 
    Configuration
} from 'webpack';


class WebpackConfig implements Configuration {
    constructor(mode: Configuration['mode']){
        this.mode = mode;
    }
    mode: Configuration['mode'] = 'production';
    entry = path.resolve(__dirname, "../app/src/index");
    output = {
        path: path.resolve(__dirname,'../app/dist'),
        filename: 'bundle.js'
    };
    resolve = {
        extensions: ['.ts', '.tsx', '.js', '.json']
    };
    module = {
        rules: [
            { test: /\.css$/, use: 'css-loader' },
            { 
                test: /\.ts?$/,
                exclude: /node_modules/,
                use:[
                    {loader: 'babel-loader',},
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                            configFile: path.resolve(__dirname,'./tsconfig.json')
                        }
                    },
                ]
            }
        ]
    }
};

export default WebpackConfig;