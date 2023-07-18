import styled from '@emotion/styled';

export const ContForm = styled.form`
  display: flex;
  width: 400px;
  margin: 20px 20px;
  padding: 8px;
  flex-direction: column;
  gap: 8px;
  border: 1px solid #8E8F99;
  border-radius: 4px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 12px;

  line-height: 1.12;
  letter-spacing: 0.01em;

  color: #191970;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  outline: none;

  &:focus {
		border-color: #404BBF;
	}
`;

export const SubmitButton = styled.button`
  width: 160px;
  padding: 8px 16px;

  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.04em;
  text-align: center;
	text-transform: capitalize;

  cursor: pointer;

  background-color: #4D5AE5;
  color: #F4F4FD;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

	&:hover {
		background-color: #404BBF;
	}
`;

export const CloseButton = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  top: 12px;
  right: 12px;

  cursor: pointer;

  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;

  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
              background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
              fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

	&:hover {
		border-color: transparent;
    background-color: #4D5AE5;
	}
`;

export const ModalContainer = styled.div`
  border-radius: 4px;
  position: relative;
  background-color: #FFFFFF;
  padding: 28px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 2px 1px rgba(0, 0, 0, 0.2);
`;