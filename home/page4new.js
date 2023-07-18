const button = document.getElementById('switch-profile');
const button2 = document.getElementById('switch-close');
const logout = document.getElementById('show-logout');

button.addEventListener('click', function() {
  logout.style.display="Block";
  button.style.display="none";
  button2.style.display="Block";
});

button2.addEventListener('click', function() {
	logout.style.display="none";
	button.style.display="block";
	button2.style.display="none";
  });
  
/////////////////////
function addProduct() {
    var productList = document.getElementById("product-list");
    var productItem = document.createElement("div");
    productItem.classList.add("product-item");
    productItem.innerHTML = `
    <div class="product-item">
    <div class="form-group">
        <label style="color:grey;">Product</label>
        <div class="flex-column">
        <select class="product-name" name="product[]">
            <option value="Product1">3das</option>
            <option value="Product2">lobya</option>
            <option value="Product3">chama</option>
        </select>   
        </div>
    </div>
    <div class="form-group">
        <label style="color:grey;">Quantity</label>
        <input style="border: none;" type="number" class="quantity" name="quantity[]" value="1" min="1">
    </div>
    <div class="remove-product delete" onclick="removeProduct(this)">Remove<div  class="border-bottom-delete"></div></div>
    </div>
    `;
    productList.appendChild(productItem);
  }

  function removeProduct(button) {
    var productItem = button.parentNode.parentNode;
    productItem.parentNode.removeChild(productItem);
  }