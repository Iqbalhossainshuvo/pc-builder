import RootLayout from "@/components/layout/RootLayout";
import CategoryProductCard from "@/components/ui/CategoryProductCard";
import Heading from "@/components/ui/Heading";
import React from "react";

const StorageDevice = ({ products }) => {
  return (
    <div>
      <Heading title={"Storage Device"} />

      <h2 className="text-2xl font-bold [68px]">Storage Device</h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
        {products.map((product) => (
          <CategoryProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

StorageDevice.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// export const getServerSideProps = async () => {
//   const res = await fetch(
//     `${process.env.URL}/api/products?category=StorageDevice`
//   );
//   const data = await res.json();
//   return {
//     props: {
//       products: data.data,
//     },
//   };
// };

export default StorageDevice;
