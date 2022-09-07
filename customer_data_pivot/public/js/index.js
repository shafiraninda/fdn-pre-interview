function change(pilih){
    const pilihan=pilih.id
    const tabel = document.getElementsByClassName(pilihan)
    tabel.classList.toggle('invisible')
    let opposite
    if(pilihan == "default"){
        opposite="pivot"
    }else if(pilihan == "pivot"){
        opposite="default"
    }
    const show = document.getElementsByClassName(opposite)
    show.classList.toggle('visible')
    
    return opposite
}