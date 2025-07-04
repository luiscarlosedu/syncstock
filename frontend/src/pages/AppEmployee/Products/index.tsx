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
    NoProductsContainer,
    NoProductsIcon,
    NoProductsTitle,
    NoProductsText,
    ProductsAdd,
} from "./styles";
import { useCallback, useContext, useEffect, useState } from "react";
import { UpdateProductModal } from "../../../components/update-product-modal";
import { AuthContext } from "../../../contexts/AuthContext";
import { Navigate } from "react-router";
import api from "../../../services/api";
import { useNavigate } from "react-router";
import { Loading } from "../../../components/loading";

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
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [products, setProducts] = useState<ProductProps[]>([]);
    const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    
    const filteredProducts = products.filter(product =>
        product.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const loadProducts = useCallback(async () => {
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
            setIsLoading(false);
        } catch (err) {
            console.log("[ERRO], ", err);
            setIsLoading(false);
        }
    }, [user?.enterprise_id]);

    useEffect(() => {
        if (user) loadProducts();
    }, [user, loadProducts]);

    if (!user) {
        return <Navigate to={"/"} replace />
    };

    if (isLoading) {
        return (
            <Container>
                <Loading message="Carregando produtos..." />
            </Container>
        );
    };

    return (
        <Container>
            <ProductContentContainer>
                <ProductsTitleAddContainer>
                    <ProductsTitle>Produtos</ProductsTitle>
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
                                <ProductSearchInput 
                                    placeholder="Buscar produtos..." 
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </ProductSearchInputContainer>
                        </ProductSearchContainer>
                    </ProductTotalSearchContainer>

                    {products.length === 0 ? (
                        <NoProductsContainer>
                            <NoProductsIcon>📂</NoProductsIcon>
                            <NoProductsTitle>Você ainda não possui produtos!</NoProductsTitle>
                            <NoProductsText>
                                Comece cadastrando seus produtos na plataforma!.
                            </NoProductsText>
                            <ProductsAdd onClick={() => navigate('/funcionario/categorias/criar')}>
                                + Adicionar agora
                            </ProductsAdd>
                        </NoProductsContainer>
                    ): filteredProducts.length === 0 ? (
                        <NoProductsContainer>
                            <NoProductsIcon>🔍</NoProductsIcon>
                            <NoProductsTitle>Nenhum produto encontrado!</NoProductsTitle>
                            <NoProductsText>
                                Tente usar outro nome ou limpe a busca para ver todas os produtos disponíveis.
                            </NoProductsText>
                        </NoProductsContainer>
                    ): (
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
                                    {filteredProducts.map((product) => (
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
                                                    onClick={() => {
                                                        setSelectedProductId(product.id);
                                                        setModalOpen(true);
                                                    }}
                                                ><FaExchangeAlt /></UpdateData>
                                            </TableData>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </ProductsContainer>
                    )}
                </ProductContent>
            </ProductContentContainer>

            <UpdateProductModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                productId={selectedProductId ?? ""}
                onUpdate={() => {
                    loadProducts();
                }}
            />
        </Container>
    );
}