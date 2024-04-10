export const toCategoriesView = (categories) => `
<div id="categories">
  <h1>Categories</h1>
  <div class="content-categories">
    ${categories.map(toSingleCategoryView).join("\n")}
  </div>
</div>
`;

const toSingleCategoryView = (category) => `
<div class="category">
          <h2>${category.name}</h2>
          <p>${category.moviesCount} movies</p>
          <button type="button" category-id="${category.id}" class="view-category">View Category</button>
        </div>
`;
