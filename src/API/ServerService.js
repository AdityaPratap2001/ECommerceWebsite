import axios from './baseURL/baseURL';

class ServerService{

  fetchAllProducts(){
    return axios.get(`/api/products/allProducts`)
  }

  getProductByID(ID){
    return axios.get(`/api/products/productId/${ID}`)
  }

  doesProductExistInWishlist(data){
    return axios.post(`/doesProductExist`,data)
  }

  doesProductExistInCart(data){
    return axios.post(`/doesProductExistInCart`,data)
  }

  addToWishlist(data){
    return axios.post(`/addToWishlist`,data)
  }

  addToCart(data){
    return axios.post(`/addToCart`,data)
  }

  removeFromWishlist(data){
    return axios.post(`/removeFromWishlist`,data)
  }

  removeFromCart(data){
    return axios.post(`/removeFromCart`,data)
  }

  moveFromCartToWishlist(data){
    return axios.post(`/cartToWishlist`,data)
  }

  searchByGender(gender,term){
    return axios.get(`/api/products/productCategory/productType/${gender}/${term}`)
  }

  searchByTerm(term){
    return axios.get(`/api/products/productType/${term}`)
  }

  fetchBySubcat(mainCat,subCat){
    return axios.get(`/api/products/productCategory/productSubCategory/${mainCat}/${subCat}`)
  }

  fetchByCat(mainCat){
    return axios.get(`/api/products/productCategory/${mainCat}`)
  }

  searchBySellerID(ID){
    return axios.get(`/api/products/productSellerUsername/${ID}`)
  }

  fetchDetailsByUserID(ID){
    return axios.get(`/user/${ID}`)
  }

  pushProduct(data){
    return axios.post(`/api/products/addProduct`,data)
  }

  fetchCartDetailsByID(ID){
    return axios.get(`/myCart/${ID}`)
  }

  fetchWishlistDetailsByID(ID){
    return axios.get(`/myWishlist/${ID}`)
  }

  placeOrder(ID){
    return axios.get(`/orderPlaced/${ID}`)
  }

  login(data){
    return axios.post(`/login`,data)
  }

  register(data){
    return axios.post(`/registeruser`,data)
  }

}

export default new ServerService();