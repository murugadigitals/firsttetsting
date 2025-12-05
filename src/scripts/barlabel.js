function bodyLoad(){
  let lstOffice = "Nagari S.O";
  let bagNumber = "EBX4008901234";

  // alert("Working");
  document.getElementById("officeBagNumber").style.marginTop = "10px";
  document.getElementById("officeName").style.display="block";
  document.getElementById("officeName").textContent=`To : ${lstOffice}`;
  document.getElementById("officeBagNumber").style.width = "200px";
  document.getElementById("bagNumber").textContent = bagNumber;
  document.getElementById("count").textContent = "Count : 50 C";
  document.getElementById("from").textContent = "From    : Tirupati TMO | SET 2B";
  document.getElementById("mainContainer").style.display="block";
//   document.querySelector("body").style.position="relative";
  document.getElementById("count").style.position="absolute"
  document.getElementById("count").style.top="85px"
  document.getElementById("count").style.right="480px"

  // document.write(`Bag Number : ${bagNumber}`)
  // document.write(`To : ${lstOffice}`+"<br>")
  let datetimelocal = new Date();
  // alert(datetimelocal.toLocaleTimeString());
    document.getElementById(
      "datetime"
    ).innerHTML = `Dated : ${datetimelocal.getDate()}-${datetimelocal.getMonth()+1}/${datetimelocal.getFullYear()} ${datetimelocal.toLocaleTimeString()}`;
}
