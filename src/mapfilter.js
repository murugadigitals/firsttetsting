let list=[100,200,300,'Srihari','Sasi','madhavi'];

list.forEach(function(value){
    console.log(value)
    /* document.writeln(`<ul type='disc'>
                        <li>${value}</li>
                    </ul>`); */
})
// let uname=prompt('enter name to be added :');
function addItem(addedItem){
    var addedItem=document.getElementById('txtItem').value
    // alert(addedItem)
    let added=list.push(addedItem)
    // alert(added)
    alert(`${list[added-1]}  is added Successfully..`)
    document.getElementById('txtItem').value='';
    document.getElementById('txtItem').focus()
}


console.log(list)