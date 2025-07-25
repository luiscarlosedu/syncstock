import styled from 'styled-components';

export const Container = styled.article`
    display: flex;
    justify-content: center;
`;

export const EmployeesContentContainer = styled.div`
    width: 100%;
    max-width: 1180px;

    @media screen and (min-width: 1800px) {
        max-width: 1300px;
    }
`;

export const EmployeesHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
`;

export const EmployeesHeaderTitle = styled.h1`
    font-size: 20px;
    font-weight: 600;
`;

export const EmployeesHeaderAdd = styled.button`
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

export const EmployeesContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const EmployeesStatus = styled.div`
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

export const EmployeesTotalContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const EmployeesTotalTitle = styled.p`
    font-weight: 600;
    font-size: 14px;
`;

export const EmployeesTotal = styled.span`
    font-size: 16px;
`;

export const EmployeesSearchContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const EmployeesSearchInputContainer = styled.div`
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

export const EmployeesSearchInput = styled.input`
    border: none;
    padding: 8px;
    background: transparent;
    outline: none;
    font-size: 14px;
`;

export const EmployeesContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 15px;
    padding-bottom: 20px;
    flex-wrap: wrap;
`;

export const NoEmployeesContainer = styled.div`
    text-align: center;
    padding: 40px 20px;
    border-radius: 8px;
    background-color: #fff;
    border: 1px solid #eaeaea;
    margin-top: 20px;
    width: 100%;
`;

export const NoEmployeesIcon = styled.div`
    font-size: 48px;
    margin-bottom: 15px;
`;

export const NoEmployeesTitle = styled.h2`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 8px;
`;

export const NoEmployeesText = styled.p`
    font-size: 14px;
    color: #555;
    margin-bottom: 20px;
`;