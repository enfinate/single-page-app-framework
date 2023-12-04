const base = {
    "folder": "/athershahid/",
    "host": window.location.hostname,
    "protocol": window.location.protocol,
    "errorComponent":"config/error/404.html",
    // "url": this.folder+this.host,
    "js":[
        {
            "cdn":"https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js",
            "description":"Bootstrap v5 popper CDN",
        },
        {
            "cdn":"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js",
            "description":"Bootstrap v5 script CDN",
        },
        // {
        //     "src":"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
        //     "description":"Bootstrap v5 bundle CDN",
        // },
        // Add additional script CDN here
    ],
    "css":[
        {
            "cdn":"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
            "description":"Bootstrap v5 style CDN",
        },
        {
            "cdn":"./assets/css/global.css",
            "description":"This is a global style page",
        },
        // Add additional style CDN here
    ]
};