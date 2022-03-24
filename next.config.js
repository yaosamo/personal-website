
module.exports = {
    images: {
      domains: ['res.cloudinary.com'],
    },
  };

  rewrites() {
    return {
        beforeFiles: [
            // if the host is `app.acme.com`,
            // this rewrite will be applied
            {
                source: '/:path*',
                has: [
                    {
                        type: 'host',
                        value: 'chameleon.yaosamo.com',
                    },
                ],
                destination: 'yaosamo.com/things/chameleon',
            },
        ]
    }
  }