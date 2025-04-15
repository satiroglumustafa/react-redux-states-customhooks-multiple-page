import CategoryListItem from "./CategoryListItem";

const CategoryList = ({ categoryList }) => {
    return (
        <>
            {
                categoryList.map(listItem => (
                    <CategoryListItem key={listItem.id} {...listItem} />
                ))
            }
        </>
    );
}

export default CategoryList;
