// JavaScript Document
createProduct();
createAdmin();
function currency(num) { //tien te
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' VND';
}
function showMenu(){
	var menuList = ['LTP','MTP','GSHOCK','VINTAGE'];
	var ul = document.getElementById('navmenu');
	var li='<li><a href="watchvn.html">TRANG CHỦ</a></li>';
	for(var i=0;i<menuList.length;i++){
		li += '<li><a href="watchvn.html?'+menuList[i].toLowerCase()+'&0">'+menuList[i]+'</a></li>';
		ul.innerHTML= li;
	}
}


function showMenu2() { // cart
	var menuList = ['LTP','MTP','GSHOCK','VINTAGE'];
	var ul = document.getElementById('navmenu');
	var li='<li><a href="watchvn.html">TRANG CHỦ</a></li>';
	for(var i=0;i<menuList.length;i++){
		li += '<li><a href="watchvn.html?'+menuList[i].toLowerCase()+'&0">'+menuList[i]+'</a></li>';
		ul.innerHTML= li;
	}
}

function showMenuMobile(){
	var btn = document.getElementById('btnmenu');
	if(btn.className==""){
		document.getElementById('btnmenu').classList.add('show');//them class show
		document.getElementById('btnmenu').innerHTML = '&times;' ;//in ra noi dung text va nhung the trong div 
		document.getElementById('navmenu').classList.add('active') ;// them class active

	}else {
		document.getElementById('btnmenu').classList.remove('show');
		document.getElementById('btnmenu').innerHTML = '&#9776;' ;
		document.getElementById('navmenu').classList.remove('active') ;
	}

}



	
/*PRODUCT*/
function createProduct(){
	if(localStorage.getItem('product')===null){ //lay du lieu tu localstorage
		var productArray = [
			{productId:10001, brand:'ltp',    img:'img/product/LTP1.png', name:'CASIO LTP 1274G-7A', price:1200000},
            {productId:20001, brand:'mtp',    img:'img/product/mtp1.png', name:'CASIO MTP 1374D-1A2V', price:1550000},			
            {productId:10002, brand:'ltp',    img:'img/product/LTP2.png',name:'CASIO LTP V300D-1A', price:1200000},
			{productId:10003, brand:'ltp',    img:'img/product/LTP3.png',name:'CASIO LTP-1274D-1AVDF', price:850000},
            {productId:30001, brand:'gshock',    img:'img/product/gshocknam1.png',name:'CASIO DW-5600BBN-1', price:2200000},	
			{productId:40001, brand:'vintage',    img:'img/product/vintage1.png', name:'CASIO A158WA-1', price:600000},		
            {productId:30008,brand:'gshock',img:'img/product/gshocknu1.png',name:'CASIO BA-110-1A', price:2800000},
            {productId:20002, brand:'mtp',    img:'img/product/mtp2.png',name:'CASIO MTP 1374D-1AV', price:1550000},			
			{productId:10004, brand:'ltp',    img:'img/product/LTP4.png',name:'CASIO LTP-1274D-7ADF', price:850000},
			{productId:40002, brand:'vintage',    img:'img/product/vintage2.png', name:'CASIO A159WGED-1', price:1250000},
			{productId:40003, brand:'vintage',    img:'img/product/vintage3.jpeg', name:'CASIO A168WEGB-1B', price:1500000},
			{productId:10005, brand:'ltp',    img:'img/product/LTP5.png',name:'CASIO LTP-E157-9A', price:2200000},
            {productId:30002, brand:'gshock',    img:'img/product/gshocknam2.png',name:'CASIO GA-2000-1A2', price:3300000},			
            {productId:30009,brand:'gshock',img:'img/product/gshocknu2.png',name:'CASIO BA-110-7A1', price:2800000},
            {productId:30010,brand:'gshock',img:'img/product/gshocknu3.png',name:'CASIO BA-110RG-4A', price:3000000},
            {productId:20003, brand:'mtp',    img:'img/product/mtp3.png',name:'CASIO MTP 1374D-2A2V', price:1550000},
			{productId:40004, brand:'vintage',    img:'img/product/vintage4.png', name:'CASIO A168WEM-2', price:1200000},
			{productId:10006, brand:'ltp',    img:'img/product/LTP6.png',name:'CASIO LTP-E157MGB-1B', price:2200000},
			{productId:10007, brand:'ltp',    img:'img/product/LTP7.png',name:'CASIO LTP-V005L-1B', price:600000},
            {productId:30003, brand:'gshock',    img:'img/product/gshocknam3.png',name:'CASIO GA-2000-1A9', price:3300000},			
			{productId:10008, brand:'ltp',    img:'img/product/LTP8.png',name:'CASIO LTP-V005L-7B', price:600000},
			{productId:10009, brand:'ltp',    img:'img/product/LTP9.png',name:'CASIO LTP-V007L-1B', price:650000},
            {productId:20004, brand:'mtp',    img:'img/product/mtp4.png',name:'CASIO MTP 1374D-2AV', price:1550000},
            {productId:20005, brand:'mtp',    img:'img/product/mtp5.png',name:'CASIO MTP 1374D-5AV', price:1550000},
			{productId:40005, brand:'vintage',    img:'img/product/vintage5.png', name:'CASIO A168WG-9VT', price:1200000},
            {productId:10010, brand:'ltp',    img:'img/product/LTP10.png',name:'CASIO LTP-V007L-7B1', price:650000},
			{productId:10011, brand:'ltp',    img:'img/product/LTP11.png',name:'CASIO LTP-V300D-7A', price:1200000},
            {productId:30004, brand:'gshock',    img:'img/product/gshocknam4.png',name:'CASIO GBA-800-1A', price:2800000},			
			{productId:30011,brand:'gshock',img:'img/product/gshocknu4.png',name:'CASIO BA-110RG-7A', price:3000000},
			{productId:40006, brand:'vintage',    img:'img/product/vintage6.png', name:'CASIO A168WGG-1A', price:1250000},
            {productId:30012,brand:'gshock',img:'img/product/gshocknu5.png',name:'CASIO BGD-560-1', price:2000000},
			{productId:20006, brand:'mtp',    img:'img/product/mtp6.png',name:'CASIO MTP 1374D-7AV', price:1550000},
            {productId:20007, brand:'mtp',    img:'img/product/mtp7.png',name:'CASIO MTP 1374L-1A2V', price:1550000},
			{productId:40007, brand:'vintage',    img:'img/product/vintage7.png', name:'CASIO A168WGG-1B', price:1300000},
			{productId:10012, brand:'ltp',    img:'img/product/LTP12.png',name:'CASIO LTP-V300L-1A', price:1200000},
            {productId:30005, brand:'gshock',    img:'img/product/gshocknam5.png',name:'CASIO GBA-800-2A', price:2800000},			
            {productId:30013,brand:'gshock',img:'img/product/gshocknu6.png',name:'CASIO BGD-560-2', price:2800000},
            {productId:20008, brand:'mtp',    img:'img/product/mtp8.png',name:'CASIO MTP 1374L-1AV', price:1550000},
            {productId:20009, brand:'mtp',    img:'img/product/mtp9.png',name:'CASIO MTP 1374L-2AV', price:1550000},
			{productId:40008, brand:'vintage',    img:'img/product/vintage8.png', name:'CASIO A500WA-1', price:900000},
            {productId:30006, brand:'gshock',    img:'img/product/gshocknam6.png',name:'CASIO GBA-800UC-2A', price:2800000},
            {productId:30007, brand:'gshock',    img:'img/product/gshocknam7.png',name:'CASIO GX-56BB-1', price:3300000},


		];
		localStorage.setItem('product',JSON.stringify(productArray));
		// gan bien product trong localstorage(key, value)
		// JSON la tieu chuan mo de trao doi du lieu tren web
	}
}
function showProduct(){
	var url = document.location.href;//lay dia chi trang web dang truy cap
	var temp = url.split("?");//tach sau dau "?"
	var s='';
	var productArray = JSON.parse(localStorage.getItem('product'));//lay gia tri trong 'product'
	if(temp[1]=='' || temp[1]==undefined || temp[1].search('all')==0){// neu sau"?" ko xac dinh hoac = 0
		if(temp[1]=='' || temp[1]==undefined){// neu sau"?" ko xac dinh duoc
			temp = 'all&0';//trang chu = all&0
		}
		else{
			temp = temp[1];//neu xac dinh duoc thi temp = sau "?"
		}
		var temp2 = temp.split("&");// all&0 --> 0
 		var vitri = temp2[1];// 0
		var sotrang=0,dem=0;
		for(var i=vitri;i<productArray.length;i++){
			s+='<div class="card">'+
						'<img src="'+productArray[i].img+'">'+
						'<p>' + productArray[i].name + '</p>'+
						'<p> GIÁ TIỀN: ' + currency(productArray[i].price) +'</p>' +
						'<button class="btn" onClick="showProductInfo('+productArray[i].productId+')">Chi tiết</button></div>';
			dem++;
			if(dem==12)
				break;
		}
		sotrang=Math.ceil(productArray.length/12);//lam tron so
		var lienket='';
		for(var i = 1;i<=sotrang;i++){
			vitri=(i-1)*12;
			var a ='<a href="watchvn.html?all&'+vitri+'">'+i+'</a>';//vi tri bat dau sp
			lienket+='<div class="pageNumber">'+a+'</div>';
		}
		document.getElementById('page').innerHTML=lienket;//innerhtml = viet html động trên trang web nhu form dangki, nhanxet, lienket,...
	}
	else{
		temp = temp[1];//temp = gia tri sau "?" -->ltp&0
		var temp2 = temp.split("&"); // 0
		var brand = temp2[0]; // ltp
		var vitri = temp2[1]; // 0
		var sotrang=0,dem=0;
		var arrtempt=[]; // khoi tao mang tam
		for(var i=0; i<productArray.length;i++){
			if(brand==productArray[i].brand)// neu brand trung brand localstorage
				arrtempt.push(productArray[i]); // day san pham trong mang len
		}
		for(var i=vitri;i<arrtempt.length;i++){
			s+='<div class="card">'+
						'<img src="'+arrtempt[i].img+'">'+
						'<p>' + arrtempt[i].name + '</p>'+
						'<p> Price: ' + currency(arrtempt[i].price) +'</p>' +
						'<button class="btn" onClick="showProductInfo('+arrtempt[i].productId+')">Chi tiết</button></div>';
			dem++;
			if(dem==8)
				break;
		}
		sotrang=Math.ceil(arrtempt.length/8);
		var lienket='';
		for(var i = 1;i<=sotrang;i++){
			vitri=(i-1)*8;
			var a ='<a href="watchvn.html?'+brand+'&'+vitri+'">'+i+'</a>';
			lienket+='<div class="pageNumber">'+a+'</div>';
		}
		document.getElementById('page').innerHTML=lienket;
	}
	document.getElementById('product').innerHTML=s;
}


