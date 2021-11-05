const form = document.getElementById("javaValidate")
const name2 = document.getElementById("name2")
const phone = document.getElementById("phone")
const errorMessage = document.getElementById("error")
const phoneNumber = [0,1,2,3,4,5,6,7,8,9]

form.addEventListener("submit", (e) => {
    let messages = []

    if(name2.value === "" || name2.value == null ){
        messages.push("Please input a name")
    }
    
    if(phone.value.length < 10 || phone.value.length > 15){
        messages.push("Please input a real phone number")
    }

    if (messages.length > 0){
        errorMessage.innerText = messages.join(", ")
        e.preventDefault()
    }
    
})

phone.addEventListener("keypress", (e) =>{

    if(!(phoneNumber.includes(Number(e.key)) || e.key ==="-"))
        e.preventDefault()
})