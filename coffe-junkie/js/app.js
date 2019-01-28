class UI {
    hidePreloader(){
            document.querySelector('.preloader').style.display= 'none';
    }
    showNav(){
          document.querySelector('.nav').classList.toggle('nav--show'); 
    }
    videoControls(){
        let btn = document.querySelector('.video__switch-btn');
        if(!btn.classList.contains('btnSLide')){
            btn.classList.add('btnSLide')
            document.querySelector('.video__item').pause();
        }
        else{
            btn.classList.remove('btnSLide');
            document.querySelector('.video__item').play();
        }
    }
    checkEmpty(name, lastname, email){
        let result;
        if(name===''||lastname===''||email===''){
            result = false;
        }
        else{
            result = true;
        }
        return result;
    }
    showFeedback(text, type){
        if (type ==='success') {
            let feedback = document.querySelector('.drink-form__feedback');
           feedback.classList.add('success');
           feedback.innerText = text;
           this.removeAlert('success');
        }
        else if (type==='error'){
           let feedback = document.querySelector('.drink-form__feedback');
           feedback.classList.add('error');
           feedback.innerText = text;
           this.removeAlert('error');
        }
    }
    removeAlert(type){
        setTimeout(function () {
            document.querySelector('.drink-form__feedback').classList.remove(type);
        },3000)
    }
    addCustomer(customer){
        const images = [1,2,3,4,5];
        let random = Math.floor(Math.random()*images.length);
        const div = document.createElement('div');
        div.classList.add('person');
        div.innerHTML = `
            <img src="img/cust-${random}.jpg" alt="person" class="person__thumbnail">
            <h4 class="person__name">${customer.name}</h4>
            <h4 class="person__lastname">${customer.lastname}</h4>
        `
        document.querySelector('.drink-card__list').appendChild(div);
    }
    clearFields(){
        document.querySelector('.input-name').value = '';
        document.querySelector('.input-lastname').value = '';
        document.querySelector('.input-email').value = '';
    }
    showModal(e){
        if(event.target.parentElement.classList.contains('work-item__icon')||event.target.parentElement.parentElement.classList.contains('work-item__icon')){
            let id = event.target.parentElement.dataset.id
            let imgSrc = event.target.parentElement.previousSibling.previousSibling.src;
            console.log(imgSrc);
            const modal = document.querySelector('.work-modal');
             const modalItem = document.querySelector('.work-modal__item');
             modal.classList.add('work-modal--show');
             modalItem.style.backgroundImage = `url(${imgSrc})`

        }
    }
    closeModal(){
        document.querySelector('.work-modal').classList.remove('work-modal--show');
    }
}

eventListeners();
function eventListeners() {
    const ui = new UI();
    window.addEventListener('load', function () {
       ui.hidePreloader();
    });
    document.querySelector('.navBtn').addEventListener('click', function (e) {
        ui.showNav();
    });
    document.querySelector('.video__switch').addEventListener('click',function () {
        ui.videoControls();
    })
    // submit form
    document.querySelector('.drink-form').addEventListener('submit',function (e) {
        e.preventDefault();
        const name = document.querySelector('.input-name').value;
        const lastName = document.querySelector('.input-lastname').value;
        const email = document.querySelector('.input-email').value;
        let value = ui.checkEmpty(name, lastName, email);
        if (value) {
            let customer = new Customer(name, lastName, email);
            ui.addCustomer(customer);
            ui.showFeedback('customer added to the list', 'success');
            ui.clearFields();
        }
        else{
            ui.showFeedback('some form values empty', 'error')
        }
    })
    const links = document.querySelectorAll('.work-item__icon');
    // console.log(links)
    links.forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            ui.showModal(e);
        })
    })
    // hide modal
    document.querySelector('.work-modal__close').addEventListener('click',function (e) {
        e.preventDefault();
        ui.closeModal();
    })
}

// function UI () {};
// UI.prototype.hidePreloader = function () {
//     document.querySelector('.preloader').style.display= 'none';
// }
// UI.prototype.showNav = function () {
//    document.querySelector('.nav').classList.toggle('nav--show');
// }

function Customer(name,lastname,email) {
    this.name = name;
    this.lastname = lastname;
    this.email = email;
}





