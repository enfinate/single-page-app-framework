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

        window.addEventListener('load', function(event) {
            let changed = window.location.href
            history.pushState({}, newTitle, changed);
            let currentRoute=(changed).split(base.host+base.folder)[1]
            callPage("/"+currentRoute)
        });

        window.addEventListener('popstate', function(event) {
            let changed = window.location.href
            history.pushState({}, newTitle, changed);
            let currentRoute=(changed).split(base.host+base.folder)[1]
            callPage("/"+currentRoute)
        });

        function callPage(page){
            
            if( typeof routes[page] === "undefined" ){
                // alert("no page found")
                fetch(base.errorComponent)
                .then(response => response.text())
                .then(html => {
                    document.getElementById("index").innerHTML = html

                    document.querySelectorAll('a').forEach((e)=>{
                        e.addEventListener('click', ()=>{
                            if(e.hasAttribute('redirect')){
                                e.preventDefault;
                                fetchComp = changePage(e.getAttribute('redirect'))
                                callPage(fetchComp)
                            }
                        })
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
                    document.title = typeof routes[page].title === 'undefined' ? 'No title' : routes[page].title

                    document.querySelectorAll('a').forEach((e)=>{
                        e.addEventListener('click', ()=>{
                            if(e.hasAttribute('redirect')){
                                e.preventDefault;
                                fetchComp = changePage(e.getAttribute('redirect'))
                                callPage(fetchComp)
                            }
                        })
                    })
                })
                .catch(error => {
                    console.error('Error fetching the file:', error);
                });

            }
        }

    }
}

const asmm = new ASMM()