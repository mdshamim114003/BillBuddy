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
    const result = bill.participants.some(participant => participant === '')
    if(result) return
    bill.participants.push(bill.participants[0])
    bill.participants[0] = ''
    billParticipant.value = ''
    console.log(bill)
    renderParticipantInput()
  })  
}
const renderParticipantInput = () => {
  const participantsElement = document.querySelectorAll('.participant')
  participantsElement.forEach(element => {
    element.remove()
  })
  const participantDiv = document.querySelector('#participant')
  const allParticipants = bill.participants.slice(1)
  allParticipants.forEach((item, index) => {
    const participant = document.createElement('div')
    participant.classList.add('participant')

    const participantNameDiv = document.createElement('div')
    participantNameDiv.classList.add('input-field' , 'col' , 's10')
    const nameInput = document.createElement('input')
    participantNameDiv.append(nameInput)
    const nameLabel = document.createElement('label')
    participantNameDiv.append(nameLabel)
    nameInput.type = 'text'
    nameInput.id = `bill-participant-${index}`
    nameInput.classList.add('validate')
    nameInput.value = item
    nameInput.focus()
    nameLabel.htmlFor = `bill-participant-${index}`
    nameLabel.textContent = 'Participant Name'
    participant.append(participantNameDiv)


    const participantDeleteButtonWrap = document.createElement('div')
    participantDeleteButtonWrap.classList.add('input-field', 'col', 's2')
    const participantDeleteButton = document.createElement('button')
    participantDeleteButton.addEventListener('click', e => {
      e.preventDefault()
      bill.participants.splice(index, 1)
      renderParticipantInput()
    })
    participantDeleteButton.id = 'add-participant'
    participantDeleteButton.classList.add('waves-effect', 'waves-light' , 'btn-floating', 'red', 'darken-1')
    const participantDeleteIcon = document.createElement('i')
    participantDeleteIcon.classList.add('material-icons')
    participantDeleteIcon.textContent = 'delete'
    participantDeleteButton.append(participantDeleteIcon)
    participantDeleteButtonWrap.append(participantDeleteButton)
    participant.append(participantDeleteButtonWrap)

    
    // participantDiv.appendChild(participantNameDiv)
    console.log(' participant name' , participant)
    participantDiv.prepend(participant)


    // <div id="participant">
    //   <div class="input-field col s10">
    //     <input id="bill-participant" type="text" class="validate">
    //     <label for="bill-participant">Participant Name</label>
    //   </div>
    
    //   <div class="input-field col s2">
    //     <a id="add-participant" class="waves-effect waves-light btn-floating">
    //        <i class="material-icons">add</i></a>
    //     <a class="waves-effect waves-light btn-floating red darken-1">
    //        <i class="material-icons">delete</i></a>
    //   </div>
    // </div>
  })
}


