import { useState } from "react";
import { products } from "./data/products";
import type {
  CatalogueProduct,
  CatalogueFilterState,
  CategoryId,
  CollectionId,
} from "./types/catalogue";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { BentoShowcase } from "./components/BentoShowcase";
import { CollectionAccordion } from "./components/CollectionAccordion";
import { CraftScrollStack } from "./components/CraftScrollStack";
import { ChocolateDiscovery } from "./components/ChocolateDiscovery";
import { CatalogueSection } from "./components/CatalogueSection";
import { CafeSection } from "./components/CafeSection";
import { EverydayFinds } from "./components/EverydayFinds";
import { Footer } from "./components/Footer";
import { ProductDetailsDialog } from "./components/ProductDetailsDialog";

export function App() {
  const [selectedProduct, setSelectedProduct] = useState<CatalogueProduct | null>(null);

  const [filterState, setFilterState] = useState<CatalogueFilterState>({
    searchQuery: "",
    selectedCategory: "all",
    selectedCollection: "all",
    selectedSize: "all",
  });

  const handleSelectProductBySlug = (slug: string) => {
    const found = products.find((p) => p.slug === slug);
    if (found) {
      setSelectedProduct(found);
    }
  };

  const handleFilterCategory = (categoryId: CategoryId) => {
    setFilterState({
      searchQuery: "",
      selectedCategory: categoryId,
      selectedCollection: "all",
      selectedSize: "all",
    });
    const catalogueEl = document.querySelector("#catalogue");
    if (catalogueEl) {
      catalogueEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFilterCollection = (collectionId: CollectionId) => {
    setFilterState({
      searchQuery: "",
      selectedCategory: "chocolates",
      selectedCollection: collectionId,
      selectedSize: "all",
    });
    const catalogueEl = document.querySelector("#catalogue");
    if (catalogueEl) {
      catalogueEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Accessible Skip Link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Centered Warm-White Rounded Page Shell */}
      <div className="page-shell">
        <Header />

        <main id="main-content">
          <Hero />

          <BentoShowcase
            onSelectProduct={handleSelectProductBySlug}
            onFilterCategory={handleFilterCategory}
            onFilterCollection={handleFilterCollection}
          />

          <CollectionAccordion
            onSelectCollection={handleFilterCollection}
          />

          <CraftScrollStack />

          <ChocolateDiscovery
            onSelectProduct={handleSelectProductBySlug}
          />

          <CatalogueSection
            filterState={filterState}
            setFilterState={setFilterState}
            onSelectProduct={(prod) => setSelectedProduct(prod)}
          />

          <CafeSection
            onSelectProduct={handleSelectProductBySlug}
          />

          <EverydayFinds
            onSelectProduct={handleSelectProductBySlug}
          />
        </main>

        <Footer />
      </div>

      {/* Accessible Product Details Modal Dialog */}
      <ProductDetailsDialog
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}

export default App;
