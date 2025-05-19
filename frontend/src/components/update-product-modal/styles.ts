import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const Content = styled.div`
  background-color: #fff;
  border-radius: 8px;
  width: 90%;
  max-width: 400px;
  padding: 20px 24px;
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  font-size: 18px;
  margin: 0;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
`;

export const Type = styled.div`
  display: flex;
  justify-content: start;
  gap: 10px;
  margin-top: 8px;
  width: 100%;
`;

export const TypeButton = styled.button<{
  selected?: boolean;
  btnType: "entrada" | "saida"
}>`
  flex: 1;
  padding: 7px 10px;
  border-radius: 8px;
  cursor: pointer;
  border: 3px solid ${({btnType}) => btnType === 'entrada' ? "#00bb00" : "#ff2323"};
  background-color: ${({ selected, btnType }) => selected ? btnType === 'entrada' ? "#00bb00" : "#ff2323" : "transparent"};
  color: ${({ selected, btnType }) => selected ? btnType === 'entrada' ? "#fff" : "#fff" : btnType === 'entrada' ? "#00bb00" : "#ff2323"};
  font-weight: bold;
  transition: all 0.2s;
`;

export const Input = styled.input`
  padding: 8px 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 8px;
`;

export const Button = styled.button<{ secondary?: boolean }>`
  padding: 8px 14px;
  font-size: 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${({ secondary }) => (secondary ? "#f1f1f1" : "#000")};
  color: ${({ secondary }) => (secondary ? "#000" : "#fff")};
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;
