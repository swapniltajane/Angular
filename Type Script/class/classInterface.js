var Product = /** @class */ (function () {
    function Product() {
        this.ProductId = 1;
        this.Name = "TV";
        this.Categoery = "Electronics";
    }
    Product.prototype.Print = function () {
        console.log(this.ProductId + " " + this.Name + " " + this.Categoery);
    };
    return Product;
}());
var product = new Product();
product.Print();
