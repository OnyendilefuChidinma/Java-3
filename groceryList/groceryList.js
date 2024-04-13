
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

let editElement;
let editFlag = false;
let editID = "";

// ===== ADDING EVENT LISTENERS =====
// submit form
form.addEventListener('submit', addItem);

// clear items
clearBtn.addEventListener('click', clearItems);

// load items
window.addEventListener('DOMContentLoaded', setupItems);

// ===== FUNCTIONS =====

function addItem(e){
    e.preventDefault();
   
    const value = grocery.value;
    const id = new Date().getTime().toString();

    // if (value !== '' && !editFlag){
    if (value && !editFlag){
        createListItem(id, value);
        
        // display alert
        displayAlert('item added to the list','success');

        // show container
        container.classList.add('show-container');

        // add to local storage
        addToLocalStorage(id,value);

        // set back to deafault
        setBackToDefault();

    // }else if(value !== '' && editFlag){
    }else if(value && editFlag){
        editElement.innerHTML = value;
        displayAlert('value changed', 'success');

        // edit local storage
        editLocalStorage(editID, value);
        setBackToDefault();
    }else{
        // alert.textContent = 'Empty value';
        // alert.classList.add('alert-danger');
        // converted to a function
        displayAlert("please enter a value", "danger");
    };


    // ====== OR ======

    // if (value !== '' && editFlag === false){
    //     Enter code
    //
    // }else if(value !== '' && editFlag === true){
    //     Enter code
    // }else{
    //     Enter code
    // };

}

    // display alert

    function displayAlert(text, action) {
        alert.textContent = text;
        alert.classList.add(`alert-${action}`);

        // remove alert
        setTimeout(function(){
            alert.textContent = "";
            alert.classList.remove(`alert-${action}`);
        },1000)
    }

    // clear items
    function clearItems(){
        const items = document.querySelectorAll('.grocery-item');

        if (items.length > 0) {
            items.forEach(function (item){
                list.removeChild(item);
            });       
        }
        container.classList.remove('show-container');
        displayAlert('items cleared', 'danger');
        setBackToDefault();
        localStorage.removeItem('list');
    }

    // delete function
    function deleteItem(e){
        const element = e.currentTarget.parentElement.parentElement;
        const id = element.dataset.id;
        list.removeChild(element);
        if (list.children.length === 0) {
            container.classList.remove('show-container');
        }
        displayAlert('item deleted', 'danger');
        setBackToDefault();

        // remove from local storage
        removeFromLocalStorage(id);
    }

    // edit function
    function editItem(e){
        const element = e.currentTarget.parentElement.parentElement;

        //set edit item
        editElement = e.currentTarget.parentElement.previousElementSibling;
        
        // set form value
        grocery.value = editElement.innerHTML;
        editFlag = true;
        editID = element.dataset.id;
        submitBtn.textContent = 'edit';
    }

    // set back to default
    function setBackToDefault() {
        grocery.value = "";
        editFlag = false;
        editID = "";
        submitBtn.textContent = "add item";
    }

    // LOCAL STORAGE
    function addToLocalStorage(id, value) {
        // const grocery = {id:id, value:value}; same as: const grocery = {id, value};
        const grocery = {id, value};
        let items = getLocalStorage();
        // let items = localStorage.getItem('list')?JSON.parse(localStorage.getItem('list')):[];

        items.push(grocery);
        localStorage.setItem('list',JSON.stringify(items));
       
    }

    function removeFromLocalStorage(id){
        let items = getLocalStorage();

        items = items.filter(function(item){
            if (item.id !== id){
                return item
            }
        })
        localStorage.setItem('list',JSON.stringify(items));
    }

    function editLocalStorage(id,value) {
        let items = getLocalStorage();
        items = items.map(function (item) {
            if (item.id === id) {
              item.value = value;
            }
            return item;
          });
          localStorage.setItem("list", JSON.stringify(items));
    }

    function getLocalStorage(){
        return localStorage.getItem('list')
        ? JSON.parse(localStorage.getItem('list'))
        : [];
    }


    // SETUP LOCALSTORAGE.REMOVEITEM('LIST');

// ****** setup items **********

function setupItems() {
    let items = getLocalStorage();
  
    if (items.length > 0) {
      items.forEach(function (item) {
        createListItem(item.id, item.value);
      });
      container.classList.add("show-container");
    }
  }
  
  function createListItem(id, value) {
    const element = document.createElement('article');
    // add class
    element.classList.add('grocery-item');
    // add id
    const attr = document.createAttribute('data-id');
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `<p class="title d-flex align-items-center mt-3 border">${value}</p>
            <div class="btn-container d-flex gap-4">
                <button type="button" class="edit-btn bg-transparent">
                    <i class="fa-regular fa-pen-to-square text-success"></i>
                </button>

                <button type="button" class="delete-btn bg-transparent">
                    <i class="fa-regular fa-trash-can text-danger"></i>
                </button>
            </div>`;

    // add event listener to the buttons
    const deleteBtn = element.querySelector('.delete-btn');
    const editBtn = element.querySelector('.edit-btn');
    deleteBtn.addEventListener('click', deleteItem);
    editBtn.addEventListener('click', editItem);

    // append child
    list.appendChild(element);
  }
  
    
