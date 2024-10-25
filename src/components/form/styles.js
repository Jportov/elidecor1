import styled from 'styled-components';

export const FormSection = styled.section`
  padding: 40px 0;
  background-color: #FAEFEA;
`;

export const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;

  h2 {
    margin-bottom: 20px;
  }
`;

export const ContactMethods = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  div {
    flex: 1;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ECC8B5;
  border-radius: 4px;
  font-size: 16px;
    &:hover, :focus {
    outline: none; /* Remove a borda de foco padrão */
    background-color: #E7B8A0; /* Define a cor desejada ao focar */
    border: 1px solid ##ECC8B5; /* Define a borda desejada ao focar */
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ECC8B5;
  border-radius: 4px;
  font-size: 16px;
  resize: none;
  
  &:hover, :focus {
    outline: none; /* Remove a borda de foco padrão */
    background-color: #E7B8A0; /* Define a cor desejada ao focar */
    border: 1px solid ##ECC8B5; /* Define a borda desejada ao focar */
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #ECC8B5;
  color: #FFFFFF;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #E7B8A0;
  }
`;

export const SocialLinks = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 10px;
  justify-content: center;
`;

export const SocialLink = styled.li`
  display: inline;
`;

export const Address = styled.p`
  margin-top: 10px;
  font-size: 16px;
`;
export const ImageLink = styled.img`
  

`;
