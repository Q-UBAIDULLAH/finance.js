/*var incomes=0
var expense=0

function addincome()
{
    var table=document.getElementById('table')
    var descriptioninput=document.getElementById('description')
    var amountinput=document.getElementById('amount')
    var trelement=document.createElement('tr')
    var descriptiontd=document.createElement('td')
descriptiontd.innerHTML=descriptioninput.value
var amounttd=document.createElement('td')
amounttd.innerHTML=amountinput.value
var typetd=document.createElement('td')
typetd.innerHTML="addincome"
trelement.append(descriptiontd)
trelement.append(amounttd)
trelement.append(typetd)
table.append(trelement)
incomes=incomes+amountinput.value
console.log("incomes"+incomes)
total()
// descriptioninput.value=""
// amountinput.value=""


}
function addexpense()
{
    var table=document.getElementById('table')
    var descriptioninput=document.getElementById('description')
    var amountinput=document.getElementById('amount')
    var trelement=document.createElement('tr')
    var descriptiontd=document.createElement('td')
descriptiontd.innerHTML=descriptioninput.value
var amounttd=document.createElement('td')
amounttd.innerHTML=amountinput.value
var typetd=document.createElement('td')
typetd.innerHTML="addexpense"
trelement.append(descriptiontd)
trelement.append(amounttd)
trelement.append(typetd)
table.append(trelement)
console.log("expense"+expense)
expense=expense+amountinput.value
console.log("epense"+expense)
total()
// descriptioninput.value=""
// amountinput.value=""


}
function total()
{
    var tdelement=document.getElementById('td')
    var total=incomes-expense
    tdelement.innerHTML=total
    
}*/

 var incomes=0
 var expense=0

function addincomes()
{
    var inputdescription=document.getElementById('input-description')
    var amountdescription=document.getElementById('Amount-desription')
    var table=document.getElementById('table')
    var trelement=document.createElement('tr')
    var tdelement=document.createElement('td')
    tdelement.innerHTML=inputdescription.value
  var tdelementamount=document.createElement('td')
  tdelementamount.innerHTML=amountdescription.value
  var tdelementtype=document.createElement('td')
  tdelementtype.innerHTML="income"
  trelement.append(tdelement)
  trelement.append(tdelementamount)
  trelement.append(tdelementtype)
  table.append(trelement)
  console.log(incomes)
//  incomes=incomes+amountdescription.value
incomes+=+amountdescription.value
 console.log(incomes)
 Total()

}
function addexpense()
{
    var inputdescription=document.getElementById('input-description')
    var amountdescription=document.getElementById('Amount-desription')
    var table=document.getElementById('table')
    var trelement=document.createElement('tr')
    var tdelement=document.createElement('td')
    tdelement.innerHTML=inputdescription.value
  var tdelementamount=document.createElement('td')
  tdelementamount.innerHTML=amountdescription.value
  var tdelementtype=document.createElement('td')
  tdelementtype.innerHTML="expense"
  trelement.append(tdelement)
  trelement.append(tdelementamount)
  trelement.append(tdelementtype)
  table.append(trelement)
 expense+=+amountdescription.value
 console.log(expense)
 Total()
}
 function Total()
 {
     var total=document.getElementById('total')
 var solve=incomes-expense
 total.innerHTML="total "+solve
}