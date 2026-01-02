/**
 * Catalog Provider
 * Abstraction layer for fetching catalog items by category.
 */
const CatalogProvider = (function() {
  let catalogCache = null;

  /**
   * Get catalog items for a specific category.
   * @param {string} categoryId - The category ID to fetch items for.
   * @returns {Promise<Array>} - Array of catalog items, or empty array if not found.
   */
  async function getCatalogItemsByCategory(categoryId) {
    if (!catalogCache) {
      try {
        const res = await fetch('/api/catalog.json');
        if (!res.ok) return [];
        catalogCache = await res.json();
      } catch {
        return [];
      }
    }
    return catalogCache[categoryId] || [];
  }

  return {
    getCatalogItemsByCategory
  };
})();
