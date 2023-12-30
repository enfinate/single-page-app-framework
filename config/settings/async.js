class AsyncHandling{
    constructor(){
        this.succ

        document.querySelectorAll("form").forEach((e)=>{

            e.addEventListener('submit', (f)=>{
                f.preventDefault()
                let form = {
                    "id":e.getAttribute("id"),
                    "method": "POST",
                    "http":e.getAttribute("action")!=null&&e.getAttribute("action")!=""?e.getAttribute("action"):"",
                    "data": {}
                };

                for (let i = 0; i < e.elements.length; i++) {
                    let element = e.elements[i].name != null && e.elements[i].name != "" ? e.elements[i].name : "value"+(i+1);
                    if (e.elements[i].type !== 'submit') {
                        form.data[element] = e.elements[i].value;
                    }
                }
                
                const dataToSend = form.data;
                
                const requestOptions = {
                    method: form.method,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(dataToSend)
                };
                
                fetch(form.http, requestOptions)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok.');
                        }
                        return response.json();
                    })
                    .then(data => {
                        this.trigger(data)
                        this.succ=data
                    })
                    .catch(error => {
                    console.error('Error:', error);
                    });

            })
        })

    }

    trigger(data=this.succ, trig=()=>{}){
        trig()
    }

}



