import RootLayout from "@/components/layout/RootLayout";
import CategoryProductCard from "@/components/ui/CategoryProductCard";
import Heading from "@/components/ui/Heading";
import React from "react";

const PowerSupply = ({ products }) => {
  return (
    <div>
      <Heading title={"Power Supply Unit"} />

      <h2 className="text-2xl font-bold mb-[68px]">Power Supply Unit</h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
        {products.map((product) => (
          <CategoryProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

PowerSupply.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch(
    `${process.env.URL}/api/products?category=PowerSupplyUnit`
  );
  const data = await res.json();
  return {
    props: {
      products: data.data,
    },
  };
};

export default PowerSupply;
