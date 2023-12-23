const base = {
    "folder": "/simple-js/",
    "host": window.location.hostname,
    "protocol": window.location.protocol,
    "errorComponent":"config/error/404.html",
    "favicon":"",
    "js":[
        {
            "cdn":"https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js",
            "description":"Bootstrap v5 popper CDN",
        },
        {
            "cdn":"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js",
            "description":"Bootstrap v5 script CDN",
        },
        /* Add additional script below */
        // 


    ],
    "css":[
        {
            "cdn":"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
            "description":"Bootstrap v5 style CDN",
        },
        {
            "cdn":"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css",
            "description":"This is a Fontawesome CDN",
        },
        {
            "cdn":"./assets/css/global.css",
            "description":"This is a global style page",
        },
        /* Add additional style below */


    ]
};