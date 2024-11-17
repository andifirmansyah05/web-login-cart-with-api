import CardProduct from "../components/fragments/CardProduct";

const ProductsPage = () => {
  return (
    <CardProduct>
      <CardProduct.Header image="/images/men-shoes.jpg" />
      <CardProduct.Body title="Men Shoes">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
        corrupti harum dicta vero beatae minus ad dignissimos eos dolorem
        magnam, ab voluptas. Dignissimos sunt facilis earum, veniam sapiente
        illum suscipit!
      </CardProduct.Body>
      <CardProduct.Footer price={"Rp. 1.000.000"} />
    </CardProduct>
  );
};

export default ProductsPage;