function showProductInfo(productid){//khoi tao tham so productid
	document.getElementById('productInfo').style.display = 'block';//block: hien thi , none: an di
	var productArray = JSON.parse(localStorage.getItem('product'));
	for(var i=0;i<productArray.length;i++){
		if(productArray[i].productId==productid){//so sanh id trong localstorage voi id click vao de biet san pham nao -> hien chi tiet san pham do
			document.getElementById('productname').innerHTML = productArray[i].name;
			document.getElementById('productprice').innerHTML = 'Giá: '+ currency(productArray[i].price);
			document.getElementById('imgbig').src=productArray[i].img;
			document.getElementById('quantity').value = 1;
			document.querySelector('#info .right button.addtocart').setAttribute('onClick', 'addToCart('+productid+')');
		}
	}
}
function closeProductInfo(){

	document.getElementById('productInfo').style.display = 'none';
}
/*END PRODUCT*/
/*CART*/
function addToCart(productid1){
	var quantity = document.getElementById('quantity').value;//khai bao so luong 
	var productArray = JSON.parse(localStorage.getItem('product'));//lay du lieu trong localstorage
	var producttemp;//sanphamtam
	for(var i=0; i<productArray.length;i++){
		if(productArray[i].productId==productid1){
			producttemp = productArray[i];
		}
	}
	if(localStorage.getItem('cart')===null){//lay du lieu trong localstorage === 0 --> chua co gi
		var cartArray = [];
		producttemp.quantity = quantity;
		producttemp.totalprice = quantity*producttemp.price;// so luong * gia
		cartArray.unshift(producttemp);// them phan tu vao dau mang va tra tong phan tu ve cuoi mang
		localStorage.setItem('cart',JSON.stringify(cartArray));// truyen gia tri 'cart' trong localstorage
	}else{// neu trong localstorage co du lieu cart roi --> da them vao gio hang roi
		var cartArray = JSON.parse(localStorage.getItem('cart'));// truyen gia tri 'cart' trong localstorage
		producttemp.quantity = quantity;
		producttemp.totalprice = quantity*producttemp.price;
		cartArray.unshift(producttemp);
		localStorage.setItem('cart',JSON.stringify(cartArray));		
	}
	closeProductInfo();
}
function showCartTable(){// show danh sach them vao gio hang
	if (localStorage.getItem('cart')===null || localStorage.getItem('cart')=='[]'){
		var s='<tr><th>Không có sản phẩm nào trong giỏ hàng</th></tr>';//html
		document.getElementById('carttable').innerHTML=s;//in du lieu tu file html
		document.getElementById('totalprice').innerHTML=0;
	}else {
		var cartArray = JSON.parse(localStorage.getItem('cart'));//truyen du lieu cart vao localstorage
		var s='<tr><th></th><th>Sản phẩm</th><th>Giá</th><th>Số lượng</th><th>Tổng</th><th></th></tr>';//html
		var totalprice=0;

		for (var i = 0; i < cartArray.length; i++){
			s+=  '<tr>'+
					'<td><img src="./'+cartArray[i].img+'"></td>'+
					'<td>'+
						'<div>'+cartArray[i].name+'</div>'+
					'</td>'+
					'<td>'+currency(cartArray[i].price)+'</td>'+
					'<td>'+
						'<button onClick="quantitydown2('+cartArray[i].productId+')">-</button>'+
						'<input id="quantity" type="text" disabled value="'+cartArray[i].quantity+'" onchange="updateCart(this.value,'+cartArray[i].productId+')">'+
						'<button onClick="quantityup2('+cartArray[i].productId+')">+</button>'+
					'</td>'+
					'<td>'+currency(cartArray[i].price*cartArray[i].quantity)+'</td>'+
					'<td><button onClick="deletecartitem('+cartArray[i].productId+')">&times;</buttom></td>'+
				'</tr>';
			totalprice+=cartArray[i].price*cartArray[i].quantity;
		}
		document.getElementById('carttable').innerHTML=s;
		document.getElementById('totalprice').innerHTML=currency(totalprice);
	}	
}
function deletecartitem(id){// xoa cart bat ki
	var cartArray = JSON.parse(localStorage.getItem('cart'));
	for (var i = 0; i < cartArray.length; i++) {
		if(cartArray[i].productId==id){
			cartArray.splice(i, 1);// thay the phan tu
		}
	}
	localStorage.setItem('cart',JSON.stringify(cartArray));
	showCartTable();
}
function deletecart(){// xoa tat ca cart
	localStorage.removeItem('cart');
	showCartTable();
}
function updateCart(quantity,id){// cap nhat so luong san pham trong localstoragge
	var cartArray = JSON.parse(localStorage.getItem('cart'));
	for (var i = 0; i < cartArray.length; i++) {
		if(cartArray[i].productId==id){
			cartArray[i].quantity=quantity;
		}
	}
	localStorage.setItem('cart',JSON.stringify(cartArray));
	showCartTable();
}
function quantitydown(){// hien thi giam so luong
	if(document.getElementById('quantity').value > 1){
		document.getElementById('quantity').value--;
	}
}
function quantityup(){// hien thi tang so lieu

	document.getElementById('quantity').value++;
}
function quantitydown2(id){//giam so luong trong localstorage
	var cartArray = JSON.parse(localStorage.getItem('cart'));
	for (var i = 0; i < cartArray.length; i++) {
		if(cartArray[i].productId==id){
			if(cartArray[i].quantity>1)
				cartArray[i].quantity--;
		}
	}
	localStorage.setItem('cart',JSON.stringify(cartArray));
	showCartTable();
}
function quantityup2(id){// tang so luong trong localstorage
	var cartArray = JSON.parse(localStorage.getItem('cart'));
	for (var i = 0; i < cartArray.length; i++) {
		if(cartArray[i].productId==id){
				cartArray[i].quantity++;
		}
	}
	localStorage.setItem('cart',JSON.stringify(cartArray));
	showCartTable();
}
function buy(){
	if(localStorage.getItem('userlogin')===null){
		customAlert('Bạn phải đăng nhập để mua sản phẩm','warning');
		return false;
	}
	var info = '';
	var totalprice = 0;//tong tien = 0
	if(localStorage.getItem('cart')===null || localStorage.getItem('cart')=='[]'){// trong localstorage ko co gi
		return false;
	}
	var cartArray = JSON.parse(localStorage.getItem('cart'));//lay gia tri trong localstorage truyen vao cartarray
	for (var i = 0; i < cartArray.length; i++) {
			totalprice+=cartArray[i].quantity*cartArray[i].price;
	}
	var customer = JSON.parse(localStorage.getItem('userlogin'));//lay thong tin khach hang trong localstorage
	var date = new Date();// constructor
	var d = date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear();
	if(localStorage.getItem('bill')===null){
		var billArray = [];
		var bill = {id: billArray.length, info: info, totalprice: totalprice, customer: customer, date: d, status: 'Chưa xử lý'};
		billArray.unshift(bill);
		localStorage.setItem('bill', JSON.stringify(billArray));
	}
	else{
		var billArray = JSON.parse(localStorage.getItem('bill'));//truyen du lieu tu 'bill' trong localstorage
		var bill = {id: billArray.length, info: info, totalprice: totalprice, customer: customer, date: d, status: 'Chưa xử lý'};
		billArray.unshift(bill);//tong tien
		localStorage.setItem('bill', JSON.stringify(billArray));// luu vo localstorage
	}	
	localStorage.removeItem('cart');// xoa thong tin gio hanag
	showCartTable();
	showbill();
}
function showbill(){
	if (localStorage.getItem('bill')===null){
		document.getElementById('bill').style.display = 'none';//an hoa don 
	}
	else{
		var user = JSON.parse(localStorage.getItem('userlogin'))// phai dang nhap
		var billArray = JSON.parse(localStorage.getItem('bill'));// lay du lieu 'bill' trong localstorage gan vao mang bill
		var s='<h2>Đơn hàng đã đặt</h2>';
		for (var i = 0; i < billArray.length; i++) {
			if(user.username==billArray[i].customer.username){// neu ten user = voi ten user cua bill
				document.getElementById('bill').style.display = 'block';// se hien thi cai bill
				s+='<div class="billcontent">'+
					'<div>'+billArray[i].info+'</div>'+
					'<div>'+currency(billArray[i].totalprice)+'</div>'+
					'<div>'+billArray[i].date+'</div>'+
					'<div>'+billArray[i].status+'</div>'+
				'</div>';
			}
		}
		document.getElementById('bill').innerHTML = s;
	}
}
/*END CART*/
/*SEARCH*/
function showSearch(){

	document.getElementById('searchsection').style.display = 'block';
}
function closeSearch(){

	document.getElementById('searchsection').style.display = 'none';
}
function search(){
	var productsearch = document.getElementById('search').value.toLowerCase();// lay gia tri tu 'search'
	var productArray = JSON.parse(localStorage.getItem('product'));// lay du lieu trongg localstorage
	var s='';
	if(document.getElementById('searchextend').className== ''){//tim kiem co ban
		// .className => thay doi tat ca cac lop cho 1 phan tu
		// cac lop trong searchextend = rong -> khong co gia tri tim kiem
		for(var i = 0; i<productArray.length; i++){
			if ((productArray[i].name.toLowerCase().search(productsearch) != -1 || productArray[i].brand.toLowerCase().search(productsearch) != -1) && productsearch != '') {
			//neu if tim thay thi tra ve san pham
				s+='<div class="card">'+
					'<img src="'+productArray[i].img+'">'+
					'<p>' + productArray[i].name + '</p>'+
					'<p> Giá: ' + currency(productArray[i].price) +'</p>' +
					'<button class="btn" onClick="showProductInfo('+productArray[i].productId+')">Chi tiết</button></div>';
			}
		}
	}
	else{//tim kiem nang cao
		var brandsearch = document.getElementById('brandsearch').value;
		var priceform = document.getElementById('priceform').value;
		var priceto = document.getElementById('priceto').value;
		if (brandsearch=='all') {//neu chon tat ca san pham
			for(var i = 0; i<productArray.length; i++){
				if (productArray[i].name.toLowerCase().search(productsearch) != -1 && productArray[i].price>=priceform && productArray[i].price<=priceto) {
				//neu if tim thay thi tra ve san pham và giá sp nằm giữa từ priceform tới priceto
					s+='<div class="card">'+
						'<img src="'+productArray[i].img+'">'+
						'<p>' + productArray[i].name + '</p>'+
						'<p> Giá: ' + currency(productArray[i].price) +'</p>' +
						'<button class="btn" onClick="showProductInfo('+productArray[i].productId+')">Chi tiết</button></div>';
				}
			}
		}
		else {// nếu không phải tất cả sản phẩm (sản phẩm khác)
			for(var i = 0; i<productArray.length; i++){
				if (productArray[i].name.toLowerCase().search(productsearch) != -1 && productArray[i].brand==brandsearch && productArray[i].price>=priceform && productArray[i].price<=priceto) {
				//neu ìf tim thay thi tra ve san pham va brand = brandsearch va giá sp nằm giữa từ pricefỏrm tới priceto
					s+='<div class="card">'+
						'<img src="'+productArray[i].img+'">'+
						'<p>' + productArray[i].name + '</p>'+
						'<p> Giá: ' + currency(productArray[i].price) +'</p>' +
						'<button class="btn" onClick="showProductInfo('+productArray[i].productId+')">Chi tiết</button></div>';
				}
			}
		}
		
	}
	document.getElementById('searchresult').innerHTML = s;
}
function showextend(){
	if(document.getElementById('searchextend').className== ''){
		document.getElementById('searchextend').classList.add('active')
		document.querySelector('#searchsection .searchbox button img').src = 'img/up.svg';
	}
	else{
		document.getElementById('searchextend').classList.remove('active');
		document.querySelector('#searchsection .searchbox button img').src = 'img/down.svg';
		var priceform = document.getElementById('priceform').value="";
		var priceto = document.getElementById('priceto').value="";
	}
}
function showextend2(){// trong cart
	if(document.getElementById('searchextend').className== ''){
		document.getElementById('searchextend').classList.add('active')
		document.querySelector('#searchsection .searchbox button img').src = 'img/up.svg';
	}
	else{
		document.getElementById('searchextend').classList.remove('active');
		document.querySelector('#searchsection .searchbox button img').src = 'img/down.svg';
		var priceform = document.getElementById('priceform').value="";
		var priceto = document.getElementById('priceto').value="";
	}
}
/*END SEARCH*/
/*USER*/
function createAdmin(){
	if(localStorage.getItem('user')===null){
		var userArray = [];
		var user = {username: 'admin', password: 'admin', fullname: 'ADMIN', address: '273 An Dương Vương, P3, Quận 5, TPHCM', phone: '0566490523' , datesignup: '01/12/2021'};
		userArray.push(user);
		localStorage.setItem('user',JSON.stringify(userArray));
	}
}
function showform(){
	var userform = document.getElementById('user');
	userform.style.display = 'block';
}
function closeform(){
	var userform = document.getElementById('user');
	userform.style.display = 'none';
}
function showSignUp(){
	document.getElementById('login').style.display = 'none';
	document.getElementById('signup').style.display = 'block';
}
function showLogin(){
	document.getElementById('signup').style.display = 'none';
	document.getElementById('login').style.display = 'block';
}
document.getElementById('signupform').addEventListener('submit', createUser);//them su kien
document.getElementById('loginform').addEventListener('submit', login);// them su kien
function createUser(e){
	e.preventDefault();// huỷ sự kiện nếu có thể huỷ --> dang ki xong se thoat khoi dang ky
	var fullname = document.getElementById('fullname');
	var address = document.getElementById('address');
	var phone = document.getElementById('phone');
	var username = document.getElementById('usernameSignUp');
	var password = document.getElementById('passwordSignUp');
	var password2 = document.getElementById('passwordSignUp2');
	var flag = true;
	if(!fullname.value){//if(!a) => phủ định của a => phủ định của giá trị fullname = bỏ trống
		document.getElementById('fullnameerror').style.display = 'block';
		flag = false;
	}else{
		document.getElementById('fullnameerror').style.display = 'none';
	}
	if(!address.value){
		document.getElementById('addresserror').style.display = 'block';
		flag = false;
	}else{
		document.getElementById('addresserror').style.display = 'none';
	}
	if(!phone.value){
		document.getElementById('phoneerror').style.display = 'block';
		flag = false;
	}else{
		if(isNaN(Number(phone.value))){//not a number
			document.getElementById('phoneerror').style.display = 'block';
			document.getElementById('phoneerror').innerHTML = 'Số điện thoại không hợp lệ';
			flag = false;
		}else{
			if(Number(phone.value)<100000000 || Number(phone.value)>999999999){
				document.getElementById('phoneerror').style.display = 'block';
				document.getElementById('phoneerror').innerHTML = 'Số điện thoại không đúng';
				flag = false;
			}else{
				document.getElementById('phoneerror').style.display = 'none';
			}
		}
	}
	if(!username.value){
		document.getElementById('usererror').style.display = 'block';
		flag = false;
	}else{
		document.getElementById('usererror').style.display = 'none';
	}
	if(!password.value){
		document.getElementById('passworderror').style.display = 'block';
		flag = false;
	}else{
		if(password.value.length<8){
			document.getElementById('passworderror').style.display = 'block';
			document.getElementById('passworderror').innerHTML = 'Mật khẩu phải trên 8 ký tự';
			flag = false;
		}else {
			document.getElementById('passworderror').style.display = 'none';
		}
	}
	if(password2.value != password.value){
		document.getElementById('password2error').style.display = 'block';
		flag = false;
	}else{
		document.getElementById('password2error').style.display = 'none';
	}
	if(flag==false){
		return false;
	}
	var d = new Date();
	var datesignup = d.getDate()+'-'+(d.getMonth()+1)+'-'+d.getFullYear();
	var user = {username: username.value, password: password.value, fullname: fullname.value, address: address.value, phone: phone.value , datesignup: datesignup};
	var userArray = JSON.parse(localStorage.getItem('user'));//trong localstorage
	for(var i=0;i<userArray.length;i++){
		if(user.username==userArray[i].username){
			document.getElementById('usererror').style.display = 'block';
			document.getElementById('usererror').innerHTML = 'Tên đăng nhập đã có người sử dụng';
			username.focus();
			return false;
		}
	}
	userArray.push(user);
	localStorage.setItem('user',JSON.stringify(userArray));
	customAlert('Bạn đã đăng ký thành công!','success');
	showLogin();
}
function login(e){
	e.preventDefault();//khi dang nhap xong se thoat ra khoi login
	var username = document.getElementById('usernameLogin').value;
	var password = document.getElementById('passwordLogin').value;
	var flag=true;
	if(!username){
		document.getElementById('usernameerror').style.display = 'block';
		flag = false;
	}else {
		document.getElementById('usernameerror').style.display = 'none';
	}
	if(!password){
		document.getElementById('passwordloginerror').style.display = 'block';
		flag = false;
	}else {
		document.getElementById('passwordloginerror').style.display = 'none';
	}
	if(flag==false){
		return false;
	}
	var userArray = JSON.parse(localStorage.getItem('user'));
	for(var i=0;i<userArray.length;i++){
		if(username==userArray[i].username){
			if(password==userArray[i].password){
				closeform();
				localStorage.setItem('userlogin',JSON.stringify(userArray[i]));
				window.location.reload(true);
				return true;
			}
		}
	}
	document.getElementById('passwordloginerror').style.display = 'block';
	document.getElementById('passwordloginerror').innerHTML = 'Sai thông tin đăng nhập';
	return false;
}
function logout(url){
	localStorage.removeItem('userlogin');// xoá tài khoản đăng nhập trong userlogin trong localstorage
	localStorage.removeItem('cart');// xoá tài khoản đăng nhập ở phần cart trong localstorage
	location.href=url;
}

