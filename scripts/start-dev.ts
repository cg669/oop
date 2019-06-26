import * as Webpack from 'webpack';
import WebpackConfig from '../config/webpack.config';

const devConfig = new WebpackConfig('development');
Webpack(devConfig).watch({
    aggregateTimeout: 300
},err=> !err ? console.log('编译成功\n...') : console.log(err))