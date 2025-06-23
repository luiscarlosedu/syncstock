import { FaExchangeAlt, FaSearch } from "react-icons/fa";

import {
    Container,
    ProductContentContainer,
    ProductsTitleAddContainer,
    // ProductsAdd,
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
    UpdateData,
} from "./styles";
import { useContext, useEffect, useState } from "react";
import { UpdateProductModal } from "../../../components/update-product-modal";
import { AuthContext } from "../../../contexts/AuthContext";
import { Navigate } from "react-router";
import api from "../../../services/api";
// import { useNavigate } from "react-router";

interface ProductJson {
    id: string;
    nome: string;
    preco: string;
    quantidade: number;
    foto: string;
    categoria: {
        id: string;
        nome: string;
    };
};

interface ProductProps {
    id: string;
    nome: string;
    preco: string;
    quantidade: string;
    categoria_id: string;
    categoria_nome: string;
    foto: string;
};

export default function ProductsEmployee() {
    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState<ProductProps[]>([]);
    const [modalOpen, setModalOpen] = useState(false);
    
    useEffect(() => {
        async function loadProducts() {
            try {
                const response = await api.get("/products", {
                    params: {
                        enterprise_id: user?.enterprise_id,
                    }
                });

                const productsJson: ProductJson[] = response.data;
                const productsData: ProductProps[] = productsJson.map((item) => ({
                    id: item.id,
                    nome: item.nome,
                    preco: item.preco,
                    quantidade: item.quantidade.toString(),
                    categoria_id: item.categoria.id,
                    categoria_nome: item.categoria.nome,
                    foto: item.foto,
                }));

                setProducts(productsData);
            } catch (err) {
                console.log("[ERRO], ", err);
            }
        };

        if (user) {
            loadProducts();
        }
    }, [user]);

    if (!user) {
        return <Navigate to={"/"} replace />
    };

    return (
        <Container>
            <ProductContentContainer>
                <ProductsTitleAddContainer>
                    <ProductsTitle>Produtos</ProductsTitle>
                    {/* <ProductsAdd
                        // onClick={() => navigate("/funcionario/produtos/adicionar")}
                    >+ Atualizar estoque</ProductsAdd> */}
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
                                    <TableHeader>Categoria</TableHeader>
                                    <TableHeader>Ação</TableHeader>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {products.map((product) => (
                                    <TableRow key={product.id}>
                                        <TableData>
                                            <ProductImage 
                                                src={
                                                    product.foto
                                                    ? `${import.meta.env.VITE_API_URL}/files/${product.foto}`
                                                    : ``
                                                } 
                                                alt={product.nome} 
                                            />
                                        </TableData>
                                        <TableData>{product.nome}</TableData>
                                        {/* <TableData>
                                            <StatusBadge status={product.status}>{product.status}</StatusBadge>
                                        </TableData> */}
                                        <TableData>{product.quantidade}</TableData>
                                        <TableData>{product.categoria_nome}</TableData>
                                        <TableData>
                                            <UpdateData
                                                onClick={() => setModalOpen(true)}
                                            ><FaExchangeAlt /></UpdateData>
                                        </TableData>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </ProductsContainer>
                </ProductContent>
            </ProductContentContainer>

            <UpdateProductModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
            />
        </Container>
    );
}