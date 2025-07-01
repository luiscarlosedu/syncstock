import styled from "styled-components";

export const Container = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ProductContentContainer = styled.div`
    width: 100%;
    max-width: 1180px;

    @media screen and (min-width: 1800px) {
        max-width: 1300px;
    }
`;

export const ProductsTitleAddContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
`;

export const ProductsTitle = styled.h1`
    font-size: 20px;
    font-weight: 600;
`;

export const ProductsAdd = styled.button`
    background-color: #000;
    color: white;
    padding: 6px 12px;
    border-radius: 4px;
    cursor: pointer;
    border: 0;
    font-size: 14px;
    transition: all .4s;

    &:hover {
        background-color: #333;
    }
`;

export const ProductContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
`;

export const ProductTotalSearchContainer = styled.div`
    background-color: white;
    display: flex;
    justify-content: space-between;
    padding: 12px;
    border-radius: 6px;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.05);

    @media screen and (max-width: 768px){
        flex-direction: column;
        gap: 4px;

        input {
            width: 100%;
        }
    }
`;

export const ProductTotalContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ProductTotalTitle = styled.p`
    font-weight: 600;
    font-size: 14px;
`;

export const ProductTotal = styled.span`
    font-size: 16px;
`;

export const ProductSearchContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const ProductSearchInputContainer = styled.div`
    background-color: #f1f1f1;
    display: flex;
    align-items: center;
    padding: 4px 10px;
    border-radius: 6px;
    width: 100%;
`;

export const SearchIcon = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 6px;
    color: #888;
`;

export const ProductSearchInput = styled.input`
    border: none;
    padding: 8px;
    background: transparent;
    outline: none;
    font-size: 14px;
`;

export const NoProductsContainer = styled.div`
    text-align: center;
    padding: 40px 20px;
    border-radius: 8px;
    background-color: #fff;
    border: 1px solid #eaeaea;
    margin-top: 20px;
`;

export const NoProductsIcon = styled.div`
    font-size: 48px;
    margin-bottom: 15px;
`;

export const NoProductsTitle = styled.h2`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 8px;
`;

export const NoProductsText = styled.p`
    font-size: 14px;
    color: #555;
    margin-bottom: 20px;
`;

export const ProductsContainer = styled.div`
    background: white;
    border-radius: 8px;
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

export const TableHead = styled.thead`
    background-color: #f9f9f9;
`;

export const TableRow = styled.tr`
    border-bottom: 1px solid #ddd;
    height: 40px;
`;

export const TableHeader = styled.th`
    padding: 6px 10px;
    text-align: left;
    font-size: 14px;
`;

export const TableBody = styled.tbody``;

export const TableData = styled.td`
    padding: 6px 10px;
    font-size: 14px;
`;

export const ProductImage = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 5px;
    display: flex;
`;

// export const StatusBadge = styled.span<{ status: string }>`
//     padding: 4px 8px;
//     border-radius: 12px;
//     color: white;
//     font-size: 12px;
//     background-color: ${({ status }) =>
//         status === "Active" ? "green" : status === "Draft" ? "blue" : "gray"};
// `;
