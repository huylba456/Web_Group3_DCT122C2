    class user {
        static checkLoginId() {
            if (localStorage.loginId) {
                const a = parseInt(localStorage.loginId);
                if (a > 0) return a;
            }
            return null;
        }   

        static updateInfoUser(id, newUserInfo) {
            var userz = user.getUserId(id);
            var userlist = user.getUsers();
            userz.name = newUserInfo.name;  
            userz.email = newUserInfo.email;
            userz.phone = newUserInfo.phone;
            userz.address = newUserInfo.address;
            userlist.forEach((item, i) => {
                if (item.userID === id) {
                    userlist[i] = userz;
                }
            })
           
            user.loadUsers(userlist);
        }

        static isUserAdmin() {
            const userid = user.checkLoginId();
            if (userid === null) return false;
            if (user.getUserId(userid).isAdmin) return true;
            return false;
        }

        static updateCart(userid, newCartList) {
            const list = user.getUsers();
            if (!list) return false;
            var isSet = false;
            newCartList = cart.getNoDuplicatesProducts(newCartList);
            list.forEach((item) => {
                if (item.userID === userid) {
                    item.cartList = newCartList;
                    user.loadUsers(list);
                    isSet = true;
                }
            })
            return isSet;
        }
        
        static getUserId(userid) {
            const listUsers = user.getUsers();
            if (!listUsers) return null;
            var accountz = null;
            listUsers.forEach(account => {
                if (account.userID === userid) {
                    accountz = account;
                }
            })
            return accountz;
        }

        static getLargestId() {
            const listUsers = user.getUsers();
            if (!listUsers || listUsers.length === 0) return 0;
            return listUsers[listUsers.length - 1].userID;
        }
        
        static getUserId(userid) {
            const listUsers = user.getUsers();
            if (!listUsers) return null;
            var accountz = null;
            listUsers.forEach(account => {
                if (account.userID === userid) {
                    accountz = account;
                }
            })
            return accountz;
        }

        static getUsers() {
            if (localStorage.account) {
                return JSON.parse(localStorage.account);
            }
            return null;
        }

        static logout() {
            user.setLoginState(null);
        }

        static setLoginState(userid) {
            if (userid === null) {
                localStorage.loginId = 0;
            }
            else {
                if (Number.isInteger(userid)) {
                    localStorage.loginId = userid;
                }
            }
        }

        static loadUsers(account) {
            localStorage.account = JSON.stringify(account);
            if (localStorage.account)
                return true;
            return false;
        }
        static isSameUserName(username) {
            const list = user.getUsers();
            if (!list || list.length === 0) return false;
            for (let i = 0; i < list.length; i++) {
                if (list[i].username === username) return true;
            }
            return false;
        }

        static addUser(username, password, email, phone, name, address) {
            try {
                const newUser = new User(username, password, email, phone, name, address, false);
                const list = user.getUsers();
                list.push(newUser);
                user.loadUsers(list);
            } catch (e) {
                console.error("Eror: Can't add user" + e.message());
            }
        }

        static addAdmin(username, password, email, phone, name, address) {
            try {
                const newUser = new User(username, password, email, phone, name, address, true);
                const list = user.getUsers();
                list.push(newUser);
                user.loadUsers(list);
            } catch (e) {
                console.error("Eror: Can't add user" + e.message());
            }
        }

        static login(username, password) {
            const list = user.getUsers();
            if (!list) return false;
            var isUserid = null;
            let isActive = true;
            list.forEach((item) => {
                if (item.username === username && item.password === password) {
                    isUserid = item.userID;
                    isActive = item.isActive;
                }
            })
            if (!isActive) {
                return null;
            }
            user.setLoginState(isUserid);
            if (isUserid) {
                // history.addNode(Date.now(), "Người dùng " + username + " đã đăng nhập!");
                
                return true;
            }
            return false;
        }
    }


    class Product {
        static totalProduct = 0; // danh dau
        constructor(name, price1, price2, price3, soSize, gender, imgList, mui, time, capacity, conlai, brand, mota) {
            this.productId = data.getProducts() === null ? ++Product.totalProduct : data.getLargestId() + 1;
            this.name = name;
            this.price1 = price1;
            this.price2 = price2;
            this.price3 = price3;
            this.gender = gender;
            this.imgList = imgList;
            this.mui = mui; 
            this.time = time;
            this.brand = brand.toLowerCase();
            this.capacity = capacity;
            this.conlai = conlai;
            this.soSize = soSize;
            this.mota = mota;
            this.rate = (Math.floor(Math.random() * (50 - 25 + 1)) + 25) / 10;
        }
    }

    class History{
        static total = 0;
        constructor(timeShow, textShow, username, email) {
            this.historyId = ++History.total;
            this.timeShow = time.toTimeSpan(timeShow);
            this.textShow = textShow;
            this.username = username;
            this.email = email;
        }
    }

    class history {
        static getList() {
            if (localStorage.HistoryList) {
                return JSON.parse(localStorage.HistoryList);
            }
            return null;
        }
        static addNode(timeSpan, textShow, username, email) {
            var list = [];
            if (history.getList()) {
                list = history.getList();
            }
            list.push(new History(timeSpan,textShow, username, email));
            history.loadHistory(list);
            return true;
        }

        static loadHistory(HistoryList) {
            localStorage.HistoryList = JSON.stringify(HistoryList);
            if (localStorage.HistoryList)
                return true;
            return false;
        } 

        static getNewest(numberItemShow) {
            const list = history.getList();
            if (!list) {
                return false;
            }
            var result = [];
            for (var i = list.length - 1; i >= 0 && numberItemShow > 0; i--) {
                if (list[i]) {
                    numberItemShow--;
                    result.push(list[i]);
                }
            }
            return result;
        }
        
    }
    class data {

        static searchProductsName(myList,keywords) {
            // const myList = data.getProducts();
            if (keywords === "" || keywords === null) return myList;
            if (!myList) return null;
            keywords = keywords.toLowerCase();
            var result = [];
            myList.forEach(item => {
                var str = item.name.toLowerCase().toString();
                if (str.includes(keywords)) {
                    result.push(item);
                }
            })
            return result;
        }
        
        static getMaxProductPrice() {
            const list = data.getProducts();
            if (!list) return 0;
            var max = list[0].price1;
            list.forEach(item => {
                if (max < item.price1) {
                    max = item.price1
                }
            })
            return max;
        }
        
        static getLargestId() { 
            const listProducts = data.getProducts();
            if (!listProducts || listProducts.length === 0) return 0;
            return listProducts[listProducts.length - 1].productId;
        }

        static vietHoaTatCaTuDau(chuoi) {
            var mangTu = chuoi.split(' ');
            for (var i = 0; i < mangTu.length; i++) {
            mangTu[i] = mangTu[i].charAt(0).toUpperCase() + mangTu[i].slice(1);
            }
            return mangTu.join(' ');
        }

        static getProducts() {
            if (localStorage.listProducts) {
                return JSON.parse(localStorage.listProducts);
            }
            return null;
        }

        static loadProducts(listData) {
            localStorage.listProducts = JSON.stringify(listData);
            if (localStorage.listProducts) {
                return true;
            }
            return false;
        }

        static getProductId(myproductId) {
            const list = data.getProducts();
            if (!list) return null;
            var product = null;
            list.forEach((item) => {
                if (item.productId === myproductId) {
                    product = item;
                }
            })
            return product;
        }

        static getMaxPages(list,max_products_show) {
            if (!list) return null;
            var size = list.length;
            const max_Pages = round(size / max_products_show);
            return max_Pages;
        }

        static getProductAtPage(list, page, max_products_show = 8) {
            if (page < 1) return null;
            var result = [];
            if (list == null) return result;
            var size = list.length;
            const max_Pages = round(size / max_products_show);
            if (page > max_Pages) return null;
            var result = [];
            for (let i = (page - 1) * max_products_show; i < page * max_products_show && i < size; i++) {
                result.push(list[i]);
            }
            return result;
        }

        static searchProductsName(myList,keywords) {
            // const myList = data.getProducts();
            if (keywords === "" || keywords === null) return myList;
            if (!myList) return [];
            keywords = keywords.toLowerCase();
            var result = [];
            myList.forEach(item => {
                var str = item.name.toLowerCase().toString();
                if (str.includes(keywords)) {
                    result.push(item);
                }
            })
            return result;
        }
        
        static filterProductsPrice(myList,price_min, price_max) {
            if (price_min >= price_max || price_max <= price_min) return [];
            if (price_min === null || price_max === null) return myList;

            if (!myList) return [];
            var result = [];
            myList.forEach(item => {
                if (item.price3 >= price_min && item.price1 <= price_max) 
                    result.push(item);
            })
            return result;
        }

        static filterProductGender(myList,gender) {
            var result = [];
            gender = gender.toLowerCase();
            if (gender === "nam") {
                myList.forEach(item => {
                    if (item.gender === 'nam')
                        result.push(item);
                })
                return result;
            }
            else if (gender === "nu") {
                myList.forEach(item => {
                    if (item.gender === 'nu')
                        result.push(item);
                })
                return result;
            }
            else if (gender == "unisex") {
                myList.forEach(item => {
                    if (item.gender == 'unisex') 
                        result.push(item)
                })
                return result;
            }
            return myList;
        }

        static filterProductTangDan(myList) {
            if (!myList) return null;
            var result = [];
            myList.forEach(item => {
                result.push(item);
            })
            result.sort((a, b) => {
                return a.price3 - b.price3;
            })
            return result;
        }

        static filterProductGiamDan(myList) {
            if (!myList) return null;
            var result = [];
            myList.forEach(item => {
                result.push(item);
            })
            result.sort((a, b) => {
                return b.price3 - a.price3;
            })
            return result;
        }

        static filterProductStar(myList,star1, star2) {
            if (!myList) return null;
            var result = [];
            myList.forEach(item => {
                if (item.rate >= star1 && item.rate <= star2)
                    result.push(item);
            })
            return result;
        }
        static filterProductBrand(myList,brand) {
            // const myList = data.getProducts();
            if (!myList) return null;
            var result = [];
            if (brand === '') return myList;
            myList.forEach(item => {
                if (item.brand.toLowerCase().replace(/ /g, '').includes(brand))
                    result.push(item);
            })
            return result;
        }

        static addProduct(name, price1, price2, price3, soSize, gender, imgList, mui, time, capacity, conlai, brand, mota) {
            try {
                const product = new Product(name, price1, price2, price3, soSize, gender, imgList, mui, time, capacity, conlai, brand, mota);
                const list = data.getProducts();
                list.push(product);
                data.loadProducts(list);
                alert("thành thụ");
            } catch (e) {
                console.error("Error: Can't add product. " + e.message);
            }
        }
    }

    class Order {
        static total = 0;
        constructor(cartList,userid,orderTime) {
            this.orderId = order.getOrders() === null ? ++Order.total : order.getLargestId() + 1;
            this.cartList = cartList;
            this.userid = userid;
            // this.orderTime = Date.now();
            this.orderTime = time.toTimeSpan(orderTime);
            this.userProfile = user.getUserId(userid);
            this.status = false;
        }
    }


    class order {
        static loadOrder(orderList) {
            localStorage.orderList = JSON.stringify(orderList);
            if (localStorage.orderList)
                return true;
            return false;
        }

        static getOrders() {
            if (localStorage.orderList) {
                return JSON.parse(localStorage.orderList);
            }
            return null;
        }

        static getLargestId() {
            const myList = order.getOrders();
            if (!myList || myList.length === 0) return 0;
            return myList[myList.length - 1].orderId;
        }
        // thêm cartlist vào localstorage
        static makeOrder(cartList, userid, orderTime) {
            if (!cartList) return false;
            const orderList = order.getOrders();
            if (!orderList) return false;
            orderList.push(new Order(cartList, userid, orderTime));
            order.loadOrder(orderList);
            cart.removeAllItem(userid);
            history.addNode(Date.now(), "Người dùng " + user.getUserId(userid).username + " đã đặt 1 đơn hàng!", user.getUserId(userid).username, user.getUserId(userid).email);
            return true;
        }

        static loadOrder(orderList) {
            localStorage.orderList = JSON.stringify(orderList);
            if (localStorage.orderList)
                return true;
            return false;
        }

        static getTotalOrderMoney(orderList) {
            if (!orderList || orderList.length === 0) return 0;
            var tong = 0;
            orderList.forEach((item) => {
                item.cartList.forEach((cart) => {
                    tong += cart.total;
                })
            });
            return tong;
        }

    }

    class time {
        static getMaxDayOfMonth(month) {
            if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) return 31;
            if (month === 4 || month === 6 || month === 9 || month === 11) return 30;
            return 29;
        }

        static toTimeSpan(dateStr) {
            var timespan = new Date(dateStr);
            return timespan.getTime();
        }

        static getDateStr(timeSpan) {
            var date = new Date(timeSpan);
            var ngay = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
            var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
            var str = ngay + '/' + month + '/' + date.getFullYear();
            return str;
        }

        static getOnlyDate(timespan) {
            var date = new Date(timespan);
            var ngay = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
            return ngay;
        }
        
        static getOnlyMonth(timespan) {
            var date = new Date(timespan);
            var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
            return month;
        }
    }

    class CartItem {
        static totalCart = 0;
        constructor(productId, product_price, soluong, productImg, dungtich) {
            this.cartId = ++CartItem.totalCart;
            this.productId = productId;
            this.product_price = product_price;
            this.soluong = soluong;
            this.productImg = productImg;
            this.total = soluong * product_price;
            this.dungtich = dungtich;
        this.storeProduct = data.getProductId(productId);
        }
    }

    class cart {
        static getNoDuplicatesProducts(list) {
            if (!list)
                return null;
            var result = [];
            var hasProductId = []; // hasProductId để đánh dấu những sản phẩm đã được lọc
            list.forEach((myCart, i) => {
                // kiểm tra xem sản phẩm đã được lọc chưa, nếu chưa thì lọc và đánh dấu
                if (hasProductId.indexOf(i)===-1) {
                    var soluong = myCart.soluong;
                    hasProductId.push(i);
                    for (let j = i + 1; j < list.length; j++)
                        if (cart.Equals(myCart, list[j])) {
                            soluong += list[j].soluong; // lấy tổng số lượng của sản phẩm đó
                            hasProductId.push(j); // đánh dâu sản phẩm đã được lọc
                        }
                        result.push(new CartItem(myCart.productId, myCart.product_price, soluong, myCart.productImg, myCart.dungtich));
                }
            })
            return result;
            }

        static Equals(cartItemA, cartItemB) {
                if (!cartItemA || !cartItemB) return false;
                if (cartItemA.productId !== cartItemB.productId) return false;
                if (cartItemA.productId === cartItemB.productId && cartItemA.dungtich !== cartItemB.dungtich) return false;
                return true;
        }

    /*    static removeItem(userid, cartID) {
            // const myUser = user.getUserId(userid);
            const myList = cart.getCartList(userid);
            if (!myList) return false;
            var isDeleted = false;
            myList.forEach((item, i) => {
                if (item.cartId === cartID) {
                    myList.splice(i, 1);
                    user.updateCart(userid, myList);
                    isDeleted = true;
                }
            })
                return isDeleted;
        } */

        static removeAllItem(userid) {
            const myList = [];
            if (user.updateCart(userid, myList))
                return true;
            return false;
        }

        // Hàm này trả về danh sách sản phẩm trong giỏ hàng của người dùng
        static getCartList(userid) {
            const myUser = user.getUserId(userid);
            if (myUser)
                return myUser.cartList;
            return null;
        }

         static addItem(userid, productId, soluong, capa) {
            // myList trả về danh sách sản phẩm trong giỏ hàng của người dùng
            const myList = cart.getCartList(userid);
            if (!myList) return false;
            const myproduct = data.getProductId(productId);
            if (capa == 0) myList.push(new CartItem(productId, myproduct.price3, soluong, myproduct.imgList[0], myproduct.capacity[0]));
            else if (capa == 1) myList.push(new CartItem(productId, myproduct.price2, soluong, myproduct.imgList[0], myproduct.capacity[1]));
            else if (capa == 2) myList.push(new CartItem(productId, myproduct.price1, soluong, myproduct.imgList[0], myproduct.capacity[2]));
            if (user.updateCart(userid, myList)) 
                return true;
            return false;
        }

        static changeAmout(userid, cartid, number) {
            const list = cart.getCartList(userid);
            if (!list) return null;
            for (let i = 0; i < list.length; i++){
                if (list[i].cartId === cartid) {
                    list[i].soluong = number;
                    list[i].total = number * list[i].product_price;
                    user.updateCart(userid, list);
                }
            }
        }
        
        static getTotalMoney(userid) {
            const myList = cart.getCartList(userid);
            if (!myList) return 0;
            var tong = 0;
            myList.forEach((cart) => {
                tong += cart.total;
            })
            return tong;
        }

        static removeItem(userid, cartID) {
            const myList = cart.getCartList(userid);
            if (!myList) return false;
            var isDeleted = false;
            myList.forEach((item, i) => {
                if (item.cartId === cartID) {
                    myList.splice(i, 1);
                    user.updateCart(userid, myList);
                    isDeleted = true;
                }
            })
            return isDeleted;
        } 

    }
    class money{
        static vnd(tien) {
            let nf = new Intl.NumberFormat('vi-VN');
            return nf.format(tien) +"₫";
        }
    }

    class menu {
        // tangdan = 1 => tang dan, tangdan = 0 => giam dan, tangdan = null => khong sap xep
        static filterProudct(list, brand, priceMin, priceMax, gender, tangdan, search,starrange1, starRange2) {
            if (!list)
                return null;
            if (!brand && !gender && !priceMin && !priceMax && !tangdan && !search) return list;
            var result = [];
            if (search !== null && search !=='') {
                if (result.length === 0) result = data.searchProductsName(list,search);
                else result = result.concat(data.searchProductsName(result,search));
            }
            if (brand != null) {
                if (result.length === 0) result = data.filterProductBrand(list, brand.toLowerCase());
                else result = result.concat(data.filterProductBrand(result, brand.toLowerCase()));
            }
            if(gender != null) {
                if (result.length === 0) result = data.filterProductGender(list, gender);
                else result = data.filterProductGender(result, gender);
            }
            if (priceMax != null && priceMin != null) {
                if (result.length === 0) result = data.filterProductsPrice(list, priceMin, priceMax);
                else result = data.filterProductsPrice(result, priceMin, priceMax);
                if (result.length == 0) return []; // tương tự giải thích như dòng 547 nha, nếu 
                // ko tìm dc sản phẩm nào thỏa tiêu chí này thì return mảng rỗng [] luôns
            }
            if (starrange1 != null && starRange2 != null) {
                if (result.length === 0) result = data.filterProductStar(list, starrange1, starRange2);
                else result = data.filterProductStar(result, starrange1, starRange2);
                // tui thêm dòng if dưới là vì hàm data.filterProductStar(list, starrange1, starRange2) sẽ trả về
                // 1 mảng rỗng khi không tìm thấy sản phẩm nào nằm trọng đoạn [starrang1,starrang2]
                // tức là nếu như ko tìm đc sản phẩm nào thì mình sắp xếp tăng dần làm chi nên return mảng rỗng [] luôn
                if (result.length == 0) return [];
            }
            if (tangdan === 1) {
                if (result == null) return [];
                if (result.length === 0)  result = data.filterProductTangDan(list);
                else result = data.filterProductTangDan(result);
            }
            if (tangdan === 0 && result != null) {
                if (result == null) return [];
                if (result.length === 0)  result = data.filterProductGiamDan(list);
                else result = data.filterProductGiamDan(result);
            }
            result = menu.noduplicateFilter(result);
            return result;
        }


        static noduplicateFilter(list) {
            if (!list)
                return null;
            var result = [];
            var hasProduct = []; // hasProductId để đánh dấu những sản phẩm đã được lọc
            list.forEach((myProduct) => {
                // kiểm tra xem sản phẩm đã được lọc chưa, nếu chưa thì lọc và đánh dấu
            var isDuplicate = false;
            
            hasProduct.forEach((item) => {
                    if (item.productId === myProduct.productId) {    
                        isDuplicate = true;
                    }
            })
            if (isDuplicate == false) {
                        result.push(myProduct);
                        hasProduct.push(myProduct);
                }
            })
            return result;
        }
    }

    class User {
        static total = 0;
        cartList = [];
        constructor(username, password, email, phone, name, address, isAdmin) {
            this.userID = user.getUsers() === null ? ++User.total : user.getLargestId()+1;
            this.username = username;
            this.password = password;
            this.email = email;
            this.phone = phone;
            this.name = name;
            this.address = address;
            this.isAdmin = isAdmin;
            this.isActive = true;
            this.ngayTao = Date.now();
        }
    }

    class form {
        static validateName(txtName) {
            var value = true;
            var str = "Tên hợp lệ";
            if (txtName.length < 3){
                value = false;
                str = "Tên của bạn phải có ít nhất 3 kí tự!";
                return {value,str};
            }
            if (/\d+/.test(txtName)){
                value = false;
                str = "Vui lòng không nhập số trong tên của bạn!";
                return {value,str};
            };
            return {value,str};
        }
    
        static validatePhone(txtPhone) {
            var value = true;
            var str = "Số điện thoại hợp lệ";
            if (/\D+/.test(txtPhone)) {
                value = false;
                str = "Số điện thoại không được chứa chữ cái!";
                return { value, str };
            }
            if (txtPhone.length < 8 || txtPhone.length > 11) {
                value = false;
                str = "Số điện thoại từ 8-11 chữ số";
                return { value, str };
            }
            return { value, str };
        }
    
        static validateEmail(txtEmail) {
            var value = true;
            var str = "Email hợp lệ";
            if (/\S+@\S+\.\S+/.test(txtEmail)) {
                return { value, str };
            }
            value = false;
            str = "Email không đúng định dạng!";
            return { value, str };
        }
        
        static validateUserName(txtUserName) {
            var value = true;
            var str = "";
            if (txtUserName.length < 4) {
                value = false;
                str = "Tên đăng nhập phải có ít nhất 4 kí tự!";
                return { value, str };
            }
            return { value, str };
        }
    
        static validatePassword(txtPassword,txtRePassword) {
            var value = true;
            var str = "Mật khẩu hợp lệ";
            // var value2 = true;
            // var str2 = "Xác nhận mật khẩu hợp lệ";
            if (txtPassword.length < 5) {
                value = false;
                str = "Mật khẩu phải có ít nhất 5 kí tự";
            }
            return { value, str };
        }
    
    }

    function imgError(obj) {
        obj.src = './img/default.png';
    }

    function round(x) {
        if (x % 1 === 0) {
            return x;
        }
        return Math.trunc(x) + 1;
    }

