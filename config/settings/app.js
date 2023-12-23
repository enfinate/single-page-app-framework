class ASMM{
    constructor(){
        var newTitle = '';
        let script=[],link=[], fetchComp="";

        for(let i=0; i<(base.css).length; i++){
            link[i] = document.createElement('link')
            link[i].href = base.css[i].cdn
            link[i].type = "text/css"
            link[i].rel = "stylesheet"
            document.head.appendChild(link[i])
        }

        for(let i=0; i<(base.js).length; i++){
            script[i] = document.createElement('script')
            script[i].src = base.js[i].cdn
            script[i].type = "text/javascript"
            document.getElementById("script-container").appendChild(script[i])
        }

        function changePage(newPage){
            let changed = base.protocol+"//"+base.host+base.folder+newPage
            history.pushState({}, newTitle, changed);
            let currentRoute=(changed).split(base.host+base.folder)[1]
            return "/"+currentRoute
        }

        window.addEventListener('load', () =>  reuse() );
        window.addEventListener('popstate', () => reuse() );

        function reuse(){
            let changed = window.location.href
            history.pushState({}, newTitle, changed);
            let currentRoute=(changed).split(base.host+base.folder)[1]
            callPage("/"+currentRoute)
        }
        function callPage(page){
            document.querySelectorAll('a').forEach((e) => {
                e.removeEventListener('click', clickHandler);
            })

            document.getElementById("index").innerHTML=preloaderContent
            if( typeof routes[page] === "undefined" ){
                fetch(base.errorComponent)
                .then(response => response.text())
                .then(html => {
                    document.title = "Error 404"
                    document.getElementById("index").innerHTML = html
                    onPageLoad()
                    document.querySelectorAll('a').forEach((e)=>{

                        e.addEventListener('click', clickHandler)

                        e.style.pointerEvents="all"
                        
                        if(e.hasAttribute('redirect')){
                            if(e.getAttribute('redirect')==""){
                                e.href=window.location.protocol+'//'+window.location.host+base.folder
                            }else{
                                e.href=e.getAttribute('redirect')
                            }
                        }
                    })
                })
                .catch(error => {
                    console.error('Error fetching the file:', error);
                });
            }else{
                fetch('assets/view/'+routes[page].component+'.html')
                .then(response => response.text())
                .then(html => {
                    document.getElementById("index").innerHTML = html
                    onPageLoad()
                    document.title = typeof routes[page].title === 'undefined' ? 'No title' : routes[page].title
                    document.querySelectorAll('a').forEach((e)=>{

                        e.addEventListener('click', clickHandler)

                        e.style.pointerEvents="all"
                        
                        if(e.hasAttribute('redirect')){
                            if(e.getAttribute('redirect')==""){
                                e.href=window.location.protocol+'//'+window.location.host+base.folder
                            }else{
                                e.href=e.getAttribute('redirect')
                            }
                        }
                    })
                    setTimeout(()=>{
                        document.querySelectorAll('a').forEach((e)=>{

                            e.addEventListener('click', clickHandler)

                            e.style.pointerEvents="all"
                            
                            if(e.hasAttribute('redirect')){
                                if(e.getAttribute('redirect')==""){
                                    e.href=window.location.protocol+'//'+window.location.host+base.folder
                                }else{
                                    e.href=e.getAttribute('redirect')
                                }
                            }
                        })
                    },2500)
                })
                .catch(error => { 
                    console.error('Error fetching the file:', error);
                });
            }
        }
        function clickHandler(event) {
            event.target.style.pointerEvents="none"
            if (event.target.hasAttribute('redirect')) {
                event.target.href=event.target.getAttribute('redirect');
                event.preventDefault();
                fetchComp = changePage(event.target.getAttribute('redirect'));
                callPage(fetchComp);
                // event.target.style.pointerEvents="all"
            }
        }
    }
}

const asmm = new ASMM()