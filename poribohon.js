let totalPrice=0;
let Grandtotal=0;
let totalQuantity=0;
let totalSeat=40;

function HandleSeat(id){
    // console.log(id)
    if(totalQuantity>3){
        alert('Maximum booking Capacity 4');
        return;
    }
    document.getElementById(id).style.backgroundColor ='green';
    document.getElementById(id).style.color ='white';

    totalPrice+=550;
    totalQuantity++;
    Grandtotal+=550;
    totalSeat--;

    const Table= document.getElementById('Pricetable');
    const tableRow = document.createElement("tr")
    tableRow.classList.add('text-center')
    tableRow.innerHTML =`
                    <td class="text-lg">${id}</td>
                    <td class="text-lg">Economy</td>
                    <td class="text-lg">550</td>
    `
    Table.appendChild(tableRow);



    if(totalQuantity===4){
        document.getElementById('copupon').classList.remove('hidden')
    }

    document.getElementById('total').innerText=`BDT ${totalPrice} `
    document.getElementById('grandTotal').innerText=`BDT ${Grandtotal} `
    document.getElementById('totalSeat').innerText=`${totalSeat} Seat`
    document.getElementById('Seatquantity').innerText=`${totalQuantity}`

}
function handleCopupon(){
    const copupon =  document.getElementById('copuponField').value;
    if(copupon==='NEW15'){
      Grandtotal= Grandtotal-(Grandtotal*0.15)
      document.getElementById('copupon').classList.add('hidden')
    }
    else if(copupon==='Couple 20'){
        Grandtotal= Grandtotal-(Grandtotal*0.20)
      document.getElementById('copupon').classList.add('hidden')

    }
    document.getElementById('grandTotal').innerText=`BDT ${Grandtotal} `
}