
const checkbox1 = document.getElementById('checking')
checkbox1.addEventListener("click", (e)=>{
    // const pros = e.target.checked; 
    //     console.log(pros);
    if (checkbox1) {
        document.getElementById('side').style.width = "260px"
    }else{ 
        document.getElementById('side').style.width = "100px"
    }
})

