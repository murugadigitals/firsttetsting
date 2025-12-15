function addClick() {
  var osaname = document.getElementById("txtOSA").value;
  // osaname.focus()
    let osa = [];
  // alert(osaname)
  if (osaname === "") {
    alert("please enter a name");
  } else {
    alert(`${osaname} is added Successfully`);
    osa.push(osaname);
  }
  
  osa.forEach(function (value) {
    document.getElementById("arrayItems").innerHTML += `${value} <br>`;
  });
  
  document.getElementById("txtOSA").value = '';
  document.getElementById("txtOSA").focus();
  console.log(osa);

}

function disabdleText() {
  document.getElementById("txtOSA").value=''
}