const form = document.querySelector("form");
const list = document.querySelector('#list');

 
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const itemInput = form.elements.product;
    const quantityInput = form.elements.qty;
    addElement(itemInput.value, quantityInput.value);
    itemInput.value = '';
    quantityInput.value = '';
});

const addElement = (product, qty,) => {
    const li = document.createElement('ul');
    li.innerText = `${qty} ${product}`;
    list.appendChild(li);
    const buttons = document.createElement('img');
    buttons.style.width = '20px'
    buttons.style.height = '20px'
    buttons.src = 'https://purepng.com/public/uploads/large/purepng.com-recycle-binrecycle-bincomputer-recyclebindustbinrecycleemptysystem-1421526586216srsod.png'
    buttons.addEventListener('click', function (e){
     e.target.parentElement.remove()
    })
    li.append(buttons)
};



  

   
