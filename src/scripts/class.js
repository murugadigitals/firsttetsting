class Employees{
    constructor(name,id,unit,mobile,address){
        this.name=name;
        this.id=id;
        this.unit=unit;
        this.mobile=mobile;
        this.address=address;

    }
}
let ms=new Employees('Sri Hari Muppori','10163797','HRO Tirupati','7396128940','proddatur')
let idp=new Employees('Sasi Rekha Idupulapati','10164648','HRO Tirupati','7382003824','Guntur')

document.getElementById("ms").innerHTML=`Name : ${ms.mobile}      Mobile:  ${ms.name}`
document.getElementById("idp").innerHTML=`Name : ${idp.mobile}      Mobile:  ${idp.name}`
// document.getElementById("idp").innerHTML=idp.mobile

console.log(ms.mobile)
console.log(idp.mobile)