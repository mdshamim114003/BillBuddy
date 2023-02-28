const bill = {
  title : '',
  description : '',
  participants : ['']
}
export const createBill = () => {

  const billTitle = document.querySelector('#bill-title')
  const billDescription = document.querySelector('#bill-description')
  const billParticipant = document.querySelector('#bill-participant')
  const addParticipant = document.querySelector('#add-participant')
  const participantDiv = document.querySelector('#participant')

  billTitle.addEventListener('input', e => {
    // console.log(e.target.value)
    bill.title = e.target.value
  })
  billDescription.addEventListener('input', e => {
    // console.log(e.target.value)
    bill.description = e.target.value
  })
  billParticipant.addEventListener('input', e => {
    // console.log(e.target.value)
    bill.participants[0] = e.target.value
  })
  addParticipant.addEventListener('click', e => {
    bill.participants.push('')
    console.log(bill)
  })  
}
const renderParticipantInput = () => {
  const allParticipants = bill.participants.slice(1)
  allParticipants.forEach(item => {
    // <div id="participant">
    //           <div class="input-field col s10">
    //             <input id="bill-participant" type="text" class="validate">
    //             <label for="bill-participant">Participant Name</label>
    //           </div>
              
    //           <div class="input-field col s2">
    //             <a id="add-participant" class="waves-effect waves-light btn-floating"><i class="material-icons">add</i></a>
    //             <a class="waves-effect waves-light btn-floating red darken-1"><i class="material-icons">delete</i></a>
    //           </div>
    //         </div>
  })
}