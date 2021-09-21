// const webpack = require('webpack');
// const withImages = require('next-images')

// module.exports = {
//     ...withImages(),
//     future: {
//         webpack5: true,
//     },

// }
const webpack = require('webpack')
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const path = require('path');
const isDevelopment = process.env.NODE_ENV === 'development'
const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
    webpack: (config, { dev }) => {
        config.plugins.push(
            new webpack.EnvironmentPlugin(process.env),
        );
        
        config.resolve.alias['components'] = path.join(__dirname, 'components')
        config.resolve.alias['static'] = path.join(__dirname, 'static')

        return config;
    },
};

module.exports = withPlugins([
    [optimizedImages, {
        handleImages: ['jpeg', 'png'],
    }],
    
    ],
    nextConfig
);