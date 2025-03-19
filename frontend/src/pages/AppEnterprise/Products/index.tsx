import { FaSearch } from "react-icons/fa";

import {
    Container,
    ProductContentContainer,
    ProductsTitleAddContainer,
    ProductsAdd,
    ProductsTitle,
    ProductContent,
    ProductTotalSearchContainer,
    ProductTotalContainer,
    ProductTotalTitle,
    ProductTotal,
    ProductSearchContainer,
    ProductSearchInputContainer,
    ProductSearchInput,
    SearchIcon,
    ProductsContainer,
    Table,
    TableHead,
    TableRow,
    TableHeader,
    TableBody,
    TableData,
    ProductImage,
    StatusBadge
} from "./styles";

const products = [
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsILgZRJUyzVTaGbJYM0pJvEC03zpXWbDrLA&s",
        name: "(Sample) Coconut Bar Soap",
        status: "Active",
        inventory: 2,
        salesChannels: "Periféricos",
        category: "My Store",
        vendor: "My Store"
    },
    {
        image: "https://static.beautytocare.com/cdn-cgi/image/width=1600,height=1600,f=auto/media/catalog/product//p/a/pantene-pro-v-nutri-plex-defined-curls-shampoo-600ml_1.jpg",
        name: "Shampoo",
        status: "Draft",
        inventory: 2,
        salesChannels: "Periféricos",
        category: "Notebooks & Notepads",
        vendor: "My Store"
    },
    {
        image: "https://i.etsystatic.com/16014158/r/il/d7d6a9/1997864569/il_570xN.1997864569_az60.jpg",
        name: "Custom handcrafted mug",
        status: "Active",
        inventory: 11,
        salesChannels: "Periféricos",
        category: "Mug",
        vendor: "JS Mob"
    },
    {
        image: "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,q_auto:best,t_productPageHeroGalleryTransformation_v2,w_auto/legacy_dam/en-us/S001756972/NPIB15910-Notebook-Expansion-Hero01",
        name: "Custom Notebook",
        status: "Active",
        inventory: 6,
        salesChannels: "Periféricos",
        category: "Notebooks & Notepads",
        vendor: "My Store"
    },
    {
        image: "https://ovmsmartstore.com/cdn/shop/files/7133358219798299368_2048.jpg?v=1736779722&width=1200",
        name: "Example Hat",
        status: "Archived",
        inventory: 10,
        salesChannels: "Periféricos",
        category: "Clothing",
        vendor: "JS Mob"
    },
    {
        image: "https://speed-preview.com/cdn/shop/products/distressed-kids-jeans_5c04e9bd-9e4f-4de2-841a-3254bcbb0249.jpg?v=1689369741&width=1946",
        name: "Example Pants",
        status: "Draft",
        inventory: 2,
        category: "Clothing",
        vendor: "JS Mob"
    }
];

export default function ProductsEnterprise() {
    return (
        <Container>
            <ProductContentContainer>
                <ProductsTitleAddContainer>
                    <ProductsTitle>Produtos</ProductsTitle>
                    <ProductsAdd>+ Adicionar produto</ProductsAdd>
                </ProductsTitleAddContainer>

                <ProductContent>
                    <ProductTotalSearchContainer>
                        <ProductTotalContainer>
                            <ProductTotalTitle>Total de Produtos</ProductTotalTitle>
                            <ProductTotal>{products.length}</ProductTotal>
                        </ProductTotalContainer>

                        <ProductSearchContainer>
                            <ProductSearchInputContainer>
                                <SearchIcon>
                                    <FaSearch />
                                </SearchIcon>
                                <ProductSearchInput placeholder="Buscar produtos..." />
                            </ProductSearchInputContainer>
                        </ProductSearchContainer>
                    </ProductTotalSearchContainer>

                    <ProductsContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableHeader></TableHeader>
                                    <TableHeader rowSpan={2}>Produto</TableHeader>
                                    {/* <TableHeader>Status</TableHeader> */}
                                    <TableHeader>Estoque</TableHeader>
                                    {/* <TableHeader>Canais</TableHeader> */}
                                    {/* <TableHeader>Mercados</TableHeader> */}
                                    <TableHeader>Categoria</TableHeader>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {products.map((product, index) => (
                                    <TableRow key={index}>
                                        <TableData>
                                            <ProductImage src={product.image} alt={product.name} />
                                        </TableData>
                                        <TableData>{product.name}</TableData>
                                        {/* <TableData>
                                            <StatusBadge status={product.status}>{product.status}</StatusBadge>
                                        </TableData> */}
                                        <TableData>{product.inventory}</TableData>
                                        {/* <TableData>{product.salesChannels}</TableData> */}
                                        <TableData>{product.category}</TableData>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </ProductsContainer>
                </ProductContent>
            </ProductContentContainer>
        </Container>
    );
}