function checklogin(){
	if(localStorage.getItem('userlogin')){
		var user = JSON.parse(localStorage.getItem('userlogin'));
		var s='';
		if(user.username=='admin'){
			s = '<li><button onClick="window.location.href=\'product.html\'"><img src="img/icon_setting.png"></button></li>'+
				'<li><button>'+user.fullname+'</button><button id="btnlogout" onClick="logout(\'watchvn.html\')">LOGOUT</button></li>'+
				'<li><button onClick="location.href=\'cart.html\'"><img src="img/icon_cart.png"></button></li>'+
				'<li><button onClick="showSearch()"><img src="img/icon_search1.png"></button></li>';
		}else{
			s = '<li><button>'+user.fullname+'</button><button id="btnlogout" onClick="logout(\'watchvn.html\')">LOGOUT</button></li>'+
				'<li><button onClick="location.href=\'cart.html\'"><img src="img/icon_cart.png"></button></li>'+
				'<li><button onClick="showSearch()"><img src="img/icon_search1.png"></button></li>';
		}
		document.querySelector('#nav .topnav ul.right').innerHTML = s;
	}
}
function checklogin2(){ // phần cart
	if(localStorage.getItem('userlogin')){
		var user = JSON.parse(localStorage.getItem('userlogin'));
		var s='';
		if(user.username=='admin'){
			s = '<li><button onClick="window.location.href=\'product.html\'"><img src="img/icon_setting.png"></button></li>'+
				'<li><button>'+user.fullname+'</button><button id="btnlogout" onClick="logout(\'watchvn.html\')">LOGOUT</button></li>'+
				'<li><button onClick="location.href=\'cart.html\'"><img src="img/icon_cart.png"></button></li>'+
				'<li><button onClick="showSearch()"><img src="img/icon_search1.png"></button></li>';
		}else{
			s = '<li><button>'+user.fullname+'</button><button id="btnlogout" onClick="logout(\'watchvn.html\')">LOGOUT</button></li>'+
				'<li><button onClick="location.href=\'cart.html\'"><img src="img/icon_cart.png"></button></li>'+
				'<li><button onClick="showSearch()"><img src="img/icon_search1.png"></button></li>';
		}
		document.querySelector('#nav .topnav ul.right').innerHTML = s;
	}
}
/*END USER*/
/*CUSTOM ALERT BOX*/
function customAlert(message,type) {
	if (type=='success') {
		document.getElementById("customalert").style.backgroundColor = '#4CAF50';
	}
	if (type=='warning') {
		document.getElementById("customalert").style.backgroundColor = '#f44336';
	}
	document.getElementById("customalert").innerHTML = message;
    var x = document.getElementById("customalert");
    x.className = "show";
    setTimeout(function(){ x.className = x.classList.remove("show"); }, 3500);
}
//Banner begin
var slideIndex = 0;
showSlides();
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slideShow");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;// sau khi ẩn hết tất cả slide thì slideindex = 1
    if (slideIndex > slides.length) {slideIndex = 1}    
    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000);
}
//Banner end