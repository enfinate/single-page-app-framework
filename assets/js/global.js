class Global{
    constructor(){
        
        let menuToggleState=false
        
        //Menu toggle enable
        document.getElementById("mobile-menu-toggle").addEventListener("click", ()=>{
            thisNull()
        })

        document.querySelectorAll(".menu-mb-toggle").forEach((e)=>{
            e.onclick = () => {
                thisNull()
            }
        })

        function thisNull(){
            let bravs = document.querySelectorAll(".mobile-bars")
            if(!menuToggleState){
                bravs[1].style.display="none"
                bravs[0].style.rotate="45deg"
                bravs[2].style.rotate="-45deg"
                document.getElementById("mobile-menu").style.right="0"
                menuToggleState=true
            }else{
                bravs[1].style.display="block"
                bravs[0].style.rotate="0deg"
                bravs[2].style.rotate="0deg"
                document.getElementById("mobile-menu").style.right="-300px"
                menuToggleState=false
            }
        }

    }

}

 
function send_message(btn){

    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value

    if(name!=""&&email!=""&&message!=""){

        if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){

            btn.innerHTML="..Sending"

            document.getElementById("name").value=""
            document.getElementById("email").value=""
            document.getElementById("subject").value=""
            document.getElementById("message").value=""

            const dataToSend = {
                name: name,
                email: email,
                subject: subject,
                message: message
            };
              
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToSend)
            };
              
            fetch('./assets/api/test.php', requestOptions)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok.');
                    }
                    return response.json();
                })
                .then(data => {
                    btn.innerHTML="Send"
                    if(data.status=='success'){
                        console.log(data)

                        document.getElementById("status-update").innerHTML = `
                            <div class="alert alert-success text-center w-100">Your message has been recieved</div>
                        `
                        setTimeout(()=>{
                            document.getElementById("status-update").innerHTML = ``
                        },5000)

                    }else{
                        document.getElementById("status-update").innerHTML = `
                            <div class="alert alert-danger text-center w-100">Something went wrong</div>
                        `
                        setTimeout(()=>{
                            document.getElementById("status-update").innerHTML = ``
                        },5000)
                    }
                })
                .catch(error => {
                  console.error('Error:', error);
                });
        }else{

            document.getElementById("status-update").innerHTML = `
                <div class="alert alert-danger text-center w-100">Email should be in a proper format</div>
            `
            setTimeout(()=>{
                document.getElementById("status-update").innerHTML = ``
            },5000)

        }

    }else{
        document.getElementById("status-update").innerHTML = `
            <div class="alert alert-danger text-center w-100">Cannot leave mandatory field empty</div>
        `
        setTimeout(()=>{
            document.getElementById("status-update").innerHTML = ``
        },3500)
    }

}




function changePort(src){
    document.getElementById("bgport").src=src
}

window.onload = () => {
    document.getElementById("init-pre-loader").style.animation = "outToDis 1s forwards"

    setTimeout(() => {new Global()} , 500)
}  

















































// let menuToggleState=false

// window.addEventListener("load", ()=>{

//     // Initializing animate on scroll

//     // Waiting for framework to load components asyncronously
//     setTimeout(()=>{

//         //Menu toggle enable
//         document.getElementById("mobile-menu-toggle").addEventListener("click", ()=>{
//             let bravs = document.querySelectorAll(".mobile-bars")
//             if(!menuToggleState){
//                 bravs[1].style.display="none"
//                 bravs[0].style.rotate="45deg"
//                 bravs[2].style.rotate="-45deg"
//                 document.getElementById("mobile-menu").style.right="0"
//                 menuToggleState=true
//             }else{
//                 bravs[1].style.display="block"
//                 bravs[0].style.rotate="0deg"
//                 bravs[2].style.rotate="0deg"
//                 document.getElementById("mobile-menu").style.right="-300px"
//                 menuToggleState=false
//             }

//         })

//     }, 500)

// })
